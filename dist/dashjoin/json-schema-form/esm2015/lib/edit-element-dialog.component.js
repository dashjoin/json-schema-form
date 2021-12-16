import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
/**
 * dialog to edit a JSON node in a layout structure
 */
export class EditElementDialogComponent {
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
EditElementDialogComponent.ɵfac = function EditElementDialogComponent_Factory(t) { return new (t || EditElementDialogComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
EditElementDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditElementDialogComponent, selectors: [["lib-edit-element-dialog"]], decls: 7, vars: 4, consts: [[2, "padding-top", "10px"], [3, "value", "schema", "label", "valueChange"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function EditElementDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-dialog-content", 0);
        i0.ɵɵelementStart(1, "lib-json-schema-form", 1);
        i0.ɵɵlistener("valueChange", function EditElementDialogComponent_Template_lib_json_schema_form_valueChange_1_listener($event) { return ctx.data = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mat-dialog-actions", 2);
        i0.ɵɵelementStart(3, "button", 3);
        i0.ɵɵlistener("click", function EditElementDialogComponent_Template_button_click_3_listener() { return ctx.dialogRef.close(); });
        i0.ɵɵtext(4, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "button", 4);
        i0.ɵɵtext(6, "Ok");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.data)("schema", ctx.schema)("label", ctx.schema.title);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("mat-dialog-close", ctx.data);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditElementDialogComponent, [{
        type: Component,
        args: [{
                selector: 'lib-edit-element-dialog',
                templateUrl: './edit-element-dialog.component.html'
            }]
    }], function () { return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdC1lbGVtZW50LWRpYWxvZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kYXNoam9pbi9qc29uLXNjaGVtYS1mb3JtL3NyYy9saWIvZWRpdC1lbGVtZW50LWRpYWxvZy5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kYXNoam9pbi9qc29uLXNjaGVtYS1mb3JtL3NyYy9saWIvZWRpdC1lbGVtZW50LWRpYWxvZy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQWdCLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFFekU7O0dBRUc7QUFLSCxNQUFNLE9BQU8sMEJBQTBCO0lBRXJDOzs7O09BSUc7SUFDSCxZQUNTLFNBQW1ELEVBQzFCLElBQVM7O1FBRGxDLGNBQVMsR0FBVCxTQUFTLENBQTBDO1FBQzFCLFNBQUksR0FBSixJQUFJLENBQUs7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLE1BQU0sRUFBRSxVQUFVO1lBQ2xCLEtBQUssRUFBRTtnQkFDTCxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDO2dCQUNsQyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7Z0JBQ3hCLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQztnQkFDdkIsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQztnQkFDdEMsU0FBUyxFQUFFLE9BQU8sRUFBRSxPQUFPO2FBQzVCO1lBQ0QsTUFBTSxFQUFFLElBQUk7WUFDWixJQUFJLEVBQUUsUUFBUTtZQUNkLFVBQVUsRUFBRTtnQkFDVixrREFBa0Q7Z0JBQ2xELFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFB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LENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUc7b0JBQy9CLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7b0JBQ25FLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsZUFBZTtpQkFDdEQsQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDOztvR0EzRVUsMEJBQTBCLDhEQVMzQixlQUFlOytEQVRkLDBCQUEwQjtRQ1Z2Qyw2Q0FBK0M7UUFDM0MsK0NBQWdGO1FBQTFELDRKQUFnQjtRQUEwQyxpQkFBdUI7UUFDM0csaUJBQXFCO1FBQ3JCLDZDQUFnQztRQUM1QixpQ0FBK0M7UUFBNUIsdUdBQVMscUJBQWlCLElBQUM7UUFBQyxzQkFBTTtRQUFBLGlCQUFTO1FBQzlELGlDQUFvRTtRQUFBLGtCQUFFO1FBQUEsaUJBQVM7UUFDbkYsaUJBQXFCOztRQUxLLGVBQWdCO1FBQWhCLGdDQUFnQixzQkFBQSwyQkFBQTtRQUlaLGVBQXlCO1FBQXpCLDJDQUF5Qjs7dUZESzFDLDBCQUEwQjtjQUp0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsV0FBVyxFQUFFLHNDQUFzQzthQUNwRDs7c0JBVUksTUFBTTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5cclxuLyoqXHJcbiAqIGRpYWxvZyB0byBlZGl0IGEgSlNPTiBub2RlIGluIGEgbGF5b3V0IHN0cnVjdHVyZVxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItZWRpdC1lbGVtZW50LWRpYWxvZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2VkaXQtZWxlbWVudC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0RWxlbWVudERpYWxvZ0NvbXBvbmVudCB7XHJcblxyXG4gIC8qKlxyXG4gICAqIGRpYWxvZyBjb25zdHJjdXRvclxyXG4gICAqIEBwYXJhbSBkaWFsb2dSZWYgICBkaXNsb2FnIHJlZlxyXG4gICAqIEBwYXJhbSBkYXRhICAgICAgICBkYXRhIHRvIGVkaXRcclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxFZGl0RWxlbWVudERpYWxvZ0NvbXBvbmVudD4sXHJcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xyXG4gICAgdGhpcy5zY2hlbWEgPSB7XHJcbiAgICAgIHRpdGxlOiAnRWRpdCBmb3JtJyxcclxuICAgICAgbGF5b3V0OiAndmVydGljYWwnLFxyXG4gICAgICBvcmRlcjogW1xyXG4gICAgICAgIFsnd2lkZ2V0JywgJ2xheW91dCcsICdpdGVtbGF5b3V0J10sXHJcbiAgICAgICAgWyd0aXRsZScsICdkZXNjcmlwdGlvbiddLFxyXG4gICAgICAgIFsnZXhhbXBsZScsICdyZWFkT25seSddLFxyXG4gICAgICAgIFsncmVxdWlyZWQnLCAnZm9ybWF0JywgJ2Vycm9yTWVzc2FnZSddLFxyXG4gICAgICAgICdjaG9pY2VzJywgJ2NsYXNzJywgJ3N0eWxlJ1xyXG4gICAgICBdLFxyXG4gICAgICBzdGF0aWM6IHRydWUsXHJcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxyXG4gICAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZGVzY3JpcHRpb24sIGNsYXNzLCBzdHlsZSBhcmUgYWx3YXlzIGFwcGxpY2FibGVcclxuICAgICAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiAnc3RyaW5nJywgc3RhdGljOiB0cnVlLCB0aXRsZTogJ0Rlc2NyaXB0aW9uIC8gdG9vbHRpcCcgfSxcclxuICAgICAgICBjbGFzczogeyB0eXBlOiAnYXJyYXknLCBpdGVtczogeyB0eXBlOiAnc3RyaW5nJyB9LCBsYXlvdXQ6ICdjaGlwcycsIHN0eWxlOiB7IHdpZHRoOiAnMzY1cHgnIH0sIHN0YXRpYzogdHJ1ZSwgdGl0bGU6ICdDU1MgY2xhc3NlcycgfSxcclxuICAgICAgICBzdHlsZTogeyB0eXBlOiAnb2JqZWN0JywgYWRkaXRpb25hbFByb3BlcnRpZXM6IHsgdHlwZTogJ3N0cmluZycgfSwgc3RhdGljOiB0cnVlLCB0aXRsZTogJ0NTUyBzdHlsZXMnIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoZGF0YS5wcm9wZXJ0aWVzKSB7XHJcbiAgICAgIC8vIG9ubHkgc2hvdyByZXF1aXJlZCBhbmQgZXJyb3IgbWVzc2FnZSBmb3Igb2JqZWN0c1xyXG4gICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzLmVycm9yTWVzc2FnZSA9IHsgdHlwZTogJ3N0cmluZycsIHN0YXRpYzogdHJ1ZSwgdGl0bGU6ICdWYWxpZGF0aW9uIGVycm9yIG1lc3NhZ2UnIH07XHJcbiAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMucmVxdWlyZWQgPSB7XHJcbiAgICAgICAgY2hvaWNlczogT2JqZWN0LmtleXMoZGF0YS5wcm9wZXJ0aWVzKSwgdHlwZTogJ2FycmF5JywgbGF5b3V0OiAnc2VsZWN0JywgaXRlbXM6IHsgdHlwZTogJ3N0cmluZycgfSwgc3RhdGljOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiAnUmVxdWlyZWQgZmllbGRzJ1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzLmxheW91dCA9IHsgdHlwZTogJ3N0cmluZycsIGVudW06IFsndmVydGljYWwnLCAnaG9yaXpvbnRhbCddLCBzdGF0aWM6IHRydWUsIHRpdGxlOiAnU2NyZWVuIGxheW91dCcgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChkYXRhLml0ZW1zKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllcy5sYXlvdXQgPSB7XHJcbiAgICAgICAgICB0eXBlOiAnc3RyaW5nJywgZW51bTogWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJywgJ3NlbGVjdCcsICd0YWInLCAndGFibGUnLCAnY2hpcHMnXSxcclxuICAgICAgICAgIHN0YXRpYzogdHJ1ZSwgdGl0bGU6ICdTY3JlZW4gTGF5b3V0J1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllcy5pdGVtbGF5b3V0ID0geyB0eXBlOiAnc3RyaW5nJywgZW51bTogWyd2ZXJ0aWNhbCcsICdob3Jpem9udGFsJ10sIHN0YXRpYzogdHJ1ZSwgdGl0bGU6ICdJdGVtIHNjcmVlbiBsYXlvdXQnIH07XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGRhdGEuaXRlbXM/LnByb3BlcnRpZXMpIHtcclxuICAgICAgICAvLyBhcnJheSBvZiBvYmplY3RzXHJcbiAgICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllcy5lcnJvck1lc3NhZ2UgPSB7IHR5cGU6ICdzdHJpbmcnLCBzdGF0aWM6IHRydWUsIHRpdGxlOiAnVmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlJyB9O1xyXG4gICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMucmVxdWlyZWQgPSB7XHJcbiAgICAgICAgICBjaG9pY2VzOiBPYmplY3Qua2V5cyhkYXRhLml0ZW1zLnByb3BlcnRpZXMpLCB0eXBlOiAnYXJyYXknLCBsYXlvdXQ6ICdzZWxlY3QnLCBpdGVtczogeyB0eXBlOiAnc3RyaW5nJyB9LCBzdGF0aWM6IHRydWUsXHJcbiAgICAgICAgICB0aXRsZTogJ1JlcXVpcmVkIGZpZWxkcydcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIGFycmF5IG9mIHNpbXBsZSB0eXBlc1xyXG4gICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMucmVhZE9ubHkgPSB7XHJcbiAgICAgICAgICB0eXBlOiAnYm9vbGVhbicsIHN0YXRpYzogdHJ1ZSwgdGl0bGU6ICdSZWFkIG9ubHkgdmFsdWUnLCBzdHlsZTogeyAncGFkZGluZy10b3AnOiAnMTVweCcgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllcy5lcnJvck1lc3NhZ2UgPSB7IHR5cGU6ICdzdHJpbmcnLCBzdGF0aWM6IHRydWUsIHRpdGxlOiAnVmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlJyB9O1xyXG4gICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMuZm9ybWF0ID0ge1xyXG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsIHN0YXRpYzogdHJ1ZSwgdGl0bGU6ICdGb3JtYXQnLFxyXG4gICAgICAgICAgd2lkZ2V0OiAnc2VsZWN0JywgY2hvaWNlczogW251bGwsICdlbWFpbCcsICdpcHY0JywgJ3VybCcsICd1cmknXVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllcy5leGFtcGxlID0geyB0eXBlOiAnc3RyaW5nJywgc3RhdGljOiB0cnVlLCB0aXRsZTogJ0V4YW1wbGUgZGF0YScgfTtcclxuICAgICAgICB0aGlzLnNjaGVtYS5wcm9wZXJ0aWVzLnRpdGxlID0geyB0eXBlOiAnc3RyaW5nJywgc3RhdGljOiB0cnVlLCB0aXRsZTogJ1RpdGxlJyB9O1xyXG4gICAgICAgIHRoaXMuc2NoZW1hLnByb3BlcnRpZXMud2lkZ2V0ID0ge1xyXG4gICAgICAgICAgdHlwZTogJ3N0cmluZycsIGVudW06IFsndGV4dCcsICdzZWxlY3QnLCAnZGF0ZScsICd0ZXh0YXJlYScsICdwYXNzd29yZCddLCBzdGF0aWM6IHRydWUsXHJcbiAgICAgICAgICB0aXRsZTogJ0Zvcm0gd2lkZ2V0J1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zY2hlbWEucHJvcGVydGllcy5jaG9pY2VzID0ge1xyXG4gICAgICAgICAgdHlwZTogJ2FycmF5JywgaXRlbXM6IHsgdHlwZTogJ3N0cmluZycgfSwgc3R5bGU6IHsgd2lkdGg6ICczNjVweCcgfSxcclxuICAgICAgICAgIGxheW91dDogJ2NoaXBzJywgc3RhdGljOiB0cnVlLCB0aXRsZTogJ0lucHV0IGNob2ljZXMnXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2NoZW1hIHRvIGVkaXQgaW5wdXQgZm9ybSBmaWVsZHNcclxuICAgKi9cclxuICBzY2hlbWE6IGFueTtcclxufVxyXG4iLCI8bWF0LWRpYWxvZy1jb250ZW50IHN0eWxlPVwicGFkZGluZy10b3A6IDEwcHg7XCI+XHJcbiAgICA8bGliLWpzb24tc2NoZW1hLWZvcm0gWyh2YWx1ZSldPVwiZGF0YVwiIFtzY2hlbWFdPVwic2NoZW1hXCIgW2xhYmVsXT1cInNjaGVtYS50aXRsZVwiPjwvbGliLWpzb24tc2NoZW1hLWZvcm0+XHJcbjwvbWF0LWRpYWxvZy1jb250ZW50PlxyXG48bWF0LWRpYWxvZy1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XHJcbiAgICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImRpYWxvZ1JlZi5jbG9zZSgpXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIFttYXQtZGlhbG9nLWNsb3NlXT1cImRhdGFcIiBjZGtGb2N1c0luaXRpYWw+T2s8L2J1dHRvbj5cclxuPC9tYXQtZGlhbG9nLWFjdGlvbnM+Il19