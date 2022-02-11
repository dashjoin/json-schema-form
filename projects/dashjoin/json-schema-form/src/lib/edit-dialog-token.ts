import { ComponentType } from "@angular/cdk/portal";
import { InjectionToken } from "@angular/core";

export const EDIT_DIALOG_TOKEN: InjectionToken<ComponentType<any>> =
    new InjectionToken<ComponentType<any>>('EDIT_DIALOG_TOKEN');