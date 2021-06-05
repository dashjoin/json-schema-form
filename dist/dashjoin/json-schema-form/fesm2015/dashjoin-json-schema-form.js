import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdirectiveInject, ViewContainerRef, ɵɵdefineDirective, Directive, ɵɵdefineComponent, ɵɵelementStart, ɵɵlistener, ɵɵelementEnd, ɵɵtext, ɵɵadvance, ɵɵproperty, Component, Inject, ɵɵgetCurrentView, ɵɵrestoreView, ɵɵnextContext, ɵɵtextInterpolate, ɵɵtemplate, ɵɵreference, ɵɵpipe, ɵɵpipeBind2, ɵɵtextInterpolate1, ɵɵpropertyInterpolate, ɵɵelement, ɵɵpipeBind1, EventEmitter, ComponentFactoryResolver, ɵɵviewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵNgOnChangesFeature, ViewChildren, ViewChild, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { MatSelectChange, MatSelect, MatSelectModule } from '@angular/material/select';
import { MatDatepickerInputEvent, MatDatepickerInput, MatDatepickerToggle, MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxChange, MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { forkJoin, of, ReplaySubject } from 'rxjs';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger, MatAutocomplete, MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpHeaders, HttpClient, HttpClientModule } from '@angular/common/http';
import { switchMap, publishReplay, refCount, map, startWith, debounceTime } from 'rxjs/operators';
import jsonata from 'jsonata';
import { FormControl, DefaultValueAccessor, NgControlStatus, FormControlDirective, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { moveItemInArray, CdkDropList, CdkDrag, DragDropModule } from '@angular/cdk/drag-drop';
import { ENTER, COMMA, TAB } from '@angular/cdk/keycodes';
import { NgIf, NgStyle, NgClass, NgForOf, KeyValuePipe, AsyncPipe, CommonModule } from '@angular/common';
import { MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionModule } from '@angular/material/expansion';
import { DefaultStyleDirective, DefaultClassDirective } from '@angular/flex-layout/extended';
import { MatTooltip, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipModule } from '@angular/material/tooltip';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenuTrigger, MatMenu, MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { DefaultLayoutDirective } from '@angular/flex-layout/flex';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel, MatSuffix, MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatTabGroup, MatTab, MatTabLabel, MatTabsModule } from '@angular/material/tabs';
import { MatChipList, MatChipInput, MatChip, MatChipRemove, MatChipsModule } from '@angular/material/chips';
import { MatOption, MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';

/**
 * service for registering custom components
 */
class JsonSchemaFormService {
    constructor() {
        /**
         * layout editor mode
         */
        this.editMode = false;
        /**
         * built-in formats
         */
        this.formats = {
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            ipv4: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,
            url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
            uri: /^\w+:(\/?\/?)[^\s]+$/
        };
        /**
         * registry of custom widgets. The keys are the values used in schema.widgetType, the values
         * are the Type<any> of the custom widget component implementing WidgetComponent
         */
        this.registry = {};
        /**
         * registry of displayWith objects
         */
        this.displayWithRegistry = {};
    }
    /**
     * register custom component
     * @param key     the name of the component which is used in schema extension: widget=custom, widgetType=key
     * @param value   the implementation class
     */
    registerComponent(key, value) {
        this.registry[key] = value;
    }
    /**
     * register displayWith implementations
     * @param key     the name of the implementation which is used in schema extension: displayWith=key
     * @param value   the implementation class
     */
    registerDisplayWith(key, value) {
        this.displayWithRegistry[key] = value;
    }
}
JsonSchemaFormService.ɵfac = function JsonSchemaFormService_Factory(t) { return new (t || JsonSchemaFormService)(); };
JsonSchemaFormService.ɵprov = ɵɵdefineInjectable({ token: JsonSchemaFormService, factory: JsonSchemaFormService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(JsonSchemaFormService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

/**
 * directive for dynamically loading custom widgets
 */
class WidgetDirective {
    /**
     * allow caller to dynamically insert custom component
     * @param viewContainerRef  dynamic component handle
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
WidgetDirective.ɵfac = function WidgetDirective_Factory(t) { return new (t || WidgetDirective)(ɵɵdirectiveInject(ViewContainerRef)); };
WidgetDirective.ɵdir = ɵɵdefineDirective({ type: WidgetDirective, selectors: [["", "libWidgetHost", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(WidgetDirective, [{
        type: Directive,
        args: [{
                selector: '[libWidgetHost]'
            }]
    }], function () { return [{ type: ViewContainerRef }]; }, null); })();

/**
 * static JsonPointer implementation
 */
class JsonPointer {
    /**
     * evaluate the JSON pointer on o
     */
    static jsonPointer(o, pointer) {
        return JsonPointer.jsonPointer2(o, JsonPointer.split(pointer));
    }
    /**
     * evaluate the JSON pointer (parsed array of paths) on o
     */
    static jsonPointer2(o, paths) {
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
        }
        else {
            return this.jsonPointer2(o[path], np);
        }
    }
    /**
     * strip leading / and split the JSON pointer
     */
    static split(s) {
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
}

/**
 * default implementation that handles choices based on schema fields.
 * can be overriden via schema.displayWith
 */
class DefaultChoiceHandler {
    /**
     * create default choice handler
     *
     * @param http      http connection client
     */
    constructor(http) {
        this.http = http;
    }
    /**
     * load choices
     */
    load(value, schema) {
        if (!this.cache) {
            if (schema.choices) {
                // static choices are given, convert them to Choice and merge the result
                const arr = [];
                for (const s of schema.choices) {
                    arr.push(this.choice(s, schema));
                }
                this.cache = forkJoin(arr);
            }
            else {
                // load choices from URL
                this.cache = this.getChoices(schema.choicesUrl, schema.choicesUrlArgs, schema.choicesVerb).pipe(switchMap(res => {
                    if (schema.jsonata) {
                        res = jsonata(schema.jsonata).evaluate(res);
                        if (!Array.isArray(res)) {
                            res = [res];
                            // introduce jsonName, jsonValue
                        }
                    }
                    const obs = [];
                    for (const r of res) {
                        obs.push(this.choice(r, schema));
                    }
                    return forkJoin(obs);
                }), 
                // setup caching
                publishReplay(1), refCount());
            }
        }
        return this.cache;
    }
    /**
     * filter after keystroke
     */
    filter(value, schema, current, choices) {
        return choices.pipe(map(arr => {
            if (!current) {
                return arr;
            }
            const res = arr.filter(i => this.include(i, current));
            return res;
        }));
    }
    /**
     * called from filter, intended to allow subclasses to easily change filter algorithm
     */
    include(i, current) {
        var _a;
        return (_a = i.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(current.toLowerCase());
    }
    /**
     * default choice implementation: just reuse value as name
     * check for localName
     */
    choice(value, schema) {
        if (schema.displayWith === 'localName') {
            for (const delimiter of ['/', '#', ':', '.']) {
                const parts = value.split(delimiter);
                if (parts.length > 1) {
                    return of({ value, name: parts[parts.length - 1] });
                }
            }
            return of({ value, name: value });
        }
        if (schema.jsonata) {
            if (typeof value === 'object') {
                return of(value);
            }
            else {
                // initially, value is a simple string
                return of({ value, name: value });
            }
        }
        if (schema.displayWithChoices) {
            return of({ value, name: schema.displayWithChoices[schema.choices.indexOf(value)] });
        }
        return of({ value, name: value });
    }
    /**
     * handle GET / POST
     */
    getChoices(url, args, verb) {
        if (verb === 'GET') {
            return this.http.get(url, args);
        }
        else {
            return this.http.post(url, args, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                })
            });
        }
    }
    /**
     * default: no delay
     */
    debounceTime() {
        return 0;
    }
}

/**
 * dialog to edit a JSON node in a layout structure
 */
class EditElementDialogComponent {
    /**
     * dialog constrcutor
     * @param dialogRef   disloag ref
     * @param data        data to edit
     */
    constructor(dialogRef, data) {
        var _a;
        this.dialogRef = dialogRef;
        this.data = data;
        this.schema = {
            title: 'Edit form',
            layout: 'vertical',
            order: [
                ['widget', 'layout', 'itemlayout'],
                ['title', 'description'],
                ['example', 'readOnly'],
                ['required', 'format', 'errorMessage'],
                'choices', 'class', 'style'
            ],
            static: true,
            type: 'object',
            properties: {
                // description, class, style are always applicable
                description: { type: 'string', static: true, title: 'Description / tooltip' },
                class: { type: 'array', items: { type: 'string' }, layout: 'chips', style: { width: '365px' }, static: true, title: 'CSS classes' },
                style: { type: 'object', additionalProperties: { type: 'string' }, static: true, title: 'CSS styles' }
            }
        };
        if (data.properties) {
            // only show required and error message for objects
            this.schema.properties.errorMessage = { type: 'string', static: true, title: 'Validation error message' };
            this.schema.properties.required = {
                choices: Object.keys(data.properties), type: 'array', layout: 'select', items: { type: 'string' }, static: true,
                title: 'Required fields'
            };
            this.schema.properties.layout = { type: 'string', enum: ['vertical', 'horizontal'], static: true, title: 'Screen layout' };
        }
        else {
            if (data.items) {
                this.schema.properties.layout = {
                    type: 'string', enum: ['vertical', 'horizontal', 'select', 'tab', 'table', 'chips'],
                    static: true, title: 'Screen Layout'
                };
                this.schema.properties.itemlayout = { type: 'string', enum: ['vertical', 'horizontal'], static: true, title: 'Item screen layout' };
            }
            if ((_a = data.items) === null || _a === void 0 ? void 0 : _a.properties) {
                // array of objects
                this.schema.properties.errorMessage = { type: 'string', static: true, title: 'Validation error message' };
                this.schema.properties.required = {
                    choices: Object.keys(data.items.properties), type: 'array', layout: 'select', items: { type: 'string' }, static: true,
                    title: 'Required fields'
                };
            }
            else {
                // array of simple types
                this.schema.properties.readOnly = {
                    type: 'boolean', static: true, title: 'Read only value', style: { 'padding-top': '15px' }
                };
                this.schema.properties.errorMessage = { type: 'string', static: true, title: 'Validation error message' };
                this.schema.properties.format = {
                    type: 'string', static: true, title: 'Format',
                    widget: 'select', choices: [null, 'email', 'ipv4', 'url', 'uri']
                };
                this.schema.properties.example = { type: 'string', static: true, title: 'Example data' };
                this.schema.properties.title = { type: 'string', static: true, title: 'Title' };
                this.schema.properties.widget = {
                    type: 'string', enum: ['text', 'select', 'date', 'textarea', 'password'], static: true,
                    title: 'Form widget'
                };
                this.schema.properties.choices = {
                    type: 'array', items: { type: 'string' }, style: { width: '365px' },
                    layout: 'chips', static: true, title: 'Input choices'
                };
            }
        }
    }
}
EditElementDialogComponent.ɵfac = function EditElementDialogComponent_Factory(t) { return new (t || EditElementDialogComponent)(ɵɵdirectiveInject(MatDialogRef), ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
EditElementDialogComponent.ɵcmp = ɵɵdefineComponent({ type: EditElementDialogComponent, selectors: [["lib-edit-element-dialog"]], decls: 7, vars: 4, consts: [[2, "padding-top", "10px"], [3, "value", "schema", "label", "valueChange"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function EditElementDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-dialog-content", 0);
        ɵɵelementStart(1, "lib-json-schema-form", 1);
        ɵɵlistener("valueChange", function EditElementDialogComponent_Template_lib_json_schema_form_valueChange_1_listener($event) { return ctx.data = $event; });
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementStart(2, "mat-dialog-actions", 2);
        ɵɵelementStart(3, "button", 3);
        ɵɵlistener("click", function EditElementDialogComponent_Template_button_click_3_listener() { return ctx.dialogRef.close(); });
        ɵɵtext(4, "Cancel");
        ɵɵelementEnd();
        ɵɵelementStart(5, "button", 4);
        ɵɵtext(6, "Ok");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("value", ctx.data)("schema", ctx.schema)("label", ctx.schema.title);
        ɵɵadvance(4);
        ɵɵproperty("mat-dialog-close", ctx.data);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(EditElementDialogComponent, [{
        type: Component,
        args: [{
                selector: 'lib-edit-element-dialog',
                templateUrl: './edit-element-dialog.component.html'
            }]
    }], function () { return [{ type: MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();

/**
 * form editor - has a 1:1 relationship to form node
 */
class Edit {
    /**
     * get access to parent object's fields
     *
     * @param schemaChange  signal a change
     * @param name          the current property name (key)
     * @param schema        the current schema
     * @param parent        the parent's schema (required in order to change the order)
     * @param dialog        dialog service
     */
    constructor(schemaChange, name, schema, parent, dialog) {
        this.schemaChange = schemaChange;
        this.name = name;
        this.schema = schema;
        this.parent = parent;
        this.dialog = dialog;
    }
    /**
     * can add if addable is not empty
     */
    canAdd() {
        return this.addable().length > 0;
    }
    /**
     * get the entries in "properties" that are not in "order"
     */
    addable() {
        var _a, _b;
        let s;
        if (this.schema.properties) {
            s = this.schema;
        }
        else if ((_a = this.schema.items) === null || _a === void 0 ? void 0 : _a.properties) {
            s = this.schema.items;
        }
        else if ((_b = this.schema.additionalProperties) === null || _b === void 0 ? void 0 : _b.properties) {
            s = this.schema.additionalProperties;
        }
        else {
            return [];
        }
        if (s.order) {
            const set = new Set(Object.keys(s.properties));
            for (const p of s.order) {
                if (Array.isArray(p)) {
                    for (const q of p) {
                        set.delete(q);
                    }
                }
                else {
                    set.delete(p);
                }
            }
            return Array.from(set);
        }
        else {
            return [];
        }
    }
    /**
     * add a hidden prop to the end of the list
     */
    addSub(prop) {
        const index = this.parent.order.indexOf(this.name);
        if (index >= 0) {
            this.parent.order[index] = [this.parent.order[index], prop];
        }
        else {
            for (const p of this.parent.order) {
                if (Array.isArray(p)) {
                    if (p.indexOf(this.name) >= 0) {
                        p.push(prop);
                    }
                }
            }
        }
        this.schemaChange.emit();
    }
    /**
     * can add if addable is not empty
     */
    canAddSub() {
        return this.subaddable().length > 0;
    }
    /**
     * get the entries in "properties" that are not in "order"
     */
    subaddable() {
        var _a;
        if ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.order) {
            const set = new Set(Object.keys(this.parent.properties));
            for (const p of this.parent.order) {
                if (Array.isArray(p)) {
                    for (const q of p) {
                        set.delete(q);
                    }
                }
                else {
                    set.delete(p);
                }
            }
            return Array.from(set);
        }
        else {
            return [];
        }
    }
    /**
     * add a hidden prop to the end of the list
     */
    add(prop) {
        var _a;
        if (this.schema.properties) {
            this.schema.order.push(prop);
        }
        else if ((_a = this.schema.items) === null || _a === void 0 ? void 0 : _a.properties) {
            this.schema.items.order.push(prop);
        }
        else {
            this.schema.additionalProperties.order.push(prop);
        }
        this.schemaChange.emit();
    }
    /**
     * edit simple schema fields like title and description
     */
    edit() {
        var _a, _b, _c;
        // deep clone object so we have the possibility to cancel editing
        const clone = JSON.parse(JSON.stringify(this.schema));
        // handle (array) example
        if (((_b = (_a = clone.items) === null || _a === void 0 ? void 0 : _a.examples) === null || _b === void 0 ? void 0 : _b.length) > 0) {
            clone.example = clone.items.examples[0];
        }
        if (((_c = clone.examples) === null || _c === void 0 ? void 0 : _c.length) > 0) {
            clone.example = clone.examples[0];
        }
        // text is default
        if (!clone.widget) {
            clone.widget = 'text';
        }
        // horizontal is default
        if (!clone.layout) {
            clone.layout = 'horizontal';
        }
        // array: apply choices and widget to items
        if (clone.items) {
            clone.widget = clone.items.widget;
            clone.choices = clone.items.choices;
            clone.errorMessage = clone.items.errorMessage;
            clone.format = clone.items.format;
            clone.required = clone.items.required;
            clone.itemlayout = clone.items.layout;
        }
        const dialogRef = this.dialog.open(EditElementDialogComponent, { minWidth: '50%', data: clone });
        dialogRef.afterClosed().subscribe(data => {
            var _a, _b;
            if (data) {
                this.schema.title = data.title;
                this.schema.description = data.description;
                this.schema.widget = data.widget;
                this.schema.layout = data.layout;
                this.schema.readOnly = data.readOnly;
                this.schema.errorMessage = data.errorMessage;
                if (data.example) {
                    if (data.items) {
                        this.schema.items.examples = [data.example];
                    }
                    else {
                        this.schema.examples = [data.example];
                    }
                }
                if (data.style) {
                    delete data.style[''];
                }
                if (data.style && Object.keys(data.style).length > 0) {
                    this.schema.style = data.style;
                }
                if (data.class) {
                    data.class = data.class.filter(el => el != null);
                }
                if (((_a = data.class) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                    this.schema.class = data.class;
                }
                if (data.items) {
                    if (((_b = data.choices) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                        this.schema.items.choices = data.choices;
                    }
                    this.schema.items.widget = data.widget;
                    this.schema.items.format = data.format;
                    this.schema.items.errorMessage = data.errorMessage;
                    this.schema.items.required = data.required;
                    this.schema.items.layout = data.itemlayout;
                }
                else {
                    this.schema.choices = data.choices;
                    this.schema.widget = data.widget;
                    this.schema.format = data.format;
                    this.schema.errorMessage = data.errorMessage;
                    this.schema.required = data.required;
                }
                this.schemaChange.emit();
            }
        });
    }
    /**
     * can hide if I my parent is an object
     */
    canHide() {
        return this.parent ? true : false;
    }
    /**
     * hide this prop
     */
    hide() {
        if (!this.parent.order) {
            this.parent.order = Object.keys(this.parent.properties);
        }
        let index = 0;
        for (const p of this.parent.order) {
            if (Array.isArray(p)) {
                if (p.indexOf(this.name) >= 0) {
                    p.splice(p.indexOf(this.name), 1);
                    if (p.length === 1) {
                        this.parent.order[index] = p[0];
                    }
                }
            }
            index++;
        }
        if (this.parent.order.indexOf(this.name) >= 0) {
            this.parent.order.splice(this.parent.order.indexOf(this.name), 1);
        }
        this.schemaChange.emit();
    }
    /**
     * can I go up
     */
    canUp() {
        if (!this.parent) {
            return false;
        }
        const props = this.parent.order ? this.parent.order : Object.keys(this.parent.properties);
        const index = props.indexOf(this.name);
        if (index >= 0) {
            return index > 0;
        }
        else {
            for (const p of props) {
                if (Array.isArray(p)) {
                    if (p.indexOf(this.name) >= 0) {
                        return p.indexOf(this.name) > 0;
                    }
                }
            }
        }
    }
    /**
     * go up
     */
    up() {
        if (!this.parent.order) {
            this.parent.order = Object.keys(this.parent.properties);
        }
        let index = this.parent.order.indexOf(this.name);
        if (index >= 0) {
            const tmp = this.parent.order[index - 1];
            this.parent.order[index - 1] = this.parent.order[index];
            this.parent.order[index] = tmp;
        }
        else {
            for (const p of this.parent.order) {
                if (Array.isArray(p)) {
                    index = p.indexOf(this.name);
                    if (index >= 0) {
                        const tmp = p[index - 1];
                        p[index - 1] = p[index];
                        p[index] = tmp;
                    }
                }
            }
        }
        this.schemaChange.emit();
    }
    /**
     * can I go down
     */
    canDown() {
        if (!this.parent) {
            return false;
        }
        const props = this.parent.order ? this.parent.order : Object.keys(this.parent.properties);
        const index = props.indexOf(this.name);
        if (index >= 0) {
            return index < props.length - 1;
        }
        else {
            for (const p of props) {
                if (Array.isArray(p)) {
                    if (p.indexOf(this.name) >= 0) {
                        return p.indexOf(this.name) < p.length - 1;
                    }
                }
            }
        }
    }
    /**
     * go down
     */
    down() {
        if (!this.parent.order) {
            this.parent.order = Object.keys(this.parent.properties);
        }
        let index = this.parent.order.indexOf(this.name);
        if (index >= 0) {
            const tmp = this.parent.order[index + 1];
            this.parent.order[index + 1] = this.parent.order[index];
            this.parent.order[index] = tmp;
        }
        else {
            for (const p of this.parent.order) {
                if (Array.isArray(p)) {
                    index = p.indexOf(this.name);
                    if (index >= 0) {
                        const tmp = p[index + 1];
                        p[index + 1] = p[index];
                        p[index] = tmp;
                    }
                }
            }
        }
        this.schemaChange.emit();
    }
}

const _c0 = ["child"];
const _c1 = ["children"];
function JsonSchemaFormComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-expansion-panel", 3);
    ɵɵelementStart(1, "mat-expansion-panel-header");
    ɵɵelementStart(2, "mat-panel-title");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-panel-description");
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "lib-json-schema-form", 4, 5);
    ɵɵlistener("valueChange", function JsonSchemaFormComponent_mat_expansion_panel_0_Template_lib_json_schema_form_valueChange_6_listener($event) { ɵɵrestoreView(_r5); const ctx_r4 = ɵɵnextContext(); return ctx_r4.setAndEmit($event); })("schemaChange", function JsonSchemaFormComponent_mat_expansion_panel_0_Template_lib_json_schema_form_schemaChange_6_listener() { ɵɵrestoreView(_r5); const ctx_r6 = ɵɵnextContext(); return ctx_r6.schemaChange.emit(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngStyle", ctx_r0.schema.style)("ngClass", ctx_r0.schema.class)("expanded", ctx_r0.schema.expanded);
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r0.label);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r0.schema.description);
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r0.label)("name", ctx_r0.name)("value", ctx_r0.value)("switch", ctx_r0.switch)("rootValue", ctx_r0.rootValue)("rootSchema", ctx_r0.rootSchema)("schema", ctx_r0.schema)("inExpansion", true)("base", ctx_r0.base);
} }
function JsonSchemaFormComponent_div_1_div_1_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r30 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_button_31_Template_button_click_0_listener() { ɵɵrestoreView(_r30); const x_r28 = ctx.$implicit; const ctx_r29 = ɵɵnextContext(3); return ctx_r29.edit.add(x_r28); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const x_r28 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(x_r28);
} }
function JsonSchemaFormComponent_div_1_div_1_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r33 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 14);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_button_34_Template_button_click_0_listener() { ɵɵrestoreView(_r33); const x_r31 = ctx.$implicit; const ctx_r32 = ɵɵnextContext(3); return ctx_r32.edit.addSub(x_r31); });
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const x_r31 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(x_r31);
} }
function JsonSchemaFormComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "mat-icon", 12);
    ɵɵtext(2, " more_vert ");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-menu", null, 13);
    ɵɵelementStart(5, "button", 14);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_Template_button_click_5_listener() { ɵɵrestoreView(_r35); const ctx_r34 = ɵɵnextContext(2); return ctx_r34.edit.edit(); });
    ɵɵelementStart(6, "mat-icon");
    ɵɵtext(7, "edit");
    ɵɵelementEnd();
    ɵɵtext(8, "Edit ");
    ɵɵelementEnd();
    ɵɵelementStart(9, "button", 15);
    ɵɵelementStart(10, "mat-icon");
    ɵɵtext(11, "add");
    ɵɵelementEnd();
    ɵɵtext(12, "Show ");
    ɵɵelementEnd();
    ɵɵelementStart(13, "button", 15);
    ɵɵelementStart(14, "mat-icon");
    ɵɵtext(15, "playlist_add");
    ɵɵelementEnd();
    ɵɵtext(16, "Show inline ");
    ɵɵelementEnd();
    ɵɵelementStart(17, "button", 16);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_Template_button_click_17_listener() { ɵɵrestoreView(_r35); const ctx_r36 = ɵɵnextContext(2); return ctx_r36.edit.hide(); });
    ɵɵelementStart(18, "mat-icon");
    ɵɵtext(19, "remove");
    ɵɵelementEnd();
    ɵɵtext(20, "Hide ");
    ɵɵelementEnd();
    ɵɵelementStart(21, "button", 16);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_Template_button_click_21_listener() { ɵɵrestoreView(_r35); const ctx_r37 = ɵɵnextContext(2); return ctx_r37.edit.up(); });
    ɵɵelementStart(22, "mat-icon");
    ɵɵtext(23, "north_west");
    ɵɵelementEnd();
    ɵɵtext(24, "Up / Left ");
    ɵɵelementEnd();
    ɵɵelementStart(25, "button", 16);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_Template_button_click_25_listener() { ɵɵrestoreView(_r35); const ctx_r38 = ɵɵnextContext(2); return ctx_r38.edit.down(); });
    ɵɵelementStart(26, "mat-icon");
    ɵɵtext(27, "south_east");
    ɵɵelementEnd();
    ɵɵtext(28, "Down / Right ");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(29, "mat-menu", null, 17);
    ɵɵtemplate(31, JsonSchemaFormComponent_div_1_div_1_button_31_Template, 2, 1, "button", 18);
    ɵɵelementEnd();
    ɵɵelementStart(32, "mat-menu", null, 19);
    ɵɵtemplate(34, JsonSchemaFormComponent_div_1_div_1_button_34_Template, 2, 1, "button", 18);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r23 = ɵɵreference(4);
    const _r24 = ɵɵreference(30);
    const _r26 = ɵɵreference(33);
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("matMenuTriggerFor", _r23)("matTooltip", ctx_r7.name ? "Form element " + ctx_r7.name : ctx_r7.isRoot ? "Form root" : "");
    ɵɵadvance(8);
    ɵɵproperty("disabled", !ctx_r7.edit.canAdd())("matMenuTriggerFor", _r24);
    ɵɵadvance(4);
    ɵɵproperty("disabled", !ctx_r7.edit.canAddSub())("matMenuTriggerFor", _r26);
    ɵɵadvance(4);
    ɵɵproperty("disabled", !ctx_r7.edit.canHide());
    ɵɵadvance(4);
    ɵɵproperty("disabled", !ctx_r7.edit.canUp());
    ɵɵadvance(4);
    ɵɵproperty("disabled", !ctx_r7.edit.canDown());
    ɵɵadvance(6);
    ɵɵproperty("ngForOf", ctx_r7.edit.addable());
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r7.edit.subaddable());
} }
function JsonSchemaFormComponent_div_1_span_2_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "lib-json-schema-form", 26, 27);
    ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_span_2_div_1_div_1_div_1_Template_lib_json_schema_form_valueChange_1_listener($event) { ɵɵrestoreView(_r48); const x_r43 = ɵɵnextContext().$implicit; const ctx_r46 = ɵɵnextContext(4); return ctx_r46.onValueChange(x_r43.key, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_span_2_div_1_div_1_div_1_Template_lib_json_schema_form_schemaChange_1_listener() { ɵɵrestoreView(_r48); const ctx_r49 = ɵɵnextContext(5); return ctx_r49.schemaChange.emit(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const x_r43 = ɵɵnextContext().$implicit;
    const ctx_r44 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("name", x_r43.key)("label", x_r43.value.title ? x_r43.value.title : x_r43.key)("value", ctx_r44.value ? ctx_r44.value[x_r43.key] : undefined)("switch", ctx_r44.value ? ctx_r44.value[ctx_r44.schema.switch] : undefined)("rootValue", ctx_r44.rootValue)("rootSchema", ctx_r44.rootSchema)("schema", x_r43.value)("parentSchema", ctx_r44.schema)("required", ctx_r44.schema.required ? ctx_r44.schema.required.includes(x_r43.key) : false)("hideUndefined", ctx_r44.schema.hideUndefined)("base", ctx_r44.base);
} }
function JsonSchemaFormComponent_div_1_span_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 25);
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_2_div_1_div_1_div_1_Template, 3, 11, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const x_r43 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵproperty("ngIf", x_r43.value && (x_r43.value.type || x_r43.value.$ref));
} }
function JsonSchemaFormComponent_div_1_span_2_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 23);
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_2_div_1_div_1_Template, 2, 1, "div", 24);
    ɵɵpipe(2, "keyvalue");
    ɵɵelementEnd();
} if (rf & 2) {
    const op_r41 = ctx.$implicit;
    const ctx_r39 = ɵɵnextContext(3);
    ɵɵproperty("fxLayout", ctx_r39.schema.layout !== "vertical" ? "column" : "row wrap");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(2, 2, op_r41, ctx_r39.originalOrder));
} }
function JsonSchemaFormComponent_div_1_span_2_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r55 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "mat-checkbox", 31);
    ɵɵlistener("change", function JsonSchemaFormComponent_div_1_span_2_div_2_div_6_Template_mat_checkbox_change_1_listener() { ɵɵrestoreView(_r55); const x_r53 = ctx.$implicit; const ctx_r54 = ɵɵnextContext(4); return ctx_r54.showProperty(x_r53); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const x_r53 = ctx.$implicit;
    const ctx_r52 = ɵɵnextContext(4);
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r52.value ? ctx_r52.value[x_r53] : false)("checked", ctx_r52.value && ctx_r52.value[x_r53] !== undefined);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", x_r53, " ");
} }
function JsonSchemaFormComponent_div_1_span_2_div_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 28);
    ɵɵelementStart(1, "button", 29);
    ɵɵelementStart(2, "mat-icon");
    ɵɵtext(3, "more_vert");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-menu", null, 13);
    ɵɵtemplate(6, JsonSchemaFormComponent_div_1_span_2_div_2_div_6_Template, 3, 3, "div", 30);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r51 = ɵɵreference(5);
    const ctx_r40 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("matMenuTriggerFor", _r51);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r40.showPropertyList());
} }
function JsonSchemaFormComponent_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_2_div_1_Template, 3, 5, "div", 21);
    ɵɵtemplate(2, JsonSchemaFormComponent_div_1_span_2_div_2_Template, 7, 2, "div", 22);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = ɵɵnextContext(2);
    ɵɵproperty("fxLayout", ctx_r8.schema.layout === "vertical" ? "column" : "row wrap")("ngStyle", ctx_r8.schema.style)("ngClass", ctx_r8.schema.class);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r8.orderedProperties);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r8.schema.hideUndefined);
} }
function JsonSchemaFormComponent_div_1_span_3_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r64 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 38);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_3_div_1_button_8_Template_button_click_0_listener() { ɵɵrestoreView(_r64); const x_r58 = ɵɵnextContext().$implicit; const ctx_r62 = ɵɵnextContext(3); return ctx_r62.removeField(x_r58.key); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "remove_circle_outline");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r61 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("matTooltip", ctx_r61.getLabel());
} }
function JsonSchemaFormComponent_div_1_span_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 34);
    ɵɵlistener("mouseenter", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_div_mouseenter_0_listener() { ɵɵrestoreView(_r66); const i_r59 = ctx.index; const ctx_r65 = ɵɵnextContext(3); return ctx_r65.hover = i_r59; })("mouseleave", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_div_mouseleave_0_listener() { ɵɵrestoreView(_r66); const ctx_r67 = ɵɵnextContext(3); return ctx_r67.hover = null; });
    ɵɵelementStart(1, "mat-form-field");
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "input", 35);
    ɵɵlistener("change", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_input_change_4_listener($event) { ɵɵrestoreView(_r66); const x_r58 = ctx.$implicit; const ctx_r68 = ɵɵnextContext(3); return ctx_r68.fieldNameChange(x_r58.key, $event.target.value); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵtext(5, " \u00A0 ");
    ɵɵelementStart(6, "lib-json-schema-form", 36, 27);
    ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_lib_json_schema_form_valueChange_6_listener($event) { ɵɵrestoreView(_r66); const x_r58 = ctx.$implicit; const ctx_r69 = ɵɵnextContext(3); return ctx_r69.onValueChange(x_r58.key, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_lib_json_schema_form_schemaChange_6_listener() { ɵɵrestoreView(_r66); const ctx_r70 = ɵɵnextContext(3); return ctx_r70.schemaChange.emit(); });
    ɵɵelementEnd();
    ɵɵtemplate(8, JsonSchemaFormComponent_div_1_span_3_div_1_button_8_Template, 3, 1, "button", 37);
    ɵɵelementEnd();
} if (rf & 2) {
    const x_r58 = ctx.$implicit;
    const ctx_r56 = ɵɵnextContext(3);
    ɵɵadvance(3);
    ɵɵtextInterpolate1("", ctx_r56.getLabel(), " key");
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r56.readOnly)("value", x_r58.key);
    ɵɵadvance(2);
    ɵɵproperty("label", ctx_r56.getLabel() + " value")("value", ctx_r56.value[x_r58.key])("rootValue", ctx_r56.rootValue)("rootSchema", ctx_r56.rootSchema)("schema", ctx_r56.schema.additionalProperties)("base", ctx_r56.base);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r56.readOnly);
} }
function JsonSchemaFormComponent_div_1_span_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r72 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 39);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_3_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r72); const ctx_r71 = ɵɵnextContext(3); return ctx_r71.addField(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "add_circle_outline");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r57 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("matTooltip", ctx_r57.getLabel());
} }
function JsonSchemaFormComponent_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_3_div_1_Template, 9, 10, "div", 32);
    ɵɵpipe(2, "keyvalue");
    ɵɵtemplate(3, JsonSchemaFormComponent_div_1_span_3_button_3_Template, 3, 1, "button", 33);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵproperty("fxLayout", ctx_r9.schema.layout === "vertical" ? "column" : "row wrap")("ngStyle", ctx_r9.schema.style)("ngClass", ctx_r9.schema.class);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(2, 5, ctx_r9.value, ctx_r9.originalOrder));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r9.readOnly);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_mat_form_field_0_Template(rf, ctx) { if (rf & 1) {
    const _r84 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field");
    ɵɵelementStart(1, "input", 45);
    ɵɵlistener("change", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_mat_form_field_0_Template_input_change_1_listener($event) { ɵɵrestoreView(_r84); const x_r75 = ɵɵnextContext(2).$implicit; const ctx_r82 = ɵɵnextContext(3); return ctx_r82.fieldNameChange(x_r75.key, $event.target.value); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const x_r75 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵproperty("value", x_r75.key);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const x_r75 = ɵɵnextContext(2).$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate(x_r75.key);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_mat_form_field_0_Template, 2, 1, "mat-form-field", 7);
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_span_1_Template, 2, 1, "span", 7);
} if (rf & 2) {
    const ctx_r77 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", !ctx_r77.readOnly);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r77.readOnly);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r89 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 38);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r89); const x_r75 = ɵɵnextContext().$implicit; const ctx_r87 = ɵɵnextContext(3); return ctx_r87.removeField(x_r75.key); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "remove_circle_outline");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r79 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("matTooltip", ctx_r79.getLabel());
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r91 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tab", 42);
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_Template, 2, 2, "ng-template", 43);
    ɵɵelementStart(2, "lib-json-schema-form", 44, 27);
    ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_Template_lib_json_schema_form_valueChange_2_listener($event) { ɵɵrestoreView(_r91); const x_r75 = ctx.$implicit; const ctx_r90 = ɵɵnextContext(3); return ctx_r90.onValueChange(x_r75.key, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_Template_lib_json_schema_form_schemaChange_2_listener() { ɵɵrestoreView(_r91); const ctx_r92 = ɵɵnextContext(3); return ctx_r92.schemaChange.emit(); });
    ɵɵelementEnd();
    ɵɵtemplate(4, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_button_4_Template, 3, 1, "button", 37);
    ɵɵelementEnd();
} if (rf & 2) {
    const x_r75 = ctx.$implicit;
    const ctx_r73 = ɵɵnextContext(3);
    ɵɵadvance(2);
    ɵɵproperty("value", ctx_r73.value[x_r75.key])("rootValue", ctx_r73.rootValue)("rootSchema", ctx_r73.rootSchema)("schema", ctx_r73.schema.additionalProperties)("base", ctx_r73.base);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r73.readOnly);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r95 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 39);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_ng_template_1_Template_button_click_0_listener() { ɵɵrestoreView(_r95); const ctx_r94 = ɵɵnextContext(4); return ctx_r94.addField(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "add_circle_outline");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r93 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("matTooltip", ctx_r93.getLabel());
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab");
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_ng_template_1_Template, 3, 1, "ng-template", 43);
    ɵɵelementEnd();
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab-group", 40);
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_Template, 5, 6, "mat-tab", 41);
    ɵɵpipe(2, "keyvalue");
    ɵɵtemplate(3, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_Template, 2, 0, "mat-tab", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r10.schema.style)("ngClass", ctx_r10.schema.class);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(2, 4, ctx_r10.value, ctx_r10.originalOrder));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r10.readOnly);
} }
function JsonSchemaFormComponent_div_1_span_5_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r104 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 38);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_5_div_1_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r104); const i_r99 = ɵɵnextContext().index; const ctx_r102 = ɵɵnextContext(3); return ctx_r102.remove(i_r99); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "remove_circle_outline");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r101 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("matTooltip", ctx_r101.getLabel());
} }
function JsonSchemaFormComponent_div_1_span_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r106 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 34);
    ɵɵlistener("mouseenter", function JsonSchemaFormComponent_div_1_span_5_div_1_Template_div_mouseenter_0_listener() { ɵɵrestoreView(_r106); const i_r99 = ctx.index; const ctx_r105 = ɵɵnextContext(3); return ctx_r105.hover = i_r99; })("mouseleave", function JsonSchemaFormComponent_div_1_span_5_div_1_Template_div_mouseleave_0_listener() { ɵɵrestoreView(_r106); const ctx_r107 = ɵɵnextContext(3); return ctx_r107.hover = null; });
    ɵɵelementStart(1, "lib-json-schema-form", 36, 27);
    ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_span_5_div_1_Template_lib_json_schema_form_valueChange_1_listener($event) { ɵɵrestoreView(_r106); const i_r99 = ctx.index; const ctx_r108 = ɵɵnextContext(3); return ctx_r108.setIndexAndEmit(i_r99, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_span_5_div_1_Template_lib_json_schema_form_schemaChange_1_listener() { ɵɵrestoreView(_r106); const ctx_r109 = ɵɵnextContext(3); return ctx_r109.schemaChange.emit(); });
    ɵɵelementEnd();
    ɵɵtemplate(3, JsonSchemaFormComponent_div_1_span_5_div_1_button_3_Template, 3, 1, "button", 37);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r99 = ctx.index;
    const ctx_r96 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("label", ctx_r96.getLabel())("value", ctx_r96.value[i_r99])("rootValue", ctx_r96.rootValue)("rootSchema", ctx_r96.rootSchema)("schema", ctx_r96.schema.items)("base", ctx_r96.base);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r96.readOnly);
} }
function JsonSchemaFormComponent_div_1_span_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r111 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 39);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_5_button_2_Template_button_click_0_listener() { ɵɵrestoreView(_r111); const ctx_r110 = ɵɵnextContext(3); return ctx_r110.add(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "add_circle_outline");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r97 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("matTooltip", ctx_r97.getLabel());
} }
function JsonSchemaFormComponent_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_5_div_1_Template, 4, 7, "div", 32);
    ɵɵtemplate(2, JsonSchemaFormComponent_div_1_span_5_button_2_Template, 3, 1, "button", 33);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵproperty("fxLayout", ctx_r11.schema.layout === "vertical" ? "column" : "row wrap")("ngStyle", ctx_r11.schema.style)("ngClass", ctx_r11.schema.class);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r11.value);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r11.readOnly);
} }
function JsonSchemaFormComponent_div_1_span_6_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    const _r116 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-chip", 51);
    ɵɵlistener("removed", function JsonSchemaFormComponent_div_1_span_6_mat_chip_4_Template_mat_chip_removed_0_listener() { ɵɵrestoreView(_r116); const v_r114 = ctx.$implicit; const ctx_r115 = ɵɵnextContext(3); return ctx_r115.removeChip(v_r114); });
    ɵɵtext(1);
    ɵɵelementStart(2, "mat-icon", 52);
    ɵɵtext(3, "cancel");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const v_r114 = ctx.$implicit;
    const ctx_r113 = ɵɵnextContext(3);
    ɵɵproperty("removable", !ctx_r113.readOnly);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", v_r114, " ");
} }
function JsonSchemaFormComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r118 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span");
    ɵɵelementStart(1, "mat-form-field", 46);
    ɵɵelementStart(2, "mat-chip-list", 47, 48);
    ɵɵlistener("cdkDropListDropped", function JsonSchemaFormComponent_div_1_span_6_Template_mat_chip_list_cdkDropListDropped_2_listener($event) { ɵɵrestoreView(_r118); const ctx_r117 = ɵɵnextContext(2); return ctx_r117.dropChip($event); });
    ɵɵtemplate(4, JsonSchemaFormComponent_div_1_span_6_mat_chip_4_Template, 4, 2, "mat-chip", 49);
    ɵɵelementStart(5, "input", 50);
    ɵɵlistener("matChipInputTokenEnd", function JsonSchemaFormComponent_div_1_span_6_Template_input_matChipInputTokenEnd_5_listener($event) { ɵɵrestoreView(_r118); const ctx_r119 = ɵɵnextContext(2); return ctx_r119.addChip($event); });
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r112 = ɵɵreference(3);
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r12.schema.style)("ngClass", ctx_r12.schema.class);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r12.value);
    ɵɵadvance(1);
    ɵɵproperty("placeholder", ctx_r12.schema.title)("matChipInputFor", _r112)("matChipInputSeparatorKeyCodes", ctx_r12.separatorKeysCodes)("disabled", ctx_r12.readOnly);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r128 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 38);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_button_3_Template_button_click_0_listener() { ɵɵrestoreView(_r128); const i_r123 = ɵɵnextContext().index; const ctx_r126 = ɵɵnextContext(3); return ctx_r126.remove(i_r123); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "remove_circle_outline");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r125 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("matTooltip", ctx_r125.getLabel());
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r130 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-tab", 54);
    ɵɵelementStart(1, "lib-json-schema-form", 44, 27);
    ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_Template_lib_json_schema_form_valueChange_1_listener($event) { ɵɵrestoreView(_r130); const i_r123 = ctx.index; const ctx_r129 = ɵɵnextContext(3); return ctx_r129.setIndexAndEmit(i_r123, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_Template_lib_json_schema_form_schemaChange_1_listener() { ɵɵrestoreView(_r130); const ctx_r131 = ɵɵnextContext(3); return ctx_r131.schemaChange.emit(); });
    ɵɵelementEnd();
    ɵɵtemplate(3, JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_button_3_Template, 3, 1, "button", 37);
    ɵɵelementEnd();
} if (rf & 2) {
    const i_r123 = ctx.index;
    const ctx_r120 = ɵɵnextContext(3);
    ɵɵproperty("label", ctx_r120.getLabel() + " " + i_r123);
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r120.value[i_r123])("rootValue", ctx_r120.rootValue)("rootSchema", ctx_r120.rootSchema)("schema", ctx_r120.schema.items)("base", ctx_r120.base);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r120.readOnly);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r134 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 39);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_ng_template_1_Template_button_click_0_listener() { ɵɵrestoreView(_r134); const ctx_r133 = ɵɵnextContext(4); return ctx_r133.add(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "add_circle_outline");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r132 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("matTooltip", ctx_r132.getLabel());
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab");
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_ng_template_1_Template, 3, 1, "ng-template", 43);
    ɵɵelementEnd();
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab-group", 40);
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_Template, 4, 7, "mat-tab", 53);
    ɵɵtemplate(2, JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_Template, 2, 0, "mat-tab", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r13.schema.style)("ngClass", ctx_r13.schema.class);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r13.value);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r13.readOnly);
} }
function JsonSchemaFormComponent_div_1_span_8_th_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 58);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const x_r138 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", x_r138.value.title ? x_r138.value.title : x_r138.key, "");
} }
function JsonSchemaFormComponent_div_1_span_8_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r147 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "td");
    ɵɵelementStart(1, "lib-json-schema-form", 59, 27);
    ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_span_8_tr_6_td_1_Template_lib_json_schema_form_valueChange_1_listener($event) { ɵɵrestoreView(_r147); const x_r143 = ctx.$implicit; const i_r140 = ɵɵnextContext().index; const ctx_r145 = ɵɵnextContext(3); return ctx_r145.setIndexAndEmitTable(i_r140, x_r143.key, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_span_8_tr_6_td_1_Template_lib_json_schema_form_schemaChange_1_listener() { ɵɵrestoreView(_r147); const ctx_r148 = ɵɵnextContext(4); return ctx_r148.schemaChange.emit(); });
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const x_r143 = ctx.$implicit;
    const row_r139 = ɵɵnextContext().$implicit;
    const ctx_r141 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("value", row_r139[x_r143.key])("rootValue", ctx_r141.rootValue)("rootSchema", ctx_r141.rootSchema)("schema", ctx_r141.schema.items.properties[x_r143.key])("base", ctx_r141.base);
} }
function JsonSchemaFormComponent_div_1_span_8_tr_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r152 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 39);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_8_tr_6_button_4_Template_button_click_0_listener() { ɵɵrestoreView(_r152); const i_r140 = ɵɵnextContext().index; const ctx_r150 = ɵɵnextContext(3); return ctx_r150.remove(i_r140); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "remove_circle_outline");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r142 = ɵɵnextContext(4);
    ɵɵpropertyInterpolate("matTooltip", ctx_r142.getLabel());
} }
function JsonSchemaFormComponent_div_1_span_8_tr_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "tr");
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_8_tr_6_td_1_Template, 3, 5, "td", 30);
    ɵɵpipe(2, "keyvalue");
    ɵɵelementStart(3, "td");
    ɵɵtemplate(4, JsonSchemaFormComponent_div_1_span_8_tr_6_button_4_Template, 3, 1, "button", 33);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r136 = ɵɵnextContext(3);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(2, 2, ctx_r136.schema.items.properties, ctx_r136.originalOrder));
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !ctx_r136.readOnly);
} }
function JsonSchemaFormComponent_div_1_span_8_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r154 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 39);
    ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_8_button_7_Template_button_click_0_listener() { ɵɵrestoreView(_r154); const ctx_r153 = ɵɵnextContext(3); return ctx_r153.add(); });
    ɵɵelementStart(1, "mat-icon");
    ɵɵtext(2, "add_circle_outline");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r137 = ɵɵnextContext(3);
    ɵɵpropertyInterpolate("matTooltip", ctx_r137.getLabel());
} }
function JsonSchemaFormComponent_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 46);
    ɵɵelementStart(1, "table", 55);
    ɵɵelementStart(2, "tr");
    ɵɵtemplate(3, JsonSchemaFormComponent_div_1_span_8_th_3_Template, 2, 1, "th", 56);
    ɵɵpipe(4, "keyvalue");
    ɵɵelement(5, "th", 57);
    ɵɵelementEnd();
    ɵɵtemplate(6, JsonSchemaFormComponent_div_1_span_8_tr_6_Template, 5, 5, "tr", 30);
    ɵɵelementEnd();
    ɵɵtemplate(7, JsonSchemaFormComponent_div_1_span_8_button_7_Template, 3, 1, "button", 33);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r14.schema.style)("ngClass", ctx_r14.schema.class);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpipeBind2(4, 5, ctx_r14.schema.items.properties, ctx_r14.originalOrder));
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r14.value);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r14.readOnly);
} }
function JsonSchemaFormComponent_div_1_div_9_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 63);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const x_r156 = ctx.$implicit;
    ɵɵproperty("value", x_r156);
    ɵɵadvance(1);
    ɵɵtextInterpolate(x_r156);
} }
function JsonSchemaFormComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r158 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "mat-form-field", 46);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-select", 60);
    ɵɵlistener("selectionChange", function JsonSchemaFormComponent_div_1_div_9_Template_mat_select_selectionChange_4_listener($event) { ɵɵrestoreView(_r158); const ctx_r157 = ɵɵnextContext(2); return ctx_r157.change($event); });
    ɵɵtemplate(5, JsonSchemaFormComponent_div_1_div_9_mat_option_5_Template, 2, 2, "mat-option", 61);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(6, "p", 62);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r15.schema.style)("ngClass", ctx_r15.schema.class);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r15.label);
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r15.value)("disabled", ctx_r15.readOnly);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r15.schema.enum);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r15.error());
} }
function JsonSchemaFormComponent_div_1_div_10_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 67);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const choice_r160 = ctx.$implicit;
    ɵɵproperty("value", choice_r160.value)("matTooltip", choice_r160.name !== choice_r160.value ? choice_r160.value : null);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", choice_r160.name, " ");
} }
function JsonSchemaFormComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r162 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "mat-form-field", 64);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-select", 65);
    ɵɵlistener("focus", function JsonSchemaFormComponent_div_1_div_10_Template_mat_select_focus_4_listener() { ɵɵrestoreView(_r162); const ctx_r161 = ɵɵnextContext(2); return ctx_r161.focus(); })("selectionChange", function JsonSchemaFormComponent_div_1_div_10_Template_mat_select_selectionChange_4_listener($event) { ɵɵrestoreView(_r162); const ctx_r163 = ɵɵnextContext(2); return ctx_r163.change($event); });
    ɵɵtemplate(5, JsonSchemaFormComponent_div_1_div_10_mat_option_5_Template, 2, 3, "mat-option", 66);
    ɵɵpipe(6, "async");
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(7, "p", 62);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("matTooltip", ctx_r16.schema.description)("ngStyle", ctx_r16.schema.style)("ngClass", ctx_r16.schema.class);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r16.label);
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r16.value)("disabled", ctx_r16.readOnly);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 8, ctx_r16.choices));
    ɵɵadvance(3);
    ɵɵtextInterpolate(ctx_r16.error());
} }
function JsonSchemaFormComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r166 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "mat-form-field", 46);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "input", 68);
    ɵɵlistener("dateChange", function JsonSchemaFormComponent_div_1_div_11_Template_input_dateChange_4_listener($event) { ɵɵrestoreView(_r166); const ctx_r165 = ɵɵnextContext(2); return ctx_r165.change($event); });
    ɵɵelementEnd();
    ɵɵelement(5, "mat-datepicker-toggle", 69);
    ɵɵelement(6, "mat-datepicker", null, 70);
    ɵɵelementEnd();
    ɵɵelementStart(8, "p", 62);
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r164 = ɵɵreference(7);
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r17.schema.style)("ngClass", ctx_r17.schema.class);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r17.label);
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r17.parseDate(ctx_r17.value, ctx_r17.schema.dateFormat))("matDatepicker", _r164)("disabled", ctx_r17.readOnly);
    ɵɵadvance(1);
    ɵɵproperty("for", _r164);
    ɵɵadvance(4);
    ɵɵtextInterpolate(ctx_r17.error());
} }
function JsonSchemaFormComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r168 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 71);
    ɵɵelementStart(1, "mat-checkbox", 72);
    ɵɵlistener("change", function JsonSchemaFormComponent_div_1_div_12_Template_mat_checkbox_change_1_listener($event) { ɵɵrestoreView(_r168); const ctx_r167 = ɵɵnextContext(2); return ctx_r167.change($event); });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "p", 62);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵproperty("ngStyle", ctx_r18.schema.style)("ngClass", ctx_r18.schema.class);
    ɵɵadvance(1);
    ɵɵproperty("checked", ctx_r18.value)("disabled", ctx_r18.readOnly);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r18.label, "");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r18.error());
} }
function JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 67);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const choice_r172 = ctx.$implicit;
    ɵɵproperty("value", choice_r172.value)("matTooltip", choice_r172.name !== choice_r172.value ? choice_r172.value : null);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", choice_r172.name, " ");
} }
function JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r174 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 46);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-select", 73);
    ɵɵlistener("focus", function JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_Template_mat_select_focus_3_listener() { ɵɵrestoreView(_r174); const ctx_r173 = ɵɵnextContext(3); return ctx_r173.focus(); })("selectionChange", function JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_Template_mat_select_selectionChange_3_listener($event) { ɵɵrestoreView(_r174); const ctx_r175 = ɵɵnextContext(3); return ctx_r175.change($event); });
    ɵɵtemplate(4, JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_mat_option_4_Template, 2, 3, "mat-option", 66);
    ɵɵpipe(5, "async");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r169 = ɵɵnextContext(3);
    ɵɵproperty("ngStyle", ctx_r169.schema.style)("ngClass", ctx_r169.schema.class);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r169.label);
    ɵɵadvance(1);
    ɵɵproperty("value", ctx_r169.value)("disabled", ctx_r169.readOnly);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(5, 6, ctx_r169.choices));
} }
function JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 67);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const choice_r178 = ctx.$implicit;
    ɵɵproperty("value", choice_r178.value)("matTooltip", choice_r178.name !== choice_r178.value ? choice_r178.value : null);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", choice_r178.name, " ");
} }
function JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r180 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mat-form-field", 46);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "input", 74);
    ɵɵlistener("focus", function JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_Template_input_focus_3_listener() { ɵɵrestoreView(_r180); const ctx_r179 = ɵɵnextContext(3); return ctx_r179.focus(); });
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-autocomplete", null, 75);
    ɵɵtemplate(6, JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_mat_option_6_Template, 2, 3, "mat-option", 66);
    ɵɵpipe(7, "async");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const _r176 = ɵɵreference(5);
    const ctx_r170 = ɵɵnextContext(3);
    ɵɵproperty("ngStyle", ctx_r170.schema.style)("ngClass", ctx_r170.schema.class);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r170.label);
    ɵɵadvance(1);
    ɵɵproperty("formControl", ctx_r170.control)("matAutocomplete", _r176);
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ɵɵpipeBind1(7, 6, ctx_r170.filteredOptions));
} }
function JsonSchemaFormComponent_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_Template, 6, 8, "mat-form-field", 10);
    ɵɵtemplate(2, JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_Template, 8, 8, "mat-form-field", 10);
    ɵɵelementStart(3, "p", 62);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r19.schema.widget === "select");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r19.schema.widget !== "select");
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r19.error());
} }
function JsonSchemaFormComponent_div_1_div_14_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r184 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 78);
    ɵɵlistener("input", function JsonSchemaFormComponent_div_1_div_14_input_4_Template_input_input_0_listener($event) { ɵɵrestoreView(_r184); const ctx_r183 = ɵɵnextContext(3); return ctx_r183.change($event); })("focus", function JsonSchemaFormComponent_div_1_div_14_input_4_Template_input_focus_0_listener() { ɵɵrestoreView(_r184); const ctx_r185 = ɵɵnextContext(3); return ctx_r185.getInputType(ctx_r185.schema) == "password" ? ctx_r185.value = "" : ""; });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r181 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r181.readOnly)("placeholder", ctx_r181.example())("type", ctx_r181.getInputType(ctx_r181.schema))("value", ctx_r181.value);
} }
function JsonSchemaFormComponent_div_1_div_14_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r187 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "input", 79);
    ɵɵlistener("change", function JsonSchemaFormComponent_div_1_div_14_input_5_Template_input_change_0_listener($event) { ɵɵrestoreView(_r187); const ctx_r186 = ɵɵnextContext(3); return ctx_r186.change($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r182 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r182.readOnly)("placeholder", ctx_r182.example())("type", ctx_r182.getInputType(ctx_r182.schema))("value", ctx_r182.value);
} }
function JsonSchemaFormComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "mat-form-field", 46);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, JsonSchemaFormComponent_div_1_div_14_input_4_Template, 1, 4, "input", 76);
    ɵɵtemplate(5, JsonSchemaFormComponent_div_1_div_14_input_5_Template, 1, 4, "input", 77);
    ɵɵelementEnd();
    ɵɵelementStart(6, "p", 62);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r20.schema.style)("ngClass", ctx_r20.schema.class);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r20.label);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r20.inArray);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r20.inArray);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r20.error());
} }
function JsonSchemaFormComponent_div_1_div_15_textarea_4_Template(rf, ctx) { if (rf & 1) {
    const _r191 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "textarea", 82);
    ɵɵlistener("input", function JsonSchemaFormComponent_div_1_div_15_textarea_4_Template_textarea_input_0_listener($event) { ɵɵrestoreView(_r191); const ctx_r190 = ɵɵnextContext(3); return ctx_r190.change($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r188 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r188.readOnly)("placeholder", ctx_r188.example())("value", ctx_r188.value)("ngStyle", ctx_r188.schema.style)("ngClass", ctx_r188.schema.class);
} }
function JsonSchemaFormComponent_div_1_div_15_textarea_5_Template(rf, ctx) { if (rf & 1) {
    const _r193 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "textarea", 83);
    ɵɵlistener("change", function JsonSchemaFormComponent_div_1_div_15_textarea_5_Template_textarea_change_0_listener($event) { ɵɵrestoreView(_r193); const ctx_r192 = ɵɵnextContext(3); return ctx_r192.change($event); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r189 = ɵɵnextContext(3);
    ɵɵproperty("disabled", ctx_r189.readOnly)("placeholder", ctx_r189.example())("value", ctx_r189.value)("ngStyle", ctx_r189.schema.style)("ngClass", ctx_r189.schema.class);
} }
function JsonSchemaFormComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "mat-form-field", 46);
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵtemplate(4, JsonSchemaFormComponent_div_1_div_15_textarea_4_Template, 1, 5, "textarea", 80);
    ɵɵtemplate(5, JsonSchemaFormComponent_div_1_div_15_textarea_5_Template, 1, 5, "textarea", 81);
    ɵɵelementEnd();
    ɵɵelementStart(6, "p", 62);
    ɵɵtext(7);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r21.schema.style)("ngClass", ctx_r21.schema.class);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r21.label);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r21.inArray);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r21.inArray);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r21.error());
} }
function JsonSchemaFormComponent_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r195 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelementStart(1, "input", 84);
    ɵɵlistener("change", function JsonSchemaFormComponent_div_1_div_16_Template_input_change_1_listener($event) { ɵɵrestoreView(_r195); const ctx_r194 = ɵɵnextContext(2); return ctx_r194.handleFileInput($event); });
    ɵɵelementEnd();
    ɵɵelementStart(2, "p", 62);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ctx_r22.schema.style)("ngClass", ctx_r22.schema.class)("disabled", ctx_r22.readOnly);
    ɵɵadvance(2);
    ɵɵtextInterpolate(ctx_r22.error());
} }
function JsonSchemaFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵtemplate(1, JsonSchemaFormComponent_div_1_div_1_Template, 35, 11, "div", 7);
    ɵɵtemplate(2, JsonSchemaFormComponent_div_1_span_2_Template, 3, 5, "span", 8);
    ɵɵtemplate(3, JsonSchemaFormComponent_div_1_span_3_Template, 4, 8, "span", 8);
    ɵɵtemplate(4, JsonSchemaFormComponent_div_1_mat_tab_group_4_Template, 4, 7, "mat-tab-group", 9);
    ɵɵtemplate(5, JsonSchemaFormComponent_div_1_span_5_Template, 3, 5, "span", 8);
    ɵɵtemplate(6, JsonSchemaFormComponent_div_1_span_6_Template, 6, 7, "span", 7);
    ɵɵtemplate(7, JsonSchemaFormComponent_div_1_mat_tab_group_7_Template, 3, 4, "mat-tab-group", 9);
    ɵɵtemplate(8, JsonSchemaFormComponent_div_1_span_8_Template, 8, 8, "span", 10);
    ɵɵtemplate(9, JsonSchemaFormComponent_div_1_div_9_Template, 8, 7, "div", 7);
    ɵɵtemplate(10, JsonSchemaFormComponent_div_1_div_10_Template, 9, 10, "div", 7);
    ɵɵtemplate(11, JsonSchemaFormComponent_div_1_div_11_Template, 10, 8, "div", 7);
    ɵɵtemplate(12, JsonSchemaFormComponent_div_1_div_12_Template, 5, 6, "div", 11);
    ɵɵtemplate(13, JsonSchemaFormComponent_div_1_div_13_Template, 5, 3, "div", 7);
    ɵɵtemplate(14, JsonSchemaFormComponent_div_1_div_14_Template, 8, 6, "div", 7);
    ɵɵtemplate(15, JsonSchemaFormComponent_div_1_div_15_Template, 8, 6, "div", 7);
    ɵɵtemplate(16, JsonSchemaFormComponent_div_1_div_16_Template, 4, 4, "div", 7);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("matTooltip", ctx_r1.schema.description);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.service.editMode && !ctx_r1.schema.static && !ctx_r1.inArray && ctx_r1.getLayout() !== "none");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "object");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "additionalProperties");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "additionalPropertiesTab");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "array");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "chips");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "tab");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "table");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "enum");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "array-select");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "date");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "checkbox");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "autocomplete");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "single");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "textarea");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r1.getLayout() === "upload");
} }
function JsonSchemaFormComponent_ng_template_2_Template(rf, ctx) { }
/**
 * generates an input form base on JSON schema and JSON object.
 * The component is used recursively.
 */
