import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { Choice } from '../choice';
import { JsonSchemaFormService } from '../json-schema-form.service';
import { Schema } from '../schema';
import { State } from '../state';
import jsonata from 'jsonata'
import { KeyValue } from '@angular/common';

/**
 * base component for all form elements
 */
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  /**
   * built-in formats
   */
  static formats: any = {
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    ipv4: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,
    url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
    uri: /^\w+:(\/?\/?)[^\s]+$/
  };

  @Input() state!: State;

  choices: Choice[] = []

  filteredOptions!: Observable<Choice[]>;

  constructor(protected http: HttpClient, protected service: JsonSchemaFormService) { }

  ngOnInit() {

    // make sure control matches the schema
    if (this.state.schema.type === 'object') {
      if (!(this.state.control instanceof FormGroup))
        throw new Error('For object schema, control must be a FormGroup');
    }
    else if (this.state.schema.type === 'array' && this.state.schema.layout !== 'select' && this.state.schema.layout !== 'chips') {
      if (!(this.state.control instanceof FormArray))
        throw new Error('For array schema, control must be a FormArray');
    } else {
      if (!(this.state.control instanceof FormControl))
        throw new Error('For primitive schema, control must be a FormControl');
    }

    // load choices
    if (this.state.schema.choicesUrl) {
      const request = this.state.schema.choicesVerb === 'GET' ?
        this.http.get(this.state.schema.choicesUrl) :
        this.http.post(this.state.schema.choicesUrl, {})
      request.subscribe((res: any) => {
        if (this.state.schema.jsonata) {
          jsonata(this.state.schema.jsonata).evaluate(res).then(res2 => {
            this.setChoices(res2 as any)
          })
        }
        else
          this.setChoices(res as any)
      })
    }

    if (this.state.schema.enum) {
      // translate enum to choices
      this.setChoices(this.state.schema.enum)
    }
    else if (this.state.schema.choices) {
      this.setChoices(this.state.schema.choices)
    } else if (this.state.value)
      // default choice is current value
      this.setChoices([this.state.value])

    // set name to title if set
    if (this.state.schema.title)
      this.state.name = this.state.schema.title
  }

  setChoices(choices: any[]) {
    this.choices = []
    for (const choice of choices)
      if (choice?.name && choice?.value)
        this.choices.push(choice)
      else
        this.choices.push({
          value: choice,
          name: choice ? choice : ''
        })
    this.filteredOptions = this.state.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  _filter(value: string): Choice[] {
    const filterValue = value.toLowerCase();
    return this.choices.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  /**
   * cast control to primitive type
   */
  formControl(): FormControl {
    return this.state.control as FormControl;
  }

  /**
   * case control to group / object
   */
  formGroup(): FormGroup {
    return this.state.control as FormGroup;
  }

  /**
   * case control to array
   */
  formArray(): FormArray {
    return this.state.control as FormArray;
  }

  /**
   * create control and pass value to it
   */
  static createControl(schema: Schema, value: any, required: boolean): AbstractControl {
    if (schema.type === 'object') {
      return new FormGroup({});
    }
    if (schema.type === 'array' && schema.layout !== 'select' && schema.layout !== 'chips') {
      return new FormArray([]);
    }

    const control = new FormControl();
    this.prepareControl(control, schema, value, required)
    return control
  }

  static prepareControl(control: AbstractControl, schema: Schema, value: any, required: boolean) {
    // handle default
    if (schema.default)
      if (!value)
        value = schema.default

    if (schema.type !== 'object' && schema.type !== 'array')
      control.setValue(value)

    if (required)
      control.addValidators(Validators.required)

    if (schema.pattern)
      control.addValidators(Validators.pattern(schema.pattern))

    if (schema.format)
      control.addValidators(Validators.pattern(this.formats[schema.format]))

    if (schema.maxLength)
      control.addValidators(Validators.maxLength(schema.maxLength))

    if (schema.minLength)
      control.addValidators(Validators.minLength(schema.minLength))

    if (schema.multipleOf)
      control.addValidators(multipleOf(schema.multipleOf))

    if (schema.maximum)
      control.addValidators(Validators.max(schema.maximum))

    if (schema.minimum)
      control.addValidators(Validators.min(schema.minimum))

    if (schema.exclusiveMaximum)
      control.addValidators(Validators.max(schema.exclusiveMaximum - 1))

    if (schema.exclusiveMinimum)
      control.addValidators(Validators.min(schema.exclusiveMinimum + 1))

    if (schema.maxItems)
      control.addValidators(maxItems(schema.maxItems))

    if (schema.minItems)
      control.addValidators(minItems(schema.minItems))

    if (schema.maxProperties)
      control.addValidators(maxProperties(schema.maxProperties))

    if (schema.minProperties)
      control.addValidators(minProperties(schema.minProperties))

    if (schema.uniqueItems)
      control.addValidators(uniqueItems())

    if (schema.propertyNames)
      control.addValidators(propertyNames(schema.propertyNames))

    if (schema.dependencies)
      control.addValidators(dependencies(schema.dependencies))

    if (schema.readOnly)
      control.disable()

    if (schema.createOnly && value)
      control.disable()

    return control
  }

  /**
   * angular pipe sorting function for keyValue - keep the JSON order and do not
   * order alphabetically
   */
  originalOrder = (a: KeyValue<string, Schema>, b: KeyValue<string, Schema>): number => {
    return 0;
  }
}

function multipleOf(multiple: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value % multiple === 0)
      return null
    else
      return { multipleOf: { value: control.value } }
  };
}

function maxItems(max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.length <= max)
      return null
    else
      return { maxItems: { value: control.value } }
  };
}

function minItems(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.length >= min)
      return null
    else
      return { minItems: { value: control.value } }
  };
}

function maxProperties(max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (Object.keys(control.value).length <= max)
      return null
    else
      return { maxProperties: { value: control.value } }
  };
}

function minProperties(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (Object.keys(control.value).length >= min)
      return null
    else
      return { minProperties: { value: control.value } }
  };
}

function uniqueItems(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const unique: any = []
    for (const i of control.value)
      if (!unique.includes(i))
        unique.push(i)
    if (unique.length === control.value.length)
      return null
    else
      return { minItems: { value: control.value } }
  };
}

function propertyNames(pattern: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    for (const key of Object.keys(control.value)) {
      const re = new RegExp(pattern);
      if (!re.test(key))
        return { propertyNames: { value: control.value } }
    };
    return null
  }
}

function dependencies(map: any): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    for (const [k, v] of Object.entries(map))
      if (control.value[k])
        for (const i of v as any)
          if (!control.value[i])
            return { propertyNames: { value: control.value } }
    return null
  }
}
