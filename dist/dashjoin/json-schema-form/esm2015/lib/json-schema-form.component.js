import { Component, Input, Output, EventEmitter, ViewChild, ViewChildren, } from "@angular/core";
import { MatSelectChange } from "@angular/material/select";
import { MatDatepickerInputEvent } from "@angular/material/datepicker";
import { MatCheckboxChange } from "@angular/material/checkbox";
import { forkJoin, ReplaySubject } from "rxjs";
import { WidgetDirective } from "./widget.directive";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { JsonPointer } from "./json-pointer";
import { DefaultChoiceHandler } from "./choice";
import { FormControl } from "@angular/forms";
import { debounceTime, startWith, switchMap } from "rxjs/operators";
import { Edit } from "./edit";
import { moveItemInArray } from "@angular/cdk/drag-drop";
import { COMMA, ENTER, TAB } from "@angular/cdk/keycodes";
import jsonata from "jsonata";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./json-schema-form.service";
import * as i3 from "@angular/material/dialog";
import * as i4 from "@angular/common";
import * as i5 from "./widget.directive";
import * as i6 from "@angular/material/expansion";
import * as i7 from "@angular/flex-layout/extended";
import * as i8 from "@angular/material/tooltip";
import * as i9 from "@angular/material/icon";
import * as i10 from "@angular/material/menu";
import * as i11 from "@angular/flex-layout/flex";
import * as i12 from "@angular/material/button";
import * as i13 from "@angular/material/checkbox";
import * as i14 from "@angular/material/form-field";
import * as i15 from "@angular/material/input";
import * as i16 from "@angular/material/tabs";
import * as i17 from "@angular/material/chips";
import * as i18 from "@angular/cdk/drag-drop";
import * as i19 from "@angular/material/select";
import * as i20 from "@angular/material/core";
import * as i21 from "@angular/material/datepicker";
import * as i22 from "@angular/forms";
import * as i23 from "@angular/material/autocomplete";
const _c0 = ["child"];
const _c1 = ["children"];
function JsonSchemaFormComponent_mat_expansion_panel_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-expansion-panel", 3);
    i0.ɵɵelementStart(1, "mat-expansion-panel-header");
    i0.ɵɵelementStart(2, "mat-panel-title");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-panel-description");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "lib-json-schema-form", 4, 5);
    i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_mat_expansion_panel_0_Template_lib_json_schema_form_valueChange_6_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.setAndEmit($event); })("schemaChange", function JsonSchemaFormComponent_mat_expansion_panel_0_Template_lib_json_schema_form_schemaChange_6_listener() { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.schemaChange.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngStyle", ctx_r0.schema.style)("ngClass", ctx_r0.schema.class)("expanded", ctx_r0.schema.expanded);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.schema.description);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r0.label)("name", ctx_r0.name)("value", ctx_r0.value)("switch", ctx_r0.switch)("rootValue", ctx_r0.rootValue)("rootSchema", ctx_r0.rootSchema)("schema", ctx_r0.schema)("inExpansion", true)("base", ctx_r0.base);
} }
function JsonSchemaFormComponent_div_1_div_1_button_31_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_button_31_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30); const x_r28 = ctx.$implicit; const ctx_r29 = i0.ɵɵnextContext(3); return ctx_r29.edit.add(x_r28); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r28 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(x_r28);
} }
function JsonSchemaFormComponent_div_1_div_1_button_34_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_button_34_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r33); const x_r31 = ctx.$implicit; const ctx_r32 = i0.ɵɵnextContext(3); return ctx_r32.edit.addSub(x_r31); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r31 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(x_r31);
} }
function JsonSchemaFormComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-icon", 12);
    i0.ɵɵtext(2, " more_vert ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-menu", null, 13);
    i0.ɵɵelementStart(5, "button", 14);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.edit.edit(); });
    i0.ɵɵelementStart(6, "mat-icon");
    i0.ɵɵtext(7, "edit");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(8, "Edit ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 15);
    i0.ɵɵelementStart(10, "mat-icon");
    i0.ɵɵtext(11, "add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(12, "Show ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "button", 15);
    i0.ɵɵelementStart(14, "mat-icon");
    i0.ɵɵtext(15, "playlist_add");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(16, "Show inline ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "button", 16);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r35); const ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.edit.hide(); });
    i0.ɵɵelementStart(18, "mat-icon");
    i0.ɵɵtext(19, "remove");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(20, "Hide ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(21, "button", 16);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r35); const ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.edit.up(); });
    i0.ɵɵelementStart(22, "mat-icon");
    i0.ɵɵtext(23, "north_west");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, "Up / Left ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(25, "button", 16);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r35); const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.edit.down(); });
    i0.ɵɵelementStart(26, "mat-icon");
    i0.ɵɵtext(27, "south_east");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(28, "Down / Right ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(29, "mat-menu", null, 17);
    i0.ɵɵtemplate(31, JsonSchemaFormComponent_div_1_div_1_button_31_Template, 2, 1, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(32, "mat-menu", null, 19);
    i0.ɵɵtemplate(34, JsonSchemaFormComponent_div_1_div_1_button_34_Template, 2, 1, "button", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r23 = i0.ɵɵreference(4);
    const _r24 = i0.ɵɵreference(30);
    const _r26 = i0.ɵɵreference(33);
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r23)("matTooltip", ctx_r7.name ? "Form element " + ctx_r7.name : ctx_r7.isRoot ? "Form root" : "");
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("disabled", !ctx_r7.edit.canAdd())("matMenuTriggerFor", _r24);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r7.edit.canAddSub())("matMenuTriggerFor", _r26);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r7.edit.canHide());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r7.edit.canUp());
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("disabled", !ctx_r7.edit.canDown());
    i0.ɵɵadvance(6);
    i0.ɵɵproperty("ngForOf", ctx_r7.edit.addable());
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r7.edit.subaddable());
} }
function JsonSchemaFormComponent_div_1_span_2_div_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "lib-json-schema-form", 26, 27);
    i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_span_2_div_1_div_1_div_1_Template_lib_json_schema_form_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r48); const x_r43 = i0.ɵɵnextContext().$implicit; const ctx_r46 = i0.ɵɵnextContext(4); return ctx_r46.onValueChange(x_r43.key, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_span_2_div_1_div_1_div_1_Template_lib_json_schema_form_schemaChange_1_listener() { i0.ɵɵrestoreView(_r48); const ctx_r49 = i0.ɵɵnextContext(5); return ctx_r49.schemaChange.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r43 = i0.ɵɵnextContext().$implicit;
    const ctx_r44 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("name", x_r43.key)("label", x_r43.value.title ? x_r43.value.title : x_r43.key)("value", ctx_r44.value ? ctx_r44.value[x_r43.key] : undefined)("switch", ctx_r44.value ? ctx_r44.value[ctx_r44.schema.switch] : undefined)("rootValue", ctx_r44.rootValue)("rootSchema", ctx_r44.rootSchema)("schema", x_r43.value)("parentSchema", ctx_r44.schema)("required", ctx_r44.schema.required ? ctx_r44.schema.required.includes(x_r43.key) : false)("hideUndefined", ctx_r44.schema.hideUndefined)("base", ctx_r44.base);
} }
function JsonSchemaFormComponent_div_1_span_2_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_2_div_1_div_1_div_1_Template, 3, 11, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r43 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", x_r43.value && (x_r43.value.type || x_r43.value.$ref));
} }
function JsonSchemaFormComponent_div_1_span_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_2_div_1_div_1_Template, 2, 1, "div", 24);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const op_r41 = ctx.$implicit;
    const ctx_r39 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("fxLayout", ctx_r39.schema.layout !== "vertical" ? "column" : "row wrap");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 2, op_r41, ctx_r39.originalOrder));
} }
function JsonSchemaFormComponent_div_1_span_2_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r55 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-checkbox", 31);
    i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_span_2_div_2_div_6_Template_mat_checkbox_change_1_listener() { i0.ɵɵrestoreView(_r55); const x_r53 = ctx.$implicit; const ctx_r54 = i0.ɵɵnextContext(4); return ctx_r54.showProperty(x_r53); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r53 = ctx.$implicit;
    const ctx_r52 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r52.value ? ctx_r52.value[x_r53] : false)("checked", ctx_r52.value && ctx_r52.value[x_r53] !== undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", x_r53, " ");
} }
function JsonSchemaFormComponent_div_1_span_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵelementStart(1, "button", 29);
    i0.ɵɵelementStart(2, "mat-icon");
    i0.ɵɵtext(3, "more_vert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-menu", null, 13);
    i0.ɵɵtemplate(6, JsonSchemaFormComponent_div_1_span_2_div_2_div_6_Template, 3, 3, "div", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r51 = i0.ɵɵreference(5);
    const ctx_r40 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matMenuTriggerFor", _r51);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r40.showPropertyList());
} }
function JsonSchemaFormComponent_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_2_div_1_Template, 3, 5, "div", 21);
    i0.ɵɵtemplate(2, JsonSchemaFormComponent_div_1_span_2_div_2_Template, 7, 2, "div", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("fxLayout", ctx_r8.schema.layout === "vertical" ? "column" : "row wrap")("ngStyle", ctx_r8.schema.style)("ngClass", ctx_r8.schema.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r8.orderedProperties);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.schema.hideUndefined);
} }
function JsonSchemaFormComponent_div_1_span_3_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_3_div_1_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r64); const x_r58 = i0.ɵɵnextContext().$implicit; const ctx_r62 = i0.ɵɵnextContext(3); return ctx_r62.removeField(x_r58.key); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "remove_circle_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r61 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r61.getLabel());
} }
function JsonSchemaFormComponent_div_1_span_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵlistener("mouseenter", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r66); const i_r59 = ctx.index; const ctx_r65 = i0.ɵɵnextContext(3); return ctx_r65.hover = i_r59; })("mouseleave", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r66); const ctx_r67 = i0.ɵɵnextContext(3); return ctx_r67.hover = null; });
    i0.ɵɵelementStart(1, "mat-form-field");
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 35);
    i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_input_change_4_listener($event) { i0.ɵɵrestoreView(_r66); const x_r58 = ctx.$implicit; const ctx_r68 = i0.ɵɵnextContext(3); return ctx_r68.fieldNameChange(x_r58.key, $event.target.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " \u00A0 ");
    i0.ɵɵelementStart(6, "lib-json-schema-form", 36, 27);
    i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_lib_json_schema_form_valueChange_6_listener($event) { i0.ɵɵrestoreView(_r66); const x_r58 = ctx.$implicit; const ctx_r69 = i0.ɵɵnextContext(3); return ctx_r69.onValueChange(x_r58.key, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_lib_json_schema_form_schemaChange_6_listener() { i0.ɵɵrestoreView(_r66); const ctx_r70 = i0.ɵɵnextContext(3); return ctx_r70.schemaChange.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, JsonSchemaFormComponent_div_1_span_3_div_1_button_8_Template, 3, 1, "button", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r58 = ctx.$implicit;
    const ctx_r56 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r56.getLabel(), " key");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("disabled", ctx_r56.readOnly)("value", x_r58.key);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("label", ctx_r56.getLabel() + " value")("value", ctx_r56.value[x_r58.key])("rootValue", ctx_r56.rootValue)("rootSchema", ctx_r56.rootSchema)("schema", ctx_r56.schema.additionalProperties)("base", ctx_r56.base);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r56.readOnly);
} }
function JsonSchemaFormComponent_div_1_span_3_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r72 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_3_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r72); const ctx_r71 = i0.ɵɵnextContext(3); return ctx_r71.addField(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "add_circle_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r57 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r57.getLabel());
} }
function JsonSchemaFormComponent_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_3_div_1_Template, 9, 10, "div", 32);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵtemplate(3, JsonSchemaFormComponent_div_1_span_3_button_3_Template, 3, 1, "button", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("fxLayout", ctx_r9.schema.layout === "vertical" ? "column" : "row wrap")("ngStyle", ctx_r9.schema.style)("ngClass", ctx_r9.schema.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 5, ctx_r9.value, ctx_r9.originalOrder));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r9.readOnly);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_mat_form_field_0_Template(rf, ctx) { if (rf & 1) {
    const _r84 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵelementStart(1, "input", 45);
    i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_mat_form_field_0_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r84); const x_r75 = i0.ɵɵnextContext(2).$implicit; const ctx_r82 = i0.ɵɵnextContext(3); return ctx_r82.fieldNameChange(x_r75.key, $event.target.value); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r75 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", x_r75.key);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r75 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(x_r75.key);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_mat_form_field_0_Template, 2, 1, "mat-form-field", 7);
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_span_1_Template, 2, 1, "span", 7);
} if (rf & 2) {
    const ctx_r77 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", !ctx_r77.readOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r77.readOnly);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r89 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r89); const x_r75 = i0.ɵɵnextContext().$implicit; const ctx_r87 = i0.ɵɵnextContext(3); return ctx_r87.removeField(x_r75.key); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "remove_circle_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r79 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r79.getLabel());
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r91 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab", 42);
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_Template, 2, 2, "ng-template", 43);
    i0.ɵɵelementStart(2, "lib-json-schema-form", 44, 27);
    i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_Template_lib_json_schema_form_valueChange_2_listener($event) { i0.ɵɵrestoreView(_r91); const x_r75 = ctx.$implicit; const ctx_r90 = i0.ɵɵnextContext(3); return ctx_r90.onValueChange(x_r75.key, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_Template_lib_json_schema_form_schemaChange_2_listener() { i0.ɵɵrestoreView(_r91); const ctx_r92 = i0.ɵɵnextContext(3); return ctx_r92.schemaChange.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_button_4_Template, 3, 1, "button", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r75 = ctx.$implicit;
    const ctx_r73 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", ctx_r73.value[x_r75.key])("rootValue", ctx_r73.rootValue)("rootSchema", ctx_r73.rootSchema)("schema", ctx_r73.schema.additionalProperties)("base", ctx_r73.base);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r73.readOnly);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r95 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r95); const ctx_r94 = i0.ɵɵnextContext(4); return ctx_r94.addField(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "add_circle_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r93 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r93.getLabel());
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab");
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_ng_template_1_Template, 3, 1, "ng-template", 43);
    i0.ɵɵelementEnd();
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab-group", 40);
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_Template, 5, 6, "mat-tab", 41);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵtemplate(3, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_Template, 2, 0, "mat-tab", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r10.schema.style)("ngClass", ctx_r10.schema.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 4, ctx_r10.value, ctx_r10.originalOrder));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r10.readOnly);
} }
function JsonSchemaFormComponent_div_1_span_5_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r104 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_5_div_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r104); const i_r99 = i0.ɵɵnextContext().index; const ctx_r102 = i0.ɵɵnextContext(3); return ctx_r102.remove(i_r99); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "remove_circle_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r101 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r101.getLabel());
} }
function JsonSchemaFormComponent_div_1_span_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r106 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34);
    i0.ɵɵlistener("mouseenter", function JsonSchemaFormComponent_div_1_span_5_div_1_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r106); const i_r99 = ctx.index; const ctx_r105 = i0.ɵɵnextContext(3); return ctx_r105.hover = i_r99; })("mouseleave", function JsonSchemaFormComponent_div_1_span_5_div_1_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r106); const ctx_r107 = i0.ɵɵnextContext(3); return ctx_r107.hover = null; });
    i0.ɵɵelementStart(1, "lib-json-schema-form", 36, 27);
    i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_span_5_div_1_Template_lib_json_schema_form_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r106); const i_r99 = ctx.index; const ctx_r108 = i0.ɵɵnextContext(3); return ctx_r108.setIndexAndEmit(i_r99, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_span_5_div_1_Template_lib_json_schema_form_schemaChange_1_listener() { i0.ɵɵrestoreView(_r106); const ctx_r109 = i0.ɵɵnextContext(3); return ctx_r109.schemaChange.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, JsonSchemaFormComponent_div_1_span_5_div_1_button_3_Template, 3, 1, "button", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r99 = ctx.index;
    const ctx_r96 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("label", ctx_r96.getLabel())("value", ctx_r96.value[i_r99])("rootValue", ctx_r96.rootValue)("rootSchema", ctx_r96.rootSchema)("schema", ctx_r96.schema.items)("base", ctx_r96.base);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r96.readOnly);
} }
function JsonSchemaFormComponent_div_1_span_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r111 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r111); const ctx_r110 = i0.ɵɵnextContext(3); return ctx_r110.add(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "add_circle_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r97 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r97.getLabel());
} }
function JsonSchemaFormComponent_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_5_div_1_Template, 4, 7, "div", 32);
    i0.ɵɵtemplate(2, JsonSchemaFormComponent_div_1_span_5_button_2_Template, 3, 1, "button", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("fxLayout", ctx_r11.schema.layout === "vertical" ? "column" : "row wrap")("ngStyle", ctx_r11.schema.style)("ngClass", ctx_r11.schema.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r11.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r11.readOnly);
} }
function JsonSchemaFormComponent_div_1_span_6_mat_chip_4_Template(rf, ctx) { if (rf & 1) {
    const _r116 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip", 51);
    i0.ɵɵlistener("removed", function JsonSchemaFormComponent_div_1_span_6_mat_chip_4_Template_mat_chip_removed_0_listener() { i0.ɵɵrestoreView(_r116); const v_r114 = ctx.$implicit; const ctx_r115 = i0.ɵɵnextContext(3); return ctx_r115.removeChip(v_r114); });
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "mat-icon", 52);
    i0.ɵɵtext(3, "cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const v_r114 = ctx.$implicit;
    const ctx_r113 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("removable", !ctx_r113.readOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", v_r114, " ");
} }
function JsonSchemaFormComponent_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    const _r118 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "mat-form-field", 46);
    i0.ɵɵelementStart(2, "mat-chip-list", 47, 48);
    i0.ɵɵlistener("cdkDropListDropped", function JsonSchemaFormComponent_div_1_span_6_Template_mat_chip_list_cdkDropListDropped_2_listener($event) { i0.ɵɵrestoreView(_r118); const ctx_r117 = i0.ɵɵnextContext(2); return ctx_r117.dropChip($event); });
    i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_span_6_mat_chip_4_Template, 4, 2, "mat-chip", 49);
    i0.ɵɵelementStart(5, "input", 50);
    i0.ɵɵlistener("matChipInputTokenEnd", function JsonSchemaFormComponent_div_1_span_6_Template_input_matChipInputTokenEnd_5_listener($event) { i0.ɵɵrestoreView(_r118); const ctx_r119 = i0.ɵɵnextContext(2); return ctx_r119.addChip($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r112 = i0.ɵɵreference(3);
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r12.schema.style)("ngClass", ctx_r12.schema.class);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r12.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("placeholder", ctx_r12.schema.title)("matChipInputFor", _r112)("matChipInputSeparatorKeyCodes", ctx_r12.separatorKeysCodes)("disabled", ctx_r12.readOnly);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r128 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 38);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r128); const i_r123 = i0.ɵɵnextContext().index; const ctx_r126 = i0.ɵɵnextContext(3); return ctx_r126.remove(i_r123); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "remove_circle_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r125 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r125.getLabel());
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_Template(rf, ctx) { if (rf & 1) {
    const _r130 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-tab", 54);
    i0.ɵɵelementStart(1, "lib-json-schema-form", 44, 27);
    i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_Template_lib_json_schema_form_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r130); const i_r123 = ctx.index; const ctx_r129 = i0.ɵɵnextContext(3); return ctx_r129.setIndexAndEmit(i_r123, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_Template_lib_json_schema_form_schemaChange_1_listener() { i0.ɵɵrestoreView(_r130); const ctx_r131 = i0.ɵɵnextContext(3); return ctx_r131.schemaChange.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_button_3_Template, 3, 1, "button", 37);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r123 = ctx.index;
    const ctx_r120 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("label", ctx_r120.getLabel() + " " + i_r123);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r120.value[i_r123])("rootValue", ctx_r120.rootValue)("rootSchema", ctx_r120.rootSchema)("schema", ctx_r120.schema.items)("base", ctx_r120.base);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r120.readOnly);
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r134 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r134); const ctx_r133 = i0.ɵɵnextContext(4); return ctx_r133.add(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "add_circle_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r132 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r132.getLabel());
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab");
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_ng_template_1_Template, 3, 1, "ng-template", 43);
    i0.ɵɵelementEnd();
} }
function JsonSchemaFormComponent_div_1_mat_tab_group_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab-group", 40);
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_Template, 4, 7, "mat-tab", 53);
    i0.ɵɵtemplate(2, JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_Template, 2, 0, "mat-tab", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r13.schema.style)("ngClass", ctx_r13.schema.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r13.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r13.readOnly);
} }
function JsonSchemaFormComponent_div_1_span_8_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r138 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", x_r138.value.title ? x_r138.value.title : x_r138.key, "");
} }
function JsonSchemaFormComponent_div_1_span_8_tr_6_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r147 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "lib-json-schema-form", 59, 27);
    i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_span_8_tr_6_td_1_Template_lib_json_schema_form_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r147); const x_r143 = ctx.$implicit; const i_r140 = i0.ɵɵnextContext().index; const ctx_r145 = i0.ɵɵnextContext(3); return ctx_r145.setIndexAndEmitTable(i_r140, x_r143.key, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_span_8_tr_6_td_1_Template_lib_json_schema_form_schemaChange_1_listener() { i0.ɵɵrestoreView(_r147); const ctx_r148 = i0.ɵɵnextContext(4); return ctx_r148.schemaChange.emit(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r143 = ctx.$implicit;
    const row_r139 = i0.ɵɵnextContext().$implicit;
    const ctx_r141 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", row_r139[x_r143.key])("rootValue", ctx_r141.rootValue)("rootSchema", ctx_r141.rootSchema)("schema", ctx_r141.schema.items.properties[x_r143.key])("base", ctx_r141.base);
} }
function JsonSchemaFormComponent_div_1_span_8_tr_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r152 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_8_tr_6_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r152); const i_r140 = i0.ɵɵnextContext().index; const ctx_r150 = i0.ɵɵnextContext(3); return ctx_r150.remove(i_r140); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "remove_circle_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r142 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r142.getLabel());
} }
function JsonSchemaFormComponent_div_1_span_8_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_8_tr_6_td_1_Template, 3, 5, "td", 30);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_span_8_tr_6_button_4_Template, 3, 1, "button", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r136 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 2, ctx_r136.schema.items.properties, ctx_r136.originalOrder));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r136.readOnly);
} }
function JsonSchemaFormComponent_div_1_span_8_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r154 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_8_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r154); const ctx_r153 = i0.ɵɵnextContext(3); return ctx_r153.add(); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "add_circle_outline");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r137 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("matTooltip", ctx_r137.getLabel());
} }
function JsonSchemaFormComponent_div_1_span_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 46);
    i0.ɵɵelementStart(1, "table", 55);
    i0.ɵɵelementStart(2, "tr");
    i0.ɵɵtemplate(3, JsonSchemaFormComponent_div_1_span_8_th_3_Template, 2, 1, "th", 56);
    i0.ɵɵpipe(4, "keyvalue");
    i0.ɵɵelement(5, "th", 57);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, JsonSchemaFormComponent_div_1_span_8_tr_6_Template, 5, 5, "tr", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, JsonSchemaFormComponent_div_1_span_8_button_7_Template, 3, 1, "button", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r14.schema.style)("ngClass", ctx_r14.schema.class);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(4, 5, ctx_r14.schema.items.properties, ctx_r14.originalOrder));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r14.value);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r14.readOnly);
} }
function JsonSchemaFormComponent_div_1_div_9_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 63);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const x_r156 = ctx.$implicit;
    i0.ɵɵproperty("value", x_r156);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(x_r156);
} }
function JsonSchemaFormComponent_div_1_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r158 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-form-field", 46);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 60);
    i0.ɵɵlistener("selectionChange", function JsonSchemaFormComponent_div_1_div_9_Template_mat_select_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r158); const ctx_r157 = i0.ɵɵnextContext(2); return ctx_r157.change($event); });
    i0.ɵɵtemplate(5, JsonSchemaFormComponent_div_1_div_9_mat_option_5_Template, 2, 2, "mat-option", 61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 62);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r15.schema.style)("ngClass", ctx_r15.schema.class);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r15.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r15.value)("disabled", ctx_r15.readOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r15.schema.enum);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r15.error());
} }
function JsonSchemaFormComponent_div_1_div_10_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 67);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const choice_r160 = ctx.$implicit;
    i0.ɵɵproperty("value", choice_r160.value)("matTooltip", choice_r160.name !== choice_r160.value ? choice_r160.value : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", choice_r160.name, " ");
} }
function JsonSchemaFormComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r162 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-form-field", 64);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-select", 65);
    i0.ɵɵlistener("focus", function JsonSchemaFormComponent_div_1_div_10_Template_mat_select_focus_4_listener() { i0.ɵɵrestoreView(_r162); const ctx_r161 = i0.ɵɵnextContext(2); return ctx_r161.focus(); })("selectionChange", function JsonSchemaFormComponent_div_1_div_10_Template_mat_select_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r162); const ctx_r163 = i0.ɵɵnextContext(2); return ctx_r163.change($event); });
    i0.ɵɵtemplate(5, JsonSchemaFormComponent_div_1_div_10_mat_option_5_Template, 2, 3, "mat-option", 66);
    i0.ɵɵpipe(6, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "p", 62);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("matTooltip", ctx_r16.schema.description)("ngStyle", ctx_r16.schema.style)("ngClass", ctx_r16.schema.class);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r16.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r16.value)("disabled", ctx_r16.readOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 8, ctx_r16.choices));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r16.error());
} }
function JsonSchemaFormComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r166 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-form-field", 46);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 68);
    i0.ɵɵlistener("dateChange", function JsonSchemaFormComponent_div_1_div_11_Template_input_dateChange_4_listener($event) { i0.ɵɵrestoreView(_r166); const ctx_r165 = i0.ɵɵnextContext(2); return ctx_r165.change($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(5, "mat-datepicker-toggle", 69);
    i0.ɵɵelement(6, "mat-datepicker", null, 70);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "p", 62);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r164 = i0.ɵɵreference(7);
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r17.schema.style)("ngClass", ctx_r17.schema.class);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r17.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r17.parseDate(ctx_r17.value, ctx_r17.schema.dateFormat))("matDatepicker", _r164)("disabled", ctx_r17.readOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("for", _r164);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r17.error());
} }
function JsonSchemaFormComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r168 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 71);
    i0.ɵɵelementStart(1, "mat-checkbox", 72);
    i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_div_12_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r168); const ctx_r167 = i0.ɵɵnextContext(2); return ctx_r167.change($event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "p", 62);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r18 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r18.schema.style)("ngClass", ctx_r18.schema.class);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("checked", ctx_r18.value)("disabled", ctx_r18.readOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r18.label, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r18.error());
} }
function JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 67);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const choice_r172 = ctx.$implicit;
    i0.ɵɵproperty("value", choice_r172.value)("matTooltip", choice_r172.name !== choice_r172.value ? choice_r172.value : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", choice_r172.name, " ");
} }
function JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r174 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 46);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 73);
    i0.ɵɵlistener("focus", function JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_Template_mat_select_focus_3_listener() { i0.ɵɵrestoreView(_r174); const ctx_r173 = i0.ɵɵnextContext(3); return ctx_r173.focus(); })("selectionChange", function JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r174); const ctx_r175 = i0.ɵɵnextContext(3); return ctx_r175.change($event); });
    i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_mat_option_4_Template, 2, 3, "mat-option", 66);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r169 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", ctx_r169.schema.style)("ngClass", ctx_r169.schema.class);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r169.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r169.value)("disabled", ctx_r169.readOnly);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 6, ctx_r169.choices));
} }
function JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 67);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const choice_r178 = ctx.$implicit;
    i0.ɵɵproperty("value", choice_r178.value)("matTooltip", choice_r178.name !== choice_r178.value ? choice_r178.value : null);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", choice_r178.name, " ");
} }
function JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_Template(rf, ctx) { if (rf & 1) {
    const _r180 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 46);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 74);
    i0.ɵɵlistener("focus", function JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_Template_input_focus_3_listener() { i0.ɵɵrestoreView(_r180); const ctx_r179 = i0.ɵɵnextContext(3); return ctx_r179.focus(); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "mat-autocomplete", null, 75);
    i0.ɵɵtemplate(6, JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_mat_option_6_Template, 2, 3, "mat-option", 66);
    i0.ɵɵpipe(7, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r176 = i0.ɵɵreference(5);
    const ctx_r170 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", ctx_r170.schema.style)("ngClass", ctx_r170.schema.class);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r170.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formControl", ctx_r170.control)("matAutocomplete", _r176);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(7, 6, ctx_r170.filteredOptions));
} }
function JsonSchemaFormComponent_div_1_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_Template, 6, 8, "mat-form-field", 10);
    i0.ɵɵtemplate(2, JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_Template, 8, 8, "mat-form-field", 10);
    i0.ɵɵelementStart(3, "p", 62);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.schema.widget === "select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r19.schema.widget !== "select");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r19.error());
} }
function JsonSchemaFormComponent_div_1_div_14_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r184 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 78);
    i0.ɵɵlistener("input", function JsonSchemaFormComponent_div_1_div_14_input_4_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r184); const ctx_r183 = i0.ɵɵnextContext(3); return ctx_r183.change($event); })("focus", function JsonSchemaFormComponent_div_1_div_14_input_4_Template_input_focus_0_listener() { i0.ɵɵrestoreView(_r184); const ctx_r185 = i0.ɵɵnextContext(3); return ctx_r185.getInputType(ctx_r185.schema) == "password" ? ctx_r185.value = "" : ""; });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r181 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r181.readOnly)("placeholder", ctx_r181.example())("type", ctx_r181.getInputType(ctx_r181.schema))("value", ctx_r181.value);
} }
function JsonSchemaFormComponent_div_1_div_14_input_5_Template(rf, ctx) { if (rf & 1) {
    const _r187 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 79);
    i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_div_14_input_5_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r187); const ctx_r186 = i0.ɵɵnextContext(3); return ctx_r186.change($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r182 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r182.readOnly)("placeholder", ctx_r182.example())("type", ctx_r182.getInputType(ctx_r182.schema))("value", ctx_r182.value);
} }
function JsonSchemaFormComponent_div_1_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-form-field", 46);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_div_14_input_4_Template, 1, 4, "input", 76);
    i0.ɵɵtemplate(5, JsonSchemaFormComponent_div_1_div_14_input_5_Template, 1, 4, "input", 77);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 62);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r20.schema.style)("ngClass", ctx_r20.schema.class);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r20.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r20.inArray);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r20.inArray);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r20.error());
} }
function JsonSchemaFormComponent_div_1_div_15_textarea_4_Template(rf, ctx) { if (rf & 1) {
    const _r191 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 82);
    i0.ɵɵlistener("input", function JsonSchemaFormComponent_div_1_div_15_textarea_4_Template_textarea_input_0_listener($event) { i0.ɵɵrestoreView(_r191); const ctx_r190 = i0.ɵɵnextContext(3); return ctx_r190.change($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r188 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r188.readOnly)("placeholder", ctx_r188.example())("value", ctx_r188.value)("ngStyle", ctx_r188.schema.style)("ngClass", ctx_r188.schema.class);
} }
function JsonSchemaFormComponent_div_1_div_15_textarea_5_Template(rf, ctx) { if (rf & 1) {
    const _r193 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "textarea", 83);
    i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_div_15_textarea_5_Template_textarea_change_0_listener($event) { i0.ɵɵrestoreView(_r193); const ctx_r192 = i0.ɵɵnextContext(3); return ctx_r192.change($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r189 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("disabled", ctx_r189.readOnly)("placeholder", ctx_r189.example())("value", ctx_r189.value)("ngStyle", ctx_r189.schema.style)("ngClass", ctx_r189.schema.class);
} }
function JsonSchemaFormComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "mat-form-field", 46);
    i0.ɵɵelementStart(2, "mat-label");
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_div_15_textarea_4_Template, 1, 5, "textarea", 80);
    i0.ɵɵtemplate(5, JsonSchemaFormComponent_div_1_div_15_textarea_5_Template, 1, 5, "textarea", 81);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "p", 62);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r21 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r21.schema.style)("ngClass", ctx_r21.schema.class);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r21.label);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r21.inArray);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r21.inArray);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r21.error());
} }
function JsonSchemaFormComponent_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r195 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "input", 84);
    i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_div_16_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r195); const ctx_r194 = i0.ɵɵnextContext(2); return ctx_r194.handleFileInput($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "p", 62);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r22 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r22.schema.style)("ngClass", ctx_r22.schema.class)("disabled", ctx_r22.readOnly);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r22.error());
} }
function JsonSchemaFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_div_1_Template, 35, 11, "div", 7);
    i0.ɵɵtemplate(2, JsonSchemaFormComponent_div_1_span_2_Template, 3, 5, "span", 8);
    i0.ɵɵtemplate(3, JsonSchemaFormComponent_div_1_span_3_Template, 4, 8, "span", 8);
    i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_mat_tab_group_4_Template, 4, 7, "mat-tab-group", 9);
    i0.ɵɵtemplate(5, JsonSchemaFormComponent_div_1_span_5_Template, 3, 5, "span", 8);
    i0.ɵɵtemplate(6, JsonSchemaFormComponent_div_1_span_6_Template, 6, 7, "span", 7);
    i0.ɵɵtemplate(7, JsonSchemaFormComponent_div_1_mat_tab_group_7_Template, 3, 4, "mat-tab-group", 9);
    i0.ɵɵtemplate(8, JsonSchemaFormComponent_div_1_span_8_Template, 8, 8, "span", 10);
    i0.ɵɵtemplate(9, JsonSchemaFormComponent_div_1_div_9_Template, 8, 7, "div", 7);
    i0.ɵɵtemplate(10, JsonSchemaFormComponent_div_1_div_10_Template, 9, 10, "div", 7);
    i0.ɵɵtemplate(11, JsonSchemaFormComponent_div_1_div_11_Template, 10, 8, "div", 7);
    i0.ɵɵtemplate(12, JsonSchemaFormComponent_div_1_div_12_Template, 5, 6, "div", 11);
    i0.ɵɵtemplate(13, JsonSchemaFormComponent_div_1_div_13_Template, 5, 3, "div", 7);
    i0.ɵɵtemplate(14, JsonSchemaFormComponent_div_1_div_14_Template, 8, 6, "div", 7);
    i0.ɵɵtemplate(15, JsonSchemaFormComponent_div_1_div_15_Template, 8, 6, "div", 7);
    i0.ɵɵtemplate(16, JsonSchemaFormComponent_div_1_div_16_Template, 4, 4, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matTooltip", ctx_r1.schema.description);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.service.editMode && !ctx_r1.schema.static && !ctx_r1.inArray && ctx_r1.getLayout() !== "none");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "object");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "additionalProperties");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "additionalPropertiesTab");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "array");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "chips");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "tab");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "table");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "enum");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "array-select");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "date");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "checkbox");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "autocomplete");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "single");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "textarea");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "upload");
} }
function JsonSchemaFormComponent_ng_template_2_Template(rf, ctx) { }
/**
 * generates an input form base on JSON schema and JSON object.
 * The component is used recursively.
 */