class JsonSchemaFormComponent {
    /**
     * component constructor
     * @param http                        http client
     * @param componentFactoryResolver    allows dynamic components
     * @param service                     application service for registering components etc.
     * @param dialog                      dialog service
     */
    constructor(http, componentFactoryResolver, service, dialog) {
        this.http = http;
        this.componentFactoryResolver = componentFactoryResolver;
        this.service = service;
        this.dialog = dialog;
        /**
         * emit changes done by the user in the component
         */
        this.valueChange = new EventEmitter();
        /**
         * emit whether this part of the form is valid
         */
        this.errorChange = new EventEmitter();
        /**
         * indicate schema changes done via the layout editor
         */
        this.schemaChange = new EventEmitter();
        /**
         * indicates whether this is the root of the component tree
         */
        this.isRoot = false;
        /**
         * complete chip entry with enter or comma
         */
        this.separatorKeysCodes = [ENTER, COMMA, TAB];
        /**
         * angular pipe sorting function for keyValue - keep the JSON order and do not
         * order alphabetically
         */
        this.originalOrder = (a, b) => {
            return 0;
        };
    }
    /**
     * apply order, called anytime properties are set
     */
    setOrderedProperties() {
        if (this.schema.order) {
            this.orderedProperties = [];
            for (const p of this.schema.order) {
                const arr = Array.isArray(p) ? p : [p];
                const o = {};
                for (const q of arr) {
                    o[q] = this.schema.properties[q];
                }
                this.orderedProperties.push(o);
            }
        }
        else if (this.schema.properties) {
            this.orderedProperties = [];
            for (const [key, value] of Object.entries(this.schema.properties)) {
                const o = {};
                o[key] = value;
                this.orderedProperties.push(o);
            }
        }
    }
    /**
     * initialize the comonent.
     * replace undefined with null and init autocomplete choices
     */
    ngOnInit() {
        this.readOnly =
            this.schema.readOnly || (this.schema.createOnly && this.value);
        if (!this.rootSchema) {
            this.rootSchema = this.schema;
            this.rootValue = this.value;
            this.isRoot = true;
        }
        if (!this.schema.type) {
            const p = this.schema.$ref;
            const parts = p.split("#");
            if (parts.length === 1) {
                // URL only
                this.url(parts[0], null);
            }
            else {
                if (parts[0]) {
                    // URL + anchor
                    this.url(parts[0], parts[1]);
                }
                else {
                    // local ref
                    this.schema = JsonPointer.jsonPointer(this.rootSchema, parts[1]);
                    this.setOrderedProperties();
                }
            }
        }
        else {
            this.setOrderedProperties();
        }
        if (typeof this.value === "undefined") {
            if (this.schema.default) {
                this.value = this.schema.default;
                setTimeout(() => this.emit(this.value), 500);
            }
            else {
                if (!this.hideUndefined) {
                    this.value = null;
                }
            }
        }
        if (this.getLayout() === "custom") {
            this.loadComponent();
        }
        if (this.isRoot) {
            setTimeout(() => {
                this.errorChange.emit(this.recursiveError());
            }, 10);
        }
        this.ch = this.service.displayWithRegistry[this.schema.displayWith];
        if (!this.ch) {
            this.ch = new DefaultChoiceHandler(this.http);
        }
        this.control = new FormControl(this.value);
        this.choices = new ReplaySubject();
        if (Array.isArray(this.value)) {
            const arr = [];
            for (const i of this.value) {
                arr.push({ name: i, value: i });
            }
            this.choices.next(arr);
        }
        else {
            this.choices.next([{ name: this.value, value: this.value }]);
        }
        if (this.value || this.value === 0) {
            if (Array.isArray(this.value)) {
                const arr = [];
                for (const i of this.value) {
                    arr.push(this.ch.choice(i, this.schema));
                }
                forkJoin(arr).subscribe((res) => this.choices.next(res));
            }
            else {
                this.ch
                    .choice(this.value, this.schema)
                    .subscribe((res) => this.choices.next([res]));
            }
        }
        this.filteredOptions = this.control.valueChanges.pipe(startWith(this.value), debounceTime(this.ch.debounceTime()), switchMap((x) => {
            this.change({ target: { value: x } });
            return this.ch.filter(this.value, this.schema, x, this.choices);
        }));
        this.edit = new Edit(this.schemaChange, this.name, this.schema, this.parentSchema, this.dialog);
    }
    /**
     * choice element activated - load values
     */
    focus() {
        this.ch.load(this.value, this.schema).subscribe((res) => {
            this.choices.next(res);
        });
    }
    /**
     * load schema from ref, apply pointer if needed
     */
    url(ref, pointer) {
        // URL + anchor
        this.base = this.base ? new URL(ref, this.base).href : ref;
        // check root schema referenced map
        if (this.rootSchema.referenced && this.rootSchema.referenced[this.base]) {
            const res = this.rootSchema.referenced[this.base];
            this.schema = pointer ? JsonPointer.jsonPointer(res, pointer) : res;
            this.setOrderedProperties();
            return;
        }
        this.http.get(this.base).subscribe((res) => {
            this.schema = pointer ? JsonPointer.jsonPointer(res, pointer) : res;
            this.setOrderedProperties();
        }, (error) => console.log(error));
        // set temporary pseudo schema
        this.schema = { type: "string" };
        this.setOrderedProperties();
    }
    /**
     * emit valueChange event and also any validation error
     */
    emit(event) {
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
    ngOnChanges(changes) {
        if (changes.schema) {
            if (changes.schema.previousValue) {
                this.rootSchema = null;
                if (this.widgetHost.viewContainerRef) {
                    this.widgetHost.viewContainerRef.clear();
                }
                this.ngOnInit();
            }
        }
        if (changes.switch && !changes.switch.isFirstChange()) {
            if (this.getLayout() === "custom") {
                this.loadComponent();
            }
            else {
                if (this.widgetHost.viewContainerRef) {
                    this.widgetHost.viewContainerRef.clear();
                }
            }
        }
    }
    /**
     * key method to instruct the display which HTML block to activate.
     */
    getLayout() {
        if (this.schema.case && this.schema.case.indexOf(this.switch) < 0) {
            return "none";
        }
        if (this.schema.widget === "custom") {
            return "custom";
        }
        if (this.hideUndefined && this.value === undefined) {
            return "none";
        }
        if (this.schema.type === "object") {
            if (this.schema.additionalProperties) {
                if (this.schema.layout === "tab") {
                    return "additionalPropertiesTab";
                }
                return "additionalProperties";
            }
            return "object";
        }
        if (this.schema.type === "array") {
            if (this.schema.layout === "tab") {
                return "tab";
            }
            if (this.schema.layout === "table") {
                return "table";
            }
            if (this.schema.layout === "select") {
                return "array-select";
            }
            if (this.schema.layout === "chips") {
                return "chips";
            }
            return "array";
        }
        if (this.schema.enum) {
            return "enum";
        }
        if (this.schema.widget === "date") {
            return "date";
        }
        if (this.schema.widget === "upload") {
            return "upload";
        }
        if (this.schema.widget === "textarea") {
            return "textarea";
        }
        if (this.schema.type === "boolean") {
            return "checkbox";
        }
        if (this.schema.choicesUrl) {
            return "autocomplete";
        }
        if (this.schema.choices) {
            return "autocomplete";
        }
        if (this.schema.displayWith) {
            return "autocomplete";
        }
        return "single";
    }
    /**
     * called from template in the "simple" type. If "type" is "number" or "integer",
     * the HTML input type is "number" which avoids normal string input
     */
    getInputType(schema) {
        if (schema.type === "number") {
            return "number";
        }
        if (schema.type === "integer") {
            return "number";
        }
        return schema.widget;
    }
    /**
     * event handler for object display. Catches the child component event and
     * handle it by setting the value[key].
     * Also init null objects with {}
     */
    onValueChange(key, value) {
        if (!this.value) {
            this.value = {};
        }
        this.value[key] = value;
        if (this.schema.computed) {
            for (const field of Object.keys(this.schema.computed)) {
                const expression = this.schema.computed[field];
                this.value[field] = jsonata(expression).evaluate(this.value);
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
        if (this.schema.items.type === "array") {
            this.value.push([]);
        }
        else if (this.schema.items.type === "object") {
            this.value.push({});
        }
        else {
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
        if (this.value[""]) {
            return;
        }
        this.value[""] = null;
        this.emit(this.value);
    }
    /**
     * remove an element from an array
     */
    remove(i) {
        this.value.splice(i, 1);
        this.emit(this.value);
    }
    /**
     * remove a field
     */
    removeField(key) {
        delete this.value[key];
        this.emit(this.value);
    }
    /**
     * event handler for changed field names with "additionalProperties"
     */
    fieldNameChange(key, newvalue) {
        this.value[newvalue] = this.value[key];
        delete this.value[key];
        this.emit(this.value);
    }
    /**
     * returns the validation error on this level and call recursively for all children.
     * returns null if the form contents is valid
     */
    recursiveError() {
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
    /**
     * return the error message provided in the schema or the generic error message
     * returned from the validation code
     */
    e(error) {
        if (this.schema.errorMessage) {
            return this.schema.errorMessage;
        }
        return error;
    }
    /**
     * return error string
     */
    error() {
        var _a;
        if (this.schema.widget === "custom") {
            return this.customError;
        }
        if (this.schema.case && this.schema.case.indexOf(this.switch) < 0) {
            return null;
        }
        if (this.value) {
            if (this.schema.maxItems) {
                if (!(this.value.length <= this.schema.maxItems)) {
                    return this.e("Only " + this.schema.maxItems + " array entries allowed");
                }
            }
            if (this.schema.uniqueItems) {
                if (!(new Set(this.value).size === this.value.length)) {
                    return this.e("Array entries must be unique");
                }
            }
            if (this.schema.minItems) {
                if (!(this.value.length >= this.schema.minItems)) {
                    return this.e("At least " + this.schema.minItems + " array entries required");
                }
            }
            if (this.schema.maxProperties) {
                if (!(Object.keys(this.value).length <= this.schema.maxProperties)) {
                    return this.e("Only " + this.schema.maxProperties + " fields allowed");
                }
            }
            if (this.schema.propertyNames) {
                for (const key of Object.keys(this.value)) {
                    const re = new RegExp(this.schema.propertyNames);
                    if (!re.test(key)) {
                        return this.e("illegal field name: " + key);
                    }
                }
            }
            if (this.schema.dependencies) {
                for (const dep of Object.keys(this.schema.dependencies)) {
                    if (this.value[dep]) {
                        for (const l of this.schema.dependencies[dep]) {
                            if (!this.value[l]) {
                                return this.e(dep + " depends on " + l);
                            }
                        }
                    }
                }
            }
            if (this.schema.minProperties) {
                if (!(Object.keys(this.value).length >= this.schema.minProperties)) {
                    return this.e("At least " + this.schema.minProperties + " fields required");
                }
            }
            if (this.schema.maxLength) {
                if (!(("" + this.value).length <= this.schema.maxLength)) {
                    return this.e("Input is longer than " + this.schema.maxLength);
                }
            }
            if (this.schema.minLength) {
                if (!(("" + this.value).length >= this.schema.minLength)) {
                    return this.e("Input is shorter than " + this.schema.minLength);
                }
            }
            if (this.schema.multipleOf) {
                if (!Number.isInteger(Number(this.value) / this.schema.multipleOf)) {
                    return this.e("Must be multiple of " + this.schema.multipleOf);
                }
            }
            if (this.schema.exclusiveMaximum) {
                if (!(Number(this.value) < this.schema.exclusiveMaximum)) {
                    return this.e("Must be less than " + this.schema.exclusiveMaximum);
                }
            }
            if (this.schema.maximum) {
                if (!(Number(this.value) <= this.schema.maximum)) {
                    return this.e("Must be less than or equal " + this.schema.maximum);
                }
            }
            if (this.schema.exclusiveMinimum) {
                if (!(Number(this.value) > this.schema.exclusiveMinimum)) {
                    return this.e("Must greater than " + this.schema.exclusiveMinimum);
                }
            }
            if (this.schema.minimum) {
                if (!(Number(this.value) >= this.schema.minimum)) {
                    return this.e("Must greater than or equal " + this.schema.minimum);
                }
            }
        }
        if (this.required) {
            if (this.value == null || Object.is(this.value, NaN)) {
                return this.e("required");
            }
        }
        if (this.schema.required) {
            for (const dep of this.schema.required) {
                if (!this.value[dep] &&
                    this.value[dep] !== false &&
                    this.value[dep] !== 0) {
                    // ignore 'required' if dep is inactive due to switch / case
                    let inactive = false;
                    if (this.schema.switch) {
                        const switc = this.value[this.schema.switch];
                        if (switc && ((_a = this.schema.properties[dep].case) === null || _a === void 0 ? void 0 : _a.indexOf(switc)) < 0) {
                            inactive = true;
                        }
                    }
                    if (!inactive) {
                        return this.e(dep + " is required");
                    }
                }
            }
        }
        if (this.schema.pattern) {
            const re = new RegExp(this.schema.pattern);
            if (!this.value) {
                return this.e("illegal string");
            }
            if (!re.test(this.value)) {
                return this.e("illegal string");
            }
        }
        if (this.schema.format && this.service.formats[this.schema.format]) {
            const re = new RegExp(this.service.formats[this.schema.format]);
            if (!this.value) {
                return this.e("illegal string");
            }
            if (!re.test(this.value)) {
                return this.e("illegal string");
            }
        }
        return null;
    }
    /**
     * use the element title if present, defaults to the label input or "" is both are null
     */
    getLabel() {
        if (this.schema.title) {
            return this.schema.title;
        }
        if (this.label) {
            return this.label;
        }
        return "";
    }
    /**
     * input element change handler.
     * normalize the different kind of events, handle the datatypes, set the value and emit the change
     */
    change(event) {
        let eventTarget;
        if (event instanceof MatSelectChange) {
            event = event.value;
        }
        else if (event instanceof MatDatepickerInputEvent) {
            event = this.serializeDate(event.value, this.schema.dateFormat, this.schema.type);
        }
        else if (event instanceof MatAutocompleteSelectedEvent) {
            event = event.option.value;
        }
        else if (event instanceof MatCheckboxChange) {
            event = event.checked;
        }
        else {
            // save the event target in case the parsing changes the value
            // (e.g. integer input 5.3 becomes 5, this is reflected on the UI via this handle)
            eventTarget = event.target;
            event = event.target.value;
        }
        if (event === "") {
            event = null;
        }
        if (event == null) {
            this.value = null;
        }
        if (this.schema.type === "number") {
            this.value = parseFloat(event);
        }
        else if (this.schema.type === "integer") {
            this.value = parseInt(event, 10);
        }
        else if (this.schema.type === "boolean") {
            if (typeof event === "string") {
                if (event === "true") {
                    this.value = true;
                }
                else if (event === "false") {
                    this.value = false;
                }
                else {
                    this.value = null;
                }
            }
            else {
                this.value = event;
            }
        }
        else if (this.schema.type === "string") {
            this.value = event;
        }
        else if (this.schema.type === "array") {
            this.value = event;
        }
        else {
            throw new Error("unknown type: " + this.schema.type);
        }
        this.emit(this.value);
    }
    /**
     * allows for the result of a file upload to be written into a text form element
     */
    handleFileInput(event) {
        if (1024 * 1024 <= event.target.files.item(0).size) {
            console.log("The file size is limited to 1MB");
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.value = reader.result;
            this.emit(this.value);
        };
        reader.readAsDataURL(event.target.files.item(0));
    }
    /**
     * get example values from example array and default
     */
    example() {
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
        componentRef.instance.label = this.label;
        componentRef.instance.value = this.value;
        componentRef.instance.schema = this.schema;
        componentRef.instance.rootSchema = this.rootSchema;
        componentRef.instance.rootValue = this.rootValue;
        // subscribe to value changes and forward them
        componentRef.instance.valueChange.subscribe((data) => {
            this.value = data;
            this.emit(this.value);
        });
        // subscribe to error changes and forward them
        componentRef.instance.errorChange.subscribe((error) => {
            this.customError = error;
            this.errorChange.emit(error);
        });
    }
    /**
     * used for expansion panels - set value and forward event
     */
    setAndEmit(event) {
        this.value = event;
        this.emit(this.value);
    }
    /**
     * set an array element and emit value change event
     */
    setIndexAndEmit(i, event) {
        this.value[i] = event;
        this.emit(this.value);
    }
    /**
     * set an array element's field and emit value change event (applies to table layout)
     */
    setIndexAndEmitTable(i, field, event) {
        this.value[i][field] = event;
        this.emit(this.value);
    }
    /**
     * used when hideUndefined is active. Called from the UI to
     * show a property with undefined value (in order to be able to set if in the form)
     */
    showProperty(prop) {
        if (!this.value) {
            this.value = {};
        }
        if (this.value[prop] === undefined) {
            this.value[prop] = null;
        }
        else if (this.value[prop] === null) {
            this.value[prop] = undefined;
        }
    }
    /**
     * used when hideUndefined is active. Called from the UI
     * to determine which properties are included in the "to add" list
     */
    showPropertyList() {
        if (this.schema.switch && this.value) {
            const sw = this.value[this.schema.switch];
            const props = [];
            for (const [k, v] of Object.entries(this.schema.properties)) {
                if (v.case) {
                    if (v.case.includes(sw)) {
                        props.push(k);
                    }
                }
                else {
                    props.push(k);
                }
            }
            return props.sort();
        }
        else {
            return Object.keys(this.schema.properties).sort();
        }
    }
    /**
     * string to date
     * @param date    date string / number (millisecs since 1970)
     * @param format  date format
     */
    parseDate(date, format) {
        if (!date && date !== 0) {
            return date;
        }
        if (typeof date === "number") {
            return this.sameDate(new Date(date));
        }
        if (!format) {
            return date;
        }
        const pdate = date.split(this.getDelimiter(format));
        const pformat = format.split(this.getDelimiter(format));
        return this.sameDate(new Date(pdate[pformat.indexOf("yyyy")], pdate[pformat.indexOf("MM")] - 1, pdate[pformat.indexOf("dd")]));
    }
    /**
     * make sure to return the same date object instance (cannot delete date #83)
     */
    sameDate(nd) {
        if (!this.date) {
            this.date = nd;
        }
        if (this.date.getTime() !== nd.getTime()) {
            this.date = nd;
        }
        return this.date;
    }
    /**
     * date to string
     * @param date    the date to serialize
     * @param format  the date format (e.g. dd-MM-yyyy)
     * @param type    target datatype (allows serializing to millisecs since 1970)
     */
    serializeDate(date, format, type) {
        if (date == null) {
            return "";
        }
        if (type === "integer" || type === "number") {
            return "" + date.valueOf();
        }
        if (!format) {
            return date.toISOString();
        }
        const pformat = format.split(this.getDelimiter(format));
        const pdate = [null, null, null];
        pdate[pformat.indexOf("yyyy")] = date.getFullYear();
        pdate[pformat.indexOf("MM")] = date.getMonth() + 1;
        pdate[pformat.indexOf("dd")] = date.getDate();
        return (pdate[0] +
            this.getDelimiter(format) +
            pdate[1] +
            this.getDelimiter(format) +
            pdate[2]);
    }
    /**
     * find the first non letter character in a date format such as dd/MM/yyyy (returns /)
     */
    getDelimiter(format) {
        const delim = format.match(/\W/g);
        if (!delim[0]) {
            throw new Error("No delimiter found in date format: " + format);
        }
        return delim[0];
    }
    /**
     * new chip entered
     */
    addChip(event) {
        const input = event.input;
        const value = event.value;
        // Add our fruit
        if ((value || "").trim()) {
            if (!this.value) {
                this.value = [];
            }
            this.value.push(value.trim());
            this.emit(this.value);
        }
        // Reset the input value
        if (input) {
            input.value = "";
        }
    }
    /**
     * remove a chip
     */
    removeChip(v) {
        const index = this.value.indexOf(v);
        if (index >= 0) {
            this.value.splice(index, 1);
            if (this.value.length === 0) {
                this.value = null;
            }
            this.emit(this.value);
        }
    }
    /**
     * chips d&d handler
     */
    dropChip(event) {
        moveItemInArray(this.value, event.previousIndex, event.currentIndex);
        this.emit(this.value);
    }
}
JsonSchemaFormComponent.ɵfac = function JsonSchemaFormComponent_Factory(t) { return new (t || JsonSchemaFormComponent)(ɵɵdirectiveInject(HttpClient), ɵɵdirectiveInject(ComponentFactoryResolver), ɵɵdirectiveInject(JsonSchemaFormService), ɵɵdirectiveInject(MatDialog)); };
JsonSchemaFormComponent.ɵcmp = ɵɵdefineComponent({ type: JsonSchemaFormComponent, selectors: [["lib-json-schema-form"]], viewQuery: function JsonSchemaFormComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0, 1);
        ɵɵviewQuery(WidgetDirective, 3);
        ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.child = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.widgetHost = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.children = _t);
    } }, inputs: { name: "name", label: "label", value: "value", rootValue: "rootValue", schema: "schema", parentSchema: "parentSchema", rootSchema: "rootSchema", base: "base", switch: "switch", hideUndefined: "hideUndefined", inExpansion: "inExpansion", inArray: "inArray", required: "required" }, outputs: { valueChange: "valueChange", errorChange: "errorChange", schemaChange: "schemaChange" }, features: [ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[3, "ngStyle", "ngClass", "expanded", 4, "ngIf"], [3, "matTooltip", 4, "ngIf"], ["libWidgetHost", ""], [3, "ngStyle", "ngClass", "expanded"], [3, "label", "name", "value", "switch", "rootValue", "rootSchema", "schema", "inExpansion", "base", "valueChange", "schemaChange"], ["child", ""], [3, "matTooltip"], [4, "ngIf"], [3, "fxLayout", "ngStyle", "ngClass", 4, "ngIf"], ["animationDuration", "0ms", "style", "max-width: 96vw", 3, "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass", 4, "ngIf"], ["style", "margin: 6px; margin-top: 12px;", 3, "ngStyle", "ngClass", 4, "ngIf"], [2, "cursor", "pointer", 3, "matMenuTriggerFor", "matTooltip"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "disabled", "click"], ["madd", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["madd2", "matMenu"], [3, "fxLayout", "ngStyle", "ngClass"], [3, "fxLayout", 4, "ngFor", "ngForOf"], ["style", "margin-right: 20px;", 4, "ngIf"], [3, "fxLayout"], ["style", "display: flex; margin: 2px", 4, "ngFor", "ngForOf"], [2, "display", "flex", "margin", "2px"], [3, "name", "label", "value", "switch", "rootValue", "rootSchema", "schema", "parentSchema", "required", "hideUndefined", "base", "valueChange", "schemaChange"], ["children", ""], [2, "margin-right", "20px"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [4, "ngFor", "ngForOf"], [3, "disabled", "checked", "change"], ["style", "display: flex; margin: 2px; position: relative", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "matTooltip", "click", 4, "ngIf"], [2, "display", "flex", "margin", "2px", "position", "relative", 3, "mouseenter", "mouseleave"], ["autocomplete", "off", "matInput", "", 3, "disabled", "value", "change"], ["inArray", "true", 3, "label", "value", "rootValue", "rootSchema", "schema", "base", "valueChange", "schemaChange"], ["mat-icon-button", "", "class", "example-handle", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", 1, "example-handle", 3, "matTooltip", "click"], ["mat-icon-button", "", 3, "matTooltip", "click"], ["animationDuration", "0ms", 2, "max-width", "96vw", 3, "ngStyle", "ngClass"], ["style", "margin: 2px; position: relative", 4, "ngFor", "ngForOf"], [2, "margin", "2px", "position", "relative"], ["mat-tab-label", ""], ["inArray", "true", 3, "value", "rootValue", "rootSchema", "schema", "base", "valueChange", "schemaChange"], ["autocomplete", "off", "matInput", "", 3, "value", "change"], [3, "ngStyle", "ngClass"], ["aria-label", "Fruit selection", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListDropped"], ["chipList", ""], ["cdkDrag", "", 3, "removable", "removed", 4, "ngFor", "ngForOf"], ["autocomplete", "off", 3, "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "disabled", "matChipInputTokenEnd"], ["cdkDrag", "", 3, "removable", "removed"], ["matChipRemove", ""], ["style", "margin: 2px; position: relative", 3, "label", 4, "ngFor", "ngForOf"], [2, "margin", "2px", "position", "relative", 3, "label"], ["summary", "Properties table"], ["scope", "col", 4, "ngFor", "ngForOf"], ["id", "remove_row"], ["scope", "col"], [3, "value", "rootValue", "rootSchema", "schema", "base", "valueChange", "schemaChange"], [3, "value", "disabled", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "error", "mat-typography"], [3, "value"], [3, "matTooltip", "ngStyle", "ngClass"], ["multiple", "", 3, "value", "disabled", "focus", "selectionChange"], [3, "value", "matTooltip", 4, "ngFor", "ngForOf"], [3, "value", "matTooltip"], ["autocomplete", "off", "matInput", "", 2, "width", "100%", 3, "value", "matDatepicker", "disabled", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [2, "margin", "6px", "margin-top", "12px", 3, "ngStyle", "ngClass"], [3, "checked", "disabled", "change"], [3, "value", "disabled", "focus", "selectionChange"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete", "focus"], ["auto", "matAutocomplete"], ["autocomplete", "off", "matInput", "", 3, "disabled", "placeholder", "type", "value", "input", "focus", 4, "ngIf"], ["autocomplete", "off", "matInput", "", 3, "disabled", "placeholder", "type", "value", "change", 4, "ngIf"], ["autocomplete", "off", "matInput", "", 3, "disabled", "placeholder", "type", "value", "input", "focus"], ["autocomplete", "off", "matInput", "", 3, "disabled", "placeholder", "type", "value", "change"], ["matInput", "", 3, "disabled", "placeholder", "value", "ngStyle", "ngClass", "input", 4, "ngIf"], ["matInput", "", 3, "disabled", "placeholder", "value", "ngStyle", "ngClass", "change", 4, "ngIf"], ["matInput", "", 3, "disabled", "placeholder", "value", "ngStyle", "ngClass", "input"], ["matInput", "", 3, "disabled", "placeholder", "value", "ngStyle", "ngClass", "change"], ["type", "file", "id", "file", 3, "ngStyle", "ngClass", "disabled", "change"]], template: function JsonSchemaFormComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, JsonSchemaFormComponent_mat_expansion_panel_0_Template, 8, 14, "mat-expansion-panel", 0);
        ɵɵtemplate(1, JsonSchemaFormComponent_div_1_Template, 17, 17, "div", 1);
        ɵɵtemplate(2, JsonSchemaFormComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
    } if (rf & 2) {
        ɵɵproperty("ngIf", (ctx.schema.expanded === true || ctx.schema.expanded === false) && !ctx.inExpansion);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.schema.expanded === null || ctx.schema.expanded === undefined || ctx.inExpansion);
    } }, directives: [NgIf, WidgetDirective, MatExpansionPanel, DefaultStyleDirective, NgStyle, DefaultClassDirective, NgClass, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, JsonSchemaFormComponent, MatTooltip, MatIcon, MatMenuTrigger, MatMenu, MatMenuItem, NgForOf, DefaultLayoutDirective, MatButton, MatCheckbox, MatFormField, MatLabel, MatInput, MatTabGroup, MatTab, MatTabLabel, MatChipList, CdkDropList, MatChipInput, MatChip, CdkDrag, MatChipRemove, MatSelect, MatOption, MatDatepickerInput, MatDatepickerToggle, MatSuffix, MatDatepicker, DefaultValueAccessor, MatAutocompleteTrigger, NgControlStatus, FormControlDirective, MatAutocomplete], pipes: [KeyValuePipe, AsyncPipe], styles: [".example-handle[_ngcontent-%COMP%]{position:absolute;z-index:9;top:0;right:0}.error[_ngcontent-%COMP%]{font-size:small;color:red;position:relative;top:-18px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(JsonSchemaFormComponent, [{
        type: Component,
        args: [{
                selector: "lib-json-schema-form",
                templateUrl: "./json-schema-form.component.html",
                styleUrls: ["./json-schema-form.component.css"],
            }]
    }], function () { return [{ type: HttpClient }, { type: ComponentFactoryResolver }, { type: JsonSchemaFormService }, { type: MatDialog }]; }, { children: [{
            type: ViewChildren,
            args: ["children"]
        }], child: [{
            type: ViewChild,
            args: ["child"]
        }], name: [{
            type: Input
        }], label: [{
            type: Input
        }], value: [{
            type: Input
        }], rootValue: [{
            type: Input
        }], valueChange: [{
            type: Output
        }], errorChange: [{
            type: Output
        }], schemaChange: [{
            type: Output
        }], schema: [{
            type: Input
        }], parentSchema: [{
            type: Input
        }], rootSchema: [{
            type: Input
        }], base: [{
            type: Input
        }], switch: [{
            type: Input
        }], hideUndefined: [{
            type: Input
        }], inExpansion: [{
            type: Input
        }], inArray: [{
            type: Input
        }], required: [{
            type: Input
        }], widgetHost: [{
            type: ViewChild,
            args: [WidgetDirective, { static: true }]
        }] }); })();

