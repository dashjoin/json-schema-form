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
    } else {
      if (data.items) {
        this.schema.properties.layout = {
          type: 'string', enum: ['vertical', 'horizontal', 'select', 'tab', 'table', 'chips'],
          static: true, title: 'Screen Layout'
        };
        this.schema.properties.itemlayout = { type: 'string', enum: ['vertical', 'horizontal'], static: true, title: 'Item screen layout' };
      }
      if (data.items?.properties) {
        // array of objects
        this.schema.properties.errorMessage = { type: 'string', static: true, title: 'Validation error message' };
        this.schema.properties.required = {
          choices: Object.keys(data.items.properties), type: 'array', layout: 'select', items: { type: 'string' }, static: true,
          title: 'Required fields'
        };
      } else {
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

  /**
   * schema to edit input form fields
   */
  schema: any;
}
