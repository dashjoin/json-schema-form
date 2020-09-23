import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    filter(value: any, schema: Schema, current: string): Observable<Choice[]>;

    /**
     * return a single choice (i.e. convert value to Choice)
     */
    choice(value: any, schema: Schema): Choice;
}

/**
 * default implementation that handles choices based on schema fields.
 * can be overriden via schema.displayWith
 */
export class DefaultChoiceHandler implements ChoiceHandler {

    /**
     * create default choice handler
     *
     * @param http      http connection client
     */
    constructor(private http: HttpClient) { }

    load(value: any, schema: Schema): Observable<Choice[]> {
        return null;
    }

    filter(value: any, schema: Schema, current: string): Observable<Choice[]> {
        return null;
    }

    choice(value: any, schema: Schema): Choice {
        return null;
    }
}