class JsonSchemaFormModule {
}
JsonSchemaFormModule.ɵfac = function JsonSchemaFormModule_Factory(t) { return new (t || JsonSchemaFormModule)(); };
JsonSchemaFormModule.ɵmod = ɵɵdefineNgModule({ type: JsonSchemaFormModule });
JsonSchemaFormModule.ɵinj = ɵɵdefineInjector({ providers: [
        // turn off tooltip gestures on mobile: https://github.com/angular/components/issues/4892
        { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: { touchGestures: 'off' } }
    ], imports: [[
            MatCardModule,
            FlexLayoutModule,
            MatIconModule,
            MatTooltipModule,
            MatTableModule,
            MatTabsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatDatepickerModule,
            MatCheckboxModule,
            MatAutocompleteModule,
            HttpClientModule,
            CommonModule,
            MatInputModule,
            MatNativeDateModule,
            MatButtonModule,
            MatExpansionModule,
            MatMenuModule,
            ReactiveFormsModule,
            MatDialogModule,
            MatChipsModule,
            DragDropModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(JsonSchemaFormModule, { declarations: [JsonSchemaFormComponent, EditElementDialogComponent, WidgetDirective], imports: [MatCardModule,
        FlexLayoutModule,
        MatIconModule,
        MatTooltipModule,
        MatTableModule,
        MatTabsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        HttpClientModule,
        CommonModule,
        MatInputModule,
        MatNativeDateModule,
        MatButtonModule,
        MatExpansionModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatChipsModule,
        DragDropModule], exports: [JsonSchemaFormComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(JsonSchemaFormModule, [{
        type: NgModule,
        args: [{
                declarations: [JsonSchemaFormComponent, EditElementDialogComponent, WidgetDirective],
                imports: [
                    MatCardModule,
                    FlexLayoutModule,
                    MatIconModule,
                    MatTooltipModule,
                    MatTableModule,
                    MatTabsModule,
                    MatFormFieldModule,
                    MatSelectModule,
                    MatDatepickerModule,
                    MatCheckboxModule,
                    MatAutocompleteModule,
                    HttpClientModule,
                    CommonModule,
                    MatInputModule,
                    MatNativeDateModule,
                    MatButtonModule,
                    MatExpansionModule,
                    MatMenuModule,
                    ReactiveFormsModule,
                    MatDialogModule,
                    MatChipsModule,
                    DragDropModule
                ],
                exports: [JsonSchemaFormComponent],
                providers: [
                    // turn off tooltip gestures on mobile: https://github.com/angular/components/issues/4892
                    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: { touchGestures: 'off' } }
                ]
            }]
    }], null, null); })();
ɵɵsetComponentScope(EditElementDialogComponent, [MatDialogContent, JsonSchemaFormComponent, MatDialogActions, MatButton, MatDialogClose], []);

/*
 * Public API Surface of json-schema-form
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DefaultChoiceHandler, JsonSchemaFormComponent, JsonSchemaFormModule, JsonSchemaFormService };
//# sourceMappingURL=dashjoin-json-schema-form.js.map
