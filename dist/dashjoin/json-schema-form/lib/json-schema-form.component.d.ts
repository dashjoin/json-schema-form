import { OnInit, EventEmitter, SimpleChanges, OnChanges, ComponentFactoryResolver, QueryList } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, ReplaySubject } from "rxjs";
import { KeyValue } from "@angular/common";
import { Schema } from "./schema";
import { WidgetDirective } from "./widget.directive";
import { JsonSchemaFormService } from "./json-schema-form.service";
import { Choice, ChoiceHandler } from "./choice";
import { FormControl } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Edit } from "./edit";
import { MatChipInputEvent } from "@angular/material/chips";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import * as i0 from "@angular/core";
/**
 * generates an input form base on JSON schema and JSON object.
 * The component is used recursively.
 */
export declare class JsonSchemaFormComponent implements OnInit, OnChanges {
    private http;
    private componentFactoryResolver;
    service: JsonSchemaFormService;
    private dialog;
    /**
     * component constructor
     * @param http                        http client
     * @param componentFactoryResolver    allows dynamic components
     * @param service                     application service for registering components etc.
     * @param dialog                      dialog service
     */
    constructor(http: HttpClient, componentFactoryResolver: ComponentFactoryResolver, service: JsonSchemaFormService, dialog: MatDialog);
    /**
     * container children for event propagation
     */
    children: QueryList<JsonSchemaFormComponent>;
    /**
     * container children for event propagation
     */
    child: JsonSchemaFormComponent;
    /**
     * if an array is displayed, indicates which array index is being hovered over in order to
     * display the "-" remove button
     */
    hover: number;
    /**
     * the name of the input field (only set if inside type: object)
     */
    name: string;
    /**
     * the label of the input field
     */
    label: string;
    /**
     * the input value
     */
    value: any;
    /**
     * root form value (can be used in custom components)
     */
    rootValue: any;
    /**
     * emit changes done by the user in the component
     */
    valueChange: EventEmitter<any>;
    /**
     * emit whether this part of the form is valid
     */
    errorChange: EventEmitter<string>;
    /**
     * indicate schema changes done via the layout editor
     */
    schemaChange: EventEmitter<void>;
    /**
     * JSON schema to use
     */
    schema: Schema;
    /**
     * parent schema to edit required
     */
    parentSchema: Schema;
    /**
     * form editor
     */
    edit: Edit;
    /**
     * root JSON schema to use when looking up $ref (simply passed along the tree)
     */
    rootSchema: Schema;
    /**
     * base URL for resolving $ref
     */
    base: string;
    /**
     * indicates whether this is the root of the component tree
     */
    isRoot: boolean;
    /**
     * if present: value of the switch property that determines whether this component renders itself
     * (schema.case not present or schema.case === switch)
     */
    switch: string;
    /**
     * indicates to child components whether the parent object has hideUndefined set (i.e. do not render yourself
     * if your value is undefined)
     */
    hideUndefined: boolean;
    /**
     * are we already in the expansion panel?
     */
    inExpansion: boolean;
    /**
     * are we already in an array?
     */
    inArray: boolean;
    /**
     * required imported from parent
     */
    required: boolean;
    /**
     * hook for custom widgets
     */
    widgetHost: WidgetDirective;
    /**
     * order field transforms properties into this structure.
     * allows omission, ordering and hierarchy
     */
    orderedProperties: {
        [key: string]: Schema;
    }[];
    /**
     * make sure to return the same date object instance (cannot delete date #83)
     */
    date: Date;
    /**
     * choices that might be loaded async, initialized with current value and its potentially delayed toString value
     */
    choices: ReplaySubject<Choice[]>;
    /**
     * autocomplete filtered choices
     */
    filteredOptions: Observable<Choice[]>;
    /**
     * autocomplete form control for simpler change detection
     */
    control: FormControl;
    /**
     * implementation specified in displayWith
     */
    ch: ChoiceHandler;
    /**
     * complete chip entry with enter or comma
     */
    readonly separatorKeysCodes: number[];
    /**
     * readOnly if schema.readOnly or schema.createOnly and value set
     */
    readOnly: boolean;
    /**
     * error from a custom component
     */
    customError: string;
    /**
     * apply order, called anytime properties are set
     */
    setOrderedProperties(): void;
    /**
     * initialize the comonent.
     * replace undefined with null and init autocomplete choices
     */
    ngOnInit(): void;
    /**
     * choice element activated - load values
     */
    focus(): void;
    /**
     * load schema from ref, apply pointer if needed
     */
    url(ref: string, pointer: string): void;
    /**
     * emit valueChange event and also any validation error
     */
    emit(event: any): void;
    /**
     * if the schema changes from the outside,
     * reset the component state wrt. errors and the choices cache
     */
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * angular pipe sorting function for keyValue - keep the JSON order and do not
     * order alphabetically
     */
    originalOrder: (a: KeyValue<string, Schema>, b: KeyValue<string, Schema>) => number;
    /**
     * key method to instruct the display which HTML block to activate.
     */
    getLayout(): string;
    /**
     * called from template in the "simple" type. If "type" is "number" or "integer",
     * the HTML input type is "number" which avoids normal string input
     */
    getInputType(schema: Schema): string;
    /**
     * event handler for object display. Catches the child component event and
     * handle it by setting the value[key].
     * Also init null objects with {}
     */
    onValueChange(key: string, value: any): void;
    /**
     * add an element to an array.
     * null arrays are initialized with []
     */
    add(): void;
    /**
     * event handler for adding a field
     */
    addField(): void;
    /**
     * remove an element from an array
     */
    remove(i: number): void;
    /**
     * remove a field
     */
    removeField(key: string): void;
    /**
     * event handler for changed field names with "additionalProperties"
     */
    fieldNameChange(key: string, newvalue: any): void;
    /**
     * returns the validation error on this level and call recursively for all children.
     * returns null if the form contents is valid
     */
    recursiveError(): string;
    /**
     * return the error message provided in the schema or the generic error message
     * returned from the validation code
     */
    e(error: string): string;
    /**
     * return error string
     */
    error(): string;
    /**
     * use the element title if present, defaults to the label input or "" is both are null
     */
    getLabel(): string;
    /**
     * input element change handler.
     * normalize the different kind of events, handle the datatypes, set the value and emit the change
     */
    change(event: any): void;
    /**
     * allows for the result of a file upload to be written into a text form element
     */
    handleFileInput(event: any): void;
    /**
     * get example values from example array and default
     */
    example(): string;
    /**
     * load the dynamic custom widget
     */
    loadComponent(): void;
    /**
     * used for expansion panels - set value and forward event
     */
    setAndEmit(event: any): void;
    /**
     * set an array element and emit value change event
     */
    setIndexAndEmit(i: number, event: any): void;
    /**
     * set an array element's field and emit value change event (applies to table layout)
     */
    setIndexAndEmitTable(i: number, field: string, event: any): void;
    /**
     * used when hideUndefined is active. Called from the UI to
     * show a property with undefined value (in order to be able to set if in the form)
     */
    showProperty(prop: string): void;
    /**
     * used when hideUndefined is active. Called from the UI
     * to determine which properties are included in the "to add" list
     */
    showPropertyList(): string[];
    /**
     * string to date
     * @param date    date string / number (millisecs since 1970)
     * @param format  date format
     */
    parseDate(date: any, format: string): Date;
    /**
     * make sure to return the same date object instance (cannot delete date #83)
     */
    sameDate(nd: Date): Date;
    /**
     * date to string
     * @param date    the date to serialize
     * @param format  the date format (e.g. dd-MM-yyyy)
     * @param type    target datatype (allows serializing to millisecs since 1970)
     */
    serializeDate(date: Date, format: string, type: string): string;
    /**
     * find the first non letter character in a date format such as dd/MM/yyyy (returns /)
     */
    getDelimiter(format: string): string;
    /**
     * new chip entered
     */
    addChip(event: MatChipInputEvent): void;
    /**
     * remove a chip
     */
    removeChip(v: string): void;
    /**
     * chips d&d handler
     */
    dropChip(event: CdkDragDrop<string[]>): void;
    static ɵfac: i0.ɵɵFactoryDef<JsonSchemaFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<JsonSchemaFormComponent, "lib-json-schema-form", never, { "name": "name"; "label": "label"; "value": "value"; "rootValue": "rootValue"; "schema": "schema"; "parentSchema": "parentSchema"; "rootSchema": "rootSchema"; "base": "base"; "switch": "switch"; "hideUndefined": "hideUndefined"; "inExpansion": "inExpansion"; "inArray": "inArray"; "required": "required"; }, { "valueChange": "valueChange"; "errorChange": "errorChange"; "schemaChange": "schemaChange"; }, never, never>;
}
//# sourceMappingURL=json-schema-form.component.d.ts.map