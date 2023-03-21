import { Directive, ViewContainerRef } from '@angular/core';

/**
 * directive to dynamically add form elements
 */
@Directive({
    selector: '[compHost]',
})
export class CompDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
