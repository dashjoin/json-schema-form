/**
 * static JsonPointer implementation
 */
export declare class JsonPointer {
    /**
     * evaluate the JSON pointer on o
     */
    static jsonPointer(o: any, pointer: string): any;
    /**
     * evaluate the JSON pointer (parsed array of paths) on o
     */
    static jsonPointer2(o: any, paths: string[]): any;
    /**
     * strip leading / and split the JSON pointer
     */
    static split(s: string): string[];
}
//# sourceMappingURL=json-pointer.d.ts.map