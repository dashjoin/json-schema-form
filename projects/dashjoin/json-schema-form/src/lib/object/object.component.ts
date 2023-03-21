import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { State } from '../state';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.css']
})
export class ObjectComponent extends BaseComponent implements OnInit {

  /**
   * child states
   */
  states: State[] = [];

  /**
   * populate FormGroup
   */
  override ngOnInit(): void {
    super.ngOnInit();
    if (this.state.schema.properties)
      for (const [k, v] of Object.entries(this.state.schema.properties)) {

        const control = BaseComponent.createControl(v, this.state.value?.[k],
          this.state.schema.required ? this.state.schema.required.includes(k) : false);
        this.formGroup().addControl(k, control);

        this.states.push({
          name: k,
          schema: v,
          value: this.state.value?.[k],
          control
        })
      }
  }

  show(i: number): boolean {
    if (this.state.schema.switch) {
      const switc = this.formGroup().get(this.state.schema.switch)?.value
      const prop = Object.values(this.state.schema.properties!)[i]
      if (!prop.case)
        return true
      if (!switc)
        return false
      return (prop.case && prop.case.includes(switc))
    }
    return true
  }
}
