import { NgModule } from '@angular/core';
import { JsonSchemaFormComponent } from './json-schema-form.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { WidgetDirective } from './widget.directive';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { EditElementDialogComponent } from './edit-element-dialog.component';
import { MatChipsModule } from '@angular/material/chips';
import { DragDropModule } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
export class JsonSchemaFormModule {
}
JsonSchemaFormModule.ɵfac = function JsonSchemaFormModule_Factory(t) { return new (t || JsonSchemaFormModule)(); };
JsonSchemaFormModule.ɵmod = i0.ɵɵdefineNgModule({ type: JsonSchemaFormModule });
JsonSchemaFormModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
        // turn off tooltip gestures on mobile: https://github.com/angular/components/issues/4892
        { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: { touchGestures: 'off' } }
    ], imports: [[
            MatCardModule,
            FlexLayoutModule,
            MatIconModule,
            MatTooltipModule,
            MatTableModule,
            MatTabsModule,
            MatFormFieldModule,
            MatSelectModule,
            MatDatepickerModule,
            MatCheckboxModule,
            MatAutocompleteModule,
            HttpClientModule,
            CommonModule,
            MatInputModule,
            MatNativeDateModule,
            MatButtonModule,
            MatExpansionModule,
            MatMenuModule,
            ReactiveFormsModule,
            MatDialogModule,
            MatChipsModule,
            DragDropModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(JsonSchemaFormModule, { declarations: [JsonSchemaFormComponent, EditElementDialogComponent, WidgetDirective], imports: [MatCardModule,
        FlexLayoutModule,
        MatIconModule,
        MatTooltipModule,
        MatTableModule,
        MatTabsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatAutocompleteModule,
        HttpClientModule,
        CommonModule,
        MatInputModule,
        MatNativeDateModule,
        MatButtonModule,
        MatExpansionModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatChipsModule,
        DragDropModule], exports: [JsonSchemaFormComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonSchemaFormModule, [{
        type: NgModule,
        args: [{
                declarations: [JsonSchemaFormComponent, EditElementDialogComponent, WidgetDirective],
                imports: [
                    MatCardModule,
                    FlexLayoutModule,
                    MatIconModule,
                    MatTooltipModule,
                    MatTableModule,
                    MatTabsModule,
                    MatFormFieldModule,
                    MatSelectModule,
                    MatDatepickerModule,
                    MatCheckboxModule,
                    MatAutocompleteModule,
                    HttpClientModule,
                    CommonModule,
                    MatInputModule,
                    MatNativeDateModule,
                    MatButtonModule,
                    MatExpansionModule,
                    MatMenuModule,
                    ReactiveFormsModule,
                    MatDialogModule,
                    MatChipsModule,
                    DragDropModule
                ],
                exports: [JsonSchemaFormComponent],
                providers: [
                    // turn off tooltip gestures on mobile: https://github.com/angular/components/issues/4892
                    { provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: { touchGestures: 'off' } }
                ]
            }]
    }], null, null); })();
i0.ɵɵsetComponentScope(EditElementDialogComponent, [i1.MatDialogContent, JsonSchemaFormComponent, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose], []);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1zY2hlbWEtZm9ybS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9kYXNoam9pbi9qc29uLXNjaGVtYS1mb3JtL3NyYy9saWIvanNvbi1zY2hlbWEtZm9ybS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzNELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFtQ3hELE1BQU0sT0FBTyxvQkFBb0I7O3dGQUFwQixvQkFBb0I7d0RBQXBCLG9CQUFvQjs2REFOcEI7UUFDVCx5RkFBeUY7UUFDekYsRUFBRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFO0tBQzdFLFlBNUJRO1lBQ1AsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLGNBQWM7WUFDZCxhQUFhO1lBQ2Isa0JBQWtCO1lBQ2xCLGVBQWU7WUFDZixtQkFBbUI7WUFDbkIsaUJBQWlCO1lBQ2pCLHFCQUFxQjtZQUNyQixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGNBQWM7WUFDZCxtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixjQUFjO1lBQ2QsY0FBYztTQUNmO3dGQVFVLG9CQUFvQixtQkFoQ2hCLHVCQUF1QixFQUFFLDBCQUEwQixFQUFFLGVBQWUsYUFFakYsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGNBQWM7UUFDZCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixjQUFjO1FBQ2QsY0FBYyxhQUVOLHVCQUF1Qjt1RkFPdEIsb0JBQW9CO2NBakNoQyxRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsdUJBQXVCLEVBQUUsMEJBQTBCLEVBQUUsZUFBZSxDQUFDO2dCQUNwRixPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGFBQWE7b0JBQ2IsZ0JBQWdCO29CQUNoQixjQUFjO29CQUNkLGFBQWE7b0JBQ2Isa0JBQWtCO29CQUNsQixlQUFlO29CQUNmLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixxQkFBcUI7b0JBQ3JCLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixjQUFjO29CQUNkLG1CQUFtQjtvQkFDbkIsZUFBZTtvQkFDZixrQkFBa0I7b0JBQ2xCLGFBQWE7b0JBQ2IsbUJBQW1CO29CQUNuQixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztnQkFDbEMsU0FBUyxFQUFFO29CQUNULHlGQUF5RjtvQkFDekYsRUFBRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsUUFBUSxFQUFFLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBRSxFQUFFO2lCQUM3RTthQUVGOzt1QkEvQnlDLDBCQUEwQix3QkFBbkQsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSnNvblNjaGVtYUZvcm1Db21wb25lbnQgfSBmcm9tICcuL2pzb24tc2NoZW1hLWZvcm0uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IE1hdENhcmRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcclxuaW1wb3J0IHsgRmxleExheW91dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2ZsZXgtbGF5b3V0JztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlLCBNQVRfVE9PTFRJUF9ERUZBVUxUX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdFNlbGVjdE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcbmltcG9ydCB7IE1hdERhdGVwaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IE1hdEF1dG9jb21wbGV0ZU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2F1dG9jb21wbGV0ZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBNYXROYXRpdmVEYXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IFdpZGdldERpcmVjdGl2ZSB9IGZyb20gJy4vd2lkZ2V0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1hdEV4cGFuc2lvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2V4cGFuc2lvbic7XHJcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcclxuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgRWRpdEVsZW1lbnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2VkaXQtZWxlbWVudC1kaWFsb2cuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XHJcbmltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0pzb25TY2hlbWFGb3JtQ29tcG9uZW50LCBFZGl0RWxlbWVudERpYWxvZ0NvbXBvbmVudCwgV2lkZ2V0RGlyZWN0aXZlXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBNYXRDYXJkTW9kdWxlLFxyXG4gICAgRmxleExheW91dE1vZHVsZSxcclxuICAgIE1hdEljb25Nb2R1bGUsXHJcbiAgICBNYXRUb29sdGlwTW9kdWxlLFxyXG4gICAgTWF0VGFibGVNb2R1bGUsXHJcbiAgICBNYXRUYWJzTW9kdWxlLFxyXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxyXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxyXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgIE1hdENoZWNrYm94TW9kdWxlLFxyXG4gICAgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLFxyXG4gICAgSHR0cENsaWVudE1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcclxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcclxuICAgIE1hdEV4cGFuc2lvbk1vZHVsZSxcclxuICAgIE1hdE1lbnVNb2R1bGUsXHJcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgTWF0RGlhbG9nTW9kdWxlLFxyXG4gICAgTWF0Q2hpcHNNb2R1bGUsXHJcbiAgICBEcmFnRHJvcE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW0pzb25TY2hlbWFGb3JtQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIC8vIHR1cm4gb2ZmIHRvb2x0aXAgZ2VzdHVyZXMgb24gbW9iaWxlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9jb21wb25lbnRzL2lzc3Vlcy80ODkyXHJcbiAgICB7IHByb3ZpZGU6IE1BVF9UT09MVElQX0RFRkFVTFRfT1BUSU9OUywgdXNlVmFsdWU6IHsgdG91Y2hHZXN0dXJlczogJ29mZicgfSB9XHJcbiAgXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEpzb25TY2hlbWFGb3JtTW9kdWxlIHsgfVxyXG4iXX0=