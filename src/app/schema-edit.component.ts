import { Component } from '@angular/core';
import { MainComponent } from './app.component';

/**
 * drives this page https://dashjoin.github.io/#/schema
 * which is dedicated to providing a graphical JSON schema editor
 */
@Component({
  selector: 'app-schema-edit',
  templateUrl: './schema-edit.component.html'
})
export class SchemaEditComponent {

  /**
   * instance data created with the form
   */
  instance = null;

  /**
   * JSON schema instance created via the meta schema.
   * Initialized with the example from the main page
   */
  value = MainComponent.schemaExample;

  /**
   * JSON meta schema.
   * Initialized with the example from the main page
   */
  schema = MainComponent.metaschema;

  /**
   * error in case the user makes a mistake when editing JSON schema
   */
  error: any;

  /**
   * error in case the user makes a mistake when editing JSON instance value
   */
  error2: any;

  /**
   * cannot access JSON.stringify from template
   */
  stringify(o: any): string {
    return JSON.stringify(o, null, 2);
  }

  /**
   * textfield change event
   */
  change(event: any): void {
    try {
      this.value = JSON.parse(event.target.value);
      this.error = null;
    } catch (e) {
      this.error = e;
    }
  }

  /**
   * textfield change event (instance data)
   */
  change2(event: any): void {
    try {
      this.instance = JSON.parse(event.target.value);
      this.error2 = null;
    } catch (e) {
      this.error2 = e;
    }
  }
}
