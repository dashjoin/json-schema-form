import { Component, OnInit } from '@angular/core';
import { Schema, JsonSchemaFormService } from '@dashjoin/json-schema-form';
import { CustomComponent } from './custom.component';

/**
 * JSON schema form demo
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['textarea {font-family: monospace; height: 300px}']
})
export class AppComponent implements OnInit {

  constructor(private service: JsonSchemaFormService) { }

  /**
   * schema nd value bound to component
   * <lib-json-schema-form [(value)]="value" [schema]="schema"></lib-json-schema-form>
   */
  schema: Schema = { type: 'string' };
  value: any = 'test';

  /**
   * examples
   */
  examples: { [key: string]: { value: any, schema: Schema } } =
    {
      string: {
        value: 'test',
        schema: { type: 'string' }
      },
      boolean: {
        value: true,
        schema: { type: 'boolean' }
      },
      integer: {
        value: 5,
        schema: { type: 'integer' }
      },
      number: {
        value: 3.14,
        schema: { type: 'number' }
      },
      array: {
        value: ['a', 'b'],
        schema: { type: 'array', items: { type: 'string' } }
      },
      object: {
        value: { name: 'Angular', version: 9 },
        schema: { type: 'object', properties: { name: { type: 'string' }, version: { type: 'number' } } }
      },
      select: {
        value: '',
        schema: {
          type: 'string',
          widget: 'select',
          choicesUrl: '/assets/autocomplete-simple.json',
          choicesVerb: 'GET'
        }
      },
      upload: {
        value: '',
        schema: {
          type: 'string',
          widget: 'upload'
        }
      },
      date: {
        value: '',
        schema: {
          type: 'string',
          widget: 'date'
        }
      },
      textarea: {
        value: '',
        schema: {
          type: 'string',
          widget: 'textarea'
        }
      },
      largetextarea: {
        value: '',
        schema: {
          type: 'string',
          widget: 'largetextarea'
        }
      },
      password: {
        value: '',
        schema: {
          type: 'string',
          widget: 'password'
        }
      },
      color: {
        value: '',
        schema: {
          type: 'string',
          widget: 'color'
        }
      },
      'datetime-local': {
        value: '',
        schema: {
          type: 'string',
          widget: 'datetime-local'
        }
      },
      email: {
        value: '',
        schema: {
          type: 'string',
          widget: 'email'
        }
      },
      month: {
        value: '',
        schema: {
          type: 'string',
          widget: 'month'
        }
      },
      tel: {
        value: '',
        schema: {
          type: 'string',
          widget: 'tel'
        }
      },
      time: {
        value: '',
        schema: {
          type: 'string',
          widget: 'time'
        }
      },
      url: {
        value: '',
        schema: {
          type: 'string',
          widget: 'url'
        }
      },
      week: {
        value: '',
        schema: {
          type: 'string',
          widget: 'week'
        }
      },
      custom: {
        value: 1,
        schema: {
          type: 'string',
          widget: 'custom',
          widgetType: 'times2'
        }
      },
      enum: {
        value: null,
        schema: { type: 'string', enum: [null, 'true', 'false'] }
      },
      required: {
        value: null,
        schema: { type: 'string', required: true }
      },
      title: {
        value: null,
        schema: { type: 'string', title: 'My title' }
      },
      description: {
        value: null,
        schema: { type: 'string', description: 'You find me in the tooltip' }
      },
      default: {
        value: undefined,
        schema: { type: 'string', default: 'default value' }
      },
      examples: {
        value: null,
        schema: { type: 'string', examples: ['A possible entry'] }
      },
      readOnly: {
        value: 'readOnly value',
        schema: { type: 'string', readOnly: true }
      },
      additionalProperties: {
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
      simpleGet: {
        value: null,
        schema: {
          type: 'string',
          choicesUrl: '/assets/autocomplete-simple.json',
          choicesVerb: 'GET'
        }
      },
      jsonPointer: {
        value: null,
        schema: {
          type: 'string',
          choicesUrl: '/assets/autocomplete-complex.json',
          jsonPointer: '/result/*/name',
          choicesVerb: 'GET'
        }
      },
      'static-choices': {
        value: null,
        schema: {
          type: 'string',
          choices: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
        }
      },
      tab: {
        value: [{ name: 'Angular', version: 9 }, { name: 'Vue' }],
        schema: {
          type: 'array', layout: 'tab',
          items: { type: 'object', properties: { name: { type: 'string' }, version: { type: 'number' } } }
        }
      },
      table: {
        value: [{ name: 'Angular', version: 9 }, { name: 'Vue' }],
        schema: {
          type: 'array', layout: 'table',
          items: { type: 'object', properties: { name: { type: 'string' }, version: { type: 'number' } } }
        }
      },
      vertical: {
        value: [{ name: 'Angular', version: 9 }, { name: 'Vue' }],
        schema: {
          type: 'array', layout: 'vertical',
          items: { type: 'object', properties: { name: { type: 'string' }, version: { type: 'number' } } }
        }
      },
      horizontal: {
        value: [{ name: 'Angular', version: 9 }, { name: 'Vue' }],
        schema: {
          type: 'array', layout: 'horizontal',
          items: { type: 'object', properties: { name: { type: 'string' }, version: { type: 'number' } } }
        }
      },
      nested: {
        value: [{ name: 'Angular', version: 9 }, { name: 'Vue' }],
        schema: {
          type: 'array', layout: 'horizontal',
          items: { type: 'object', layout: 'vertical', properties: { name: { type: 'string' }, version: { type: 'number' } } }
        }
      },
      'array-select': {
        value: ['India', 'China'],
        schema: {
          type: 'array', layout: 'select',
          choicesUrl: '/assets/autocomplete-simple.json',
          choicesVerb: 'GET',
          items: { type: 'string' }
        }
      },
      conditional: {
        value: { type: 'circle' },
        schema: {
          type: 'object',
          switch: 'type',
          properties: {
            type: { type: 'string', enum: ['circle', 'rect'] },
            color: { type: 'string', widget: 'color' },
            radius: { type: 'number', case: 'circle' },
            width: { type: 'number', case: 'rect' },
            height: { type: 'number', case: 'rect' },
          }
        }
      },
      complex: {
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
        value: {
          type: 'object',
          properties: {
            name: {
              type: 'string'
            },
            age: {
              type: 'number'
            }
          }
        },
        schema: {
          $ref: '#/definitions/prop',
          definitions: {
            prop: {
              type: 'object',
              switch: 'type',
              properties: {
                type: {
                  type: 'string',
                  enum: ['string', 'number', 'array', 'object']
                },
                properties: {
                  case: 'object',
                  type: 'object',
                  layout: 'vertical',
                  additionalProperties: { $ref: '#/definitions/prop' }
                }
              }
            }
          }
        }
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

  ngOnInit() {
    this.service.registerComponent('times2', CustomComponent);
  }

  /**
   * select one of the examples
   */
  select(key: string) {
    this.value = this.examples[key].value;
    this.schema = this.examples[key].schema;
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
