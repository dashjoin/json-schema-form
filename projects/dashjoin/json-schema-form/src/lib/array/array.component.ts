import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { State } from '../state';

/**
 * renders arrays as a list of subforms with + and - buttons
 */
@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent extends BaseComponent {

  /**
   * child states
   */
  states: State[] = [];

  /**
   * which subform is active
   */
  hover: number | null = null

  /**
   * populate FormArray control
   */
  override ngOnInit(): void {
    super.ngOnInit();
    let i = 0;
    if (this.state.schema.items && this.state.value)
      for (const v of this.state.value) {

        const control = BaseComponent.createControl(this.state.schema.items, v, false);
        this.formArray().setControl(i, control);
        this.states.push({
          name: this.state.name,
          schema: this.state.schema.items,
          value: v,
          control
        });
        i++;
      }
  }

  /**
   * add a new element
   */
  add() {
    const control = BaseComponent.createControl(this.state.schema.items!, undefined, false);
    this.formArray().setControl(this.states.length, control);
    this.states.push({
      name: this.state.name,
      schema: this.state.schema.items!,
      value: undefined,
      control
    });
  }

  /**
   * remove element at index i
   */
  remove(i: number) {
    this.states.splice(i, 1)
    this.formArray().removeAt(i)
  }
}
