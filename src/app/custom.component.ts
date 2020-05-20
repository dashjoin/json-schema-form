import { Component, EventEmitter } from '@angular/core';
import { WidgetComponent, Schema } from '@dashjoin/json-schema-form';

/**
 * example code for a custom component. It takes a number valueand displays
 * a button that multiplies the value by two.
 */
@Component({
  template: '{{value}} <input type="button" (click)="times2()" value="x 2">',
})
export class CustomComponent implements WidgetComponent {
  label: string;
  value: number;
  valueChange: EventEmitter<number> = new EventEmitter();
  schema: Schema;
  rootSchema: Schema;

  /**
   * handle button event (multiply by 2) and emit value change
   */
  times2() {
    this.value = this.value * 2;
    this.valueChange.emit(this.value);
  }
}
