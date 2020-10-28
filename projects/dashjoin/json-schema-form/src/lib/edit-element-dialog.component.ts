import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * dialog to edit a JSON node in a layout structure
 */
@Component({
  selector: 'lib-edit-element-dialog',
  templateUrl: './edit-element-dialog.component.html'
})
export class EditElementDialogComponent {

  /**
   * dialog constrcutor
   * @param dialogRef   disloag ref
   * @param data        data to edit
   */
  constructor(
    public dialogRef: MatDialogRef<EditElementDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.schema = {
      title: 'Edit form',
      layout: 'vertical',
      order: [['widget', 'layout'], ['title', 'description'],
      ['example', 'readOnly'], ['required', 'errorMessage'], 'choices', 'class', 'style'],
      class: ['mat-elevation-z0'],
      static: true,
      type: 'object',
      properties: {
        title: { type: 'string', static: true },
        description: { type: 'string', static: true },
        example: { type: 'string', static: true },
        readOnly: { type: 'boolean', static: true },
        class: { type: 'array', items: { type: 'string' }, static: true },
        style: { type: 'object', additionalProperties: { type: 'string' }, static: true }
      }
    };

    // only show required and error message for objects
    if (data.properties) {
      this.schema.properties.errorMessage = { type: 'string', static: true };
      this.schema.properties.required = {
        choices: Object.keys(data.properties), type: 'array', layout: 'select', items: { type: 'string' }, static: true
      };
    } else {
      this.schema.properties.widget = { type: 'string', enum: ['text', 'select', 'date', 'textarea', 'password'], static: true };
      this.schema.properties.choices = { type: 'array', items: { type: 'string' }, static: true };
    }

    // add layout for arrays and objects
    if (data.properties || data.items) {
      this.schema.properties.layout = { type: 'string', enum: ['vertical', 'horizontal'], static: true };
    }
  }

  /**
   * schema to edit input form fields
   */
  schema: any;
}
