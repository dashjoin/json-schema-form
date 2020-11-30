import { NgModule } from '@angular/core';
import { JsonSchemaFormComponent } from './json-schema-form.component';

import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { WidgetDirective } from './widget.directive';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditElementDialogComponent } from './edit-element-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [JsonSchemaFormComponent, EditElementDialogComponent, WidgetDirective],
  imports: [
    MatCardModule,
    FlexLayoutModule,
    MatIconModule,
    MatTooltipModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    HttpClientModule,
    CommonModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatExpansionModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatChipsModule,
    DragDropModule
  ],
  exports: [JsonSchemaFormComponent],
  providers: [
    // turn off tooltip gestures on mobile: https://github.com/angular/components/issues/4892
    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: { touchGestures: 'off' } }
  ]

})
export class JsonSchemaFormModule { }
