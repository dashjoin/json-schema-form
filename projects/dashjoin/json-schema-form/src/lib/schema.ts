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
    type: "boolean" | "string" | "array" | "number" | "integer" | "object"

    /**
     * fixed property value range.
     * if set, the editor uses a select element
     */
    enum?: string[]

    /**
     * indicates that the property is required (i.e. must be non null)
     * note that the latest spec defines required as an array of prop names:
     * https://json-schema.org/understanding-json-schema/reference/object.html#required
     */
    required?: boolean

    /**
     * field title
     * https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.9.1
     */
    title?: string

    /**
     * field description
     * https://json-schema.org/draft/2019-09/json-schema-validation.html#rfc.section.9.1
     */
    description?: string

    /**
     * defines the array element structure if type = array
     */
    items?: Schema

    /**
     * defines properties if type = object
     */
    properties?: { [key: string]: Schema }


    // Extension keywords, meaning those defined outside of this document and its companions, are free to define other behaviors as well
    // https://json-schema.org/draft/2019-09/json-schema-core.html#rfc.section.4.3.1

    /**
     * defines this property to be a URI. On the UI it will be displayed as a string.
     * For instance, the implementation might decide to use the labelService to display nice names on the UI
     */
    uri?: boolean

    /**
     * defines which input widget is used for data display and entry.
     * The implementation uses a mix of HTML input properties
     * (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
     * and native angular widgets such as https://material.angular.io/components/datepicker/overview
     */
    widget?: "select" | "upload" | "date" | "textarea" | "largetextarea" | "password" | "color" | "datetime-local" | "email" | "month" | "tel" | "time" | "url" | "week"

    /**
     * used in case the select / autocomplete options are gathered from a REST service URL.
     * defines the REST service URL.
     */
    choicesUrl?: string

    /**
     * used in case the select / autocomplete options are gathered from a REST service URL.
     * defines the HTTP verb to use for the REST service URL. The default is POST.
     */
    choicesVerb?: string

    /**
     * used in case the select / autocomplete options are gathered from a REST service URL.
     * defines the REST service parameter. The convention is to have a single parameter.
     * Multiple fields need to be wrapped into a single object
     */
    choicesUrlArgs?: any

    /**
     * used in case the select / autocomplete options are gathered from a REST service URL.
     * used to transform the REST result into a string array
     */
    jsonPath?: string

    /**
     * input control layout:
     *
     * horizontal (default): input controls are arranged horizontally and flex-wrap if there is insufficient space
     * vertical: input controls are arranged vertically
     * tab: controls are shown in tabs (only applies to arrays)
     * table: controls are shown in a table with the property names being the column names (only applies to an array of objects)
     */
    layout?: "tab" | "table" | "vertical" | "horizontal"
}
