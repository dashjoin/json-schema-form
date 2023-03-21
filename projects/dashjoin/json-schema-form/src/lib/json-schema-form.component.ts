import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { BaseComponent } from '../public-api';
import { AdditionalPropertiesComponent } from './additional-properties/additional-properties.component';
import { ArrayComponent } from './array/array.component';
import { JsonPointer } from './json-pointer';
import { ObjectComponent } from './object/object.component';
import { Schema } from './schema';
import { State } from './state';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';
import { WrapperComponent } from './wrapper/wrapper.component';

/**
 * entry component
 */
@Component({
  selector: 'lib-json-schema-form',
  template: `
    <app-wrapper [state]="resolvedState"></app-wrapper>
  `,
  styles: [
  ]
})
export class JsonSchemaFormComponent implements OnInit {

  @Input() state!: State;

  resolvedState!: State

  /**
   * register container form elements to avoid cyclic imports
   */
  ngOnInit(): void {

    const clone: Schema = JSON.parse(JSON.stringify(this.state.schema))

    this.resolvedState = {
      value: this.state.value,
      schema: clone,
      control: this.state.control,
      name: this.state.name
    }

    WrapperComponent.arrayComponent = ArrayComponent
    WrapperComponent.tabComponent = TabComponent
    WrapperComponent.tableComponent = TableComponent
    WrapperComponent.objectComponent = ObjectComponent
    WrapperComponent.additionalPropertiesComponent = AdditionalPropertiesComponent

    this.resolve(clone)

    BaseComponent.prepareControl(this.state.control, clone, this.state.value, false)
  }

  resolve(schema?: Schema) {
    if (!schema)
      return
    if (schema.$ref) {
      if (schema.$ref.startsWith('#'))
        for (const [k, v] of Object.entries(JsonPointer.jsonPointer(this.state.schema, schema.$ref.substring(1))))
          (schema as any)[k] = v
    }
    this.resolve(schema.additionalProperties)
    this.resolve(schema.items)
    if (schema.properties)
      for (const prop of Object.values(schema.properties))
        this.resolve(prop)
  }
}
