import {
  Component, OnInit, Input, Output, EventEmitter, SimpleChanges,
  OnChanges, ComponentFactoryResolver, ViewChild, Type
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
   * filter entered for array-select
   */
  selectfilter = '';

  /**
   * validation error message to be displayed in red
   */
  errorMessage: string;

  /**
   * the name of the input field
   */
  @Input() label: string;

  /**
   * the input value
   */
  @Input() value: any;

  /**
   * emit changes done by the user in the component
   */
  @Output() valueChange: EventEmitter<any> = new EventEmitter();

  /**
   * JSON schema to use
   */
  @Input() schema: Schema;

  /**
   * root JSON schema to use when looking up $ref (simply passed along the tree)
   */
  @Input() rootSchema: Schema;

  /**
   * if present: value of the switch property that determines whether this component renders itself
   * (schema.case not present or schema.case === switch)
   */
  @Input() switch: string;

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
        setTimeout(() => this.valueChange.emit(this.value), 500);
      } else {
        this.value = null;
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

    if (this.schema.widget === 'custom') {
      this.loadComponent();
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
        this.errorMessage = null;
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
    this.valueChange.emit(this.value);
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
    this.valueChange.emit(this.value);
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
    this.valueChange.emit(this.value);
  }

  /**
   * remove an element from an array
   */
  remove(i: number) {
    this.value.splice(i, 1);
    this.valueChange.emit(this.value);
  }

  /**
   * remove a field
   */
  removeField(key: string) {
    delete this.value[key];
    this.valueChange.emit(this.value);
  }

  /**
   * event handler for changed field names with "additionalProperties"
   */
  fieldNameChange(key: string, newvalue: any) {
    this.value[newvalue] = this.value[key];
    delete this.value[key];
    this.valueChange.emit(this.value);
  }

  /**
   * return error string
   */
  error(): string {
    if (this.schema.required) {
      if (this.value == null) {
        return 'required';
      }
    }
    return this.errorMessage;
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
      if (!isNaN(parseFloat(event))) {
        this.value = parseFloat(event);
        this.errorMessage = '';
      } else
        if (event != null) {
          this.errorMessage = event + ' is not a number';
        } else {
          this.errorMessage = '';
        }
    } else if (this.schema.type === 'integer') {
      if (!isNaN(parseInt(event, 10))) {
        this.value = parseInt(event, 10);
        this.errorMessage = '';
        if (eventTarget) {
          if ('' + this.value !== event) {
            eventTarget.value = this.value;
          }
        }
      } else if (event != null) {
        this.errorMessage = event + ' is not an integer number';
      } else {
        this.errorMessage = '';
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

    this.valueChange.emit(this.value);
  }

  /**
   * autocomplete filter
   */
  filter(event: any) {
    if (this.choices != null) {
      this.filteredChoices = this.choices.filter(el => el?.toLowerCase().match(event.target.value?.toLowerCase()));
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
      this.errorMessage = 'The file size is limited to 1MB';
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.value = reader.result;
      this.valueChange.emit(this.value);
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
  }

  /**
   * array select options opened / closed. reset filter when closed
   */
  openedChange(event: boolean) {
    if (!event) {
      this.selectfilter = '';
      this.filteredChoices = this.choices;
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
      this.valueChange.emit(this.value);
    });
  }
}
