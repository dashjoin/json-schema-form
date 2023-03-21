import { Component } from '@angular/core';
import { ArrayComponent } from '../array/array.component';
import { ObjectComponent } from '../object/object.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent extends ArrayComponent {

  rows: ObjectComponent[] = []

  /**
   * populate FormArray control
   */
  override ngOnInit(): void {
    super.ngOnInit();

    for (const state of this.states) {
      const object = new ObjectComponent(this.http, this.service)
      object.state = state
      object.ngOnInit()
      this.rows.push(object)
    }
  }

  /**
   * add a new element
   */
  override add() {
    super.add()
    const object = new ObjectComponent(this.http, this.service)
    object.state = this.states[this.states.length - 1]
    object.ngOnInit()
    this.rows.push(object)
  }

  override remove(i: number): void {
    super.remove(i)
    this.rows.splice(i, 1)
  }
}
