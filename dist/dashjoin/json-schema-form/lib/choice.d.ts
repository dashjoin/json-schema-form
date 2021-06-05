import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Schema } from './schema';
/**
 * class backing a select / autocomplete option
 */
export interface Choice {
    /**
     * select value
     */
    value: any;
    /**
     * display name
     */
    name: string;
}
/**
 * interface for choice handlers for select / autocomplete choices
 */
export interface ChoiceHandler {
    /**
     * loads the choices
     */
    load(value: any, schema: Schema): Observable<Choice[]>;
    /**
     * user typed in autocomplete field
     */
    filter(value: any, schema: Schema, current: string, choices: Observable<Choice[]>): Observable<Choice[]>;
    /**
     * return a single choice (i.e. convert value to Choice)
     */
    choice(value: any, schema: Schema): Observable<Choice>;
    /**
     * delay between keystrokes before new data is loaded
     */
    debounceTime(): number;
}
/**
 * default implementation that handles choices based on schema fields.
 * can be overriden via schema.displayWith
 */
export declare class DefaultChoiceHandler implements ChoiceHandler {
    private http;
    /**
     * create default choice handler
     *
     * @param http      http connection client
     */
    constructor(http: HttpClient);
    /**
     * http cache for REST request on config/Table (i.e. schema requests)
     */
    cache: Observable<Choice[]>;
    /**
     * load choices
     */
    load(value: any, schema: Schema): Observable<Choice[]>;
    /**
     * filter after keystroke
     */
    filter(value: any, schema: Schema, current: string, choices: Observable<Choice[]>): Observable<Choice[]>;
    /**
     * called from filter, intended to allow subclasses to easily change filter algorithm
     */
    include(i: Choice, current: string): boolean;
    /**
     * default choice implementation: just reuse value as name
     * check for localName
     */
    choice(value: any, schema: Schema): Observable<Choice>;
    /**
     * handle GET / POST
     */
    getChoices(url: string, args: any, verb: string): Observable<any>;
    /**
     * default: no delay
     */
    debounceTime(): number;
}
//# sourceMappingURL=choice.d.ts.map