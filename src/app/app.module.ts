import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JsonSchemaFormModule } from '@dashjoin/json-schema-form';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CustomComponent } from './custom.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomComponent
  ],
  imports: [
    BrowserModule,
    JsonSchemaFormModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
