import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, MainComponent } from './app.component';
import { JsonSchemaFormModule } from '@dashjoin/json-schema-form';
import { CustomComponent } from './custom.component';
import { SchemaEditComponent } from './schema-edit.component';
import { AppRoutingModule } from './app-routing.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CustomComponent,
    SchemaEditComponent
  ],
  imports: [
    BrowserModule,
    JsonSchemaFormModule,
    MatExpansionModule,
    MatToolbarModule,
    AppRoutingModule,
    MatCardModule,
    MatTooltipModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
