import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent extends BaseComponent implements OnInit {

  control!: FormControl

  override ngOnInit(): void {
    if (this.state.schema.type === 'integer') {
      // create a new control and convert between timestamp and Date
      this.control = new FormControl(new Date(this.state.value))
      this.control.valueChanges.subscribe(res => {
        this.state.control.setValue(res instanceof Date ? res.valueOf() : res)
      })
    } else if (this.state.schema.dateFormat) {
      // create a new control and convert between Date format string and Date
      this.control = this.state.control as FormControl
      const pdate = this.state.value.split(this.getDelimiter(this.state.schema.dateFormat));
      const pformat = this.state.schema.dateFormat.split(this.getDelimiter(this.state.schema.dateFormat));
      this.control = new FormControl(new Date(pdate[pformat.indexOf('yyyy')], pdate[pformat.indexOf('MM')] - 1, pdate[pformat.indexOf('dd')]))
      this.control.valueChanges.subscribe(date => {
        if (!date) {
          this.state.control.setValue(null)
          return
        }
        const pformat = this.state.schema.dateFormat!.split(this.getDelimiter(this.state.schema.dateFormat!));
        const pdate = [null, null, null];
        pdate[pformat.indexOf('yyyy')] = date.getFullYear();
        pdate[pformat.indexOf('MM')] = date.getMonth() + 1;
        pdate[pformat.indexOf('dd')] = date.getDate();
        this.state.control.setValue(pdate[0] + this.getDelimiter(this.state.schema.dateFormat!) + pdate[1] + this.getDelimiter(this.state.schema.dateFormat!) + pdate[2])
      })
    }
    else
      // use state.control directly
      this.control = this.state.control as FormControl
  }

  /**
   * find the first non letter character in a date format such as dd/MM/yyyy (returns /)
   */
  getDelimiter(format: string): string {
    const delim = format.match(/\W/g);
    if (!delim?.[0]) {
      throw new Error('No delimiter found in date format: ' + format);
    }
    return delim[0];
  }
}
