# A Lightweight Angular JSON Schema Form Component

![](https://raw.github.com/jdorn/json-editor/master/jsoneditor.png)

* Live demo: https://dashjoin.github.io/

## Features

* Renders compact forms
* Supports 2-way databinding
* Autocomplete based on REST services (complex responses can be processed via extended JSON Pointer)
* Flexible layout options (tab, table, vertical, horizontal)
* Several input widgets (file upload, date / color picker, autocomplete, ...)
* Lightweight: < 1000 lines of code

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

## JSON Schema Extensions

We define a couple of extensions to JSON Schema in order to define the user interface and layout of the form. Please also see the [demo playground](https://dashjoin.github.io/) where examples of all configuration options are available.

### Widget

This options specifies a specific input widget to be used. The default is a simple text field. The following options are available:

```
{
  "type": "string",
  "widget": "date"
}
```

* select: shows a select input field with options (No free text entry is possible. Options can be loaded via rest (see below))
* upload: the JSON property is set to the contents of an uploaded file
* date: uses the material date picker component
* textarea: displays a multi line textarea
* largetextarea: like textarea but shows a larger textarea
* password: input is shown as *****
* color: shows a color picker widge
* datetime-local, email, month, tel, time, url, week: uses the browser native [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

### Autocomplete choices

The following fields control how select and autocomplete options are obtained from a REST backend:

```
{
  "type": "string",
  "choicesUrl": "/assets/autocomplete-simple.json",
  "choicesVerb": "GET"
}
```

* choicesUrl: defines the REST service URL
* choicesVerb: defines the HTTP verb to use for the REST service URL, default is POST
* choicesUrlArgs: defines the REST service parameter. The convention is to have a single parameter. Multiple fields need to be wrapped into a single object
* jsonPointer: used to transform the REST result into a string array if it is not already in that form.
  Note that we use a slightly extended version of [JSON Pointer](https://tools.ietf.org/html/rfc6901) that allows processing arrays of objects. Consider the following examples:

| Response  | JSON Pointer  | Result (string[]) |
|---|---|---|
| {"result": ["A", "B"]}  |  /result |  ["A", "B"] |
| [{"name":"A"}, {"name":"B"}] | /*/name  |  ["A", "B"] |


### Layout options

Layout options determine how the input elements of arrays and objects are arranged. These options can be applied for each nesting layer (e.g. if you're entering an array of objects):

```
{
  "type": "array",
  "layout": "horizontal",
  "items": {
    "type": "object",
    "layout": "vertical",
    "properties": {
      "name": {
        "type": "string"
      },
      "version": {
        "type": "number"
      }
    }
  }
}
```

* horizontal (default): input controls are arranged horizontally and flex-wrap if there is insufficient space
* vertical: input controls are arranged vertically
* tab: controls are shown in tabs (only applies to arrays)
* table: controls are shown in a table with the property names being the column names (only applies to an array of objects)

Please also see the definition of the [Schema](https://github.com/dashjoin/json-schema-form/blob/master/projects/dashjoin/json-schema-form/src/lib/schema.ts) object.

## Structure of this repository

The repository contains:

* [The actual library code](https://github.com/dashjoin/json-schema-form/tree/master/projects/dashjoin/json-schema-form/src/lib)
* [Sources of the online demo playground](https://github.com/dashjoin/json-schema-form/tree/master/src/app)
