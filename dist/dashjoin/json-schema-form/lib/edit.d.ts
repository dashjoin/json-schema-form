import { EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Schema } from './schema';
/**
 * form editor - has a 1:1 relationship to form node
 */
export declare class Edit {
    private schemaChange;
    private name;
    private schema;
    private parent;
    private dialog;
    /**
     * get access to parent object's fields
     *
     * @param schemaChange  signal a change
     * @param name          the current property name (key)
     * @param schema        the current schema
     * @param parent        the parent's schema (required in order to change the order)
     * @param dialog        dialog service
     */
    constructor(schemaChange: EventEmitter<void>, name: string, schema: Schema, parent: Schema, dialog: MatDialog);
    /**
     * can add if addable is not empty
     */
    canAdd(): boolean;
    /**
     * get the entries in "properties" that are not in "order"
     */
    addable(): string[];
    /**
     * add a hidden prop to the end of the list
     */
    addSub(prop: string): void;
    /**
     * can add if addable is not empty
     */
    canAddSub(): boolean;
    /**
     * get the entries in "properties" that are not in "order"
     */
    subaddable(): string[];
    /**
     * add a hidden prop to the end of the list
     */
    add(prop: string): void;
    /**
     * edit simple schema fields like title and description
     */
    edit(): void;
    /**
     * can hide if I my parent is an object
     */
    canHide(): boolean;
    /**
     * hide this prop
     */
    hide(): void;
    /**
     * can I go up
     */
    canUp(): boolean;
    /**
     * go up
     */
    up(): void;
    /**
     * can I go down
     */
    canDown(): boolean;
    /**
     * go down
     */
    down(): void;
}
//# sourceMappingURL=edit.d.ts.map