import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * service for registering custom components
 */
export class JsonSchemaFormService {
    constructor() {
        /**
         * layout editor mode
         */
        this.editMode = false;
        /**
         * built-in formats
         */
        this.formats = {
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            ipv4: /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/,
            url: /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/,
            uri: /^\w+:(\/?\/?)[^\s]+$/
        };
        /**
         * registry of custom widgets. The keys are the values used in schema.widgetType, the values
         * are the Type<any> of the custom widget component implementing WidgetComponent
         */
        this.registry = {};
        /**
         * registry of displayWith objects
         */
        this.displayWithRegistry = {};
    }
    /**
     * register custom component
     * @param key     the name of the component which is used in schema extension: widget=custom, widgetType=key
     * @param value   the implementation class
     */
    registerComponent(key, value) {
        this.registry[key] = value;
    }
    /**
     * register displayWith implementations
     * @param key     the name of the implementation which is used in schema extension: displayWith=key
     * @param value   the implementation class
     */
    registerDisplayWith(key, value) {
        this.displayWithRegistry[key] = value;
    }
}
JsonSchemaFormService.ɵfac = function JsonSchemaFormService_Factory(t) { return new (t || JsonSchemaFormService)(); };
JsonSchemaFormService.ɵprov = i0.ɵɵdefineInjectable({ token: JsonSchemaFormService, factory: JsonSchemaFormService.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonSchemaFormService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1zY2hlbWEtZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGFzaGpvaW4vanNvbi1zY2hlbWEtZm9ybS9zcmMvbGliL2pzb24tc2NoZW1hLWZvcm0uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDOztBQUdqRDs7R0FFRztBQUlILE1BQU0sT0FBTyxxQkFBcUI7SUFIbEM7UUFLRTs7V0FFRztRQUNJLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFeEI7O1dBRUc7UUFDSCxZQUFPLEdBQUc7WUFDUixLQUFLLEVBQUUseUpBQXlKO1lBQ2hLLElBQUksRUFBRSx1REFBdUQ7WUFDN0QsR0FBRyxFQUFFLHlHQUF5RztZQUM5RyxHQUFHLEVBQUUsc0JBQXNCO1NBQzVCLENBQUM7UUFFRjs7O1dBR0c7UUFDSCxhQUFRLEdBQUcsRUFBRSxDQUFDO1FBRWQ7O1dBRUc7UUFDSCx3QkFBbUIsR0FBcUMsRUFBRSxDQUFDO0tBbUI1RDtJQWpCQzs7OztPQUlHO0lBQ0gsaUJBQWlCLENBQUMsR0FBVyxFQUFFLEtBQWdCO1FBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUJBQW1CLENBQUMsR0FBVyxFQUFFLEtBQW9CO1FBQ25ELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDeEMsQ0FBQzs7MEZBNUNVLHFCQUFxQjs2REFBckIscUJBQXFCLFdBQXJCLHFCQUFxQixtQkFGcEIsTUFBTTt1RkFFUCxxQkFBcUI7Y0FIakMsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaG9pY2VIYW5kbGVyIH0gZnJvbSAnLi9jaG9pY2UnO1xyXG5cclxuLyoqXHJcbiAqIHNlcnZpY2UgZm9yIHJlZ2lzdGVyaW5nIGN1c3RvbSBjb21wb25lbnRzXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBKc29uU2NoZW1hRm9ybVNlcnZpY2Uge1xyXG5cclxuICAvKipcclxuICAgKiBsYXlvdXQgZWRpdG9yIG1vZGVcclxuICAgKi9cclxuICBwdWJsaWMgZWRpdE1vZGUgPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogYnVpbHQtaW4gZm9ybWF0c1xyXG4gICAqL1xyXG4gIGZvcm1hdHMgPSB7XHJcbiAgICBlbWFpbDogL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyxcclxuICAgIGlwdjQ6IC9eKD8hMCkoPyEuKlxcLiQpKCgxP1xcZD9cXGR8MjVbMC01XXwyWzAtNF1cXGQpKFxcLnwkKSl7NH0kLyxcclxuICAgIHVybDogL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuX1xcK34jPV17MSwyNTZ9XFwuW2EtekEtWjAtOSgpXXsxLDZ9XFxiKFstYS16QS1aMC05KClAOiVfXFwrLn4jPyYvLz1dKikkLyxcclxuICAgIHVyaTogL15cXHcrOihcXC8/XFwvPylbXlxcc10rJC9cclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiByZWdpc3RyeSBvZiBjdXN0b20gd2lkZ2V0cy4gVGhlIGtleXMgYXJlIHRoZSB2YWx1ZXMgdXNlZCBpbiBzY2hlbWEud2lkZ2V0VHlwZSwgdGhlIHZhbHVlc1xyXG4gICAqIGFyZSB0aGUgVHlwZTxhbnk+IG9mIHRoZSBjdXN0b20gd2lkZ2V0IGNvbXBvbmVudCBpbXBsZW1lbnRpbmcgV2lkZ2V0Q29tcG9uZW50XHJcbiAgICovXHJcbiAgcmVnaXN0cnkgPSB7fTtcclxuXHJcbiAgLyoqXHJcbiAgICogcmVnaXN0cnkgb2YgZGlzcGxheVdpdGggb2JqZWN0c1xyXG4gICAqL1xyXG4gIGRpc3BsYXlXaXRoUmVnaXN0cnk6IHsgW2tleTogc3RyaW5nXTogQ2hvaWNlSGFuZGxlciB9ID0ge307XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlZ2lzdGVyIGN1c3RvbSBjb21wb25lbnRcclxuICAgKiBAcGFyYW0ga2V5ICAgICB0aGUgbmFtZSBvZiB0aGUgY29tcG9uZW50IHdoaWNoIGlzIHVzZWQgaW4gc2NoZW1hIGV4dGVuc2lvbjogd2lkZ2V0PWN1c3RvbSwgd2lkZ2V0VHlwZT1rZXlcclxuICAgKiBAcGFyYW0gdmFsdWUgICB0aGUgaW1wbGVtZW50YXRpb24gY2xhc3NcclxuICAgKi9cclxuICByZWdpc3RlckNvbXBvbmVudChrZXk6IHN0cmluZywgdmFsdWU6IFR5cGU8YW55Pikge1xyXG4gICAgdGhpcy5yZWdpc3RyeVtrZXldID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZWdpc3RlciBkaXNwbGF5V2l0aCBpbXBsZW1lbnRhdGlvbnNcclxuICAgKiBAcGFyYW0ga2V5ICAgICB0aGUgbmFtZSBvZiB0aGUgaW1wbGVtZW50YXRpb24gd2hpY2ggaXMgdXNlZCBpbiBzY2hlbWEgZXh0ZW5zaW9uOiBkaXNwbGF5V2l0aD1rZXlcclxuICAgKiBAcGFyYW0gdmFsdWUgICB0aGUgaW1wbGVtZW50YXRpb24gY2xhc3NcclxuICAgKi9cclxuICByZWdpc3RlckRpc3BsYXlXaXRoKGtleTogc3RyaW5nLCB2YWx1ZTogQ2hvaWNlSGFuZGxlcikge1xyXG4gICAgdGhpcy5kaXNwbGF5V2l0aFJlZ2lzdHJ5W2tleV0gPSB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19