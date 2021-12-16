import { Type } from '@angular/core';
import { ChoiceHandler } from './choice';
import * as i0 from "@angular/core";
/**
 * service for registering custom components
 */
export declare class JsonSchemaFormService {
    /**
     * layout editor mode
     */
    editMode: boolean;
    /**
     * built-in formats
     */
    formats: {
        email: RegExp;
        ipv4: RegExp;
        url: RegExp;
        uri: RegExp;
    };
    /**
     * registry of custom widgets. The keys are the values used in schema.widgetType, the values
     * are the Type<any> of the custom widget component implementing WidgetComponent
     */
    registry: {};
    /**
     * registry of displayWith objects
     */
    displayWithRegistry: {
        [key: string]: ChoiceHandler;
    };
    /**
     * register custom component
     * @param key     the name of the component which is used in schema extension: widget=custom, widgetType=key
     * @param value   the implementation class
     */
    registerComponent(key: string, value: Type<any>): void;
    /**
     * register displayWith implementations
     * @param key     the name of the implementation which is used in schema extension: displayWith=key
     * @param value   the implementation class
     */
    registerDisplayWith(key: string, value: ChoiceHandler): void;
    static ɵfac: i0.ɵɵFactoryDef<JsonSchemaFormService, never>;
    static ɵprov: i0.ɵɵInjectableDef<JsonSchemaFormService>;
}
//# sourceMappingURL=json-schema-form.service.d.ts.map