import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { State } from '../state';

@Component({
  selector: 'app-additional-properties',
  templateUrl: './additional-properties.component.html',
  styleUrls: ['./additional-properties.component.css']
})
export class AdditionalPropertiesComponent extends BaseComponent {

  hover: number | null = null

  /**
   * child states
   */
  states: State[] = [];

  /**
   * populate FormGroup
   */
  override ngOnInit(): void {
    super.ngOnInit();
    if (this.state.value)
      for (const [k, v] of Object.entries(this.state.value)) {

        const control = BaseComponent.createControl(this.state.schema.additionalProperties!, v,
          this.state.schema.required ? this.state.schema.required.includes(k) : false);
        this.formGroup().addControl(k, control);

        this.states.push({
          name: k,
          schema: this.state.schema.additionalProperties!,
          value: v,
          control
        })
      }
  }

  change(event: any, i: number) {
    const control = BaseComponent.createControl(this.state.schema.additionalProperties!, undefined, false)
    const oldKey = Object.keys(this.formGroup().value)[i]
    const newKey = event.target.value
    const state = {
      name: newKey,
      schema: this.state.schema.additionalProperties!,
      value: undefined,
      control
    }
    this.states.splice(i, 1, state)
    this.formGroup().addControl(newKey, control)
    this.formGroup().removeControl(oldKey)
  }

  add() {
    if (Object.keys(this.formGroup().value).includes(''))
      // already contains empty key
      return
    const control = BaseComponent.createControl(this.state.schema.additionalProperties!, undefined, false)
    this.states.push({
      name: '',
      schema: this.state.schema.additionalProperties!,
      value: undefined,
      control
    })
    this.formGroup().addControl('', control)
  }

  remove(i: number) {
    const key = Object.keys(this.formGroup().value)[i]
    this.formGroup().removeControl(key)
    this.states.splice(i, 1)
  }
}
