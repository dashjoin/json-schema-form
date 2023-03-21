import { NgModule } from '@angular/core';
import { BaseComponent } from './base/base.component';
import { BooleanComponent } from './boolean/boolean.component';
import { InputComponent } from './input/input.component';
import { JsonSchemaFormComponent } from './json-schema-form.component';
import { CompDirective } from './wrapper/comp.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { ObjectComponent } from './object/object.component';
import { ArrayComponent } from './array/array.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { SelectComponent } from './select/select.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './upload/upload.component';
import { DateComponent } from './date/date.component';
import { TextareaComponent } from './textarea/textarea.component';
import { AdditionalPropertiesComponent } from './additional-properties/additional-properties.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { TabComponent } from './tab/tab.component';
import { TableComponent } from './table/table.component';
import { ChipsComponent } from './chips/chips.component';


@NgModule({
  declarations: [
    JsonSchemaFormComponent,
    BooleanComponent,
    InputComponent,
    ObjectComponent,
    BaseComponent,
    SelectComponent,
    ArrayComponent,
    UploadComponent,
    DateComponent,
    TextareaComponent,
    AdditionalPropertiesComponent,
    AutocompleteComponent,
    TabComponent,
    TableComponent,
    ChipsComponent,

    CompDirective,
    WrapperComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatChipsModule
  ],
  exports: [
    JsonSchemaFormComponent,
    BaseComponent
  ]
})
export class JsonSchemaFormModule { }
