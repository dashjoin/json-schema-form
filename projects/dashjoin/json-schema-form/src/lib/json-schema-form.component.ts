import {
  Component, OnInit, Input, Output, EventEmitter, SimpleChanges,
  OnChanges, ComponentFactoryResolver, ViewChild, ViewChildren, QueryList
} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyValue } from '@angular/common';
import { Schema } from './schema';
import { WidgetComponent } from './widget.component';
import { WidgetDirective } from './widget.directive';
import { JsonSchemaFormService } from './json-schema-form.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

/**
 * generates an input form base on JSON schema and JSON object.
 * The component is used recursively.
 */
@Component({
  selector: 'lib-json-schema-form',
  templateUrl: './json-schema-form.component.html',
  styleUrls: ['./json-schema-form.component.css']
})
export class JsonSchemaFormComponent implements OnInit, OnChanges {

  /**
   * container children for event propagation
   */
  @ViewChildren('children') children: QueryList<JsonSchemaFormComponent>;

  /**
   * container children for event propagation
   */
  @ViewChild('child') child: JsonSchemaFormComponent;

  /**
   * if an array is displayed, indicates which array index is being hovered over in order to
   * display the "-" remove button
   */
  hover: number;

  /**
   * contains the REST autocomplete response (unfiltered)
   */
  choices: string[];

  /**
   * flag to make sure we only send one request
   */
  loading: boolean;

  /**
   * choices filtered by the current user input (only display the choices that match the input)
   */
  filteredChoices: string[];

  /**
   * choices for autocomplete with displayWith option
   */
  filteredChoicesObj: any[];

  /**
   * filter entered for array-select
   */
  selectfilter = '';

  /**
   * the name of the input field
   */
  @Input() label: string;

  /**
   * the input value
   */
  @Input() value: any;

  /**
   * display name to bind to the autocomplete
   */
  name: string;

  /**
   * emit changes done by the user in the component
   */
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  /**
   * emit whether this part of the form is valid
   */
  @Output() errorChange: EventEmitter<string> = new EventEmitter();

  /**
   * JSON schema to use
   */
  @Input() schema: Schema;

  /**
   * root JSON schema to use when looking up $ref (simply passed along the tree)
   */
  @Input() rootSchema: Schema;

  isRoot = false;

  /**
   * if present: value of the switch property that determines whether this component renders itself
   * (schema.case not present or schema.case === switch)
   */
  @Input() switch: string;

  @Input() hideUndefined: boolean;

  /**
   * are we already in the expansion panel?
   */
  @Input() inExpansion: boolean;

  /**
   * are we already in an array?
   */
  @Input() inArray: boolean;

  /**
   * required imported from parent
   */
  @Input() required: boolean;

  /**
   * hook for custom widgets
   */
  @ViewChild(WidgetDirective, { static: true }) widgetHost: WidgetDirective;

  /**
   * http used for autocomplete REST calls
   */
  constructor(
    private http: HttpClient,
    private componentFactoryResolver: ComponentFactoryResolver,
    private service: JsonSchemaFormService) { }

  /**
   * initialize the comonent.
   * replace undefined with null and init autocomplete choices
   */
  ngOnInit(): void {
    if (!this.rootSchema) {
      this.rootSchema = this.schema;
      this.isRoot = true;
    }

    if (!this.schema.type) {
      let p = this.schema.$ref;
      if (p.startsWith('#')) {
        p = p.substring(1);
      }
      this.schema = this.jsonPointer(this.rootSchema, p);
    }

    if (typeof this.value === 'undefined') {
      if (this.schema.default) {
        this.value = this.schema.default;
        setTimeout(() => this.emit(this.value), 500);
      } else {
        if (!this.hideUndefined) {
          this.value = null;
        }
      }
    }

    if (this.value) {
      if (Array.isArray(this.value)) {
        // multi-select is a special case since the value is already an array
        this.choices = this.value;
        this.filteredChoices = this.value;
      } else {
        this.choices = [this.value];
        this.filteredChoices = [this.value];
      }
    }
    this.filteredChoicesObj = this.displayFilter();

    if (this.schema.widget === 'custom') {
      this.loadComponent();
    }

    if (this.getLayout() === 'autocomplete') {
      this.name = this.displayWith(this.value);
    }

    if (this.isRoot) {
      setTimeout(() => {
        this.errorChange.emit(this.recursiveError());
      }, 10);
    }
  }

