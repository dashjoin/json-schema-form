import { Component } from '@angular/core';
import { Editor, Toolbar } from 'ngx-editor';
import { BaseComponent } from '@dashjoin/json-schema-form';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent extends BaseComponent {

  /**
   * editor instance
   */
  editor!: Editor;

  /**
   * init editor
   */
  override ngOnInit() {
    super.ngOnInit()
    this.state.name = 'Does not update the form at the moment (probably due to Angular 14 / 15)'
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
    this.state.control.setValue(newValue.toString());
  }
}
