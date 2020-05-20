import { Directive, ViewContainerRef } from '@angular/core';

/**
 * directive for dynamically loading custom widgets
 */
@Directive({
    selector: '[libWidgetHost]'
})
export class WidgetDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
