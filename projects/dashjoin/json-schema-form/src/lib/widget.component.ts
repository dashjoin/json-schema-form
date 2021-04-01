import { EventEmitter } from '@angular/core';
import { Schema } from './schema';

/**
 * interface that must be implemented by all custom components
 */
export interface WidgetComponent {

    /**
     * the name of the input field
     */
    label: string;

    /**
     * the input value
     */
    value: any;

    /**
     * root form value (can be used in custom components)
     */
    rootValue: any;

    /**
     * JSON schema to use
     */
    schema: Schema;

    /**
     * root JSON schema to use when looking up $ref (simply passed along the tree)
     */
    rootSchema: Schema;

    /**
     * emit changes done by the user in the component
     */
    valueChange: EventEmitter<any>;

    /**
     * emit validation errors
     */
    errorChange: EventEmitter<string>;
}
