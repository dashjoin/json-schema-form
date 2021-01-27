import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Schema, WidgetComponent } from '@dashjoin/json-schema-form';
import { Editor, Toolbar   } from 'ngx-editor';

@Component({
  selector: 'app-wysiwyg-editor',
  template: `
    <div class="ngx-editor_container">
      <h6>{{ label }}</h6>
      <ngx-editor-menu [editor]="editor" [toolbar]="toolbar"> </ngx-editor-menu>
      <ngx-editor
        [editor]="editor"
        [ngModel]="value"
        (ngModelChange)="onChange($event)"
        [placeholder]="'Introduce aquí el valor del texto'"
      ></ngx-editor>
    </div>
  `,
})
export class WysiwygEditorComponent
  implements OnInit, OnDestroy, WidgetComponent {
  editor: Editor;
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

  label = 'label default';
  value = 'test';
  valueChange: EventEmitter<string> = new EventEmitter();
  schema: Schema;
  rootSchema: Schema;

  constructor() {}

  ngOnInit(): void {
    this.editor = new Editor();
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  onChange(newValue: Record<string, any>) {
    this.valueChange.emit(newValue.toString());
  }
}
