import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonSchemaFormService {

  constructor() { }

  /**
   * registry of custom widgets. The keys are the values used in schema.widgetType, the values
   * are the Type<any> of the custom widget component implementing WidgetComponent
   */
  registry: any = {};

  /**
   * register custom component
   * @param key     the name of the component which is used in schema extension: widget=custom, widgetType=key
   * @param value   the implementation class
   */
  registerComponent(key: string, value: Type<any>) {
    this.registry[key] = value;
  }
}
