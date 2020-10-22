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
    // deep clone object so we have the possibility to cancel editing
    this.data = JSON.parse(JSON.stringify(data));
    if (!this.data.widget) {
      this.data.widget = 'text';
    }
  }

  /**
   * schema to edit input form fields
   */
  schema = {
    title: 'Edit form',
    static: true,
    type: 'object',
    properties: {
      widget: {
        type: 'string', enum: ['text', 'date', 'textarea', 'password'], static: true
      },
      title: { type: 'string', static: true },
      description: { type: 'string', static: true }
    }
  };
}
