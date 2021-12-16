import { MatDialogRef } from '@angular/material/dialog';
import * as i0 from "@angular/core";
/**
 * dialog to edit a JSON node in a layout structure
 */
export declare class EditElementDialogComponent {
    dialogRef: MatDialogRef<EditElementDialogComponent>;
    data: any;
    /**
     * dialog constrcutor
     * @param dialogRef   disloag ref
     * @param data        data to edit
     */
    constructor(dialogRef: MatDialogRef<EditElementDialogComponent>, data: any);
    /**
     * schema to edit input form fields
     */
    schema: any;
    static ɵfac: i0.ɵɵFactoryDef<EditElementDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<EditElementDialogComponent, "lib-edit-element-dialog", never, {}, {}, never, never>;
}
//# sourceMappingURL=edit-element-dialog.component.d.ts.map