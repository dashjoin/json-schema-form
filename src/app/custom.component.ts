import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { WidgetComponent, Schema } from '@dashjoin/json-schema-form';
import { Editor, Toolbar } from 'ngx-editor';

/**
 * example code for a custom component. It wraps the rich text exitor component provided by ngx-editor.
 */
@Component({
  template: `
    <div class="ngx-editor_container">
      <h6>{{ label }}</h6>
      <ngx-editor-menu [editor]="editor" [toolbar]="toolbar"> </ngx-editor-menu>
      <ngx-editor
        [editor]="editor"
        [ngModel]="value"
        (ngModelChange)="onChange($event)"
      ></ngx-editor>
    </div>
  `,
})
export class CustomComponent implements WidgetComponent, OnInit, OnDestroy {

  /**
   * see WidgetComponent
   */
  label: string;

  /**
   * see WidgetComponent
   */
  value = '';

  /**
   * see WidgetComponent
   */
  rootValue = '';

  /**
   * see WidgetComponent
   */
  schema: Schema;

  /**
   * see WidgetComponent
   */
  rootSchema: Schema;

  /**
   * emit changes done by the user in the component
   */
  valueChange: EventEmitter<string> = new EventEmitter();

  /**
   * emit validation errors
   */
  errorChange: EventEmitter<string> = new EventEmitter();

  /**
   * editor instance
   */
  editor: Editor;

  /**
   * toolbar definition
   */
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  /**
   * init editor
   */
  ngOnInit() {
    this.editor = new Editor();
  }

  /**
   * cleanup
   */
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  /**
   * emit value change and error state
   */
  onChange(newValue: Record<string, any>) {
    this.valueChange.emit(newValue.toString());
    this.errorChange.emit(newValue.toString() === '<p></p>' ? 'Please write something' : null);
  }
}
