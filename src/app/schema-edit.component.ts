import { Component } from '@angular/core';
import { MainComponent } from './app.component';

@Component({
  selector: 'app-schema-edit',
  templateUrl: './schema-edit.component.html'
})
export class SchemaEditComponent {

  instance = null;
  value = MainComponent.schemaExample;
  schema = MainComponent.metaschema;

  error: any;
  error2: any;

  stringify(o: any): string {
    return JSON.stringify(o, null, 2);
  }

  change(event: any): void {
    try {
      this.value = JSON.parse(event.target.value);
      this.error = null;
    } catch (e) {
      this.error = e;
    }
  }

  change2(event: any): void {
    try {
      this.instance = JSON.parse(event.target.value);
      this.error2 = null;
    } catch (e) {
      this.error2 = e;
    }
  }
}
