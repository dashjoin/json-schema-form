/**
 * simplified version of the JSON Meta Schema.
 * This includes the optional definition keywords that instruct the
 * form editor as to which input widgets are to be used and as to
 * how the widget layout is to be performed
 */
export interface Schema {

    /**
     * schema property type
     */
    type?: 'boolean' | 'string' | 'array' | 'number' | 'integer' | 'object';

    /**
     * schema property reference
     */
    '$ref'?: string;

    /**
     * referenced schemas can be embedded here, this key must be schema.$id
     */
    referenced?: { [key: string]: any };

    /**
     * fixed property value range.
     * if set, the editor uses a select element
     */
    enum?: string[];

    /**
     * indicates that the property is required (i.e. must be non null)
     * https://json-schema.org/understanding-json-schema/reference/object.html#required
     */
    required?: string[];

    /**
     * string pattern
     * https://json-schema.org/understanding-json-schema/reference/regular_expressions.html
     */
    pattern?: string;

    /**
     * choose a pattern based on pre-defined identifiers such as email etc.
     */
    format?: string;

    /**
     * Pattern to parse and serialize date strings. Bases on https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html
     * but supports only year (yyyy), month (MM), and day (dd), Only applies to "widget: date"
     */
    dateFormat?: string;

    /**
     * input must be multiple of x
     */
    multipleOf?: number;

    /**
     * number < > <= >=
     */
    maximum?: number;

    /**
     * number < > <= >=
     */
    minimum?: number;

    /**
     * number < > <= >=
     */
    exclusiveMaximum?: number;

    /**
     * number < > <= >=
     */
    exclusiveMinimum?: number;

    /**
     * string must be shorter / longer than x
     */
    maxLength?: number;

    /**
     * string must be shorter / longer than x
     */
    minLength?: number;

    /**
     * restrict array length
     */
    maxItems?: number;

    /**
     * restrict array length
     */
    minItems?: number;

    /**
     * makes sure array items are unique
     */
    uniqueItems?: boolean;

    /**
     * restrict object number of properties
     */
    maxProperties?: number;

    /**
     * restrict object number of properties
     */
    minProperties?: number;

    /**
     * field names must match this regular expression
     */
    propertyNames?: string;

    /**
     * dependencies allows specifying a map of field names to the fields they depend on:
     * "dependencies": {"credit_card": ["billing_address"]} states that a credit card
     * can only be present if the billing address is present
     */
    dependencies?: { [key: string]: string[] };

    /**
     * additional properties (with unknown name) have the following schema
     */
    additionalProperties?: Schema;

    /**
     * field title
     * https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.9.1
     */
    title?: string;

    /**
     * field description
     * https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.9.1
     */
    description?: string;

    /**
     * https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.9.5
     */
    examples?: string[];

    /**
     * https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.9.2
     */
    default?: any;

    /**
     * https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.9.4
     */
    readOnly?: boolean;

    /**
     * defines types that can be ref'ed
     */
    definitions?: { [key: string]: Schema };

    /**
     * defines the array element structure if type = array
     */
    items?: Schema;

    /**
     * defines properties if type = object
     */
    properties?: { [key: string]: Schema };


    // Extension keywords, meaning those defined outside of this document and its companions, are free to define other behaviors as well
    // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.3.1

    /**
     * defines this property to be a URI. On the UI it will be displayed as a string.
     * For instance, the implementation might decide to use the labelService to display nice names on the UI
     */
    uri?: boolean;

    /**
     * defines which input widget is used for data display and entry.
     * The implementation uses a mix of HTML input properties
     * (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
     * and native angular widgets such as https://material.angular.io/components/datepicker/overview
     */
    widget?: 'select' | 'upload' | 'date' | 'textarea' | 'password' | 'color' |
    'datetime-local' | 'email' | 'month' | 'tel' | 'time' | 'url' | 'week' | 'custom';

    /**
     * if widget=custom, this fields indicates which entry from the widget registry is to be used
     */
    widgetType?: string;

    /**
     * style applied to form element
     */
    style?: any;

    /**
     * class applied to form element
     */
    class?: string[];

    /**
     * used in case the select / autocomplete options are gathered from a REST service URL.
     * defines the REST service URL.
     */
    choicesUrl?: string;

    /**
     * used in case the select / autocomplete options are gathered from a REST service URL.
     * defines the HTTP verb to use for the REST service URL. The default is POST.
     */
    choicesVerb?: string;

    /**
     * used in case the select / autocomplete options are gathered from a REST service URL.
     * defines the REST service parameter. The convention is to have a single parameter.
     * Multiple fields need to be wrapped into a single object
     */
    choicesUrlArgs?: any;

    /**
     * used in case the select / autocomplete options are defined statically
     */
    choices?: (string | number)[];

    /**
     * name of the displayWith function
     */
    displayWith?: string;

    /**
     * alternative to displayWith in case we have static options
     */
    displayWithChoices?: string[];

    /**
     * used in case the select / autocomplete options are gathered from a REST service URL.
     * used to transform the REST result into a string array
     */
    jsonPointer?: string;

    /**
     * used in case the select / autocomplete options are gathered from a REST service URL.
     * JSON is assumed to be an object array, identifies the field to be used as option name
     */
    jsonName?: string;

    /**
     * used in case the select / autocomplete options are gathered from a REST service URL.
     * JSON is assumed to be an object array, identifies the field to be used as option value
     */
    jsonValue?: string;

    /**
     * input control layout:
     *
     * horizontal (default): input controls are arranged horizontally and flex-wrap if there is insufficient space
     * vertical: input controls are arranged vertically
     * tab: controls are shown in tabs (only applies to arrays)
     * table: controls are shown in a table with the property names being the column names (only applies to an array of objects)
     * select: array is shown as a multi-select (only applies to arrays of string)
     */
    layout?: 'tab' | 'table' | 'vertical' | 'horizontal' | 'select';

    /**
     * defines order, omission, and 2-level hierarchy (via nested lists) of the object properties.
     * The top level layout is defined as either horizontal or vertical, sublists use the opposite direction
     */
    order?: (string | string[])[];

    /**
     * simplified version of conditionals (https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.9.2.2).
     * works in conjunction with 'case'. switch marks a property whose value determines whether other properties
     * are shown or not
     */
    switch?: string;

    /**
     * show the property if the switch property's value is one of case's values
     */
    case?: string[];

    /**
     * indicates whether the component should be located in an expansion panel
     */
    expanded?: boolean;

    /**
     * hide undefined properties in object layouts
     */
    hideUndefined?: boolean;

    /**
     * allows defining computed properties that are set when the value changes
     */
    computed?: { [key: string]: string };

    /**
     * allows customizing the validation error message
     */
    errorMessage?: string;

    /**
     * if true, indicates not to show form editor elements
     */
    static?: boolean;
}
