import { Directive, ViewContainerRef } from '@angular/core';

/**
 * directive for dynamically loading custom widgets
 */
@Directive({
    selector: '[libWidgetHost]'
})
export class WidgetDirective {

    /**
     * allow caller to dynamically insert custom component
     * @param viewContainerRef  dynamic component handle
     */
    constructor(public viewContainerRef: ViewContainerRef) { }
}
