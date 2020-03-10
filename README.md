# A Lightweight Angular JSON Schema Form

* Generates an input form based on any JSON schema
* Supports 2-way databinding
* Packaged as an Angular library
* Live demo: https://dashjoin.github.io/

## Features

* Autocomplete based on REST services (complex responses can be processed via JSONPath)
* Flexible layout options (tab, table, vertical, horizontal)
* Several input widgets (file upload, date / color picker, autocomplete, ...)

## Installation

To use the library in your project, follow these steps:

```shell
npm i @angular/material
npm i @angular/flex-layout
npm i @angular/cdk
npm i @dashjoin/json-schema-form
```

In your app module add:

```typescript
import { JsonSchemaFormModule } from '@dashjoin/json-schema-form';
...

@NgModule({
  ...
  imports: [
    JsonSchemaFormModule,
    ...
  ],
  ...
}
```

A small sample component:

```typescript
import { Component } from '@angular/core';
import { Schema } from '@dashjoin/json-schema-form/lib/schema';

@Component({
  selector: 'app-root',
  template: `
    <lib-json-schema-form [(value)]="value" [schema]="schema"></lib-json-schema-form>
    <pre>{{print()}}<pre>
  `
})
export class AppComponent {
  title = 'ang-test';
  schema: Schema = {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        name: { type: 'string' },
        bday: { type: 'string', widget: 'date' }
      }
    }
  };
  value: any = [{
    name: 'Joe',
    bday: '2018-09-09T22:00:00.000Z'
  }];

  print(): string {
    return JSON.stringify(this.value, null, 2);
  }
}
```

Finally, add the material style and icons to styles.css:

```css
@import "~@angular/material/prebuilt-themes/indigo-pink.css";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";
```


Please also see the definition of the [Schema](https://github.com/dashjoin/json-schema-form/blob/master/projects/dashjoin/json-schema-form/src/lib/schema.ts) object.

## Structure of this repository

The repository contains:

* [The actual library code](https://github.com/dashjoin/json-schema-form/tree/master/projects/dashjoin/json-schema-form/src/lib)
* [Sources of the online demo playground](https://github.com/dashjoin/json-schema-form/tree/master/src/app)
