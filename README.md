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
npm install @dashjoin/json-schema-form
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

In your component:

```html
<lib-json-schema-form [(value)]="value" [schema]="schema"></lib-json-schema-form>
```

```typescript
  schema: Schema = { type: "string" }
  value: any = "test"
```

Please also see the definition of the [Schema](https://github.com/dashjoin/json-schema-form/blob/master/projects/dashjoin/json-schema-form/src/lib/schema.ts) object.

## Structure of this repository

The repository contains:

* The library: https://github.com/dashjoin/json-schema-form/tree/master/projects/dashjoin/json-schema-form/src/lib
* Sources of the online demo playground: https://github.com/dashjoin/json-schema-form/tree/master/src/app
