import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonSchemaFormService {

  /**
   * registry of custom widgets. The keys are the values used in schema.widgetType, the values
   * are the Type<any> of the custom widget component implementing WidgetComponent
   */
  registry = {};

  registerComponent(key: string, value: Type<any>) {
    this.registry[key] = value;
  }
}