export class JsonSchemaFormComponent {
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
JsonSchemaFormComponent.ɵfac = function JsonSchemaFormComponent_Factory(t) { return new (t || JsonSchemaFormComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i2.JsonSchemaFormService), i0.ɵɵdirectiveInject(i3.MatDialog)); };
JsonSchemaFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: JsonSchemaFormComponent, selectors: [["lib-json-schema-form"]], viewQuery: function JsonSchemaFormComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
        i0.ɵɵviewQuery(WidgetDirective, 3);
        i0.ɵɵviewQuery(_c1, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.child = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.widgetHost = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.children = _t);
    } }, inputs: { name: "name", label: "label", value: "value", rootValue: "rootValue", schema: "schema", parentSchema: "parentSchema", rootSchema: "rootSchema", base: "base", switch: "switch", hideUndefined: "hideUndefined", inExpansion: "inExpansion", inArray: "inArray", required: "required" }, outputs: { valueChange: "valueChange", errorChange: "errorChange", schemaChange: "schemaChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[3, "ngStyle", "ngClass", "expanded", 4, "ngIf"], [3, "matTooltip", 4, "ngIf"], ["libWidgetHost", ""], [3, "ngStyle", "ngClass", "expanded"], [3, "label", "name", "value", "switch", "rootValue", "rootSchema", "schema", "inExpansion", "base", "valueChange", "schemaChange"], ["child", ""], [3, "matTooltip"], [4, "ngIf"], [3, "fxLayout", "ngStyle", "ngClass", 4, "ngIf"], ["animationDuration", "0ms", "style", "max-width: 96vw", 3, "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass", 4, "ngIf"], ["style", "margin: 6px; margin-top: 12px;", 3, "ngStyle", "ngClass", 4, "ngIf"], [2, "cursor", "pointer", 3, "matMenuTriggerFor", "matTooltip"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "disabled", "click"], ["madd", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["madd2", "matMenu"], [3, "fxLayout", "ngStyle", "ngClass"], [3, "fxLayout", 4, "ngFor", "ngForOf"], ["style", "margin-right: 20px;", 4, "ngIf"], [3, "fxLayout"], ["style", "display: flex; margin: 2px", 4, "ngFor", "ngForOf"], [2, "display", "flex", "margin", "2px"], [3, "name", "label", "value", "switch", "rootValue", "rootSchema", "schema", "parentSchema", "required", "hideUndefined", "base", "valueChange", "schemaChange"], ["children", ""], [2, "margin-right", "20px"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [4, "ngFor", "ngForOf"], [3, "disabled", "checked", "change"], ["style", "display: flex; margin: 2px; position: relative", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "matTooltip", "click", 4, "ngIf"], [2, "display", "flex", "margin", "2px", "position", "relative", 3, "mouseenter", "mouseleave"], ["autocomplete", "off", "matInput", "", 3, "disabled", "value", "change"], ["inArray", "true", 3, "label", "value", "rootValue", "rootSchema", "schema", "base", "valueChange", "schemaChange"], ["mat-icon-button", "", "class", "example-handle", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", 1, "example-handle", 3, "matTooltip", "click"], ["mat-icon-button", "", 3, "matTooltip", "click"], ["animationDuration", "0ms", 2, "max-width", "96vw", 3, "ngStyle", "ngClass"], ["style", "margin: 2px; position: relative", 4, "ngFor", "ngForOf"], [2, "margin", "2px", "position", "relative"], ["mat-tab-label", ""], ["inArray", "true", 3, "value", "rootValue", "rootSchema", "schema", "base", "valueChange", "schemaChange"], ["autocomplete", "off", "matInput", "", 3, "value", "change"], [3, "ngStyle", "ngClass"], ["aria-label", "Fruit selection", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListDropped"], ["chipList", ""], ["cdkDrag", "", 3, "removable", "removed", 4, "ngFor", "ngForOf"], ["autocomplete", "off", 3, "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "disabled", "matChipInputTokenEnd"], ["cdkDrag", "", 3, "removable", "removed"], ["matChipRemove", ""], ["style", "margin: 2px; position: relative", 3, "label", 4, "ngFor", "ngForOf"], [2, "margin", "2px", "position", "relative", 3, "label"], ["summary", "Properties table"], ["scope", "col", 4, "ngFor", "ngForOf"], ["id", "remove_row"], ["scope", "col"], [3, "value", "rootValue", "rootSchema", "schema", "base", "valueChange", "schemaChange"], [3, "value", "disabled", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "error", "mat-typography"], [3, "value"], [3, "matTooltip", "ngStyle", "ngClass"], ["multiple", "", 3, "value", "disabled", "focus", "selectionChange"], [3, "value", "matTooltip", 4, "ngFor", "ngForOf"], [3, "value", "matTooltip"], ["autocomplete", "off", "matInput", "", 2, "width", "100%", 3, "value", "matDatepicker", "disabled", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [2, "margin", "6px", "margin-top", "12px", 3, "ngStyle", "ngClass"], [3, "checked", "disabled", "change"], [3, "value", "disabled", "focus", "selectionChange"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete", "focus"], ["auto", "matAutocomplete"], ["autocomplete", "off", "matInput", "", 3, "disabled", "placeholder", "type", "value", "input", "focus", 4, "ngIf"], ["autocomplete", "off", "matInput", "", 3, "disabled", "placeholder", "type", "value", "change", 4, "ngIf"], ["autocomplete", "off", "matInput", "", 3, "disabled", "placeholder", "type", "value", "input", "focus"], ["autocomplete", "off", "matInput", "", 3, "disabled", "placeholder", "type", "value", "change"], ["matInput", "", 3, "disabled", "placeholder", "value", "ngStyle", "ngClass", "input", 4, "ngIf"], ["matInput", "", 3, "disabled", "placeholder", "value", "ngStyle", "ngClass", "change", 4, "ngIf"], ["matInput", "", 3, "disabled", "placeholder", "value", "ngStyle", "ngClass", "input"], ["matInput", "", 3, "disabled", "placeholder", "value", "ngStyle", "ngClass", "change"], ["type", "file", "id", "file", 3, "ngStyle", "ngClass", "disabled", "change"]], template: function JsonSchemaFormComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, JsonSchemaFormComponent_mat_expansion_panel_0_Template, 8, 14, "mat-expansion-panel", 0);
        i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_Template, 17, 17, "div", 1);
        i0.ɵɵtemplate(2, JsonSchemaFormComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", (ctx.schema.expanded === true || ctx.schema.expanded === false) && !ctx.inExpansion);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.schema.expanded === null || ctx.schema.expanded === undefined || ctx.inExpansion);
    } }, directives: [i4.NgIf, i5.WidgetDirective, i6.MatExpansionPanel, i7.DefaultStyleDirective, i4.NgStyle, i7.DefaultClassDirective, i4.NgClass, i6.MatExpansionPanelHeader, i6.MatExpansionPanelTitle, i6.MatExpansionPanelDescription, JsonSchemaFormComponent, i8.MatTooltip, i9.MatIcon, i10.MatMenuTrigger, i10.MatMenu, i10.MatMenuItem, i4.NgForOf, i11.DefaultLayoutDirective, i12.MatButton, i13.MatCheckbox, i14.MatFormField, i14.MatLabel, i15.MatInput, i16.MatTabGroup, i16.MatTab, i16.MatTabLabel, i17.MatChipList, i18.CdkDropList, i17.MatChipInput, i17.MatChip, i18.CdkDrag, i17.MatChipRemove, i19.MatSelect, i20.MatOption, i21.MatDatepickerInput, i21.MatDatepickerToggle, i14.MatSuffix, i21.MatDatepicker, i22.DefaultValueAccessor, i23.MatAutocompleteTrigger, i22.NgControlStatus, i22.FormControlDirective, i23.MatAutocomplete], pipes: [i4.KeyValuePipe, i4.AsyncPipe], styles: [".example-handle[_ngcontent-%COMP%]{position:absolute;z-index:9;top:0;right:0}.error[_ngcontent-%COMP%]{font-size:small;color:red;position:relative;top:-18px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonSchemaFormComponent, [{
        type: Component,
        args: [{
                selector: "lib-json-schema-form",
                templateUrl: "./json-schema-form.component.html",
                styleUrls: ["./json-schema-form.component.css"],
            }]
    }], function () { return [{ type: i1.HttpClient }, { type: i0.ComponentFactoryResolver }, { type: i2.JsonSchemaFormService }, { type: i3.MatDialog }]; }, { children: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1zY2hlbWEtZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kYXNoam9pbi9qc29uLXNjaGVtYS1mb3JtL3NyYy9saWIvanNvbi1zY2hlbWEtZm9ybS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kYXNoam9pbi9qc29uLXNjaGVtYS1mb3JtL3NyYy9saWIvanNvbi1zY2hlbWEtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUlaLFNBQVMsRUFDVCxZQUFZLEdBRWIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRS9ELE9BQU8sRUFBRSxRQUFRLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSTNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVyRCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUF5QixvQkFBb0IsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUU5QixPQUFPLEVBQWUsZUFB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QixLQUFLO1lBS0ksV0FBVztrQkFBcEIsTUFBTTtZQUtHLFdBQVc7a0JBQXBCLE1BQU07WUFLRyxZQUFZO2tCQUFyQixNQUFNO1lBS0UsTUFBTTtrQkFBZCxLQUFLO1lBS0csWUFBWTtrQkFBcEIsS0FBSztZQVVHLFVBQVU7a0JBQWxCLEtBQUs7WUFLRyxJQUFJO2tCQUFaLEtBQUs7WUFXRyxNQUFNO2tCQUFkLEtBQUs7WUFNRyxhQUFhO2tCQUFyQixLQUFLO1lBS0csV0FBVztrQkFBbkIsS0FBSztZQUtHLE9BQU87a0JBQWYsS0FBSztZQUtHLFFBQVE7a0JBQWhCLEtBQUs7WUFLd0MsVUFBVTtrQkFBdkQsU0FBUzttQkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBPbkNoYW5nZXMsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q2hpbGRyZW4sXHJcbiAgUXVlcnlMaXN0LFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE1hdFNlbGVjdENoYW5nZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3RcIjtcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlclwiO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveENoYW5nZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveFwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbmltcG9ydCB7IGZvcmtKb2luLCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgS2V5VmFsdWUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7IFNjaGVtYSB9IGZyb20gXCIuL3NjaGVtYVwiO1xyXG5pbXBvcnQgeyBXaWRnZXRDb21wb25lbnQgfSBmcm9tIFwiLi93aWRnZXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFdpZGdldERpcmVjdGl2ZSB9IGZyb20gXCIuL3dpZGdldC5kaXJlY3RpdmVcIjtcclxuaW1wb3J0IHsgSnNvblNjaGVtYUZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4vanNvbi1zY2hlbWEtZm9ybS5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZVNlbGVjdGVkRXZlbnQgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlXCI7XHJcbmltcG9ydCB7IEpzb25Qb2ludGVyIH0gZnJvbSBcIi4vanNvbi1wb2ludGVyXCI7XHJcbmltcG9ydCB7IENob2ljZSwgQ2hvaWNlSGFuZGxlciwgRGVmYXVsdENob2ljZUhhbmRsZXIgfSBmcm9tIFwiLi9jaG9pY2VcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBzdGFydFdpdGgsIHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nXCI7XHJcbmltcG9ydCB7IEVkaXQgfSBmcm9tIFwiLi9lZGl0XCI7XHJcbmltcG9ydCB7IE1hdENoaXBJbnB1dEV2ZW50IH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2NoaXBzXCI7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXkgfSBmcm9tIFwiQGFuZ3VsYXIvY2RrL2RyYWctZHJvcFwiO1xyXG5pbXBvcnQgeyBDT01NQSwgRU5URVIsIFRBQiB9IGZyb20gXCJAYW5ndWxhci9jZGsva2V5Y29kZXNcIjtcclxuaW1wb3J0IGpzb25hdGEgZnJvbSBcImpzb25hdGFcIjtcclxuXHJcbi8qKlxyXG4gKiBnZW5lcmF0ZXMgYW4gaW5wdXQgZm9ybSBiYXNlIG9uIEpTT04gc2NoZW1hIGFuZCBKU09OIG9iamVjdC5cclxuICogVGhlIGNvbXBvbmVudCBpcyB1c2VkIHJlY3Vyc2l2ZWx5LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibGliLWpzb24tc2NoZW1hLWZvcm1cIixcclxuICB0ZW1wbGF0ZVVybDogXCIuL2pzb24tc2NoZW1hLWZvcm0uY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vanNvbi1zY2hlbWEtZm9ybS5jb21wb25lbnQuY3NzXCJdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSnNvblNjaGVtYUZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgLyoqXHJcbiAgICogY29tcG9uZW50IGNvbnN0cnVjdG9yXHJcbiAgICogQHBhcmFtIGh0dHAgICAgICAgICAgICAgICAgICAgICAgICBodHRwIGNsaWVudFxyXG4gICAqIEBwYXJhbSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIgICAgYWxsb3dzIGR5bmFtaWMgY29tcG9uZW50c1xyXG4gICAqIEBwYXJhbSBzZXJ2aWNlICAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb24gc2VydmljZSBmb3IgcmVnaXN0ZXJpbmcgY29tcG9uZW50cyBldGMuXHJcbiAgICogQHBhcmFtIGRpYWxvZyAgICAgICAgICAgICAgICAgICAgICBkaWFsb2cgc2VydmljZVxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHB1YmxpYyBzZXJ2aWNlOiBKc29uU2NoZW1hRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGRpYWxvZzogTWF0RGlhbG9nXHJcbiAgKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBjb250YWluZXIgY2hpbGRyZW4gZm9yIGV2ZW50IHByb3BhZ2F0aW9uXHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZHJlbihcImNoaWxkcmVuXCIpIGNoaWxkcmVuOiBRdWVyeUxpc3Q8SnNvblNjaGVtYUZvcm1Db21wb25lbnQ+O1xyXG5cclxuICAvKipcclxuICAgKiBjb250YWluZXIgY2hpbGRyZW4gZm9yIGV2ZW50IHByb3BhZ2F0aW9uXHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZChcImNoaWxkXCIpIGNoaWxkOiBKc29uU2NoZW1hRm9ybUNvbXBvbmVudDtcclxuXHJcbiAgLyoqXHJcbiAgICogaWYgYW4gYXJyYXkgaXMgZGlzcGxheWVkLCBpbmRpY2F0ZXMgd2hpY2ggYXJyYXkgaW5kZXggaXMgYmVpbmcgaG92ZXJlZCBvdmVyIGluIG9yZGVyIHRvXHJcbiAgICogZGlzcGxheSB0aGUgXCItXCIgcmVtb3ZlIGJ1dHRvblxyXG4gICAqL1xyXG4gIGhvdmVyOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIHRoZSBuYW1lIG9mIHRoZSBpbnB1dCBmaWVsZCAob25seSBzZXQgaWYgaW5zaWRlIHR5cGU6IG9iamVjdClcclxuICAgKi9cclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIHRoZSBsYWJlbCBvZiB0aGUgaW5wdXQgZmllbGRcclxuICAgKi9cclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiB0aGUgaW5wdXQgdmFsdWVcclxuICAgKi9cclxuICBASW5wdXQoKSB2YWx1ZTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiByb290IGZvcm0gdmFsdWUgKGNhbiBiZSB1c2VkIGluIGN1c3RvbSBjb21wb25lbnRzKVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHJvb3RWYWx1ZTogYW55O1xyXG5cclxuICAvKipcclxuICAgKiBlbWl0IGNoYW5nZXMgZG9uZSBieSB0aGUgdXNlciBpbiB0aGUgY29tcG9uZW50XHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgLyoqXHJcbiAgICogZW1pdCB3aGV0aGVyIHRoaXMgcGFydCBvZiB0aGUgZm9ybSBpcyB2YWxpZFxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBlcnJvckNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8qKlxyXG4gICAqIGluZGljYXRlIHNjaGVtYSBjaGFuZ2VzIGRvbmUgdmlhIHRoZSBsYXlvdXQgZWRpdG9yXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHNjaGVtYUNoYW5nZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvKipcclxuICAgKiBKU09OIHNjaGVtYSB0byB1c2VcclxuICAgKi9cclxuICBASW5wdXQoKSBzY2hlbWE6IFNjaGVtYTtcclxuXHJcbiAgLyoqXHJcbiAgICogcGFyZW50IHNjaGVtYSB0byBlZGl0IHJlcXVpcmVkXHJcbiAgICovXHJcbiAgQElucHV0KCkgcGFyZW50U2NoZW1hOiBTY2hlbWE7XHJcblxyXG4gIC8qKlxyXG4gICAqIGZvcm0gZWRpdG9yXHJcbiAgICovXHJcbiAgZWRpdDogRWRpdDtcclxuXHJcbiAgLyoqXHJcbiAgICogcm9vdCBKU09OIHNjaGVtYSB0byB1c2Ugd2hlbiBsb29raW5nIHVwICRyZWYgKHNpbXBseSBwYXNzZWQgYWxvbmcgdGhlIHRyZWUpXHJcbiAgICovXHJcbiAgQElucHV0KCkgcm9vdFNjaGVtYTogU2NoZW1hO1xyXG5cclxuICAvKipcclxuICAgKiBiYXNlIFVSTCBmb3IgcmVzb2x2aW5nICRyZWZcclxuICAgKi9cclxuICBASW5wdXQoKSBiYXNlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGluZGljYXRlcyB3aGV0aGVyIHRoaXMgaXMgdGhlIHJvb3Qgb2YgdGhlIGNvbXBvbmVudCB0cmVlXHJcbiAgICovXHJcbiAgaXNSb290ID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIGlmIHByZXNlbnQ6IHZhbHVlIG9mIHRoZSBzd2l0Y2ggcHJvcGVydHkgdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXIgdGhpcyBjb21wb25lbnQgcmVuZGVycyBpdHNlbGZcclxuICAgKiAoc2NoZW1hLmNhc2Ugbm90IHByZXNlbnQgb3Igc2NoZW1hLmNhc2UgPT09IHN3aXRjaClcclxuICAgKi9cclxuICBASW5wdXQoKSBzd2l0Y2g6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogaW5kaWNhdGVzIHRvIGNoaWxkIGNvbXBvbmVudHMgd2hldGhlciB0aGUgcGFyZW50IG9iamVjdCBoYXMgaGlkZVVuZGVmaW5lZCBzZXQgKGkuZS4gZG8gbm90IHJlbmRlciB5b3Vyc2VsZlxyXG4gICAqIGlmIHlvdXIgdmFsdWUgaXMgdW5kZWZpbmVkKVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGhpZGVVbmRlZmluZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIGFyZSB3ZSBhbHJlYWR5IGluIHRoZSBleHBhbnNpb24gcGFuZWw/XHJcbiAgICovXHJcbiAgQElucHV0KCkgaW5FeHBhbnNpb246IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIGFyZSB3ZSBhbHJlYWR5IGluIGFuIGFycmF5P1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIGluQXJyYXk6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlcXVpcmVkIGltcG9ydGVkIGZyb20gcGFyZW50XHJcbiAgICovXHJcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIGhvb2sgZm9yIGN1c3RvbSB3aWRnZXRzXHJcbiAgICovXHJcbiAgQFZpZXdDaGlsZChXaWRnZXREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIHdpZGdldEhvc3Q6IFdpZGdldERpcmVjdGl2ZTtcclxuXHJcbiAgLyoqXHJcbiAgICogb3JkZXIgZmllbGQgdHJhbnNmb3JtcyBwcm9wZXJ0aWVzIGludG8gdGhpcyBzdHJ1Y3R1cmUuXHJcbiAgICogYWxsb3dzIG9taXNzaW9uLCBvcmRlcmluZyBhbmQgaGllcmFyY2h5XHJcbiAgICovXHJcbiAgb3JkZXJlZFByb3BlcnRpZXM6IHsgW2tleTogc3RyaW5nXTogU2NoZW1hIH1bXTtcclxuXHJcbiAgLyoqXHJcbiAgICogbWFrZSBzdXJlIHRvIHJldHVybiB0aGUgc2FtZSBkYXRlIG9iamVjdCBpbnN0YW5jZSAoY2Fubm90IGRlbGV0ZSBkYXRlICM4MylcclxuICAgKi9cclxuICBkYXRlOiBEYXRlO1xyXG5cclxuICAvKipcclxuICAgKiBjaG9pY2VzIHRoYXQgbWlnaHQgYmUgbG9hZGVkIGFzeW5jLCBpbml0aWFsaXplZCB3aXRoIGN1cnJlbnQgdmFsdWUgYW5kIGl0cyBwb3RlbnRpYWxseSBkZWxheWVkIHRvU3RyaW5nIHZhbHVlXHJcbiAgICovXHJcbiAgY2hvaWNlczogUmVwbGF5U3ViamVjdDxDaG9pY2VbXT47XHJcblxyXG4gIC8qKlxyXG4gICAqIGF1dG9jb21wbGV0ZSBmaWx0ZXJlZCBjaG9pY2VzXHJcbiAgICovXHJcbiAgZmlsdGVyZWRPcHRpb25zOiBPYnNlcnZhYmxlPENob2ljZVtdPjtcclxuXHJcbiAgLyoqXHJcbiAgICogYXV0b2NvbXBsZXRlIGZvcm0gY29udHJvbCBmb3Igc2ltcGxlciBjaGFuZ2UgZGV0ZWN0aW9uXHJcbiAgICovXHJcbiAgY29udHJvbDogRm9ybUNvbnRyb2w7XHJcblxyXG4gIC8qKlxyXG4gICAqIGltcGxlbWVudGF0aW9uIHNwZWNpZmllZCBpbiBkaXNwbGF5V2l0aFxyXG4gICAqL1xyXG4gIGNoOiBDaG9pY2VIYW5kbGVyO1xyXG5cclxuICAvKipcclxuICAgKiBjb21wbGV0ZSBjaGlwIGVudHJ5IHdpdGggZW50ZXIgb3IgY29tbWFcclxuICAgKi9cclxuICByZWFkb25seSBzZXBhcmF0b3JLZXlzQ29kZXM6IG51bWJlcltdID0gW0VOVEVSLCBDT01NQSwgVEFCXTtcclxuXHJcbiAgLyoqXHJcbiAgICogcmVhZE9ubHkgaWYgc2NoZW1hLnJlYWRPbmx5IG9yIHNjaGVtYS5jcmVhdGVPbmx5IGFuZCB2YWx1ZSBzZXRcclxuICAgKi9cclxuICByZWFkT25seTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogZXJyb3IgZnJvbSBhIGN1c3RvbSBjb21wb25lbnRcclxuICAgKi9cclxuICBjdXN0b21FcnJvcjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBhcHBseSBvcmRlciwgY2FsbGVkIGFueXRpbWUgcHJvcGVydGllcyBhcmUgc2V0XHJcbiAgICovXHJcbiAgc2V0T3JkZXJlZFByb3BlcnRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5zY2hlbWEub3JkZXIpIHtcclxuICAgICAgdGhpcy5vcmRlcmVkUHJvcGVydGllcyA9IFtdO1xyXG4gICAgICBmb3IgKGNvbnN0IHAgb2YgdGhpcy5zY2hlbWEub3JkZXIpIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBBcnJheS5pc0FycmF5KHApID8gcCA6IFtwXTtcclxuICAgICAgICBjb25zdCBvID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBxIG9mIGFycikge1xyXG4gICAgICAgICAgb1txXSA9IHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbcV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3JkZXJlZFByb3BlcnRpZXMucHVzaChvKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgIHRoaXMub3JkZXJlZFByb3BlcnRpZXMgPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5zY2hlbWEucHJvcGVydGllcykpIHtcclxuICAgICAgICBjb25zdCBvID0ge307XHJcbiAgICAgICAgb1trZXldID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5vcmRlcmVkUHJvcGVydGllcy5wdXNoKG8pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpbml0aWFsaXplIHRoZSBjb21vbmVudC5cclxuICAgKiByZXBsYWNlIHVuZGVmaW5lZCB3aXRoIG51bGwgYW5kIGluaXQgYXV0b2NvbXBsZXRlIGNob2ljZXNcclxuICAgKi9cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVhZE9ubHkgPVxyXG4gICAgICB0aGlzLnNjaGVtYS5yZWFkT25seSB8fCAodGhpcy5zY2hlbWEuY3JlYXRlT25seSAmJiB0aGlzLnZhbHVlKTtcclxuXHJcbiAgICBpZiAoIXRoaXMucm9vdFNjaGVtYSkge1xyXG4gICAgICB0aGlzLnJvb3RTY2hlbWEgPSB0aGlzLnNjaGVtYTtcclxuICAgICAgdGhpcy5yb290VmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICB0aGlzLmlzUm9vdCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLnNjaGVtYS50eXBlKSB7XHJcbiAgICAgIGNvbnN0IHAgPSB0aGlzLnNjaGVtYS4kcmVmO1xyXG4gICAgICBjb25zdCBwYXJ0cyA9IHAuc3BsaXQoXCIjXCIpO1xyXG4gICAgICBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgLy8gVVJMIG9ubHlcclxuICAgICAgICB0aGlzLnVybChwYXJ0c1swXSwgbnVsbCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHBhcnRzWzBdKSB7XHJcbiAgICAgICAgICAvLyBVUkwgKyBhbmNob3JcclxuICAgICAgICAgIHRoaXMudXJsKHBhcnRzWzBdLCBwYXJ0c1sxXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIC8vIGxvY2FsIHJlZlxyXG4gICAgICAgICAgdGhpcy5zY2hlbWEgPSBKc29uUG9pbnRlci5qc29uUG9pbnRlcih0aGlzLnJvb3RTY2hlbWEsIHBhcnRzWzFdKTtcclxuICAgICAgICAgIHRoaXMuc2V0T3JkZXJlZFByb3BlcnRpZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0T3JkZXJlZFByb3BlcnRpZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMudmFsdWUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgaWYgKHRoaXMuc2NoZW1hLmRlZmF1bHQpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5zY2hlbWEuZGVmYXVsdDtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZW1pdCh0aGlzLnZhbHVlKSwgNTAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGlkZVVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZ2V0TGF5b3V0KCkgPT09IFwiY3VzdG9tXCIpIHtcclxuICAgICAgdGhpcy5sb2FkQ29tcG9uZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNSb290KSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZXJyb3JDaGFuZ2UuZW1pdCh0aGlzLnJlY3Vyc2l2ZUVycm9yKCkpO1xyXG4gICAgICB9LCAxMCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaCA9IHRoaXMuc2VydmljZS5kaXNwbGF5V2l0aFJlZ2lzdHJ5W3RoaXMuc2NoZW1hLmRpc3BsYXlXaXRoXTtcclxuICAgIGlmICghdGhpcy5jaCkge1xyXG4gICAgICB0aGlzLmNoID0gbmV3IERlZmF1bHRDaG9pY2VIYW5kbGVyKHRoaXMuaHR0cCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGhpcy52YWx1ZSk7XHJcbiAgICB0aGlzLmNob2ljZXMgPSBuZXcgUmVwbGF5U3ViamVjdCgpO1xyXG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSkpIHtcclxuICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgIGZvciAoY29uc3QgaSBvZiB0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgYXJyLnB1c2goeyBuYW1lOiBpLCB2YWx1ZTogaSB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNob2ljZXMubmV4dChhcnIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jaG9pY2VzLm5leHQoW3sgbmFtZTogdGhpcy52YWx1ZSwgdmFsdWU6IHRoaXMudmFsdWUgfV0pO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudmFsdWUgfHwgdGhpcy52YWx1ZSA9PT0gMCkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgIGNvbnN0IGFycjogT2JzZXJ2YWJsZTxDaG9pY2U+W10gPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgdGhpcy52YWx1ZSkge1xyXG4gICAgICAgICAgYXJyLnB1c2godGhpcy5jaC5jaG9pY2UoaSwgdGhpcy5zY2hlbWEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ya0pvaW4oYXJyKS5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5jaG9pY2VzLm5leHQocmVzKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jaFxyXG4gICAgICAgICAgLmNob2ljZSh0aGlzLnZhbHVlLCB0aGlzLnNjaGVtYSlcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKHJlcykgPT4gdGhpcy5jaG9pY2VzLm5leHQoW3Jlc10pKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5maWx0ZXJlZE9wdGlvbnMgPSB0aGlzLmNvbnRyb2wudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgIHN0YXJ0V2l0aCh0aGlzLnZhbHVlKSxcclxuICAgICAgZGVib3VuY2VUaW1lKHRoaXMuY2guZGVib3VuY2VUaW1lKCkpLFxyXG4gICAgICBzd2l0Y2hNYXAoKHgpID0+IHtcclxuICAgICAgICB0aGlzLmNoYW5nZSh7IHRhcmdldDogeyB2YWx1ZTogeCB9IH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoLmZpbHRlcih0aGlzLnZhbHVlLCB0aGlzLnNjaGVtYSwgeCwgdGhpcy5jaG9pY2VzKTtcclxuICAgICAgfSlcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5lZGl0ID0gbmV3IEVkaXQoXHJcbiAgICAgIHRoaXMuc2NoZW1hQ2hhbmdlLFxyXG4gICAgICB0aGlzLm5hbWUsXHJcbiAgICAgIHRoaXMuc2NoZW1hLFxyXG4gICAgICB0aGlzLnBhcmVudFNjaGVtYSxcclxuICAgICAgdGhpcy5kaWFsb2dcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjaG9pY2UgZWxlbWVudCBhY3RpdmF0ZWQgLSBsb2FkIHZhbHVlc1xyXG4gICAqL1xyXG4gIGZvY3VzKCkge1xyXG4gICAgdGhpcy5jaC5sb2FkKHRoaXMudmFsdWUsIHRoaXMuc2NoZW1hKS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICB0aGlzLmNob2ljZXMubmV4dChyZXMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBsb2FkIHNjaGVtYSBmcm9tIHJlZiwgYXBwbHkgcG9pbnRlciBpZiBuZWVkZWRcclxuICAgKi9cclxuICB1cmwocmVmOiBzdHJpbmcsIHBvaW50ZXI6IHN0cmluZykge1xyXG4gICAgLy8gVVJMICsgYW5jaG9yXHJcbiAgICB0aGlzLmJhc2UgPSB0aGlzLmJhc2UgPyBuZXcgVVJMKHJlZiwgdGhpcy5iYXNlKS5ocmVmIDogcmVmO1xyXG5cclxuICAgIC8vIGNoZWNrIHJvb3Qgc2NoZW1hIHJlZmVyZW5jZWQgbWFwXHJcbiAgICBpZiAodGhpcy5yb290U2NoZW1hLnJlZmVyZW5jZWQgJiYgdGhpcy5yb290U2NoZW1hLnJlZmVyZW5jZWRbdGhpcy5iYXNlXSkge1xyXG4gICAgICBjb25zdCByZXMgPSB0aGlzLnJvb3RTY2hlbWEucmVmZXJlbmNlZFt0aGlzLmJhc2VdO1xyXG4gICAgICB0aGlzLnNjaGVtYSA9IHBvaW50ZXIgPyBKc29uUG9pbnRlci5qc29uUG9pbnRlcihyZXMsIHBvaW50ZXIpIDogcmVzO1xyXG4gICAgICB0aGlzLnNldE9yZGVyZWRQcm9wZXJ0aWVzKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZSkuc3Vic2NyaWJlKFxyXG4gICAgICAocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zY2hlbWEgPSBwb2ludGVyID8gSnNvblBvaW50ZXIuanNvblBvaW50ZXIocmVzLCBwb2ludGVyKSA6IHJlcztcclxuICAgICAgICB0aGlzLnNldE9yZGVyZWRQcm9wZXJ0aWVzKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICApO1xyXG5cclxuICAgIC8vIHNldCB0ZW1wb3JhcnkgcHNldWRvIHNjaGVtYVxyXG4gICAgdGhpcy5zY2hlbWEgPSB7IHR5cGU6IFwic3RyaW5nXCIgfTtcclxuICAgIHRoaXMuc2V0T3JkZXJlZFByb3BlcnRpZXMoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGVtaXQgdmFsdWVDaGFuZ2UgZXZlbnQgYW5kIGFsc28gYW55IHZhbGlkYXRpb24gZXJyb3JcclxuICAgKi9cclxuICBlbWl0KGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdChldmVudCk7XHJcbiAgICBpZiAodGhpcy5pc1Jvb3QpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5lcnJvckNoYW5nZS5lbWl0KHRoaXMucmVjdXJzaXZlRXJyb3IoKSk7XHJcbiAgICAgIH0sIDEwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGlmIHRoZSBzY2hlbWEgY2hhbmdlcyBmcm9tIHRoZSBvdXRzaWRlLFxyXG4gICAqIHJlc2V0IHRoZSBjb21wb25lbnQgc3RhdGUgd3J0LiBlcnJvcnMgYW5kIHRoZSBjaG9pY2VzIGNhY2hlXHJcbiAgICovXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuc2NoZW1hKSB7XHJcbiAgICAgIGlmIChjaGFuZ2VzLnNjaGVtYS5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5yb290U2NoZW1hID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy53aWRnZXRIb3N0LnZpZXdDb250YWluZXJSZWYpIHtcclxuICAgICAgICAgIHRoaXMud2lkZ2V0SG9zdC52aWV3Q29udGFpbmVyUmVmLmNsZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjaGFuZ2VzLnN3aXRjaCAmJiAhY2hhbmdlcy5zd2l0Y2guaXNGaXJzdENoYW5nZSgpKSB7XHJcbiAgICAgIGlmICh0aGlzLmdldExheW91dCgpID09PSBcImN1c3RvbVwiKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkQ29tcG9uZW50KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2lkZ2V0SG9zdC52aWV3Q29udGFpbmVyUmVmKSB7XHJcbiAgICAgICAgICB0aGlzLndpZGdldEhvc3Qudmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYW5ndWxhciBwaXBlIHNvcnRpbmcgZnVuY3Rpb24gZm9yIGtleVZhbHVlIC0ga2VlcCB0aGUgSlNPTiBvcmRlciBhbmQgZG8gbm90XHJcbiAgICogb3JkZXIgYWxwaGFiZXRpY2FsbHlcclxuICAgKi9cclxuICBvcmlnaW5hbE9yZGVyID0gKFxyXG4gICAgYTogS2V5VmFsdWU8c3RyaW5nLCBTY2hlbWE+LFxyXG4gICAgYjogS2V5VmFsdWU8c3RyaW5nLCBTY2hlbWE+XHJcbiAgKTogbnVtYmVyID0+IHtcclxuICAgIHJldHVybiAwO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIGtleSBtZXRob2QgdG8gaW5zdHJ1Y3QgdGhlIGRpc3BsYXkgd2hpY2ggSFRNTCBibG9jayB0byBhY3RpdmF0ZS5cclxuICAgKi9cclxuICBnZXRMYXlvdXQoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLnNjaGVtYS5jYXNlICYmIHRoaXMuc2NoZW1hLmNhc2UuaW5kZXhPZih0aGlzLnN3aXRjaCkgPCAwKSB7XHJcbiAgICAgIHJldHVybiBcIm5vbmVcIjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNjaGVtYS53aWRnZXQgPT09IFwiY3VzdG9tXCIpIHtcclxuICAgICAgcmV0dXJuIFwiY3VzdG9tXCI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5oaWRlVW5kZWZpbmVkICYmIHRoaXMudmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICByZXR1cm4gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gXCJvYmplY3RcIikge1xyXG4gICAgICBpZiAodGhpcy5zY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpIHtcclxuICAgICAgICBpZiAodGhpcy5zY2hlbWEubGF5b3V0ID09PSBcInRhYlwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJhZGRpdGlvbmFsUHJvcGVydGllc1RhYlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBcIm9iamVjdFwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09IFwiYXJyYXlcIikge1xyXG4gICAgICBpZiAodGhpcy5zY2hlbWEubGF5b3V0ID09PSBcInRhYlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidGFiXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2NoZW1hLmxheW91dCA9PT0gXCJ0YWJsZVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidGFibGVcIjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zY2hlbWEubGF5b3V0ID09PSBcInNlbGVjdFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiYXJyYXktc2VsZWN0XCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2NoZW1hLmxheW91dCA9PT0gXCJjaGlwc1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiY2hpcHNcIjtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gXCJhcnJheVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2NoZW1hLmVudW0pIHtcclxuICAgICAgcmV0dXJuIFwiZW51bVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2NoZW1hLndpZGdldCA9PT0gXCJkYXRlXCIpIHtcclxuICAgICAgcmV0dXJuIFwiZGF0ZVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2NoZW1hLndpZGdldCA9PT0gXCJ1cGxvYWRcIikge1xyXG4gICAgICByZXR1cm4gXCJ1cGxvYWRcIjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNjaGVtYS53aWRnZXQgPT09IFwidGV4dGFyZWFcIikge1xyXG4gICAgICByZXR1cm4gXCJ0ZXh0YXJlYVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgIHJldHVybiBcImNoZWNrYm94XCI7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zY2hlbWEuY2hvaWNlc1VybCkge1xyXG4gICAgICByZXR1cm4gXCJhdXRvY29tcGxldGVcIjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNjaGVtYS5jaG9pY2VzKSB7XHJcbiAgICAgIHJldHVybiBcImF1dG9jb21wbGV0ZVwiO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2NoZW1hLmRpc3BsYXlXaXRoKSB7XHJcbiAgICAgIHJldHVybiBcImF1dG9jb21wbGV0ZVwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwic2luZ2xlXCI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjYWxsZWQgZnJvbSB0ZW1wbGF0ZSBpbiB0aGUgXCJzaW1wbGVcIiB0eXBlLiBJZiBcInR5cGVcIiBpcyBcIm51bWJlclwiIG9yIFwiaW50ZWdlclwiLFxyXG4gICAqIHRoZSBIVE1MIGlucHV0IHR5cGUgaXMgXCJudW1iZXJcIiB3aGljaCBhdm9pZHMgbm9ybWFsIHN0cmluZyBpbnB1dFxyXG4gICAqL1xyXG4gIGdldElucHV0VHlwZShzY2hlbWE6IFNjaGVtYSk6IHN0cmluZyB7XHJcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgcmV0dXJuIFwibnVtYmVyXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09IFwiaW50ZWdlclwiKSB7XHJcbiAgICAgIHJldHVybiBcIm51bWJlclwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNjaGVtYS53aWRnZXQ7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBldmVudCBoYW5kbGVyIGZvciBvYmplY3QgZGlzcGxheS4gQ2F0Y2hlcyB0aGUgY2hpbGQgY29tcG9uZW50IGV2ZW50IGFuZFxyXG4gICAqIGhhbmRsZSBpdCBieSBzZXR0aW5nIHRoZSB2YWx1ZVtrZXldLlxyXG4gICAqIEFsc28gaW5pdCBudWxsIG9iamVjdHMgd2l0aCB7fVxyXG4gICAqL1xyXG4gIG9uVmFsdWVDaGFuZ2Uoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgIGlmICghdGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0ge307XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlW2tleV0gPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5zY2hlbWEuY29tcHV0ZWQpIHtcclxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3Qua2V5cyh0aGlzLnNjaGVtYS5jb21wdXRlZCkpIHtcclxuICAgICAgICBjb25zdCBleHByZXNzaW9uID0gdGhpcy5zY2hlbWEuY29tcHV0ZWRbZmllbGRdO1xyXG4gICAgICAgIHRoaXMudmFsdWVbZmllbGRdID0ganNvbmF0YShleHByZXNzaW9uKS5ldmFsdWF0ZSh0aGlzLnZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZW1pdCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZCBhbiBlbGVtZW50IHRvIGFuIGFycmF5LlxyXG4gICAqIG51bGwgYXJyYXlzIGFyZSBpbml0aWFsaXplZCB3aXRoIFtdXHJcbiAgICovXHJcbiAgYWRkKCkge1xyXG4gICAgaWYgKCEodGhpcy52YWx1ZSBpbnN0YW5jZW9mIEFycmF5KSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zY2hlbWEuaXRlbXMudHlwZSA9PT0gXCJhcnJheVwiKSB7XHJcbiAgICAgIHRoaXMudmFsdWUucHVzaChbXSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLml0ZW1zLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcclxuICAgICAgdGhpcy52YWx1ZS5wdXNoKHt9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWUucHVzaChudWxsKTtcclxuICAgIH1cclxuICAgIHRoaXMuZW1pdCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGV2ZW50IGhhbmRsZXIgZm9yIGFkZGluZyBhIGZpZWxkXHJcbiAgICovXHJcbiAgYWRkRmllbGQoKSB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudmFsdWVbXCJcIl0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy52YWx1ZVtcIlwiXSA9IG51bGw7XHJcbiAgICB0aGlzLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgYW4gZWxlbWVudCBmcm9tIGFuIGFycmF5XHJcbiAgICovXHJcbiAgcmVtb3ZlKGk6IG51bWJlcikge1xyXG4gICAgdGhpcy52YWx1ZS5zcGxpY2UoaSwgMSk7XHJcbiAgICB0aGlzLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgYSBmaWVsZFxyXG4gICAqL1xyXG4gIHJlbW92ZUZpZWxkKGtleTogc3RyaW5nKSB7XHJcbiAgICBkZWxldGUgdGhpcy52YWx1ZVtrZXldO1xyXG4gICAgdGhpcy5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZXZlbnQgaGFuZGxlciBmb3IgY2hhbmdlZCBmaWVsZCBuYW1lcyB3aXRoIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIlxyXG4gICAqL1xyXG4gIGZpZWxkTmFtZUNoYW5nZShrZXk6IHN0cmluZywgbmV3dmFsdWU6IGFueSkge1xyXG4gICAgdGhpcy52YWx1ZVtuZXd2YWx1ZV0gPSB0aGlzLnZhbHVlW2tleV07XHJcbiAgICBkZWxldGUgdGhpcy52YWx1ZVtrZXldO1xyXG4gICAgdGhpcy5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmV0dXJucyB0aGUgdmFsaWRhdGlvbiBlcnJvciBvbiB0aGlzIGxldmVsIGFuZCBjYWxsIHJlY3Vyc2l2ZWx5IGZvciBhbGwgY2hpbGRyZW4uXHJcbiAgICogcmV0dXJucyBudWxsIGlmIHRoZSBmb3JtIGNvbnRlbnRzIGlzIHZhbGlkXHJcbiAgICovXHJcbiAgcmVjdXJzaXZlRXJyb3IoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGUgPSB0aGlzLmVycm9yKCk7XHJcbiAgICBpZiAoZSkge1xyXG4gICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmNoaWxkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNoaWxkLnJlY3Vyc2l2ZUVycm9yKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jaGlsZHJlbikge1xyXG4gICAgICBmb3IgKGNvbnN0IGMgb2YgdGhpcy5jaGlsZHJlbikge1xyXG4gICAgICAgIGNvbnN0IHIgPSBjLnJlY3Vyc2l2ZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKHIpIHtcclxuICAgICAgICAgIHJldHVybiByO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZXR1cm4gdGhlIGVycm9yIG1lc3NhZ2UgcHJvdmlkZWQgaW4gdGhlIHNjaGVtYSBvciB0aGUgZ2VuZXJpYyBlcnJvciBtZXNzYWdlXHJcbiAgICogcmV0dXJuZWQgZnJvbSB0aGUgdmFsaWRhdGlvbiBjb2RlXHJcbiAgICovXHJcbiAgZShlcnJvcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLnNjaGVtYS5lcnJvck1lc3NhZ2UpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmVycm9yTWVzc2FnZTtcclxuICAgIH1cclxuICAgIHJldHVybiBlcnJvcjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJldHVybiBlcnJvciBzdHJpbmdcclxuICAgKi9cclxuICBlcnJvcigpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuc2NoZW1hLndpZGdldCA9PT0gXCJjdXN0b21cIikge1xyXG4gICAgICByZXR1cm4gdGhpcy5jdXN0b21FcnJvcjtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNjaGVtYS5jYXNlICYmIHRoaXMuc2NoZW1hLmNhc2UuaW5kZXhPZih0aGlzLnN3aXRjaCkgPCAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudmFsdWUpIHtcclxuICAgICAgaWYgKHRoaXMuc2NoZW1hLm1heEl0ZW1zKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcy52YWx1ZS5sZW5ndGggPD0gdGhpcy5zY2hlbWEubWF4SXRlbXMpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5lKFxyXG4gICAgICAgICAgICBcIk9ubHkgXCIgKyB0aGlzLnNjaGVtYS5tYXhJdGVtcyArIFwiIGFycmF5IGVudHJpZXMgYWxsb3dlZFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zY2hlbWEudW5pcXVlSXRlbXMpIHtcclxuICAgICAgICBpZiAoIShuZXcgU2V0KHRoaXMudmFsdWUpLnNpemUgPT09IHRoaXMudmFsdWUubGVuZ3RoKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZShcIkFycmF5IGVudHJpZXMgbXVzdCBiZSB1bmlxdWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5taW5JdGVtcykge1xyXG4gICAgICAgIGlmICghKHRoaXMudmFsdWUubGVuZ3RoID49IHRoaXMuc2NoZW1hLm1pbkl0ZW1zKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZShcclxuICAgICAgICAgICAgXCJBdCBsZWFzdCBcIiArIHRoaXMuc2NoZW1hLm1pbkl0ZW1zICsgXCIgYXJyYXkgZW50cmllcyByZXF1aXJlZFwiXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zY2hlbWEubWF4UHJvcGVydGllcykge1xyXG4gICAgICAgIGlmICghKE9iamVjdC5rZXlzKHRoaXMudmFsdWUpLmxlbmd0aCA8PSB0aGlzLnNjaGVtYS5tYXhQcm9wZXJ0aWVzKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZShcclxuICAgICAgICAgICAgXCJPbmx5IFwiICsgdGhpcy5zY2hlbWEubWF4UHJvcGVydGllcyArIFwiIGZpZWxkcyBhbGxvd2VkXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5wcm9wZXJ0eU5hbWVzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy52YWx1ZSkpIHtcclxuICAgICAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCh0aGlzLnNjaGVtYS5wcm9wZXJ0eU5hbWVzKTtcclxuICAgICAgICAgIGlmICghcmUudGVzdChrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmUoXCJpbGxlZ2FsIGZpZWxkIG5hbWU6IFwiICsga2V5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2NoZW1hLmRlcGVuZGVuY2llcykge1xyXG4gICAgICAgIGZvciAoY29uc3QgZGVwIG9mIE9iamVjdC5rZXlzKHRoaXMuc2NoZW1hLmRlcGVuZGVuY2llcykpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnZhbHVlW2RlcF0pIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBsIG9mIHRoaXMuc2NoZW1hLmRlcGVuZGVuY2llc1tkZXBdKSB7XHJcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbHVlW2xdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lKGRlcCArIFwiIGRlcGVuZHMgb24gXCIgKyBsKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2NoZW1hLm1pblByb3BlcnRpZXMpIHtcclxuICAgICAgICBpZiAoIShPYmplY3Qua2V5cyh0aGlzLnZhbHVlKS5sZW5ndGggPj0gdGhpcy5zY2hlbWEubWluUHJvcGVydGllcykpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmUoXHJcbiAgICAgICAgICAgIFwiQXQgbGVhc3QgXCIgKyB0aGlzLnNjaGVtYS5taW5Qcm9wZXJ0aWVzICsgXCIgZmllbGRzIHJlcXVpcmVkXCJcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5tYXhMZW5ndGgpIHtcclxuICAgICAgICBpZiAoISgoXCJcIiArIHRoaXMudmFsdWUpLmxlbmd0aCA8PSB0aGlzLnNjaGVtYS5tYXhMZW5ndGgpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5lKFwiSW5wdXQgaXMgbG9uZ2VyIHRoYW4gXCIgKyB0aGlzLnNjaGVtYS5tYXhMZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zY2hlbWEubWluTGVuZ3RoKSB7XHJcbiAgICAgICAgaWYgKCEoKFwiXCIgKyB0aGlzLnZhbHVlKS5sZW5ndGggPj0gdGhpcy5zY2hlbWEubWluTGVuZ3RoKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZShcIklucHV0IGlzIHNob3J0ZXIgdGhhbiBcIiArIHRoaXMuc2NoZW1hLm1pbkxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnNjaGVtYS5tdWx0aXBsZU9mKSB7XHJcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKE51bWJlcih0aGlzLnZhbHVlKSAvIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5lKFwiTXVzdCBiZSBtdWx0aXBsZSBvZiBcIiArIHRoaXMuc2NoZW1hLm11bHRpcGxlT2YpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkge1xyXG4gICAgICAgIGlmICghKE51bWJlcih0aGlzLnZhbHVlKSA8IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5lKFwiTXVzdCBiZSBsZXNzIHRoYW4gXCIgKyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2NoZW1hLm1heGltdW0pIHtcclxuICAgICAgICBpZiAoIShOdW1iZXIodGhpcy52YWx1ZSkgPD0gdGhpcy5zY2hlbWEubWF4aW11bSkpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmUoXCJNdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCBcIiArIHRoaXMuc2NoZW1hLm1heGltdW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkge1xyXG4gICAgICAgIGlmICghKE51bWJlcih0aGlzLnZhbHVlKSA+IHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5lKFwiTXVzdCBncmVhdGVyIHRoYW4gXCIgKyB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2NoZW1hLm1pbmltdW0pIHtcclxuICAgICAgICBpZiAoIShOdW1iZXIodGhpcy52YWx1ZSkgPj0gdGhpcy5zY2hlbWEubWluaW11bSkpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmUoXCJNdXN0IGdyZWF0ZXIgdGhhbiBvciBlcXVhbCBcIiArIHRoaXMuc2NoZW1hLm1pbmltdW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcclxuICAgICAgaWYgKHRoaXMudmFsdWUgPT0gbnVsbCB8fCBPYmplY3QuaXModGhpcy52YWx1ZSwgTmFOKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmUoXCJyZXF1aXJlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2NoZW1hLnJlcXVpcmVkKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZGVwIG9mIHRoaXMuc2NoZW1hLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgIXRoaXMudmFsdWVbZGVwXSAmJlxyXG4gICAgICAgICAgdGhpcy52YWx1ZVtkZXBdICE9PSBmYWxzZSAmJlxyXG4gICAgICAgICAgdGhpcy52YWx1ZVtkZXBdICE9PSAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICAvLyBpZ25vcmUgJ3JlcXVpcmVkJyBpZiBkZXAgaXMgaW5hY3RpdmUgZHVlIHRvIHN3aXRjaCAvIGNhc2VcclxuICAgICAgICAgIGxldCBpbmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgaWYgKHRoaXMuc2NoZW1hLnN3aXRjaCkge1xyXG4gICAgICAgICAgICBjb25zdCBzd2l0YyA9IHRoaXMudmFsdWVbdGhpcy5zY2hlbWEuc3dpdGNoXTtcclxuICAgICAgICAgICAgaWYgKHN3aXRjICYmIHRoaXMuc2NoZW1hLnByb3BlcnRpZXNbZGVwXS5jYXNlPy5pbmRleE9mKHN3aXRjKSA8IDApIHtcclxuICAgICAgICAgICAgICBpbmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGlmICghaW5hY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZShkZXAgKyBcIiBpcyByZXF1aXJlZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNjaGVtYS5wYXR0ZXJuKSB7XHJcbiAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCh0aGlzLnNjaGVtYS5wYXR0ZXJuKTtcclxuICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZShcImlsbGVnYWwgc3RyaW5nXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmUudGVzdCh0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmUoXCJpbGxlZ2FsIHN0cmluZ1wiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2NoZW1hLmZvcm1hdCAmJiB0aGlzLnNlcnZpY2UuZm9ybWF0c1t0aGlzLnNjaGVtYS5mb3JtYXRdKSB7XHJcbiAgICAgIGNvbnN0IHJlID0gbmV3IFJlZ0V4cCh0aGlzLnNlcnZpY2UuZm9ybWF0c1t0aGlzLnNjaGVtYS5mb3JtYXRdKTtcclxuICAgICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZShcImlsbGVnYWwgc3RyaW5nXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghcmUudGVzdCh0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmUoXCJpbGxlZ2FsIHN0cmluZ1wiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiB1c2UgdGhlIGVsZW1lbnQgdGl0bGUgaWYgcHJlc2VudCwgZGVmYXVsdHMgdG8gdGhlIGxhYmVsIGlucHV0IG9yIFwiXCIgaXMgYm90aCBhcmUgbnVsbFxyXG4gICAqL1xyXG4gIGdldExhYmVsKCk6IHN0cmluZyB7XHJcbiAgICBpZiAodGhpcy5zY2hlbWEudGl0bGUpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLnRpdGxlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMubGFiZWwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubGFiZWw7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGlucHV0IGVsZW1lbnQgY2hhbmdlIGhhbmRsZXIuXHJcbiAgICogbm9ybWFsaXplIHRoZSBkaWZmZXJlbnQga2luZCBvZiBldmVudHMsIGhhbmRsZSB0aGUgZGF0YXR5cGVzLCBzZXQgdGhlIHZhbHVlIGFuZCBlbWl0IHRoZSBjaGFuZ2VcclxuICAgKi9cclxuICBjaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgbGV0IGV2ZW50VGFyZ2V0OiBhbnk7XHJcblxyXG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgTWF0U2VsZWN0Q2hhbmdlKSB7XHJcbiAgICAgIGV2ZW50ID0gZXZlbnQudmFsdWU7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgTWF0RGF0ZXBpY2tlcklucHV0RXZlbnQpIHtcclxuICAgICAgZXZlbnQgPSB0aGlzLnNlcmlhbGl6ZURhdGUoXHJcbiAgICAgICAgZXZlbnQudmFsdWUsXHJcbiAgICAgICAgdGhpcy5zY2hlbWEuZGF0ZUZvcm1hdCxcclxuICAgICAgICB0aGlzLnNjaGVtYS50eXBlXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2UgaWYgKGV2ZW50IGluc3RhbmNlb2YgTWF0QXV0b2NvbXBsZXRlU2VsZWN0ZWRFdmVudCkge1xyXG4gICAgICBldmVudCA9IGV2ZW50Lm9wdGlvbi52YWx1ZTtcclxuICAgIH0gZWxzZSBpZiAoZXZlbnQgaW5zdGFuY2VvZiBNYXRDaGVja2JveENoYW5nZSkge1xyXG4gICAgICBldmVudCA9IGV2ZW50LmNoZWNrZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBzYXZlIHRoZSBldmVudCB0YXJnZXQgaW4gY2FzZSB0aGUgcGFyc2luZyBjaGFuZ2VzIHRoZSB2YWx1ZVxyXG4gICAgICAvLyAoZS5nLiBpbnRlZ2VyIGlucHV0IDUuMyBiZWNvbWVzIDUsIHRoaXMgaXMgcmVmbGVjdGVkIG9uIHRoZSBVSSB2aWEgdGhpcyBoYW5kbGUpXHJcbiAgICAgIGV2ZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICBldmVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQgPT09IFwiXCIpIHtcclxuICAgICAgZXZlbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudCA9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBwYXJzZUZsb2F0KGV2ZW50KTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gXCJpbnRlZ2VyXCIpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHBhcnNlSW50KGV2ZW50LCAxMCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLnR5cGUgPT09IFwiYm9vbGVhblwiKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgZXZlbnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICBpZiAoZXZlbnQgPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50ID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgICAgIHRoaXMudmFsdWUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBldmVudDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS50eXBlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBldmVudDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEudHlwZSA9PT0gXCJhcnJheVwiKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBldmVudDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInVua25vd24gdHlwZTogXCIgKyB0aGlzLnNjaGVtYS50eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhbGxvd3MgZm9yIHRoZSByZXN1bHQgb2YgYSBmaWxlIHVwbG9hZCB0byBiZSB3cml0dGVuIGludG8gYSB0ZXh0IGZvcm0gZWxlbWVudFxyXG4gICAqL1xyXG4gIGhhbmRsZUZpbGVJbnB1dChldmVudDogYW55KSB7XHJcbiAgICBpZiAoMTAyNCAqIDEwMjQgPD0gZXZlbnQudGFyZ2V0LmZpbGVzLml0ZW0oMCkuc2l6ZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRoZSBmaWxlIHNpemUgaXMgbGltaXRlZCB0byAxTUJcIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnZhbHVlID0gcmVhZGVyLnJlc3VsdDtcclxuICAgICAgdGhpcy5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgfTtcclxuICAgXHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChldmVudC50YXJnZXQuZmlsZXMuaXRlbSgwKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBnZXQgZXhhbXBsZSB2YWx1ZXMgZnJvbSBleGFtcGxlIGFycmF5IGFuZCBkZWZhdWx0XHJcbiAgICovXHJcbiAgZXhhbXBsZSgpOiBzdHJpbmcge1xyXG4gICAgaWYgKHRoaXMuc2NoZW1hLmV4YW1wbGVzICYmIHRoaXMuc2NoZW1hLmV4YW1wbGVzWzBdKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5leGFtcGxlc1swXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLnNjaGVtYS5kZWZhdWx0KSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5kZWZhdWx0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBsb2FkIHRoZSBkeW5hbWljIGN1c3RvbSB3aWRnZXRcclxuICAgKi9cclxuICBsb2FkQ29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50RmFjdG9yeSA9XHJcbiAgICAgIHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxyXG4gICAgICAgIHRoaXMuc2VydmljZS5yZWdpc3RyeVt0aGlzLnNjaGVtYS53aWRnZXRUeXBlXVxyXG4gICAgICApO1xyXG4gICAgY29uc3Qgdmlld0NvbnRhaW5lclJlZiA9IHRoaXMud2lkZ2V0SG9zdC52aWV3Q29udGFpbmVyUmVmO1xyXG4gICAgdmlld0NvbnRhaW5lclJlZi5jbGVhcigpO1xyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoY29tcG9uZW50RmFjdG9yeSk7XHJcblxyXG4gICAgLy8gaW5wdXQgdmFsdWVzXHJcbiAgICAoY29tcG9uZW50UmVmLmluc3RhbmNlIGFzIFdpZGdldENvbXBvbmVudCkubGFiZWwgPSB0aGlzLmxhYmVsO1xyXG4gICAgKGNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBXaWRnZXRDb21wb25lbnQpLnZhbHVlID0gdGhpcy52YWx1ZTtcclxuICAgIChjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgV2lkZ2V0Q29tcG9uZW50KS5zY2hlbWEgPSB0aGlzLnNjaGVtYTtcclxuICAgIChjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgV2lkZ2V0Q29tcG9uZW50KS5yb290U2NoZW1hID0gdGhpcy5yb290U2NoZW1hO1xyXG4gICAgKGNvbXBvbmVudFJlZi5pbnN0YW5jZSBhcyBXaWRnZXRDb21wb25lbnQpLnJvb3RWYWx1ZSA9IHRoaXMucm9vdFZhbHVlO1xyXG5cclxuICAgIC8vIHN1YnNjcmliZSB0byB2YWx1ZSBjaGFuZ2VzIGFuZCBmb3J3YXJkIHRoZW1cclxuICAgIChjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgV2lkZ2V0Q29tcG9uZW50KS52YWx1ZUNoYW5nZS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgdGhpcy52YWx1ZSA9IGRhdGE7XHJcbiAgICAgIHRoaXMuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIHN1YnNjcmliZSB0byBlcnJvciBjaGFuZ2VzIGFuZCBmb3J3YXJkIHRoZW1cclxuICAgIChjb21wb25lbnRSZWYuaW5zdGFuY2UgYXMgV2lkZ2V0Q29tcG9uZW50KS5lcnJvckNoYW5nZS5zdWJzY3JpYmUoXHJcbiAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VzdG9tRXJyb3IgPSBlcnJvcjtcclxuICAgICAgICB0aGlzLmVycm9yQ2hhbmdlLmVtaXQoZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdXNlZCBmb3IgZXhwYW5zaW9uIHBhbmVscyAtIHNldCB2YWx1ZSBhbmQgZm9yd2FyZCBldmVudFxyXG4gICAqL1xyXG4gIHNldEFuZEVtaXQoZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy52YWx1ZSA9IGV2ZW50O1xyXG4gICAgdGhpcy5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IGFuIGFycmF5IGVsZW1lbnQgYW5kIGVtaXQgdmFsdWUgY2hhbmdlIGV2ZW50XHJcbiAgICovXHJcbiAgc2V0SW5kZXhBbmRFbWl0KGk6IG51bWJlciwgZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy52YWx1ZVtpXSA9IGV2ZW50O1xyXG4gICAgdGhpcy5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IGFuIGFycmF5IGVsZW1lbnQncyBmaWVsZCBhbmQgZW1pdCB2YWx1ZSBjaGFuZ2UgZXZlbnQgKGFwcGxpZXMgdG8gdGFibGUgbGF5b3V0KVxyXG4gICAqL1xyXG4gIHNldEluZGV4QW5kRW1pdFRhYmxlKGk6IG51bWJlciwgZmllbGQ6IHN0cmluZywgZXZlbnQ6IGFueSkge1xyXG4gICAgdGhpcy52YWx1ZVtpXVtmaWVsZF0gPSBldmVudDtcclxuICAgIHRoaXMuZW1pdCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHVzZWQgd2hlbiBoaWRlVW5kZWZpbmVkIGlzIGFjdGl2ZS4gQ2FsbGVkIGZyb20gdGhlIFVJIHRvXHJcbiAgICogc2hvdyBhIHByb3BlcnR5IHdpdGggdW5kZWZpbmVkIHZhbHVlIChpbiBvcmRlciB0byBiZSBhYmxlIHRvIHNldCBpZiBpbiB0aGUgZm9ybSlcclxuICAgKi9cclxuICBzaG93UHJvcGVydHkocHJvcDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMudmFsdWVbcHJvcF0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB0aGlzLnZhbHVlW3Byb3BdID0gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy52YWx1ZVtwcm9wXSA9PT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnZhbHVlW3Byb3BdID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogdXNlZCB3aGVuIGhpZGVVbmRlZmluZWQgaXMgYWN0aXZlLiBDYWxsZWQgZnJvbSB0aGUgVUlcclxuICAgKiB0byBkZXRlcm1pbmUgd2hpY2ggcHJvcGVydGllcyBhcmUgaW5jbHVkZWQgaW4gdGhlIFwidG8gYWRkXCIgbGlzdFxyXG4gICAqL1xyXG4gIHNob3dQcm9wZXJ0eUxpc3QoKTogc3RyaW5nW10ge1xyXG4gICAgaWYgKHRoaXMuc2NoZW1hLnN3aXRjaCAmJiB0aGlzLnZhbHVlKSB7XHJcbiAgICAgIGNvbnN0IHN3ID0gdGhpcy52YWx1ZVt0aGlzLnNjaGVtYS5zd2l0Y2hdO1xyXG4gICAgICBjb25zdCBwcm9wcyA9IFtdO1xyXG4gICAgICBmb3IgKGNvbnN0IFtrLCB2XSBvZiBPYmplY3QuZW50cmllcyh0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzKSkge1xyXG4gICAgICAgIGlmICh2LmNhc2UpIHtcclxuICAgICAgICAgIGlmICh2LmNhc2UuaW5jbHVkZXMoc3cpKSB7XHJcbiAgICAgICAgICAgIHByb3BzLnB1c2goayk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHByb3BzLnB1c2goayk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBwcm9wcy5zb3J0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5zY2hlbWEucHJvcGVydGllcykuc29ydCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc3RyaW5nIHRvIGRhdGVcclxuICAgKiBAcGFyYW0gZGF0ZSAgICBkYXRlIHN0cmluZyAvIG51bWJlciAobWlsbGlzZWNzIHNpbmNlIDE5NzApXHJcbiAgICogQHBhcmFtIGZvcm1hdCAgZGF0ZSBmb3JtYXRcclxuICAgKi9cclxuICBwYXJzZURhdGUoZGF0ZTogYW55LCBmb3JtYXQ6IHN0cmluZyk6IERhdGUge1xyXG4gICAgaWYgKCFkYXRlICYmIGRhdGUgIT09IDApIHtcclxuICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGRhdGUgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuc2FtZURhdGUobmV3IERhdGUoZGF0ZSkpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFmb3JtYXQpIHtcclxuICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwZGF0ZSA9IGRhdGUuc3BsaXQodGhpcy5nZXREZWxpbWl0ZXIoZm9ybWF0KSk7XHJcbiAgICBjb25zdCBwZm9ybWF0ID0gZm9ybWF0LnNwbGl0KHRoaXMuZ2V0RGVsaW1pdGVyKGZvcm1hdCkpO1xyXG4gICAgcmV0dXJuIHRoaXMuc2FtZURhdGUoXHJcbiAgICAgIG5ldyBEYXRlKFxyXG4gICAgICAgIHBkYXRlW3Bmb3JtYXQuaW5kZXhPZihcInl5eXlcIildLFxyXG4gICAgICAgIHBkYXRlW3Bmb3JtYXQuaW5kZXhPZihcIk1NXCIpXSAtIDEsXHJcbiAgICAgICAgcGRhdGVbcGZvcm1hdC5pbmRleE9mKFwiZGRcIildXHJcbiAgICAgIClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBtYWtlIHN1cmUgdG8gcmV0dXJuIHRoZSBzYW1lIGRhdGUgb2JqZWN0IGluc3RhbmNlIChjYW5ub3QgZGVsZXRlIGRhdGUgIzgzKVxyXG4gICAqL1xyXG4gIHNhbWVEYXRlKG5kOiBEYXRlKTogRGF0ZSB7XHJcbiAgICBpZiAoIXRoaXMuZGF0ZSkge1xyXG4gICAgICB0aGlzLmRhdGUgPSBuZDtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmRhdGUuZ2V0VGltZSgpICE9PSBuZC5nZXRUaW1lKCkpIHtcclxuICAgICAgdGhpcy5kYXRlID0gbmQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5kYXRlO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZGF0ZSB0byBzdHJpbmdcclxuICAgKiBAcGFyYW0gZGF0ZSAgICB0aGUgZGF0ZSB0byBzZXJpYWxpemVcclxuICAgKiBAcGFyYW0gZm9ybWF0ICB0aGUgZGF0ZSBmb3JtYXQgKGUuZy4gZGQtTU0teXl5eSlcclxuICAgKiBAcGFyYW0gdHlwZSAgICB0YXJnZXQgZGF0YXR5cGUgKGFsbG93cyBzZXJpYWxpemluZyB0byBtaWxsaXNlY3Mgc2luY2UgMTk3MClcclxuICAgKi9cclxuICBzZXJpYWxpemVEYXRlKGRhdGU6IERhdGUsIGZvcm1hdDogc3RyaW5nLCB0eXBlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKGRhdGUgPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSBcImludGVnZXJcIiB8fCB0eXBlID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgIHJldHVybiBcIlwiICsgZGF0ZS52YWx1ZU9mKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvcm1hdCkge1xyXG4gICAgICByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGZvcm1hdCA9IGZvcm1hdC5zcGxpdCh0aGlzLmdldERlbGltaXRlcihmb3JtYXQpKTtcclxuICAgIGNvbnN0IHBkYXRlID0gW251bGwsIG51bGwsIG51bGxdO1xyXG4gICAgcGRhdGVbcGZvcm1hdC5pbmRleE9mKFwieXl5eVwiKV0gPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICBwZGF0ZVtwZm9ybWF0LmluZGV4T2YoXCJNTVwiKV0gPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgcGRhdGVbcGZvcm1hdC5pbmRleE9mKFwiZGRcIildID0gZGF0ZS5nZXREYXRlKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBwZGF0ZVswXSArXHJcbiAgICAgIHRoaXMuZ2V0RGVsaW1pdGVyKGZvcm1hdCkgK1xyXG4gICAgICBwZGF0ZVsxXSArXHJcbiAgICAgIHRoaXMuZ2V0RGVsaW1pdGVyKGZvcm1hdCkgK1xyXG4gICAgICBwZGF0ZVsyXVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZpbmQgdGhlIGZpcnN0IG5vbiBsZXR0ZXIgY2hhcmFjdGVyIGluIGEgZGF0ZSBmb3JtYXQgc3VjaCBhcyBkZC9NTS95eXl5IChyZXR1cm5zIC8pXHJcbiAgICovXHJcbiAgZ2V0RGVsaW1pdGVyKGZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGRlbGltID0gZm9ybWF0Lm1hdGNoKC9cXFcvZyk7XHJcbiAgICBpZiAoIWRlbGltWzBdKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGRlbGltaXRlciBmb3VuZCBpbiBkYXRlIGZvcm1hdDogXCIgKyBmb3JtYXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlbGltWzBdO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogbmV3IGNoaXAgZW50ZXJlZFxyXG4gICAqL1xyXG4gIGFkZENoaXAoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LmlucHV0O1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC52YWx1ZTtcclxuXHJcbiAgICAvLyBBZGQgb3VyIGZydWl0XHJcbiAgICBpZiAoKHZhbHVlIHx8IFwiXCIpLnRyaW0oKSkge1xyXG4gICAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gW107XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy52YWx1ZS5wdXNoKHZhbHVlLnRyaW0oKSk7XHJcbiAgICAgIHRoaXMuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXNldCB0aGUgaW5wdXQgdmFsdWVcclxuICAgIGlmIChpbnB1dCkge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW1vdmUgYSBjaGlwXHJcbiAgICovXHJcbiAgcmVtb3ZlQ2hpcCh2OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy52YWx1ZS5pbmRleE9mKHYpO1xyXG4gICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgdGhpcy52YWx1ZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBjaGlwcyBkJmQgaGFuZGxlclxyXG4gICAqL1xyXG4gIGRyb3BDaGlwKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLnZhbHVlLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgdGhpcy5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxufVxyXG4iLCI8bWF0LWV4cGFuc2lvbi1wYW5lbCAqbmdJZj1cIihzY2hlbWEuZXhwYW5kZWQgPT09IHRydWUgfHwgc2NoZW1hLmV4cGFuZGVkID09PSBmYWxzZSkgJiYgIWluRXhwYW5zaW9uXCJcclxuICBbbmdTdHlsZV09XCJzY2hlbWEuc3R5bGVcIiBbbmdDbGFzc109XCJzY2hlbWEuY2xhc3NcIiBbZXhwYW5kZWRdPVwic2NoZW1hLmV4cGFuZGVkXCI+XHJcbiAgPG1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyPlxyXG4gICAgPG1hdC1wYW5lbC10aXRsZT57e2xhYmVsfX08L21hdC1wYW5lbC10aXRsZT5cclxuICAgIDxtYXQtcGFuZWwtZGVzY3JpcHRpb24+e3tzY2hlbWEuZGVzY3JpcHRpb259fTwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxyXG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XHJcbiAgPGxpYi1qc29uLXNjaGVtYS1mb3JtICNjaGlsZCBbbGFiZWxdPVwibGFiZWxcIiBbbmFtZV09XCJuYW1lXCIgW3ZhbHVlXT1cInZhbHVlXCIgKHZhbHVlQ2hhbmdlKT1cInNldEFuZEVtaXQoJGV2ZW50KVwiXHJcbiAgICBbc3dpdGNoXT1cInN3aXRjaFwiIFtyb290VmFsdWVdPVwicm9vdFZhbHVlXCIgW3Jvb3RTY2hlbWFdPVwicm9vdFNjaGVtYVwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW2luRXhwYW5zaW9uXT1cInRydWVcIlxyXG4gICAgW2Jhc2VdPVwiYmFzZVwiIChzY2hlbWFDaGFuZ2UpPVwic2NoZW1hQ2hhbmdlLmVtaXQoKVwiPlxyXG4gIDwvbGliLWpzb24tc2NoZW1hLWZvcm0+XHJcbjwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cclxuXHJcbjxkaXYgKm5nSWY9XCIoc2NoZW1hLmV4cGFuZGVkID09PSBudWxsIHx8IHNjaGVtYS5leHBhbmRlZCA9PT0gdW5kZWZpbmVkKSB8fCBpbkV4cGFuc2lvblwiXHJcbiAgW21hdFRvb2x0aXBdPVwic2NoZW1hLmRlc2NyaXB0aW9uXCI+XHJcblxyXG4gIDxkaXYgKm5nSWY9XCJzZXJ2aWNlLmVkaXRNb2RlICYmICFzY2hlbWEuc3RhdGljICYmICFpbkFycmF5ICYmIGdldExheW91dCgpICE9PSAnbm9uZSdcIj5cclxuICAgIDxtYXQtaWNvbiBzdHlsZT1cImN1cnNvcjogcG9pbnRlclwiIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCJcclxuICAgICAgW21hdFRvb2x0aXBdPVwibmFtZSA/ICdGb3JtIGVsZW1lbnQgJytuYW1lIDogKGlzUm9vdCA/ICdGb3JtIHJvb3QnIDogJycpXCI+XHJcbiAgICAgIG1vcmVfdmVydFxyXG4gICAgPC9tYXQtaWNvbj5cclxuXHJcbiAgICA8bWF0LW1lbnUgI21lbnU9XCJtYXRNZW51XCI+XHJcbiAgICAgIDxidXR0b24gbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiZWRpdC5lZGl0KClcIj5cclxuICAgICAgICA8bWF0LWljb24+ZWRpdDwvbWF0LWljb24+RWRpdFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWVkaXQuY2FuQWRkKClcIiBtYXQtbWVudS1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XCJtYWRkXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPmFkZDwvbWF0LWljb24+U2hvd1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWVkaXQuY2FuQWRkU3ViKClcIiBtYXQtbWVudS1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XCJtYWRkMlwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5wbGF5bGlzdF9hZGQ8L21hdC1pY29uPlNob3cgaW5saW5lXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIgIWVkaXQuY2FuSGlkZSgpXCIgbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiZWRpdC5oaWRlKClcIj5cclxuICAgICAgICA8bWF0LWljb24+cmVtb3ZlPC9tYXQtaWNvbj5IaWRlXHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIFtkaXNhYmxlZF09XCIhZWRpdC5jYW5VcCgpXCIgbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiZWRpdC51cCgpXCI+XHJcbiAgICAgICAgPG1hdC1pY29uPm5vcnRoX3dlc3Q8L21hdC1pY29uPlVwIC8gTGVmdFxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWVkaXQuY2FuRG93bigpXCIgbWF0LW1lbnUtaXRlbSAoY2xpY2spPVwiZWRpdC5kb3duKClcIj5cclxuICAgICAgICA8bWF0LWljb24+c291dGhfZWFzdDwvbWF0LWljb24+RG93biAvIFJpZ2h0XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtbWVudT5cclxuXHJcbiAgICA8bWF0LW1lbnUgI21hZGQ9XCJtYXRNZW51XCI+XHJcbiAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IHggb2YgZWRpdC5hZGRhYmxlKClcIiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJlZGl0LmFkZCh4KVwiPnt7eH19PC9idXR0b24+XHJcbiAgICA8L21hdC1tZW51PlxyXG5cclxuICAgIDxtYXQtbWVudSAjbWFkZDI9XCJtYXRNZW51XCI+XHJcbiAgICAgIDxidXR0b24gKm5nRm9yPVwibGV0IHggb2YgZWRpdC5zdWJhZGRhYmxlKClcIiBtYXQtbWVudS1pdGVtIChjbGljayk9XCJlZGl0LmFkZFN1Yih4KVwiPnt7eH19PC9idXR0b24+XHJcbiAgICA8L21hdC1tZW51PlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIG9iamVjdCByb3cgd3JhcCBsYXlvdXQgLS0+XHJcbiAgPHNwYW4gKm5nSWY9XCJnZXRMYXlvdXQoKSA9PT0gJ29iamVjdCdcIiBbZnhMYXlvdXRdPVwic2NoZW1hLmxheW91dCA9PT0gJ3ZlcnRpY2FsJyA/ICdjb2x1bW4nIDogJ3JvdyB3cmFwJ1wiXHJcbiAgICBbbmdTdHlsZV09XCJzY2hlbWEuc3R5bGVcIiBbbmdDbGFzc109XCJzY2hlbWEuY2xhc3NcIj5cclxuICAgIDxkaXYgKm5nRm9yPVwibGV0IG9wIG9mIG9yZGVyZWRQcm9wZXJ0aWVzXCIgW2Z4TGF5b3V0XT1cInNjaGVtYS5sYXlvdXQgIT09ICd2ZXJ0aWNhbCcgPyAnY29sdW1uJyA6ICdyb3cgd3JhcCdcIj5cclxuICAgICAgPGRpdiAqbmdGb3I9XCIgbGV0IHggb2Ygb3AgfCBrZXl2YWx1ZTpvcmlnaW5hbE9yZGVyXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBtYXJnaW46IDJweFwiPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJ4LnZhbHVlICYmICh4LnZhbHVlLnR5cGUgfHwgeC52YWx1ZS4kcmVmKVwiPlxyXG4gICAgICAgICAgPGxpYi1qc29uLXNjaGVtYS1mb3JtICNjaGlsZHJlbiBbbmFtZV09XCJ4LmtleVwiIFtsYWJlbF09XCJ4LnZhbHVlLnRpdGxlID8geC52YWx1ZS50aXRsZSA6IHgua2V5XCJcclxuICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlID8gdmFsdWVbeC5rZXldIDogdW5kZWZpbmVkXCIgKHZhbHVlQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoeC5rZXksICRldmVudClcIlxyXG4gICAgICAgICAgICBbc3dpdGNoXT1cInZhbHVlID8gdmFsdWVbc2NoZW1hLnN3aXRjaF0gOiB1bmRlZmluZWRcIiBbcm9vdFZhbHVlXT1cInJvb3RWYWx1ZVwiIFtyb290U2NoZW1hXT1cInJvb3RTY2hlbWFcIlxyXG4gICAgICAgICAgICBbc2NoZW1hXT1cIngudmFsdWVcIiBbcGFyZW50U2NoZW1hXT1cInNjaGVtYVwiXHJcbiAgICAgICAgICAgIFtyZXF1aXJlZF09XCJzY2hlbWEucmVxdWlyZWQgPyBzY2hlbWEucmVxdWlyZWQuaW5jbHVkZXMoeC5rZXkpIDogZmFsc2VcIlxyXG4gICAgICAgICAgICBbaGlkZVVuZGVmaW5lZF09XCJzY2hlbWEuaGlkZVVuZGVmaW5lZFwiIFtiYXNlXT1cImJhc2VcIiAoc2NoZW1hQ2hhbmdlKT1cInNjaGVtYUNoYW5nZS5lbWl0KClcIj5cclxuICAgICAgICAgIDwvbGliLWpzb24tc2NoZW1hLWZvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2ICpuZ0lmPVwic2NoZW1hLmhpZGVVbmRlZmluZWRcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMjBweDtcIj5cclxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIj5cclxuICAgICAgICA8bWF0LWljb24+bW9yZV92ZXJ0PC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cclxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCB4IG9mIHNob3dQcm9wZXJ0eUxpc3QoKVwiPlxyXG4gICAgICAgICAgPG1hdC1jaGVja2JveCBbZGlzYWJsZWRdPVwidmFsdWUgPyB2YWx1ZVt4XSA6IGZhbHNlXCIgW2NoZWNrZWRdPVwidmFsdWUgJiYgKHZhbHVlW3hdICE9PSB1bmRlZmluZWQpXCJcclxuICAgICAgICAgICAgKGNoYW5nZSk9XCJzaG93UHJvcGVydHkoeClcIj5cclxuICAgICAgICAgICAge3t4fX1cclxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21hdC1tZW51PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIGFkZGl0aW9uYWwgcHJvcGVydGllcyAtLT5cclxuICA8c3BhbiAqbmdJZj1cImdldExheW91dCgpID09PSAnYWRkaXRpb25hbFByb3BlcnRpZXMnXCIgW2Z4TGF5b3V0XT1cInNjaGVtYS5sYXlvdXQgPT09ICd2ZXJ0aWNhbCcgPyAnY29sdW1uJyA6ICdyb3cgd3JhcCdcIlxyXG4gICAgW25nU3R5bGVdPVwic2NoZW1hLnN0eWxlXCIgW25nQ2xhc3NdPVwic2NoZW1hLmNsYXNzXCI+XHJcbiAgICA8ZGl2ICpuZ0Zvcj1cImxldCB4IG9mIHZhbHVlIHwga2V5dmFsdWU6b3JpZ2luYWxPcmRlcjsgbGV0IGk9aW5kZXhcIlxyXG4gICAgICBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbjogMnB4OyBwb3NpdGlvbjogcmVsYXRpdmVcIiAobW91c2VlbnRlcik9XCJob3Zlcj1pXCIgKG1vdXNlbGVhdmUpPVwiaG92ZXI9bnVsbFwiPlxyXG4gICAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPG1hdC1sYWJlbD57e2dldExhYmVsKCl9fSBrZXk8L21hdC1sYWJlbD5cclxuICAgICAgICA8aW5wdXQgW2Rpc2FibGVkXT1cInJlYWRPbmx5XCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgbWF0SW5wdXQgW3ZhbHVlXT1cIngua2V5XCJcclxuICAgICAgICAgIChjaGFuZ2UpPVwiZmllbGROYW1lQ2hhbmdlKHgua2V5LCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxyXG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAmbmJzcDtcclxuICAgICAgPGxpYi1qc29uLXNjaGVtYS1mb3JtICNjaGlsZHJlbiBbbGFiZWxdPVwiZ2V0TGFiZWwoKSArICcgdmFsdWUnXCIgW3ZhbHVlXT1cInZhbHVlW3gua2V5XVwiXHJcbiAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoeC5rZXksICRldmVudClcIiBbcm9vdFZhbHVlXT1cInJvb3RWYWx1ZVwiIFtyb290U2NoZW1hXT1cInJvb3RTY2hlbWFcIlxyXG4gICAgICAgIFtzY2hlbWFdPVwic2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzXCIgaW5BcnJheT1cInRydWVcIiBbYmFzZV09XCJiYXNlXCIgKHNjaGVtYUNoYW5nZSk9XCJzY2hlbWFDaGFuZ2UuZW1pdCgpXCI+XHJcbiAgICAgIDwvbGliLWpzb24tc2NoZW1hLWZvcm0+XHJcbiAgICAgIDxidXR0b24gKm5nSWY9XCIhcmVhZE9ubHlcIiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInJlbW92ZUZpZWxkKHgua2V5KVwiIGNsYXNzPVwiZXhhbXBsZS1oYW5kbGVcIlxyXG4gICAgICAgIG1hdFRvb2x0aXA9XCJ7e2dldExhYmVsKCl9fVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5yZW1vdmVfY2lyY2xlX291dGxpbmU8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cIiFyZWFkT25seVwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiIGFkZEZpZWxkKClcIiBtYXRUb29sdGlwPVwie3tnZXRMYWJlbCgpfX1cIj5cclxuICAgICAgPG1hdC1pY29uPmFkZF9jaXJjbGVfb3V0bGluZTwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L3NwYW4+XHJcblxyXG4gIDwhLS0gYWRkaXRpb25hbCBwcm9wZXJ0aWVzIHRhYiBsYXlvdXQgLS0+XHJcbiAgPG1hdC10YWItZ3JvdXAgYW5pbWF0aW9uRHVyYXRpb249XCIwbXNcIiAqbmdJZj1cImdldExheW91dCgpID09PSAnYWRkaXRpb25hbFByb3BlcnRpZXNUYWInXCIgc3R5bGU9XCJtYXgtd2lkdGg6IDk2dndcIlxyXG4gICAgW25nU3R5bGVdPVwic2NoZW1hLnN0eWxlXCIgW25nQ2xhc3NdPVwic2NoZW1hLmNsYXNzXCI+XHJcbiAgICA8bWF0LXRhYiAqbmdGb3I9XCJsZXQgeCBvZiB2YWx1ZSB8IGtleXZhbHVlOm9yaWdpbmFsT3JkZXI7IGxldCBpPWluZGV4XCIgc3R5bGU9XCJtYXJnaW46IDJweDsgcG9zaXRpb246IHJlbGF0aXZlXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cIiFyZWFkT25seVwiPlxyXG4gICAgICAgICAgPGlucHV0IGF1dG9jb21wbGV0ZT1cIm9mZlwiIG1hdElucHV0IFt2YWx1ZV09XCJ4LmtleVwiIChjaGFuZ2UpPVwiZmllbGROYW1lQ2hhbmdlKHgua2V5LCAkZXZlbnQudGFyZ2V0LnZhbHVlKVwiPlxyXG4gICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgICAgPHNwYW4gKm5nSWY9XCJyZWFkT25seVwiPnt7eC5rZXl9fTwvc3Bhbj5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgPGxpYi1qc29uLXNjaGVtYS1mb3JtICNjaGlsZHJlbiBbdmFsdWVdPVwidmFsdWVbeC5rZXldXCIgKHZhbHVlQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoeC5rZXksICRldmVudClcIlxyXG4gICAgICAgIFtyb290VmFsdWVdPVwicm9vdFZhbHVlXCIgW3Jvb3RTY2hlbWFdPVwicm9vdFNjaGVtYVwiIFtzY2hlbWFdPVwic2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzXCIgaW5BcnJheT1cInRydWVcIlxyXG4gICAgICAgIFtiYXNlXT1cImJhc2VcIiAoc2NoZW1hQ2hhbmdlKT1cInNjaGVtYUNoYW5nZS5lbWl0KClcIj5cclxuICAgICAgPC9saWItanNvbi1zY2hlbWEtZm9ybT5cclxuICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFyZWFkT25seVwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlRmllbGQoeC5rZXkpXCIgY2xhc3M9XCJleGFtcGxlLWhhbmRsZVwiXHJcbiAgICAgICAgbWF0VG9vbHRpcD1cInt7Z2V0TGFiZWwoKX19XCI+XHJcbiAgICAgICAgPG1hdC1pY29uPnJlbW92ZV9jaXJjbGVfb3V0bGluZTwvbWF0LWljb24+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9tYXQtdGFiPlxyXG4gICAgPG1hdC10YWIgKm5nSWY9XCIhcmVhZE9ubHlcIj5cclxuICAgICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cImFkZEZpZWxkKClcIiBtYXRUb29sdGlwPVwie3tnZXRMYWJlbCgpfX1cIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5hZGRfY2lyY2xlX291dGxpbmU8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9tYXQtdGFiPlxyXG4gIDwvbWF0LXRhYi1ncm91cD5cclxuXHJcbiAgPCEtLSBhcnJheSByb3cgd3JhcCBsYXlvdXQgLS0+XHJcbiAgPHNwYW4gKm5nSWY9XCJnZXRMYXlvdXQoKSA9PT0gJ2FycmF5J1wiIFtmeExheW91dF09XCJzY2hlbWEubGF5b3V0ID09PSAndmVydGljYWwnID8gJ2NvbHVtbicgOiAncm93IHdyYXAnXCJcclxuICAgIFtuZ1N0eWxlXT1cInNjaGVtYS5zdHlsZVwiIFtuZ0NsYXNzXT1cInNjaGVtYS5jbGFzc1wiPlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgeCBvZiB2YWx1ZTsgbGV0IGk9aW5kZXhcIiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IG1hcmdpbjogMnB4OyBwb3NpdGlvbjogcmVsYXRpdmVcIlxyXG4gICAgICAobW91c2VlbnRlcik9XCJob3Zlcj1pXCIgKG1vdXNlbGVhdmUpPVwiaG92ZXI9bnVsbFwiPlxyXG4gICAgICA8bGliLWpzb24tc2NoZW1hLWZvcm0gI2NoaWxkcmVuIFtsYWJlbF09XCJnZXRMYWJlbCgpXCIgW3ZhbHVlXT1cInZhbHVlW2ldXCIgKHZhbHVlQ2hhbmdlKT1cInNldEluZGV4QW5kRW1pdChpLCAkZXZlbnQpXCJcclxuICAgICAgICBpbkFycmF5PVwidHJ1ZVwiIFtyb290VmFsdWVdPVwicm9vdFZhbHVlXCIgW3Jvb3RTY2hlbWFdPVwicm9vdFNjaGVtYVwiIFtzY2hlbWFdPVwic2NoZW1hLml0ZW1zXCIgW2Jhc2VdPVwiYmFzZVwiXHJcbiAgICAgICAgKHNjaGVtYUNoYW5nZSk9XCJzY2hlbWFDaGFuZ2UuZW1pdCgpXCI+XHJcbiAgICAgIDwvbGliLWpzb24tc2NoZW1hLWZvcm0+XHJcbiAgICAgIDxidXR0b24gKm5nSWY9XCIhcmVhZE9ubHlcIiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInJlbW92ZShpKVwiIGNsYXNzPVwiZXhhbXBsZS1oYW5kbGVcIiBtYXRUb29sdGlwPVwie3tnZXRMYWJlbCgpfX1cIj5cclxuICAgICAgICA8bWF0LWljb24+cmVtb3ZlX2NpcmNsZV9vdXRsaW5lPC9tYXQtaWNvbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxidXR0b24gKm5nSWY9XCIhcmVhZE9ubHlcIiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cIiBhZGQoKVwiIG1hdFRvb2x0aXA9XCJ7e2dldExhYmVsKCl9fVwiPlxyXG4gICAgICA8bWF0LWljb24+YWRkX2NpcmNsZV9vdXRsaW5lPC9tYXQtaWNvbj5cclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvc3Bhbj5cclxuXHJcbiAgPCEtLSBhcnJheSBjaGlwcyBsYXlvdXQgLS0+XHJcbiAgPHNwYW4gKm5nSWY9XCJnZXRMYXlvdXQoKSA9PT0gJ2NoaXBzJ1wiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFtuZ1N0eWxlXT1cInNjaGVtYS5zdHlsZVwiIFtuZ0NsYXNzXT1cInNjaGVtYS5jbGFzc1wiPlxyXG4gICAgICA8bWF0LWNoaXAtbGlzdCAjY2hpcExpc3QgYXJpYS1sYWJlbD1cIkZydWl0IHNlbGVjdGlvblwiIGNka0Ryb3BMaXN0IGNka0Ryb3BMaXN0T3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcclxuICAgICAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3BDaGlwKCRldmVudClcIj5cclxuICAgICAgICA8bWF0LWNoaXAgKm5nRm9yPVwibGV0IHYgb2YgdmFsdWVcIiBbcmVtb3ZhYmxlXT1cIiFyZWFkT25seVwiIChyZW1vdmVkKT1cInJlbW92ZUNoaXAodilcIiBjZGtEcmFnPlxyXG4gICAgICAgICAge3t2fX1cclxuICAgICAgICAgIDxtYXQtaWNvbiBtYXRDaGlwUmVtb3ZlPmNhbmNlbDwvbWF0LWljb24+XHJcbiAgICAgICAgPC9tYXQtY2hpcD5cclxuICAgICAgICA8aW5wdXQgW3BsYWNlaG9sZGVyXT1cInNjaGVtYS50aXRsZVwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcExpc3RcIlxyXG4gICAgICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGRDaGlwKCRldmVudClcIlxyXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInJlYWRPbmx5XCI+XHJcbiAgICAgIDwvbWF0LWNoaXAtbGlzdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIGFycmF5IHRhYiBsYXlvdXQgLS0+XHJcbiAgPG1hdC10YWItZ3JvdXAgYW5pbWF0aW9uRHVyYXRpb249XCIwbXNcIiAqbmdJZj1cImdldExheW91dCgpID09PSAndGFiJ1wiIHN0eWxlPVwibWF4LXdpZHRoOiA5NnZ3XCIgW25nU3R5bGVdPVwic2NoZW1hLnN0eWxlXCJcclxuICAgIFtuZ0NsYXNzXT1cInNjaGVtYS5jbGFzc1wiPlxyXG4gICAgPG1hdC10YWIgKm5nRm9yPVwibGV0IHggb2YgdmFsdWU7IGxldCBpPWluZGV4XCIgc3R5bGU9XCJtYXJnaW46IDJweDsgcG9zaXRpb246IHJlbGF0aXZlXCIgW2xhYmVsXT1cImdldExhYmVsKCkrJyAnK2lcIj5cclxuICAgICAgPGxpYi1qc29uLXNjaGVtYS1mb3JtICNjaGlsZHJlbiBbdmFsdWVdPVwidmFsdWVbaV1cIiAodmFsdWVDaGFuZ2UpPVwic2V0SW5kZXhBbmRFbWl0KGksICRldmVudClcIiBpbkFycmF5PVwidHJ1ZVwiXHJcbiAgICAgICAgW3Jvb3RWYWx1ZV09XCJyb290VmFsdWVcIiBbcm9vdFNjaGVtYV09XCJyb290U2NoZW1hXCIgW3NjaGVtYV09XCJzY2hlbWEuaXRlbXNcIiBbYmFzZV09XCJiYXNlXCJcclxuICAgICAgICAoc2NoZW1hQ2hhbmdlKT1cInNjaGVtYUNoYW5nZS5lbWl0KClcIj5cclxuICAgICAgPC9saWItanNvbi1zY2hlbWEtZm9ybT5cclxuICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFyZWFkT25seVwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlKGkpXCIgY2xhc3M9XCJleGFtcGxlLWhhbmRsZVwiIG1hdFRvb2x0aXA9XCJ7e2dldExhYmVsKCl9fVwiPlxyXG4gICAgICAgIDxtYXQtaWNvbj5yZW1vdmVfY2lyY2xlX291dGxpbmU8L21hdC1pY29uPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbWF0LXRhYj5cclxuICAgIDxtYXQtdGFiICpuZ0lmPVwiIXJlYWRPbmx5XCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIChjbGljayk9XCIgYWRkKClcIiBtYXRUb29sdGlwPVwie3tnZXRMYWJlbCgpfX1cIj5cclxuICAgICAgICAgIDxtYXQtaWNvbj5hZGRfY2lyY2xlX291dGxpbmU8L21hdC1pY29uPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPC9tYXQtdGFiPlxyXG4gIDwvbWF0LXRhYi1ncm91cD5cclxuXHJcbiAgPCEtLSBhcnJheSB0YWJsZSBsYXlvdXQgLS0+XHJcbiAgPHNwYW4gKm5nSWY9XCJnZXRMYXlvdXQoKSA9PT0gJ3RhYmxlJ1wiIFtuZ1N0eWxlXT1cInNjaGVtYS5zdHlsZVwiIFtuZ0NsYXNzXT1cInNjaGVtYS5jbGFzc1wiPlxyXG4gICAgPHRhYmxlIHN1bW1hcnk9XCJQcm9wZXJ0aWVzIHRhYmxlXCI+XHJcbiAgICAgIDx0cj5cclxuICAgICAgICA8dGggKm5nRm9yPVwibGV0IHggb2Ygc2NoZW1hLml0ZW1zLnByb3BlcnRpZXMgfCBrZXl2YWx1ZTpvcmlnaW5hbE9yZGVyXCIgc2NvcGU9XCJjb2xcIj5cclxuICAgICAgICAgIHt7eC52YWx1ZS50aXRsZSA/IHgudmFsdWUudGl0bGUgOiB4LmtleX19PC90aD5cclxuICAgICAgICA8dGggaWQ9XCJyZW1vdmVfcm93XCI+PC90aD5cclxuICAgICAgPC90cj5cclxuICAgICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgdmFsdWU7IGxldCBpPWluZGV4XCI+XHJcbiAgICAgICAgPHRkICpuZ0Zvcj1cImxldCB4IG9mIHNjaGVtYS5pdGVtcy5wcm9wZXJ0aWVzIHwga2V5dmFsdWU6b3JpZ2luYWxPcmRlclwiPlxyXG4gICAgICAgICAgPGxpYi1qc29uLXNjaGVtYS1mb3JtICNjaGlsZHJlbiBbdmFsdWVdPVwicm93W3gua2V5XVwiICh2YWx1ZUNoYW5nZSk9XCJzZXRJbmRleEFuZEVtaXRUYWJsZShpLCB4LmtleSwgJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIFtyb290VmFsdWVdPVwicm9vdFZhbHVlXCIgW3Jvb3RTY2hlbWFdPVwicm9vdFNjaGVtYVwiIFtzY2hlbWFdPVwic2NoZW1hLml0ZW1zLnByb3BlcnRpZXNbeC5rZXldXCIgW2Jhc2VdPVwiYmFzZVwiXHJcbiAgICAgICAgICAgIChzY2hlbWFDaGFuZ2UpPVwic2NoZW1hQ2hhbmdlLmVtaXQoKVwiPlxyXG4gICAgICAgICAgPC9saWItanNvbi1zY2hlbWEtZm9ybT5cclxuICAgICAgICA8L3RkPlxyXG4gICAgICAgIDx0ZD5cclxuICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhcmVhZE9ubHlcIiBtYXQtaWNvbi1idXR0b24gKGNsaWNrKT1cInJlbW92ZShpKVwiIG1hdFRvb2x0aXA9XCJ7e2dldExhYmVsKCl9fVwiPlxyXG4gICAgICAgICAgICA8bWF0LWljb24+cmVtb3ZlX2NpcmNsZV9vdXRsaW5lPC9tYXQtaWNvbj5cclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvdGQ+XHJcbiAgICAgIDwvdHI+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cIiFyZWFkT25seVwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiIGFkZCgpXCIgbWF0VG9vbHRpcD1cInt7Z2V0TGFiZWwoKX19XCI+XHJcbiAgICAgIDxtYXQtaWNvbj5hZGRfY2lyY2xlX291dGxpbmU8L21hdC1pY29uPlxyXG4gICAgPC9idXR0b24+XHJcbiAgPC9zcGFuPlxyXG5cclxuICA8IS0tIGVudW0gLS0+XHJcbiAgPGRpdiAqbmdJZj1cImdldExheW91dCgpID09PSAnZW51bSdcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBbbmdTdHlsZV09XCJzY2hlbWEuc3R5bGVcIiBbbmdDbGFzc109XCJzY2hlbWEuY2xhc3NcIj5cclxuICAgICAgPG1hdC1sYWJlbD57e2xhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgPG1hdC1zZWxlY3QgW3ZhbHVlXT1cInZhbHVlXCIgKHNlbGVjdGlvbkNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJyZWFkT25seVwiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCB4IG9mIHNjaGVtYS5lbnVtXCIgW3ZhbHVlXT1cInhcIj57e3h9fTwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxwIGNsYXNzPVwiZXJyb3IgbWF0LXR5cG9ncmFwaHlcIj57e2Vycm9yKCl9fTwvcD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBhcnJheS1zZWxlY3QgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImdldExheW91dCgpID09PSAnYXJyYXktc2VsZWN0J1wiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIFttYXRUb29sdGlwXT1cInNjaGVtYS5kZXNjcmlwdGlvblwiIFtuZ1N0eWxlXT1cInNjaGVtYS5zdHlsZVwiIFtuZ0NsYXNzXT1cInNjaGVtYS5jbGFzc1wiPlxyXG4gICAgICA8bWF0LWxhYmVsPnt7bGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICA8bWF0LXNlbGVjdCBtdWx0aXBsZSBbdmFsdWVdPVwidmFsdWVcIiAoZm9jdXMpPVwiZm9jdXMoKVwiIChzZWxlY3Rpb25DaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIiBbZGlzYWJsZWRdPVwicmVhZE9ubHlcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgY2hvaWNlIG9mIGNob2ljZXMgfCBhc3luY1wiIFt2YWx1ZV09XCJjaG9pY2UudmFsdWVcIlxyXG4gICAgICAgICAgW21hdFRvb2x0aXBdPVwiY2hvaWNlLm5hbWUgIT09IGNob2ljZS52YWx1ZSA/IGNob2ljZS52YWx1ZSA6IG51bGxcIj5cclxuICAgICAgICAgIHt7Y2hvaWNlLm5hbWV9fVxyXG4gICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxwIGNsYXNzPVwiZXJyb3IgbWF0LXR5cG9ncmFwaHlcIj57e2Vycm9yKCl9fTwvcD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBkYXRlIGVsZW1lbnQgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImdldExheW91dCgpID09PSAnZGF0ZSdcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBbbmdTdHlsZV09XCJzY2hlbWEuc3R5bGVcIiBbbmdDbGFzc109XCJzY2hlbWEuY2xhc3NcIj5cclxuICAgICAgPG1hdC1sYWJlbD57e2xhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgPGlucHV0IGF1dG9jb21wbGV0ZT1cIm9mZlwiIG1hdElucHV0IFt2YWx1ZV09XCJwYXJzZURhdGUodmFsdWUsIHNjaGVtYS5kYXRlRm9ybWF0KVwiIChkYXRlQ2hhbmdlKT1cImNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbZGlzYWJsZWRdPVwicmVhZE9ubHlcIiBzdHlsZT1cIndpZHRoOiAxMDAlXCI+XHJcbiAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgIDxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPHAgY2xhc3M9XCJlcnJvciBtYXQtdHlwb2dyYXBoeVwiPnt7ZXJyb3IoKX19PC9wPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIGNoZWNrYm94IGVsZW1lbnQgLS0+XHJcbiAgPGRpdiAqbmdJZj1cImdldExheW91dCgpID09PSAnY2hlY2tib3gnXCIgW25nU3R5bGVdPVwic2NoZW1hLnN0eWxlXCIgW25nQ2xhc3NdPVwic2NoZW1hLmNsYXNzXCJcclxuICAgIHN0eWxlPVwibWFyZ2luOiA2cHg7IG1hcmdpbi10b3A6IDEycHg7XCI+XHJcbiAgICA8bWF0LWNoZWNrYm94IFtjaGVja2VkXT1cInZhbHVlXCIgKGNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCJyZWFkT25seVwiPlxyXG4gICAgICB7e2xhYmVsfX08L21hdC1jaGVja2JveD5cclxuICAgIDxwIGNsYXNzPVwiZXJyb3IgbWF0LXR5cG9ncmFwaHlcIj57e2Vycm9yKCl9fTwvcD5cclxuICA8L2Rpdj5cclxuXHJcbiAgPCEtLSBhdXRvY29tcGxldGUgZWxlbWVudCAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiZ2V0TGF5b3V0KCkgPT09ICdhdXRvY29tcGxldGUnXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCJzY2hlbWEud2lkZ2V0ID09PSAnc2VsZWN0J1wiIFtuZ1N0eWxlXT1cInNjaGVtYS5zdHlsZVwiIFtuZ0NsYXNzXT1cInNjaGVtYS5jbGFzc1wiPlxyXG4gICAgICA8bWF0LWxhYmVsPnt7bGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICA8bWF0LXNlbGVjdCBbdmFsdWVdPVwidmFsdWVcIiAoZm9jdXMpPVwiZm9jdXMoKVwiIChzZWxlY3Rpb25DaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIiBbZGlzYWJsZWRdPVwicmVhZE9ubHlcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgY2hvaWNlIG9mIGNob2ljZXMgfCBhc3luY1wiIFt2YWx1ZV09XCJjaG9pY2UudmFsdWVcIlxyXG4gICAgICAgICAgW21hdFRvb2x0aXBdPVwiY2hvaWNlLm5hbWUgIT09IGNob2ljZS52YWx1ZSA/IGNob2ljZS52YWx1ZSA6IG51bGxcIj5cclxuICAgICAgICAgIHt7Y2hvaWNlLm5hbWV9fVxyXG4gICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxtYXQtZm9ybS1maWVsZCAqbmdJZj1cInNjaGVtYS53aWRnZXQgIT09ICdzZWxlY3QnXCIgW25nU3R5bGVdPVwic2NoZW1hLnN0eWxlXCIgW25nQ2xhc3NdPVwic2NoZW1hLmNsYXNzXCI+XHJcbiAgICAgIDxtYXQtbGFiZWw+e3tsYWJlbH19PC9tYXQtbGFiZWw+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG1hdElucHV0IFtmb3JtQ29udHJvbF09XCJjb250cm9sXCIgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCIgKGZvY3VzKT1cImZvY3VzKClcIj5cclxuICAgICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgY2hvaWNlIG9mIGZpbHRlcmVkT3B0aW9ucyB8IGFzeW5jXCIgW3ZhbHVlXT1cImNob2ljZS52YWx1ZVwiXHJcbiAgICAgICAgICBbbWF0VG9vbHRpcF09XCJjaG9pY2UubmFtZSAhPT0gY2hvaWNlLnZhbHVlID8gY2hvaWNlLnZhbHVlIDogbnVsbFwiPlxyXG4gICAgICAgICAge3tjaG9pY2UubmFtZX19XHJcbiAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1hdXRvY29tcGxldGU+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPHAgY2xhc3M9XCJlcnJvciBtYXQtdHlwb2dyYXBoeVwiPnt7ZXJyb3IoKX19PC9wPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIHNpbmdsZSBlbGVtZW50IC0tPlxyXG4gIDxkaXYgKm5nSWY9XCJnZXRMYXlvdXQoKSA9PT0gJ3NpbmdsZSdcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBbbmdTdHlsZV09XCJzY2hlbWEuc3R5bGVcIiBbbmdDbGFzc109XCJzY2hlbWEuY2xhc3NcIj5cclxuICAgICAgPG1hdC1sYWJlbD57e2xhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgPGlucHV0ICpuZ0lmPVwiIWluQXJyYXlcIiBbZGlzYWJsZWRdPVwicmVhZE9ubHlcIiBbcGxhY2Vob2xkZXJdPVwiZXhhbXBsZSgpXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgbWF0SW5wdXRcclxuICAgICAgICBbdHlwZV09XCJnZXRJbnB1dFR5cGUoc2NoZW1hKVwiIFt2YWx1ZV09XCJ2YWx1ZVwiIChpbnB1dCk9XCJjaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKGZvY3VzKT1cImdldElucHV0VHlwZShzY2hlbWEpID09ICdwYXNzd29yZCcgPyB2YWx1ZSA9ICcnOicnXCI+XHJcbiAgICAgIDxpbnB1dCAqbmdJZj1cImluQXJyYXlcIiBbZGlzYWJsZWRdPVwicmVhZE9ubHlcIiBbcGxhY2Vob2xkZXJdPVwiZXhhbXBsZSgpXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgbWF0SW5wdXRcclxuICAgICAgICBbdHlwZV09XCJnZXRJbnB1dFR5cGUoc2NoZW1hKVwiIFt2YWx1ZV09XCJ2YWx1ZVwiIChjaGFuZ2UpPVwiY2hhbmdlKCRldmVudClcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8cCBjbGFzcz1cImVycm9yIG1hdC10eXBvZ3JhcGh5XCI+e3tlcnJvcigpfX08L3A+XHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS0gdGV4dGFyZWEgZWxlbWVudCAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiZ2V0TGF5b3V0KCkgPT09ICd0ZXh0YXJlYSdcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZCBbbmdTdHlsZV09XCJzY2hlbWEuc3R5bGVcIiBbbmdDbGFzc109XCJzY2hlbWEuY2xhc3NcIj5cclxuICAgICAgPG1hdC1sYWJlbD57e2xhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgPHRleHRhcmVhICpuZ0lmPVwiIWluQXJyYXlcIiBbZGlzYWJsZWRdPVwicmVhZE9ubHlcIiBbcGxhY2Vob2xkZXJdPVwiZXhhbXBsZSgpXCIgbWF0SW5wdXQgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICAoaW5wdXQpPVwiY2hhbmdlKCRldmVudClcIiBbbmdTdHlsZV09XCJzY2hlbWEuc3R5bGVcIiBbbmdDbGFzc109XCJzY2hlbWEuY2xhc3NcIj48L3RleHRhcmVhPlxyXG4gICAgICA8dGV4dGFyZWEgKm5nSWY9XCJpbkFycmF5XCIgW2Rpc2FibGVkXT1cInJlYWRPbmx5XCIgW3BsYWNlaG9sZGVyXT1cImV4YW1wbGUoKVwiIG1hdElucHV0IFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgKGNoYW5nZSk9XCJjaGFuZ2UoJGV2ZW50KVwiIFtuZ1N0eWxlXT1cInNjaGVtYS5zdHlsZVwiIFtuZ0NsYXNzXT1cInNjaGVtYS5jbGFzc1wiPjwvdGV4dGFyZWE+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPHAgY2xhc3M9XCJlcnJvciBtYXQtdHlwb2dyYXBoeVwiPnt7ZXJyb3IoKX19PC9wPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tIHVwbG9hZCAtLT5cclxuICA8ZGl2ICpuZ0lmPVwiZ2V0TGF5b3V0KCkgPT09ICd1cGxvYWQnXCI+XHJcbiAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD1cImZpbGVcIiAoY2hhbmdlKT1cImhhbmRsZUZpbGVJbnB1dCgkZXZlbnQpXCIgW25nU3R5bGVdPVwic2NoZW1hLnN0eWxlXCIgW25nQ2xhc3NdPVwic2NoZW1hLmNsYXNzXCJcclxuICAgICAgW2Rpc2FibGVkXT1cInJlYWRPbmx5XCI+XHJcbiAgICA8cCBjbGFzcz1cImVycm9yIG1hdC10eXBvZ3JhcGh5XCI+e3tlcnJvcigpfX08L3A+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG48bmctdGVtcGxhdGUgbGliV2lkZ2V0SG9zdD48L25nLXRlbXBsYXRlPlxyXG4iXX0=