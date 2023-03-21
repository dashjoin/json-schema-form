import { Component, OnInit, Type, ViewChild } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { CompDirective } from './comp.directive';
import { BooleanComponent } from '../boolean/boolean.component';
import { InputComponent } from '../input/input.component';
import { SelectComponent } from '../select/select.component';
import { UploadComponent } from '../upload/upload.component';
import { DateComponent } from '../date/date.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { AutocompleteComponent } from '../autocomplete/autocomplete.component';
import { ChipsComponent } from '../chips/chips.component';

/**
 * determine which form element to use and render it dynamically
 */
@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent extends BaseComponent implements OnInit {

  /**
   * set from json-schema-form component to avoid cyclic imports
   */
  static objectComponent: Type<any>
  static arrayComponent: Type<any>
  static tabComponent: Type<any>
  static tableComponent: Type<any>
  static additionalPropertiesComponent: Type<any>

  /**
   * dynamically render form element
   */
  @ViewChild(CompDirective, { static: true }) compHost!: CompDirective;

  /**
   * determine which form element to use
   */
  override ngOnInit() {

    const viewContainerRef = this.compHost.viewContainerRef;
    viewContainerRef.clear();

    let type: Type<any>;
    if (this.state.schema.additionalProperties)
      type = WrapperComponent.additionalPropertiesComponent;
    else if (this.state.schema.layout === 'tab')
      type = WrapperComponent.tabComponent;
    else if (this.state.schema.layout === 'table')
      type = WrapperComponent.tableComponent;
    else if (this.state.schema.layout === 'select')
      type = SelectComponent;
    else if (this.state.schema.layout === 'chips')
      type = ChipsComponent;
    else if (this.state.schema.type === 'object')
      type = WrapperComponent.objectComponent;
    else if (this.state.schema.type === 'array')
      type = WrapperComponent.arrayComponent;
    else if (this.state.schema.widget === 'select')
      type = SelectComponent;
    else if (this.state.schema.choicesUrl || this.state.schema.choices)
      type = AutocompleteComponent;
    else if (this.state.schema.enum)
      type = SelectComponent;
    else if (this.state.schema.widget === 'custom')
      type = this.service.registry[this.state.schema.widgetType!];
    else if (this.state.schema.widget === 'textarea')
      type = TextareaComponent;
    else if (this.state.schema.widget === 'date')
      type = DateComponent;
    else if (this.state.schema.widget === 'upload')
      type = UploadComponent;
    else if (this.state.schema.widget === 'upload64')
      type = UploadComponent;
    else if (this.state.schema.type === 'string')
      type = InputComponent;
    else if (this.state.schema.type === 'number')
      type = InputComponent;
    else if (this.state.schema.type === 'integer')
      type = InputComponent;
    else if (this.state.schema.type === 'boolean')
      type = BooleanComponent;
    else
      throw new Error(JSON.stringify(this.state.schema));

    const componentRef = viewContainerRef.createComponent<BaseComponent>(type);
    componentRef.instance.state = this.state;
  }
}
