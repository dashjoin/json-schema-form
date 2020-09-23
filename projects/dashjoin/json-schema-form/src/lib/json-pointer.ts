/**
 * static JsonPointer implementation
 */
export class JsonPointer {

    /**
     * evaluate the JSON pointer on o
     */
    static jsonPointer(o: any, pointer: string): any {
        return JsonPointer.jsonPointer2(o, JsonPointer.split(pointer));
    }

    /**
     * evaluate the JSON pointer (parsed array of paths) on o
     */
    static jsonPointer2(o: any, paths: string[]): any {

        if (o === undefined) {
            return undefined;
        }

        if (paths.length === 0) {
            return o;
        }

        const path = paths[0];
        const np = Object.assign([], paths);
        np.splice(0, 1);

        if (paths[0] === '*') {
            const res = [];
            for (const f of (typeof (o) === 'object' ? Object.values(o) : o)) {
                res.push(this.jsonPointer2(f, np));
            }
            return res;
        } else {
            return this.jsonPointer2(o[path], np);
        }
    }

    /**
     * strip leading / and split the JSON pointer
     */
    static split(s: string): string[] {
        if (s === '') {
            return [];
        }
        if (s.startsWith('/')) {
            s = s.substring(1);
            const arr = s.split('/');
            for (const a of arr) {
                if (a === '') {
                    throw new Error('JSON Pointer must not contain an empty reference token');
                }
            }
            return arr;
        }
        throw new Error('JSON Pointer must start with /');
    }
}
