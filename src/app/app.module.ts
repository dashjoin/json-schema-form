import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonSchemaFormModule } from 'projects/dashjoin/json-schema-form/src/public-api';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, MainComponent } from './app.component';
import { FormDirective } from './form.directive';
import { CustomComponent } from './custom/custom.component';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    AppComponent, MainComponent, FormDirective, CustomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    JsonSchemaFormModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatExpansionModule,
    MatTooltipModule,
    MatCheckboxModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
