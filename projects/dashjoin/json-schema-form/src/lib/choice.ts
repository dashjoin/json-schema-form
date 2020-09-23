import { HttpClient, HttpHeaders } from '@angular/common/http';
import { forkJoin, merge, Observable, of } from 'rxjs';
import { Schema } from './schema';
import { map, publishReplay, refCount, switchMap } from 'rxjs/operators';
import { JsonPointer } from './json-pointer';

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

    /**
     * http cache for REST request on config/Table (i.e. schema requests)
     */
    cache: Observable<Choice[]>;

    load(value: any, schema: Schema): Observable<Choice[]> {

        if (!this.cache) {
            if (schema.choices) {
                // static choices are given, convert them to Choice and merge the result
                const arr: Observable<Choice>[] = [];
                for (const s of schema.choices) {
                    arr.push(this.choice(s, schema));
                }
                this.cache = forkJoin(arr);
            } else {
                // load choices from URL
                this.cache = this.getChoices(schema.choicesUrl, schema.choicesUrlArgs, schema.choicesVerb).pipe(
                    switchMap(res => {
                        if (schema.jsonPointer) {
                            res = JsonPointer.jsonPointer(res, schema.jsonPointer);
                            if (!Array.isArray(res)) {
                                res = [res];

                                // introduce jsonName, jsonValue
                            }
                        }
                        const obs: Observable<Choice>[] = [];
                        for (const r of res) {
                            obs.push(this.choice(r, schema));
                        }
                        return forkJoin(obs);
                    }),

                    // setup caching
                    publishReplay(1),
                    refCount()
                );
            }
        }
        return this.cache;
    }

    filter(value: any, schema: Schema, current: string, choices: Observable<Choice[]>): Observable<Choice[]> {
        return choices;
    }

    /**
     * default choice implementation: just reuse value as name
     * check for localName
     */
    choice(value: any, schema: Schema): Observable<Choice> {
        if (schema.displayWith === 'localName') {
            const parts = value.split('/');
            return of({ value, name: parts[parts.length - 1] });
        }
        return of({ value, name: value });
    }

    /**
     * handle GET / POST
     */
    getChoices(url: string, args: any, verb: string): Observable<any> {
        if (verb === 'GET') {
            return this.http.get<any[]>(url, args);
        } else {
            return this.http.post<any[]>(url, args, {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                })
            });
        }
    }
}