  emit(event: any) {
    this.valueChange.emit(event);
    if (this.isRoot) {
      setTimeout(() => {
        this.errorChange.emit(this.recursiveError());
      }, 10);
    }
  }

  /**
   * if the schema changes from the outside,
   * reset the component state wrt. errors and the choices cache
   */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.schema) {
      if (changes.schema.previousValue) {
        this.rootSchema = null;
        this.loading = false;
        this.choices = null;
        this.filteredChoices = null;
        this.filteredChoicesObj = null;
        if (this.widgetHost.viewContainerRef) {
          this.widgetHost.viewContainerRef.clear();
        }
        this.ngOnInit();
      }
    }
  }

  /**
   * angular pipe sorting function for keyValue - keep the JSON order and do not
   * order alphabetically
   */
  originalOrder = (a: KeyValue<string, Schema>, b: KeyValue<string, Schema>): number => {
    return 0;
  }

  /**
   * key method to instruct the display which HTML block to activate.
   */
  getLayout(): string {
    if (this.schema.case && this.schema.case.indexOf(this.switch) < 0) {
      return 'none';
    }
    if (this.hideUndefined && this.value === undefined) {
      return 'none';
    }
    if (this.schema.type === 'object') {
      if (this.schema.additionalProperties) {
        if (this.schema.layout === 'tab') {
          return 'additionalPropertiesTab';
        }
        return 'additionalProperties';
      }
      return 'object';
    }
    if (this.schema.type === 'array') {
      if (this.schema.layout === 'tab') {
        return 'tab';
      }
      if (this.schema.layout === 'table') {
        return 'table';
      }
      if (this.schema.layout === 'select') {
        return 'array-select';
      }
      return 'array';
    }
    if (this.schema.enum) {
      return 'enum';
    }
    if (this.schema.widget === 'date') {
      return 'date';
    }
    if (this.schema.widget === 'upload') {
      return 'upload';
    }
    if (this.schema.widget === 'custom') {
      return 'custom';
    }
    if (this.schema.widget === 'textarea') {
      return 'textarea';
    }
    if (this.schema.type === 'boolean') {
      return 'checkbox';
    }
    if (this.schema.choicesUrl) {
      return 'autocomplete';
    }
    if (this.schema.choices) {
      return 'autocomplete';
    }
    return 'single';
  }

  /**
   * called from template in the "simple" type. If "type" is "number" or "integer",
   * the HTML input type is "number" which avoids normal string input
   */
  getInputType(schema: Schema): string {
    if (schema.type === 'number') {
      return 'number';
    }
    if (schema.type === 'integer') {
      return 'number';
    }
    return schema.widget;
  }

  /**
   * event handler for object display. Catches the child component event and
   * handle it by setting the value[key].
   * Also init null objects with {}
   */
  onValueChange(key: string, value: any) {
    if (!this.value) {
      this.value = {};
    }
    this.value[key] = value;

    if (this.schema.computed) {
      for (const field of Object.keys(this.schema.computed)) {
        let label = this.schema.computed[field];
        label = label.replace(/\${([^{}]*)}/g, (x) => {
          x = x.substring(2);
          x = x.substring(0, x.length - 1);
          return this.value[x];
        });
        this.value[field] = label;
      }
    }

    this.emit(this.value);
  }

  /**
   * add an element to an array.
   * null arrays are initialized with []
   */
  add() {
    if (!(this.value instanceof Array)) {
      this.value = [];
    }
    if (this.schema.items.type === 'array') {
      this.value.push([]);
    } else if (this.schema.items.type === 'object') {
      this.value.push({});
    } else {
      this.value.push(null);
    }
    this.emit(this.value);
  }

  /**
   * event handler for adding a field
   */
  addField() {
    if (!this.value) {
      this.value = {};
    }
    if (this.value['']) {
      return;
    }
    this.value[''] = null;
    this.emit(this.value);
  }

  /**
   * remove an element from an array
   */
  remove(i: number) {
    this.value.splice(i, 1);
    this.emit(this.value);
  }

  /**
   * remove a field
   */
  removeField(key: string) {
    delete this.value[key];
    this.emit(this.value);
  }

  /**
   * event handler for changed field names with "additionalProperties"
   */
  fieldNameChange(key: string, newvalue: any) {
    this.value[newvalue] = this.value[key];
    delete this.value[key];
    this.emit(this.value);
  }

  recursiveError(): string {
    const e = this.error();
    if (e) {
      return e;
    }
    if (this.child) {
      return this.child.recursiveError();
    }
    if (this.children) {
      for (const c of this.children) {
        const r = c.recursiveError();
        if (r) {
          return r;
        }
      }
    }
    return null;
  }

  e(error: string): string {
    if (this.schema.errorMessage) {
      return this.schema.errorMessage;
    }
    return error;
  }

  /**
   * return error string
   */
  error(): string {
    if (this.schema.maxItems) {
      if (this.value) {
        if (!(this.value.length <= this.schema.maxItems)) {
          return this.e('Only ' + this.schema.maxItems + ' array entries allowed');
        }
      }
    }
    if (this.schema.uniqueItems) {
      if (this.value) {
        if (!(new Set(this.value).size === this.value.length)) {
          return this.e('Array entries must be unique');
        }
      }
    }
    if (this.schema.minItems) {
      if (this.value) {
        if (!(this.value.length >= this.schema.minItems)) {
          return this.e('At least ' + this.schema.minItems + ' array entries required');
        }
      }
    }
    if (this.schema.maxProperties) {
      if (this.value) {
        if (!(Object.keys(this.value).length <= this.schema.maxProperties)) {
          return this.e('Only ' + this.schema.maxProperties + ' fields allowed');
        }
      }
    }
    if (this.schema.propertyNames) {
      if (this.value) {
        for (const key of Object.keys(this.value)) {
          const re = new RegExp(this.schema.propertyNames);
          if (!re.test(key)) {
            return this.e('illegal field name: ' + key);
          }
        }
      }
    }
    if (this.schema.dependencies) {
      if (this.value) {
        for (const dep of Object.keys(this.schema.dependencies)) {
          if (this.value[dep]) {
            for (const l of this.schema.dependencies[dep]) {
              if (!this.value[l]) {
                return this.e(dep + ' depends on ' + l);
              }
            }
          }
        }
      }
    }
    if (this.schema.minProperties) {
      if (this.value) {
        if (!(Object.keys(this.value).length >= this.schema.minProperties)) {
          return this.e('At least ' + this.schema.minProperties + ' fields required');
        }
      }
    }
    if (this.required) {
      if (this.value == null) {
        return this.e('required');
      }
    }
    if (this.schema.required) {
      for (const dep of this.schema.required) {
        if (!this.value[dep]) {
          return this.e(dep + ' is required');
        }
      }
    }
    if (this.schema.pattern) {
      const re = new RegExp(this.schema.pattern);
      if (!this.value) {
        return this.e('illegal string');
      }
      if (!re.test(this.value)) {
        return this.e('illegal string');
      }
    }
    if (this.schema.maxLength) {
      if (this.value) {
        if (!(('' + this.value).length <= this.schema.maxLength)) {
          return this.e('Input is longer than ' + this.schema.maxLength);
        }
      }
    }
    if (this.schema.minLength) {
      if (this.value) {
        if (!(('' + this.value).length >= this.schema.minLength)) {
          return this.e('Input is shorter than ' + this.schema.minLength);
        }
      }
    }
    if (this.schema.multipleOf) {
      if (this.value) {
        if (!Number.isInteger(Number(this.value) / this.schema.multipleOf)) {
          return this.e('Must be multiple of ' + this.schema.multipleOf);
        }
      }
    }
    if (this.schema.exclusiveMaximum) {
      if (this.value) {
        if (!(Number(this.value) < this.schema.exclusiveMaximum)) {
          return this.e('Must be less than ' + this.schema.exclusiveMaximum);
        }
      }
    }
    if (this.schema.maximum) {
      if (this.value) {
        if (!(Number(this.value) <= this.schema.maximum)) {
          return this.e('Must be less than or equal ' + this.schema.maximum);
        }
      }
    }
    if (this.schema.exclusiveMinimum) {
      if (this.value) {
        if (!(Number(this.value) > this.schema.exclusiveMinimum)) {
          return this.e('Must greater than ' + this.schema.exclusiveMinimum);
        }
      }
    }
    if (this.schema.minimum) {
      if (this.value) {
        if (!(Number(this.value) >= this.schema.minimum)) {
          return this.e('Must greater than or equal ' + this.schema.minimum);
        }
      }
    }
    if (this.schema.format && this.service.formats[this.schema.format]) {
      const re = new RegExp(this.service.formats[this.schema.format]);
      if (!this.value) {
        return this.e('illegal string');
      }
      if (!re.test(this.value)) {
        return this.e('illegal string');
      }
    }
    return null;
  }

  /**
   * use the element title if present, defaults to the label input or "" is both are null
   */
  getLabel(): string {
    if (this.schema.title) {
      return this.schema.title;
    }
    if (this.label) {
      return this.label;
    }
    return '';
  }

  /**
   * input element change handler.
   * normalize the different kind of events, handle the datatypes, set the value and emit the change
   */
  change(event: any) {

    let eventTarget: any;

    if (event instanceof MatSelectChange) {
      event = event.value;
    } else if (event instanceof MatDatepickerInputEvent) {
      event = event.value;
    } else if (event instanceof MatAutocompleteSelectedEvent) {
      event = event.option.value;
    } else if (event instanceof MatCheckboxChange) {
      event = event.checked;
    } else {
      // save the event target in case the parsing changes the value
      // (e.g. integer input 5.3 becomes 5, this is reflected on the UI via this handle)
      eventTarget = event.target;
      event = event.target.value;
    }

    if (event === '') {
      event = null;
    }

    if (event == null) {
      this.value = null;
    }

    if (this.schema.type === 'number') {
      this.value = parseFloat(event);
    } else if (this.schema.type === 'integer') {
      this.value = parseInt(event, 10);
      if (eventTarget) {
        if ('' + this.value !== event) {
          eventTarget.value = this.value;
        }
      }
    } else if (this.schema.type === 'boolean') {
      if (typeof event === 'string') {
        if (event === 'true') {
          this.value = true;
        } else if (event === 'false') {
          this.value = false;
        } else {
          this.value = null;
        }
      } else {
        this.value = event;
      }
    } else if (this.schema.type === 'string') {
      this.value = event;
    } else if (this.schema.type === 'array') {
      this.value = event;
    } else {
      throw new Error('unknown type: ' + this.schema.type);
    }

    this.emit(this.value);
  }

  /**
   * autocomplete filter
   */
  filter(event: any) {
    if (this.choices != null) {
      this.filteredChoices = this.choices.filter(el => el?.toLowerCase().match(event.target.value?.toLowerCase()));

      // apply filter to display names, not the real values since these are hidden in the dropdown
      this.filteredChoicesObj = [];
      for (const c of this.choices) {
        const name = this.displayWith(c);
        if (name?.toLowerCase().match(event.target.value?.toLowerCase())) {
          this.filteredChoicesObj.push({ name, value: c });
        }
      }
    }
  }

  /**
   * autocomplete REST loader
   */
  load() {
    if (this.loading) {
      return;
    }

    this.loading = true;

    if (this.schema.choices) {
      this.choices = this.schema.choices;
      this.filteredChoices = this.schema.choices;
      this.filteredChoicesObj = this.displayFilter();
      return;
    }

    this.getChoices(this.schema.choicesUrl, this.schema.choicesUrlArgs, this.schema.choicesVerb).subscribe(res => {
      if (this.schema.jsonPointer != null) {
        res = this.jsonPointer(res, this.schema.jsonPointer);
        if (!Array.isArray(res)) {
          res = [res];
        }
      }
      this.choices = res;
      this.filteredChoices = res;
      this.filteredChoicesObj = this.displayFilter();
    });
  }

  /**
   * evaluate the JSON pointer on o
   */
  jsonPointer(o: any, pointer: string): any {
    return this.jsonPointer2(o, this.split(pointer));
  }

  /**
   * evaluate the JSON pointer (parsed array of paths) on o
   */
  jsonPointer2(o: any, paths: string[]): any {

    if (o === undefined) {
      return undefined;
    }

    if (paths.length === 0) {
      return o;
    }

    const path = paths[0];
    const np = Object.assign([], paths);
    np.splice(0, 1);

    if (paths[0] === '*') {
      const res = [];
      for (const f of (typeof (o) === 'object' ? Object.values(o) : o)) {
        res.push(this.jsonPointer2(f, np));
      }
      return res;
    } else {
      return this.jsonPointer2(o[path], np);
    }
  }

  /**
   * strip leading / and split the JSON pointer
   */
  split(s: string): string[] {
    if (s === '') {
      return [];
    }
    if (s.startsWith('/')) {
      s = s.substring(1);
      const arr = s.split('/');
      for (const a of arr) {
        if (a === '') {
          throw new Error('JSON Pointer must not contain an empty reference token');
        }
      }
      return arr;
    }
    throw new Error('JSON Pointer must start with /');
  }

  /**
   * handle GET / POST
   */
  getChoices(url: string, args: any, verb: string): Observable<any> {
    if (verb === 'GET') {
      return this.http.get<any[]>(url, args);
    } else {
      return this.http.post<any[]>(url, args, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      });
    }
  }

  /**
   * allows for the result of a file upload to be written into a text form element
   */
  handleFileInput(event: any) {
    if (1024 * 1024 <= event.target.files.item(0).size) {
      console.log('The file size is limited to 1MB');
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.value = reader.result;
      this.emit(this.value);
    };
    reader.readAsText(event.target.files.item(0));
  }

  /**
   * key pressed on array select - apply filter
   */
  keyDown(event: any) {
    if (event.key === 'Backspace') {
      this.selectfilter = this.selectfilter.substring(0, this.selectfilter.length - 1);
    } else if (event.key.length === 1 && event.key !== ' ') {
      this.selectfilter = this.selectfilter + event.key;
    } else {
      return;
    }
    this.filteredChoices = this.choices.filter(
      item => item.toLowerCase().includes(this.selectfilter.toLowerCase()) || this.value.indexOf(item) >= 0);
    this.filteredChoicesObj = this.displayFilter();
  }

  /**
   * array select options opened / closed. reset filter when closed
   */
  openedChange(event: boolean) {
    if (!event) {
      this.selectfilter = '';
      this.filteredChoices = this.choices;
      this.filteredChoicesObj = this.displayFilter();
    }
  }

  /**
   * get example values from example array and default
   */
  example(): string {
    if (this.schema.examples && this.schema.examples[0]) {
      return this.schema.examples[0];
    }
    if (this.schema.default) {
      return this.schema.default;
    }
    return null;
  }

  /**
   * load the dynamic custom widget
   */
  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.service.registry[this.schema.widgetType]);
    const viewContainerRef = this.widgetHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);

    // input values
    (componentRef.instance as WidgetComponent).label = this.label;
    (componentRef.instance as WidgetComponent).value = this.value;
    (componentRef.instance as WidgetComponent).schema = this.schema;
    (componentRef.instance as WidgetComponent).rootSchema = this.rootSchema;

    // subscribe to value changes and forward them
    (componentRef.instance as WidgetComponent).valueChange.subscribe(data => {
      this.value = data;
      this.emit(this.value);
    });
  }

  /**
   * function to transform a choice option into a display string
   */
  displayWith(option: string): string {
    if (this.schema.displayWith === 'localName') {
      const parts = option.split('/');
      return parts[parts.length - 1];
    }
    if (this.schema.displayWith) {
      const displayer = this.service.displayWithRegistry[this.schema.displayWith];
      if (displayer) {
        return displayer.displayWith(option);
      }
    }
    return option;
  }

  /**
   * displayWith callback from autocomplete
   */
  displayFn(option: any): string {
    return option.name;
  }

  /**
   * compute the filteredChoices objects for use in autocomplete
   */
  displayFilter() {
    const res = [];
    if (this.filteredChoices) {
      for (const i of this.filteredChoices) {
        res.push({ name: this.displayWith(i), value: i });
      }
    }
    return res;
  }

  /**
   * autocomplete option selected
   */
  optionSelected(event: any) {
    this.name = event.option.value.name;
    this.value = event.option.value.value;
    this.emit(this.value);
  }

  /**
   * autocomplete option changed by hand
   */
  optionChange(event: any) {
    this.name = event.target.value;
    this.value = this.name;
    for (const u of this.filteredChoicesObj) {
      if (u.name === this.name) {
        this.value = u.value;
      }
    }
    this.emit(this.value);
  }

  /**
   * used for expansion panels - set value and forward event
   */
  setAndEmit(event: any) {
    this.value = event;
    this.emit(this.value);
  }

  setIndexAndEmit(i: number, event: any) {
    this.value[i] = event;
    this.emit(this.value);
  }

  showProperty(prop: string) {
    if (this.value[prop] === undefined) {
      this.value[prop] = null;
    } else if (this.value[prop] === null) {
      this.value[prop] = undefined;
    }
  }
}
