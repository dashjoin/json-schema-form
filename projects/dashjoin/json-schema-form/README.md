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
* password: input is shown as *****
* color: shows a color picker widget
* datetime-local, email, month, tel, time, url, week: uses the browser native [input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

### Custom Widgets

It is possible to create custom widgets using the following steps:

* create a component that implements [WidgetComponent](https://github.com/dashjoin/json-schema-form/blob/master/projects/dashjoin/json-schema-form/src/lib/widget.component.ts). All relevant data such as the applicable subschema and the current value are passed to the component. Make sure to emit value changes. An example can be found [here](https://github.com/dashjoin/json-schema-form/tree/master/src/app/custom.component.ts)
* In the parent component, add this service to your constructor: private service: JsonSchemaFormService
* Register your widget in ngOnInit() using this service: this.service.registerComponent('times2', CustomComponent);
* Include the widget in your schema: { "widget": "custom", "widgetType": "times2" }

### Autocomplete choices

The following fields control how select and autocomplete options are obtained from a REST backend:

```
{
  "type": "string",
  "choicesUrl": "/assets/autocomplete-simple.json",
  "choicesVerb": "GET"
}
```

* choices: string array that allows defining the choices statically
* choicesUrl: defines the REST service URL
* choicesVerb: defines the HTTP verb to use for the REST service URL, default is POST
* choicesUrlArgs: defines the REST service parameter. The convention is to have a single parameter. Multiple fields need to be wrapped into a single object
* jsonPointer: used to transform the REST result into a string array if it is not already in that form.
  Note that we use a slightly extended version of [JSON Pointer](https://tools.ietf.org/html/rfc6901) that allows processing arrays of objects. Consider the following examples:

| Response  | JSON Pointer  | Result (string[]) |
|---|---|---|
| {"result": ["A", "B"]}  |  /result |  ["A", "B"] |
| [{"name":"A"}, {"name":"B"}] | /*/name  |  ["A", "B"] |

### Autocomplete and Select Display Names

If you want the option's control value (what is saved in the form) to be different than the option's display value (what is displayed in the text field),
the "displayWith" option allows you to do so. The value of "displayWith" is the name under which the implementation class to perform this job was registered.
The class must implement the [Displayer](https://github.com/dashjoin/json-schema-form/blob/master/projects/dashjoin/json-schema-form/src/lib/json-schema-form.service.ts) interface. An example can be found at the end of the [playground component](https://github.com/dashjoin/json-schema-form/blob/master/src/app/app.component.ts).
The registration can be done in ngOnInit() using this service: this.service.registerDisplayWith('states', new MyDisplayer()); Consider the following example:

```
{
  "type": "string",
  "displayWith": "localName",
  "choices": [
    "https://en.wikipedia.org/wiki/Indonesia",
    "https://en.wikipedia.org/wiki/Peru",
    "As is - no tooltip"
  ]
}
```

The autocomplete is configured with "localName" which is a built-in displayer.
It treats options like URLs and displays the local name which is the text after the last /. This causes the dropdown to display "Peru" with the tooltip indicating the real value "https://en.wikipedia.org/wiki/Peru" which is written to the JSON value.

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
* tab: controls are shown in tabs (only applies to arrays and objects with additionalProperties)
* table: controls are shown in a table with the property names being the column names (only applies to an array of objects)
* select: array is shown as a multi-select (only applies to arrays of string)

The style field allows passing CSS styles to the input fields. For instance, you could accommodate for longer
input values by increasing the default input element width:

```
{
  "type": "string",
  "style": {
    "width": "400px"
  }
}
```

Please also see the definition of the [Schema](https://github.com/dashjoin/json-schema-form/blob/master/projects/dashjoin/json-schema-form/src/lib/schema.ts) object.

## Structure of this repository

The repository contains:

* [The actual library code](https://github.com/dashjoin/json-schema-form/tree/master/projects/dashjoin/json-schema-form/src/lib)
* [Sources of the online demo playground](https://github.com/dashjoin/json-schema-form/tree/master/src/app)
