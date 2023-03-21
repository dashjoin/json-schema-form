import { Component, OnInit } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css']
})
export class ChipsComponent extends BaseComponent implements OnInit {

  override ngOnInit(): void {
    super.ngOnInit()
    if (!this.state.value)
      this.state.value = []
  }

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.state.value.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.state.control.setValue(this.state.value)
  }

  remove(fruit: string): void {
    const index = this.state.value.indexOf(fruit);

    if (index >= 0) {
      this.state.value.splice(index, 1);
    }

    this.state.control.setValue(this.state.value)
  }

  edit(fruit: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove fruit if it no longer has a name
    if (!value) {
      this.remove(fruit);
      return;
    }

    // Edit existing fruit
    const index = this.state.value.indexOf(fruit);
    if (index >= 0) {
      this.state.value[index] = value;
    }

    this.state.control.setValue(this.state.value)
  }
}
