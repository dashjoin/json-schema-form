import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

/**
 * single text field inputs
 */
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent extends BaseComponent {

  /**
   * called from template in the "simple" type. If "type" is "number" or "integer",
   * the HTML input type is "number" which avoids normal string input
   */
  getInputType(): string {
    if (this.state.schema.type === 'number') {
      return 'number';
    }
    if (this.state.schema.type === 'integer') {
      return 'number';
    }
    return this.state.schema.widget ? this.state.schema.widget : 'string';
  }
}
