import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[formHost]',
})
export class FormDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
