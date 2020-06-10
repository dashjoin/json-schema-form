import { Component, OnInit } from '@angular/core';
import { Schema, JsonSchemaFormService } from '@dashjoin/json-schema-form';
import { CustomComponent } from './custom.component';
import { Displayer } from 'projects/dashjoin/json-schema-form/src/public-api';

/**
 * router component
 */
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
}

/**
 * JSON schema form demo
 */
@Component({
  templateUrl: './app.component.html',
  styles: ['textarea {font-family: monospace; height: 300px}']
})
export class MainComponent implements OnInit {

  /**
   * need to access custom component registry
   */
  constructor(private service: JsonSchemaFormService) { }

  /**
   * example schema for meta schema case - also used in schema editor component
   */
  static schemaExample = {
    type: 'object',
    title: 'Personal Info',
    properties: {
      name: {
        type: 'string',
        title: 'Enter your name',
        required: true
      },
      age: {
        type: 'number',
        title: 'Your age (optional)',
      },
      emails: {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    }
  };

  /**
   * meta schema for meta schema case - also used in schema editor component
   */
  static metaschema: Schema = {
    $ref: '#/definitions/prop',
    definitions: {
      prop: {
        type: 'object',
        switch: 'type',
        class: [
          'mat-elevation-z4'
        ],
        style: {
          'font-size': 'small'
        },
        properties: {
          type: {
            type: 'string',
            enum: ['string', 'number', 'array', 'object']
          },
          title: { type: 'string' },
          required: { type: 'boolean', case: ['string', 'number'] },
          readOnly: { type: 'boolean', case: ['string', 'number', 'array'] },
          items: {
            $ref: '#/definitions/propNoRec'
          },
          properties: {
            case: ['object'],
            type: 'object',
            layout: 'vertical',
            additionalProperties: { $ref: '#/definitions/prop' }
          }
        }
      },
      propNoRec: {
        case: ['array'],
        type: 'object',
        switch: 'type',
        properties: {
          type: {
            type: 'string',
            enum: ['string', 'number', 'array', 'object']
          },
          properties: {
            case: ['object'],
            type: 'object',
            layout: 'vertical',
            additionalProperties: { $ref: '#/definitions/prop' }
          }
        }
      },
    }
  };

  /**
   * schema bound to component
   * <lib-json-schema-form [(value)]="value" [schema]="schema"></lib-json-schema-form>
   */
  schema: Schema = { type: 'string' };

  /**
   * value bound to component
   * <lib-json-schema-form [(value)]="value" [schema]="schema"></lib-json-schema-form>
   */
  value: any = 'test';

  /**
   * desc of the example
   */
  description = 'The simplest JSON schema form. Try clicking on the buttons to get to more complex examples.';

  /**
   * examples
   */
  examples: { [key: string]: { description: string, value: any, schema: Schema } } =
    {
      string: {
        description: 'The simplest JSON schema form. Try clicking on the buttons to get to more complex examples.',
        value: 'test',
        schema: { type: 'string' }
      },
      boolean: {
        description: 'Boolean defaults to a checkbox',
        value: true,
        schema: { type: 'boolean' }
      },
      integer: {
        description: 'Integer uses a textfield and rounds floating point numbers entered.',
        value: 5,
        schema: { type: 'integer' }
      },
      number: {
        description: 'Number allows entering any type of integer or floating point',
        value: 3.14,
        schema: { type: 'number' }
      },
      array: {
        description: 'Arrays display + and - controls',
        value: ['a', 'b'],
        schema: { type: 'array', items: { type: 'string' } }
      },
      object: {
        description: 'Object displays a key / value form',
        value: { name: 'Angular', version: 9 },
        schema: { type: 'object', properties: { name: { type: 'string' }, version: { type: 'number' } } }
      },
      select: {
        description: 'The select widget exchanges the input field for a select combo box',
        value: '',
        schema: {
          type: 'string',
          widget: 'select',
          choicesUrl: '/assets/autocomplete-simple.json',
          choicesVerb: 'GET'
        }
      },
      upload: {
        description: 'The file contents is written to the JSON value',
        value: '',
        schema: {
          type: 'string',
          widget: 'upload'
        }
      },
      date: {
        description: 'Entering dates using the material date picker',
        value: '',
        schema: {
          type: 'string',
          widget: 'date'
        }
      },
      textarea: {
        description: 'Textarea allows multi-line inputs. Note that the style key controls the input size',
        value: 'multi\nline\ntext',
        schema: {
          type: 'string',
          widget: 'textarea',
          style: { width: '600px', height: '300px', 'font-family': 'courier' }
        }
      },
      password: {
        description: 'Password entry - hidden on the UI',
        value: 'secret',
        schema: {
          type: 'string',
          widget: 'password'
        }
      },
      color: {
        description: 'Color picker generates hex color codes',
        value: '',
        schema: {
          type: 'string',
          widget: 'color'
        }
      },
      'datetime-local': {
        description: 'Browser input type (see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)',
        value: '',
        schema: {
          type: 'string',
          widget: 'datetime-local'
        }
      },
      email: {
        description: 'Browser input type (see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)',
        value: '',
        schema: {
          type: 'string',
          widget: 'email'
        }
      },
      month: {
        description: 'Browser input type (see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)',
        value: '',
        schema: {
          type: 'string',
          widget: 'month'
        }
      },
      tel: {
        description: 'Browser input type (see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)',
        value: '',
        schema: {
          type: 'string',
          widget: 'tel'
        }
      },
      time: {
        description: 'Browser input type (see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)',
        value: '',
        schema: {
          type: 'string',
          widget: 'time'
        }
      },
      url: {
        description: 'Browser input type (see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)',
        value: '',
        schema: {
          type: 'string',
          widget: 'url'
        }
      },
      week: {
        description: 'Browser input type (see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)',
        value: '',
        schema: {
          type: 'string',
          widget: 'week'
        }
      },
      custom: {
        description: 'JSON schema form can be extended by providing custom widgets. This example multiplies the value by 2.',
        value: 1,
        schema: {
          type: 'string',
          widget: 'custom',
          widgetType: 'times2'
        }
      },
      enum: {
        description: 'JSON schema enums defaults to a select combo box',
        value: null,
        schema: { type: 'string', enum: [null, 'true', 'false'] }
      },
      required: {
        description: 'Required fields warn the user if they are left blank',
        value: null,
        schema: { type: 'string', required: true }
      },
      title: {
        description: 'JSON schema titles show up in the input field',
        value: null,
        schema: { type: 'string', title: 'My title' }
      },
      description: {
        description: 'JSON schema description translates to tool tips',
        value: null,
        schema: { type: 'string', description: 'You find me in the tooltip' }
      },
      default: {
        description: 'JSON schema default values make sure null and undefined values are set',
        value: undefined,
        schema: { type: 'string', default: 'default value' }
      },
      examples: {
        description: 'JSON schema examples show up as a placeholder',
        value: null,
        schema: { type: 'string', examples: ['A possible entry'] }
      },
      readOnly: {
        description: 'JSON schema read only causes the input element to be disabled',
        value: 'readOnly value',
        schema: { type: 'string', readOnly: true }
      },
      additionalProperties: {
        description: 'JSON schema additional properties allow arbitrary key / value objects to be edited',
        value: { url: 'http://example.org', args: { limit: 10 } },
        schema: {
          type: 'object',
          properties: {
            url: { type: 'string' },
            args: {
              type: 'object',
              layout: 'vertical',
              additionalProperties: { type: 'string' }
            }
          }
        }
      },
      ref: {
        description: 'JSON schema ref allows for definitions to be reused. Here we reuse the address to enter both work and home address.',
        value: null,
        schema: {
          definitions: {
            address: {
              type: 'object',
              properties: {
                city: { type: 'string' },
                zip: { type: 'number' },
              }
            }
          },
          type: 'object',
          properties: {
            home: { $ref: '#/definitions/address' },
            work: { $ref: '#/definitions/address' }
          }
        }
      },
      pattern: {
        description: 'JSON schema pattern allows specifying a pattern that must match the input (^ matches the beginning, $ the end)',
        value: 'abcd3456',
        schema: {
          type: 'string',
          pattern: '^[a-z]+$'
        }
      },
      compute: {
        description: 'Allows for computed keys on objects',
        value: null,
        schema: {
          type: 'object',
          properties: { first: { type: 'string' }, last: { type: 'string' } },
          computed: { salutation: 'Dear ${first} ${last},' }
        }
      },
      simpleGet: {
        description: 'Getting autocomplete options from a REST service',
        value: null,
        schema: {
          type: 'string',
          choicesUrl: '/assets/autocomplete-simple.json',
          choicesVerb: 'GET'
        }
      },
      jsonPointer: {
        description: 'Getting autocomplete options from a REST service and processing the result via JSON pointer',
        value: null,
        schema: {
          type: 'string',
          choicesUrl: '/assets/autocomplete-complex.json',
          jsonPointer: '/result/*/name',
          choicesVerb: 'GET'
        }
      },
      'static-choices': {
        description: 'Static options for autocomplete',
        value: null,
        schema: {
          type: 'string',
          choices: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
        }
      },
      displayWith: {
        description: 'Select and autocomplete allow display names to be specified in case the values are not easily readable',
        value: {
          select: 'WA',
          autocomplete: 'https://en.wikipedia.org/wiki/Indonesia'
        },
        schema: {
          type: 'object',
          properties: {
            autocomplete: {
              type: 'string',
              displayWith: 'localName',
              choices: ['https://en.wikipedia.org/wiki/Indonesia', 'https://en.wikipedia.org/wiki/Peru', 'As is - no tooltip']
            },
            select: {
              type: 'string',
              widget: 'select',
              displayWith: 'states',
              choices: ['CA', 'OR', 'WA']
            }
          }
        }
      },
      tab: {
        description: 'Tab layout for arrays and objects with arbitrary key / value pairs',
        value: [{ name: 'Angular', version: 9 }, { name: 'Vue' }],
        schema: {
          type: 'array', layout: 'tab',
          items: { type: 'object', properties: { name: { type: 'string' }, version: { type: 'number' } } }
        }
      },
      table: {
        description: 'Table layout for arrays of objects',
        value: [{ name: 'Angular', version: 9 }, { name: 'Vue' }],
        schema: {
          type: 'array', layout: 'table',
          items: { type: 'object', properties: { name: { type: 'string' }, version: { type: 'number' } } }
        }
      },
      vertical: {
        description: 'Vertical flex layout of input elements',
        value: [{ name: 'Angular', version: 9 }, { name: 'Vue' }],
        schema: {
          type: 'array', layout: 'vertical',
          items: { type: 'object', properties: { name: { type: 'string' }, version: { type: 'number' } } }
        }
      },
      horizontal: {
        description: 'Horizontal flex layout of input elements',
        value: [{ name: 'Angular', version: 9 }, { name: 'Vue' }],
        schema: {
          type: 'array', layout: 'horizontal',
          items: { type: 'object', properties: { name: { type: 'string' }, version: { type: 'number' } } }
        }
      },
      nested: {
        description: 'Example showing that layouts can also be nested on different levels',
        value: [{ name: 'Angular', version: 9 }, { name: 'Vue' }],
        schema: {
          type: 'array', layout: 'horizontal',
          items: { type: 'object', layout: 'vertical', properties: { name: { type: 'string' }, version: { type: 'number' } } }
        }
      },
      'array-select': {
        description: 'Allows arrays to be assembled from options',
        value: ['India', 'China'],
        schema: {
          type: 'array', layout: 'select',
          choicesUrl: '/assets/autocomplete-simple.json',
          choicesVerb: 'GET',
          items: { type: 'string' }
        }
      },
      conditional: {
        description: 'Allows a switch field to determine which other fields are visible. For instance, cicles show radius but not height',
        value: { type: 'circle' },
        schema: {
          type: 'object',
          switch: 'type',
          properties: {
            type: { type: 'string', enum: ['circle', 'rect', 'square'] },
            color: { type: 'string', widget: 'color' },
            radius: { type: 'number', case: ['circle'] },
            width: { type: 'number', case: ['rect', 'square'] },
            height: { type: 'number', case: ['rect'] },
          }
        }
      },
      style: {
        description: 'Shows how css styles can be passed to form elements',
        value: 'style me!',
        schema: {
          type: 'string',
          style: {
            'font-size': '44px',
            'font-family': 'courier',
            width: '80%',
            'background-color': 'lightgrey',
            color: 'blue',
            padding: '50px'
          }
        }
      },
      class: {
        description: 'Shows how css classes can be passed to the form elements',
        value: ['a', 'b'],
        schema: {
          type: 'array',
          class: [
            'mat-elevation-z16'
          ],
          items: {
            type: 'string'
          }
        }
      },
      expanded: {
        description: 'If expanded is present, the component is put in an expansion panel. The value indicates if the panel is open or not',
        value: [{ name: 'Angular' }, {}],
        schema: {
          type: 'array',
          layout: 'vertical',
          title: 'Software',
          items: {
            expanded: false,
            type: 'object',
            properties: {
              name: {
                type: 'string'
              },
              version: {
                type: 'number'
              }
            }
          }
        }
      },
      complex: {
        description: 'A complex example combining multiple features',
        value: [
          {
            name: 'joe',
            country: 'United States',
            email: ['joe@example.org', 'alt@example.org'],
            password: '123456',
            birthday: '2000-03-22T23:00:00.000Z',
            consent: 'yes'
          },
          {
            name: 'mike'
          }
        ],
        schema: {
          type: 'array',
          title: 'Person',
          items: {
            type: 'object',
            layout: 'vertical',
            properties: {
              name: { type: 'string' },
              country: {
                description: 'Options loaded via REST',
                type: 'string',
                widget: 'select',
                choicesUrl: '/assets/autocomplete-simple.json',
                choicesVerb: 'GET'
              },
              password: {
                type: 'string',
                widget: 'password'
              },
              birthday: {
                type: 'string',
                widget: 'date'
              },
              email: {
                type: 'array',
                layout: 'vertical',
                items: { type: 'string' }
              },
              consent: {
                title: 'I consent',
                description: 'This is a required field',
                required: true,
                type: 'string',
                enum: [null, 'yes', 'no']
              },
            }
          }
        }
      },
      metaschema: {
        description: 'This schema allows editing JSON schema itself. Note that not all JSON schema features are supported.',
        value: MainComponent.schemaExample,
        schema: MainComponent.metaschema
      }
    };

  /**
   * error string in case the user enters invalid JSON in the schema text area
   */
  errorS: any;

  /**
   * error string in case the user enters invalid JSON in the value text area
   */
  errorV: any;

  /**
   * register custom demo comp
   */
  ngOnInit() {
    this.service.registerComponent('times2', CustomComponent);
    this.service.registerDisplayWith('states', new MyDisplayer());
  }

  /**
   * select one of the examples
   */
  select(key: string) {
    this.value = this.examples[key].value;
    this.schema = this.examples[key].schema;
    this.description = this.examples[key].description;
  }

  /**
   * stringify JSON for display in the textarea
   */
  stringify(o: any): string {
    return JSON.stringify(o, null, 2);
  }

  /**
   * user made change in schema textarea:
   * set schema and handle parse error
   */
  changeS(event: any): void {
    try {
      this.schema = JSON.parse(event.target.value);
      this.errorS = null;
    } catch (e) {
      this.errorS = e;
    }
  }

  /**
   * user made change in value textarea:
   * set schema and handle parse error
   */
  changeV(event: any): void {
    try {
      this.value = JSON.parse(event.target.value);
      this.errorV = null;
    } catch (e) {
      this.errorV = e;
    }
  }
}

/**
 * sample displayer implemetation
 */
export class MyDisplayer implements Displayer {
  displayWith(option: string): string {
    if (option === 'CA') {
      return 'California';
    }
    if (option === 'OR') {
      return 'Oregon';
    }
    if (option === 'WA') {
      return 'Washington';
    }
    return null;
  }
}
