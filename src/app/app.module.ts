import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';

import { JsonSchemaFormModule } from '@dashjoin/json-schema-form';

import { AppComponent, MainComponent } from './app.component';
import { CustomComponent } from './custom.component';
import { SchemaEditComponent } from './schema-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxEditorModule } from 'ngx-editor';
import { WysiwygEditorComponent } from './wysiwyg-editor/wysiwyg-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CustomComponent,
    WysiwygEditorComponent,
    SchemaEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    JsonSchemaFormModule,
    MatExpansionModule,
    MatToolbarModule,
    AppRoutingModule,
    MatCardModule,
    MatTooltipModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    NgxEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
