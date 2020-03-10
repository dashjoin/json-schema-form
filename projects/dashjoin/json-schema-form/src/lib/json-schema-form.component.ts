import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KeyValue } from '@angular/common';
import { Schema } from './schema'

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
   * if an array is displayed, indicates which array index is being hovered over in order to
   * display the "-" remove button
   */
  hover: number

  /**
   * contains the REST autocomplete response (unfiltered)
   */
  choices: string[]

  /**
   * flag to make sure we only send one request
   */
  loading: boolean

  /**
   * choices filtered by the current user input (only display the choices that match the input)
   */
  filteredChoices: string[]

  /**
   * validation error message to be displayed in red
   */
  errorMessage: string

  /**
   * the name of the input field
   */
  @Input() label: string

  /**
   * the input value
   */
  @Input() value: any

  /**
   * emit changes done by the user in the component
   */
  @Output() valueChange: EventEmitter<any> = new EventEmitter()

  /**
   * JSON schema to use
   */
  @Input() schema: Schema

  /**
   * http used for autocomplete REST calls
   */
  constructor(private http: HttpClient) { }

  /**
   * initialize the comonent.
   * replace undefined with null and init autocomplete choices
   */
  ngOnInit(): void {
    if (typeof this.value === "undefined")
      this.value = null

    if (this.value)
      this.choices = [this.value]
  }

  /**
   * if the schema or values are changed from the outside,
   * reset the component state wrt. errors and the choices cache
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.loading = false
    this.choices = null
    this.filteredChoices = null
    this.errorMessage = null
    this.ngOnInit()
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
    if (this.schema.type === 'object') {
      return "object"
    }
    if (this.schema.type === 'array') {
      if (this.schema.layout === 'tab')
        return "tab"
      if (this.schema.layout === 'table')
        return "table"
      return "array"
    }
    if (this.schema.enum)
      return "enum"
    if (this.schema.widget === "date")
      return "date"
    if (this.schema.widget === "upload")
      return "upload"
    if (this.schema.widget === "textarea")
      return "textarea"
    if (this.schema.widget === "largetextarea")
      return "largetextarea"
    if (this.schema.type === 'boolean')
      return "checkbox"
    if (this.schema.choicesUrl) {
      return "autocomplete"
    }
    return 'single'
  }

  /**
   * append the label for nested objects (e.g. person.firstname for firstname field in object person)
   */
  appendLabel(key: string): string {
    if (this.label)
      return this.label + "." + key
    else
      return key
  }

  /**
   * event handler for object display. Catches the child component event and
   * handle it by setting the value[key].
   * Also init null objects with {}
   */
  onValueChange(key: string, value: any) {
    if (!this.value)
      this.value = {}
    this.value[key] = value
    this.valueChange.emit(this.value)
  }

  /**
   * add an element to an array.
   * null arrays are initialized with []
   */
  add() {
    if (!(this.value instanceof Array))
      this.value = []
    if (this.schema.items.type === "array")
      this.value.push([])
    else if (this.schema.items.type === "object")
      this.value.push({})
    else
      this.value.push(null)
    this.valueChange.emit(this.value)
  }

  /**
   * remove an element from an array
   */
  remove(i: number) {
    this.value.splice(i, 1)
    this.valueChange.emit(this.value)
  }

  /**
   * return error string
   */
  error(): string {
    if (this.schema.required)
      if (this.value == null)
        return "required"
    return this.errorMessage
  }

  /**
   * input element change handler.
   * normalize the different kind of events, handle the datatypes, set the value and emit the change
   */
  change(event: any) {

    console.log(event)

    if (event instanceof MatSelectChange)
      event = event.value
    else if (event instanceof MatDatepickerInputEvent)
      event = event.value
    else if (event instanceof MatCheckboxChange)
      event = event.checked
    else
      event = event.target.value

    if (event === "")
      event = null

    if (event == null)
      this.value = null

    if (this.schema.type === "number") {
      if (!isNaN(parseFloat(event))) {
        this.value = parseFloat(event)
        this.errorMessage = ""
      }
      else
        if (event != null)
          this.errorMessage = event + " is not a number"
        else
          this.errorMessage = ""
    }
    else if (this.schema.type === "integer") {
      if (!isNaN(parseInt(event, 10))) {
        this.value = parseInt(event, 10)
        this.errorMessage = ""
      }
      else
        if (event != null)
          this.errorMessage = event + " is not an integer number"
        else
          this.errorMessage = ""
    }
    else if (this.schema.type === "boolean") {
      if (typeof event === "string") {
        if (event === "true")
          this.value = true
        else if (event === "false")
          this.value = false
        else
          this.value = null
      }
      else
        this.value = event
    }
    else if (this.schema.type === "string") {
      this.value = event
    }
    else
      throw new Error("unknown type: " + this.schema.type)

    this.valueChange.emit(this.value)
  }

  /**
   * autocomplete filter
   */
  filter(event: any) {
    if (this.choices != null)
      this.filteredChoices = this.choices.filter(el => el?.toLowerCase().match(event.target.value?.toLowerCase()));
  }

  /**
   * autocomplete REST loader
   */
  load() {
    if (this.loading)
      return

    this.loading = true

    this.getChoices(this.schema.choicesUrl, this.schema.choicesUrlArgs, this.schema.choicesVerb).subscribe(res => {
      if (this.schema.jsonPath != null) {
        // have some trouble bundling the jsonpath lib right now
        // res = jsonPath.query(res, this.schema.jsonPath);

        // use alternative mini impl
        const parts = this.schema.jsonPath.split('.')
        res = this.jp(res, parts)
        if (!Array.isArray(res))
          res = [res]
      }
      this.choices = res
      this.filteredChoices = res
      console.log(this.choices)
    })
  }

  /**
   * TODO: remove
   * mini jsonpath implementation, since the "npm i jsonpath" dependency does not work in the angular lib
   * (it does work in the root demo app...)
   */
  jp(o: any, paths: string[]): any {

    console.log(o, paths)

    if (paths.length === 0)
      return o

    const path = paths[0]
    const np = Object.assign([], paths)
    np.splice(0, 1)

    if (path === "$")
      return this.jp(o, np)

    if (path.indexOf('[') === -1)
      return this.jp(o[path], np)
    else {
      if (!path.startsWith('['))
        o = o[path.split('[')[0]]
      const res = []
      for (const f of o) {
        res.push(this.jp(f, np))
      }
      return res
    }
  }

  /**
   * handle GET / POST
   */
  getChoices(url: string, args: any, verb: string): Observable<any> {
    if (verb === "GET")
      return this.http.get<any[]>(url, args)
    else
      return this.http.post<any[]>(url, args, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      })
  }

  /**
   * allows for the result of a file upload to be written into a text form element
   */
  handleFileInput(event: any) {
    const reader = new FileReader()
    reader.onload = () => {
      this.value = reader.result
      this.valueChange.emit(this.value)
    }
    reader.readAsText(event.target.files.item(0));
  }
}
