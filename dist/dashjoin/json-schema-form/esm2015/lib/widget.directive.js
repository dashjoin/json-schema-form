import { Directive } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * directive for dynamically loading custom widgets
 */
export class WidgetDirective {
    /**
     * allow caller to dynamically insert custom component
     * @param viewContainerRef  dynamic component handle
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }
}
WidgetDirective.ɵfac = function WidgetDirective_Factory(t) { return new (t || WidgetDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
WidgetDirective.ɵdir = i0.ɵɵdefineDirective({ type: WidgetDirective, selectors: [["", "libWidgetHost", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetDirective, [{
        type: Directive,
        args: [{
                selector: '[libWidgetHost]'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Rhc2hqb2luL2pzb24tc2NoZW1hLWZvcm0vc3JjL2xpYi93aWRnZXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQW9CLE1BQU0sZUFBZSxDQUFDOztBQUU1RDs7R0FFRztBQUlILE1BQU0sT0FBTyxlQUFlO0lBRXhCOzs7T0FHRztJQUNILFlBQW1CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUksQ0FBQzs7OEVBTmpELGVBQWU7b0RBQWYsZUFBZTt1RkFBZixlQUFlO2NBSDNCLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2FBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogZGlyZWN0aXZlIGZvciBkeW5hbWljYWxseSBsb2FkaW5nIGN1c3RvbSB3aWRnZXRzXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICAgIHNlbGVjdG9yOiAnW2xpYldpZGdldEhvc3RdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgV2lkZ2V0RGlyZWN0aXZlIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIGFsbG93IGNhbGxlciB0byBkeW5hbWljYWxseSBpbnNlcnQgY3VzdG9tIGNvbXBvbmVudFxyXG4gICAgICogQHBhcmFtIHZpZXdDb250YWluZXJSZWYgIGR5bmFtaWMgY29tcG9uZW50IGhhbmRsZVxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikgeyB9XHJcbn1cclxuIl19