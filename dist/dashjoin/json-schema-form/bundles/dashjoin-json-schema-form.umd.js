(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/select'), require('@angular/material/datepicker'), require('@angular/material/checkbox'), require('rxjs'), require('@angular/material/autocomplete'), require('@angular/common/http'), require('rxjs/operators'), require('jsonata'), require('@angular/forms'), require('@angular/material/dialog'), require('@angular/cdk/drag-drop'), require('@angular/cdk/keycodes'), require('@angular/common'), require('@angular/material/expansion'), require('@angular/flex-layout/extended'), require('@angular/material/tooltip'), require('@angular/material/icon'), require('@angular/material/menu'), require('@angular/flex-layout/flex'), require('@angular/material/button'), require('@angular/material/form-field'), require('@angular/material/input'), require('@angular/material/tabs'), require('@angular/material/chips'), require('@angular/material/core'), require('@angular/material/card'), require('@angular/flex-layout'), require('@angular/material/table')) :
    typeof define === 'function' && define.amd ? define('@dashjoin/json-schema-form', ['exports', '@angular/core', '@angular/material/select', '@angular/material/datepicker', '@angular/material/checkbox', 'rxjs', '@angular/material/autocomplete', '@angular/common/http', 'rxjs/operators', 'jsonata', '@angular/forms', '@angular/material/dialog', '@angular/cdk/drag-drop', '@angular/cdk/keycodes', '@angular/common', '@angular/material/expansion', '@angular/flex-layout/extended', '@angular/material/tooltip', '@angular/material/icon', '@angular/material/menu', '@angular/flex-layout/flex', '@angular/material/button', '@angular/material/form-field', '@angular/material/input', '@angular/material/tabs', '@angular/material/chips', '@angular/material/core', '@angular/material/card', '@angular/flex-layout', '@angular/material/table'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.dashjoin = global.dashjoin || {}, global.dashjoin['json-schema-form'] = {}), global.ng.core, global.ng.material.select, global.ng.material.datepicker, global.ng.material.checkbox, global.rxjs, global.ng.material.autocomplete, global.ng.common.http, global.rxjs.operators, global.jsonata, global.ng.forms, global.ng.material.dialog, global.ng.cdk.dragDrop, global.ng.cdk.keycodes, global.ng.common, global.ng.material.expansion, global.ng.flexLayout.extended, global.ng.material.tooltip, global.ng.material.icon, global.ng.material.menu, global.ng.flexLayout.flex, global.ng.material.button, global.ng.material.formField, global.ng.material.input, global.ng.material.tabs, global.ng.material.chips, global.ng.material.core, global.ng.material.card, global.ng.flexLayout, global.ng.material.table));
}(this, (function (exports, i0, i19, i21, i13, rxjs, i23, i1, operators, jsonata, i22, i1$1, i18, keycodes, i4, i6, i7, i8, i9, i10, i11, i12, i14, i15, i16, i17, i20, card, flexLayout, table) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var jsonata__default = /*#__PURE__*/_interopDefaultLegacy(jsonata);

    /**
     * service for registering custom components
     */
    var JsonSchemaFormService = /** @class */ (function () {
        function JsonSchemaFormService() {
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
        JsonSchemaFormService.prototype.registerComponent = function (key, value) {
            this.registry[key] = value;
        };
        /**
         * register displayWith implementations
         * @param key     the name of the implementation which is used in schema extension: displayWith=key
         * @param value   the implementation class
         */
        JsonSchemaFormService.prototype.registerDisplayWith = function (key, value) {
            this.displayWithRegistry[key] = value;
        };
        return JsonSchemaFormService;
    }());
    JsonSchemaFormService.ɵfac = function JsonSchemaFormService_Factory(t) { return new (t || JsonSchemaFormService)(); };
    JsonSchemaFormService.ɵprov = i0.ɵɵdefineInjectable({ token: JsonSchemaFormService, factory: JsonSchemaFormService.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonSchemaFormService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    /**
     * directive for dynamically loading custom widgets
     */
    var WidgetDirective = /** @class */ (function () {
        /**
         * allow caller to dynamically insert custom component
         * @param viewContainerRef  dynamic component handle
         */
        function WidgetDirective(viewContainerRef) {
            this.viewContainerRef = viewContainerRef;
        }
        return WidgetDirective;
    }());
    WidgetDirective.ɵfac = function WidgetDirective_Factory(t) { return new (t || WidgetDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
    WidgetDirective.ɵdir = i0.ɵɵdefineDirective({ type: WidgetDirective, selectors: [["", "libWidgetHost", ""]] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WidgetDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[libWidgetHost]'
                    }]
            }], function () { return [{ type: i0.ViewContainerRef }]; }, null);
    })();

    /**
     * static JsonPointer implementation
     */
    var JsonPointer = /** @class */ (function () {
        function JsonPointer() {
        }
        /**
         * evaluate the JSON pointer on o
         */
        JsonPointer.jsonPointer = function (o, pointer) {
            return JsonPointer.jsonPointer2(o, JsonPointer.split(pointer));
        };
        /**
         * evaluate the JSON pointer (parsed array of paths) on o
         */
        JsonPointer.jsonPointer2 = function (o, paths) {
            var e_1, _a;
            if (o === undefined) {
                return undefined;
            }
            if (paths.length === 0) {
                return o;
            }
            var path = paths[0];
            var np = Object.assign([], paths);
            np.splice(0, 1);
            if (paths[0] === '*') {
                var res = [];
                try {
                    for (var _b = __values((typeof (o) === 'object' ? Object.values(o) : o)), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var f = _c.value;
                        res.push(this.jsonPointer2(f, np));
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return res;
            }
            else {
                return this.jsonPointer2(o[path], np);
            }
        };
        /**
         * strip leading / and split the JSON pointer
         */
        JsonPointer.split = function (s) {
            var e_2, _a;
            if (s === '') {
                return [];
            }
            if (s.startsWith('/')) {
                s = s.substring(1);
                var arr = s.split('/');
                try {
                    for (var arr_1 = __values(arr), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                        var a = arr_1_1.value;
                        if (a === '') {
                            throw new Error('JSON Pointer must not contain an empty reference token');
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (arr_1_1 && !arr_1_1.done && (_a = arr_1.return)) _a.call(arr_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                return arr;
            }
            throw new Error('JSON Pointer must start with /');
        };
        return JsonPointer;
    }());

    /**
     * default implementation that handles choices based on schema fields.
     * can be overriden via schema.displayWith
     */
    var DefaultChoiceHandler = /** @class */ (function () {
        /**
         * create default choice handler
         *
         * @param http      http connection client
         */
        function DefaultChoiceHandler(http) {
            this.http = http;
        }
        /**
         * load choices
         */
        DefaultChoiceHandler.prototype.load = function (value, schema) {
            var e_1, _b;
            var _this = this;
            if (!this.cache) {
                if (schema.choices) {
                    // static choices are given, convert them to Choice and merge the result
                    var arr = [];
                    try {
                        for (var _c = __values(schema.choices), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var s = _d.value;
                            arr.push(this.choice(s, schema));
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    this.cache = rxjs.forkJoin(arr);
                }
                else {
                    // load choices from URL
                    this.cache = this.getChoices(schema.choicesUrl, schema.choicesUrlArgs, schema.choicesVerb).pipe(operators.switchMap(function (res) {
                        var e_2, _b;
                        if (schema.jsonata) {
                            res = jsonata__default['default'](schema.jsonata).evaluate(res);
                            if (!Array.isArray(res)) {
                                res = [res];
                                // introduce jsonName, jsonValue
                            }
                        }
                        var obs = [];
                        try {
                            for (var res_1 = __values(res), res_1_1 = res_1.next(); !res_1_1.done; res_1_1 = res_1.next()) {
                                var r = res_1_1.value;
                                obs.push(_this.choice(r, schema));
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (res_1_1 && !res_1_1.done && (_b = res_1.return)) _b.call(res_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return rxjs.forkJoin(obs);
                    }), 
                    // setup caching
                    operators.publishReplay(1), operators.refCount());
                }
            }
            return this.cache;
        };
        /**
         * filter after keystroke
         */
        DefaultChoiceHandler.prototype.filter = function (value, schema, current, choices) {
            var _this = this;
            return choices.pipe(operators.map(function (arr) {
                if (!current) {
                    return arr;
                }
                var res = arr.filter(function (i) { return _this.include(i, current); });
                return res;
            }));
        };
        /**
         * called from filter, intended to allow subclasses to easily change filter algorithm
         */
        DefaultChoiceHandler.prototype.include = function (i, current) {
            var _a;
            return (_a = i.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(current.toLowerCase());
        };
        /**
         * default choice implementation: just reuse value as name
         * check for localName
         */
        DefaultChoiceHandler.prototype.choice = function (value, schema) {
            var e_3, _b;
            if (schema.displayWith === 'localName') {
                try {
                    for (var _c = __values(['/', '#', ':', '.']), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var delimiter = _d.value;
                        var parts = value.split(delimiter);
                        if (parts.length > 1) {
                            return rxjs.of({ value: value, name: parts[parts.length - 1] });
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return rxjs.of({ value: value, name: value });
            }
            if (schema.jsonata) {
                if (typeof value === 'object') {
                    return rxjs.of(value);
                }
                else {
                    // initially, value is a simple string
                    return rxjs.of({ value: value, name: value });
                }
            }
            if (schema.displayWithChoices) {
                return rxjs.of({ value: value, name: schema.displayWithChoices[schema.choices.indexOf(value)] });
            }
            return rxjs.of({ value: value, name: value });
        };
        /**
         * handle GET / POST
         */
        DefaultChoiceHandler.prototype.getChoices = function (url, args, verb) {
            if (verb === 'GET') {
                return this.http.get(url, args);
            }
            else {
                return this.http.post(url, args, {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                    })
                });
            }
        };
        /**
         * default: no delay
         */
        DefaultChoiceHandler.prototype.debounceTime = function () {
            return 0;
        };
        return DefaultChoiceHandler;
    }());

    /**
     * dialog to edit a JSON node in a layout structure
     */
    var EditElementDialogComponent = /** @class */ (function () {
        /**
         * dialog constrcutor
         * @param dialogRef   disloag ref
         * @param data        data to edit
         */
        function EditElementDialogComponent(dialogRef, data) {
            var _a;
            this.dialogRef = dialogRef;
            this.data = data;
            this.schema = {
                title: 'Edit form',
                layout: 'vertical',
                order: [
                    ['widget', 'layout', 'itemlayout'],
                    ['title', 'description'],
                    ['example', 'readOnly'],
                    ['required', 'format', 'errorMessage'],
                    'choices', 'class', 'style'
                ],
                static: true,
                type: 'object',
                properties: {
                    // description, class, style are always applicable
                    description: { type: 'string', static: true, title: 'Description / tooltip' },
                    class: { type: 'array', items: { type: 'string' }, layout: 'chips', style: { width: '365px' }, static: true, title: 'CSS classes' },
                    style: { type: 'object', additionalProperties: { type: 'string' }, static: true, title: 'CSS styles' }
                }
            };
            if (data.properties) {
                // only show required and error message for objects
                this.schema.properties.errorMessage = { type: 'string', static: true, title: 'Validation error message' };
                this.schema.properties.required = {
                    choices: Object.keys(data.properties), type: 'array', layout: 'select', items: { type: 'string' }, static: true,
                    title: 'Required fields'
                };
                this.schema.properties.layout = { type: 'string', enum: ['vertical', 'horizontal'], static: true, title: 'Screen layout' };
            }
            else {
                if (data.items) {
                    this.schema.properties.layout = {
                        type: 'string', enum: ['vertical', 'horizontal', 'select', 'tab', 'table', 'chips'],
                        static: true, title: 'Screen Layout'
                    };
                    this.schema.properties.itemlayout = { type: 'string', enum: ['vertical', 'horizontal'], static: true, title: 'Item screen layout' };
                }
                if ((_a = data.items) === null || _a === void 0 ? void 0 : _a.properties) {
                    // array of objects
                    this.schema.properties.errorMessage = { type: 'string', static: true, title: 'Validation error message' };
                    this.schema.properties.required = {
                        choices: Object.keys(data.items.properties), type: 'array', layout: 'select', items: { type: 'string' }, static: true,
                        title: 'Required fields'
                    };
                }
                else {
                    // array of simple types
                    this.schema.properties.readOnly = {
                        type: 'boolean', static: true, title: 'Read only value', style: { 'padding-top': '15px' }
                    };
                    this.schema.properties.errorMessage = { type: 'string', static: true, title: 'Validation error message' };
                    this.schema.properties.format = {
                        type: 'string', static: true, title: 'Format',
                        widget: 'select', choices: [null, 'email', 'ipv4', 'url', 'uri']
                    };
                    this.schema.properties.example = { type: 'string', static: true, title: 'Example data' };
                    this.schema.properties.title = { type: 'string', static: true, title: 'Title' };
                    this.schema.properties.widget = {
                        type: 'string', enum: ['text', 'select', 'date', 'textarea', 'password'], static: true,
                        title: 'Form widget'
                    };
                    this.schema.properties.choices = {
                        type: 'array', items: { type: 'string' }, style: { width: '365px' },
                        layout: 'chips', static: true, title: 'Input choices'
                    };
                }
            }
        }
        return EditElementDialogComponent;
    }());
    EditElementDialogComponent.ɵfac = function EditElementDialogComponent_Factory(t) { return new (t || EditElementDialogComponent)(i0.ɵɵdirectiveInject(i1$1.MatDialogRef), i0.ɵɵdirectiveInject(i1$1.MAT_DIALOG_DATA)); };
    EditElementDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: EditElementDialogComponent, selectors: [["lib-edit-element-dialog"]], decls: 7, vars: 4, consts: [[2, "padding-top", "10px"], [3, "value", "schema", "label", "valueChange"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function EditElementDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-dialog-content", 0);
                i0.ɵɵelementStart(1, "lib-json-schema-form", 1);
                i0.ɵɵlistener("valueChange", function EditElementDialogComponent_Template_lib_json_schema_form_valueChange_1_listener($event) { return ctx.data = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-dialog-actions", 2);
                i0.ɵɵelementStart(3, "button", 3);
                i0.ɵɵlistener("click", function EditElementDialogComponent_Template_button_click_3_listener() { return ctx.dialogRef.close(); });
                i0.ɵɵtext(4, "Cancel");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "button", 4);
                i0.ɵɵtext(6, "Ok");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("value", ctx.data)("schema", ctx.schema)("label", ctx.schema.title);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("mat-dialog-close", ctx.data);
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(EditElementDialogComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'lib-edit-element-dialog',
                        templateUrl: './edit-element-dialog.component.html'
                    }]
            }], function () {
            return [{ type: i1$1.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1$1.MAT_DIALOG_DATA]
                        }] }];
        }, null);
    })();

    /**
     * form editor - has a 1:1 relationship to form node
     */
    var Edit = /** @class */ (function () {
        /**
         * get access to parent object's fields
         *
         * @param schemaChange  signal a change
         * @param name          the current property name (key)
         * @param schema        the current schema
         * @param parent        the parent's schema (required in order to change the order)
         * @param dialog        dialog service
         */
        function Edit(schemaChange, name, schema, parent, dialog) {
            this.schemaChange = schemaChange;
            this.name = name;
            this.schema = schema;
            this.parent = parent;
            this.dialog = dialog;
        }
        /**
         * can add if addable is not empty
         */
        Edit.prototype.canAdd = function () {
            return this.addable().length > 0;
        };
        /**
         * get the entries in "properties" that are not in "order"
         */
        Edit.prototype.addable = function () {
            var e_1, _d, e_2, _e;
            var _a, _b;
            var s;
            if (this.schema.properties) {
                s = this.schema;
            }
            else if ((_a = this.schema.items) === null || _a === void 0 ? void 0 : _a.properties) {
                s = this.schema.items;
            }
            else if ((_b = this.schema.additionalProperties) === null || _b === void 0 ? void 0 : _b.properties) {
                s = this.schema.additionalProperties;
            }
            else {
                return [];
            }
            if (s.order) {
                var set = new Set(Object.keys(s.properties));
                try {
                    for (var _f = __values(s.order), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var p = _g.value;
                        if (Array.isArray(p)) {
                            try {
                                for (var p_1 = (e_2 = void 0, __values(p)), p_1_1 = p_1.next(); !p_1_1.done; p_1_1 = p_1.next()) {
                                    var q = p_1_1.value;
                                    set.delete(q);
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (p_1_1 && !p_1_1.done && (_e = p_1.return)) _e.call(p_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        else {
                            set.delete(p);
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_d = _f.return)) _d.call(_f);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return Array.from(set);
            }
            else {
                return [];
            }
        };
        /**
         * add a hidden prop to the end of the list
         */
        Edit.prototype.addSub = function (prop) {
            var e_3, _d;
            var index = this.parent.order.indexOf(this.name);
            if (index >= 0) {
                this.parent.order[index] = [this.parent.order[index], prop];
            }
            else {
                try {
                    for (var _e = __values(this.parent.order), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var p = _f.value;
                        if (Array.isArray(p)) {
                            if (p.indexOf(this.name) >= 0) {
                                p.push(prop);
                            }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_d = _e.return)) _d.call(_e);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
            this.schemaChange.emit();
        };
        /**
         * can add if addable is not empty
         */
        Edit.prototype.canAddSub = function () {
            return this.subaddable().length > 0;
        };
        /**
         * get the entries in "properties" that are not in "order"
         */
        Edit.prototype.subaddable = function () {
            var e_4, _d, e_5, _e;
            var _a;
            if ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.order) {
                var set = new Set(Object.keys(this.parent.properties));
                try {
                    for (var _f = __values(this.parent.order), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var p = _g.value;
                        if (Array.isArray(p)) {
                            try {
                                for (var p_2 = (e_5 = void 0, __values(p)), p_2_1 = p_2.next(); !p_2_1.done; p_2_1 = p_2.next()) {
                                    var q = p_2_1.value;
                                    set.delete(q);
                                }
                            }
                            catch (e_5_1) { e_5 = { error: e_5_1 }; }
                            finally {
                                try {
                                    if (p_2_1 && !p_2_1.done && (_e = p_2.return)) _e.call(p_2);
                                }
                                finally { if (e_5) throw e_5.error; }
                            }
                        }
                        else {
                            set.delete(p);
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_g && !_g.done && (_d = _f.return)) _d.call(_f);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                return Array.from(set);
            }
            else {
                return [];
            }
        };
        /**
         * add a hidden prop to the end of the list
         */
        Edit.prototype.add = function (prop) {
            var _a;
            if (this.schema.properties) {
                this.schema.order.push(prop);
            }
            else if ((_a = this.schema.items) === null || _a === void 0 ? void 0 : _a.properties) {
                this.schema.items.order.push(prop);
            }
            else {
                this.schema.additionalProperties.order.push(prop);
            }
            this.schemaChange.emit();
        };
        /**
         * edit simple schema fields like title and description
         */
        Edit.prototype.edit = function () {
            var _this = this;
            var _a, _b, _c;
            // deep clone object so we have the possibility to cancel editing
            var clone = JSON.parse(JSON.stringify(this.schema));
            // handle (array) example
            if (((_b = (_a = clone.items) === null || _a === void 0 ? void 0 : _a.examples) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                clone.example = clone.items.examples[0];
            }
            if (((_c = clone.examples) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                clone.example = clone.examples[0];
            }
            // text is default
            if (!clone.widget) {
                clone.widget = 'text';
            }
            // horizontal is default
            if (!clone.layout) {
                clone.layout = 'horizontal';
            }
            // array: apply choices and widget to items
            if (clone.items) {
                clone.widget = clone.items.widget;
                clone.choices = clone.items.choices;
                clone.errorMessage = clone.items.errorMessage;
                clone.format = clone.items.format;
                clone.required = clone.items.required;
                clone.itemlayout = clone.items.layout;
            }
            var dialogRef = this.dialog.open(EditElementDialogComponent, { minWidth: '50%', data: clone });
            dialogRef.afterClosed().subscribe(function (data) {
                var _a, _b;
                if (data) {
                    _this.schema.title = data.title;
                    _this.schema.description = data.description;
                    _this.schema.widget = data.widget;
                    _this.schema.layout = data.layout;
                    _this.schema.readOnly = data.readOnly;
                    _this.schema.errorMessage = data.errorMessage;
                    if (data.example) {
                        if (data.items) {
                            _this.schema.items.examples = [data.example];
                        }
                        else {
                            _this.schema.examples = [data.example];
                        }
                    }
                    if (data.style) {
                        delete data.style[''];
                    }
                    if (data.style && Object.keys(data.style).length > 0) {
                        _this.schema.style = data.style;
                    }
                    if (data.class) {
                        data.class = data.class.filter(function (el) { return el != null; });
                    }
                    if (((_a = data.class) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                        _this.schema.class = data.class;
                    }
                    if (data.items) {
                        if (((_b = data.choices) === null || _b === void 0 ? void 0 : _b.length) > 0) {
                            _this.schema.items.choices = data.choices;
                        }
                        _this.schema.items.widget = data.widget;
                        _this.schema.items.format = data.format;
                        _this.schema.items.errorMessage = data.errorMessage;
                        _this.schema.items.required = data.required;
                        _this.schema.items.layout = data.itemlayout;
                    }
                    else {
                        _this.schema.choices = data.choices;
                        _this.schema.widget = data.widget;
                        _this.schema.format = data.format;
                        _this.schema.errorMessage = data.errorMessage;
                        _this.schema.required = data.required;
                    }
                    _this.schemaChange.emit();
                }
            });
        };
        /**
         * can hide if I my parent is an object
         */
        Edit.prototype.canHide = function () {
            return this.parent ? true : false;
        };
        /**
         * hide this prop
         */
        Edit.prototype.hide = function () {
            var e_6, _d;
            if (!this.parent.order) {
                this.parent.order = Object.keys(this.parent.properties);
            }
            var index = 0;
            try {
                for (var _e = __values(this.parent.order), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var p = _f.value;
                    if (Array.isArray(p)) {
                        if (p.indexOf(this.name) >= 0) {
                            p.splice(p.indexOf(this.name), 1);
                            if (p.length === 1) {
                                this.parent.order[index] = p[0];
                            }
                        }
                    }
                    index++;
                }
            }
            catch (e_6_1) { e_6 = { error: e_6_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_d = _e.return)) _d.call(_e);
                }
                finally { if (e_6) throw e_6.error; }
            }
            if (this.parent.order.indexOf(this.name) >= 0) {
                this.parent.order.splice(this.parent.order.indexOf(this.name), 1);
            }
            this.schemaChange.emit();
        };
        /**
         * can I go up
         */
        Edit.prototype.canUp = function () {
            var e_7, _d;
            if (!this.parent) {
                return false;
            }
            var props = this.parent.order ? this.parent.order : Object.keys(this.parent.properties);
            var index = props.indexOf(this.name);
            if (index >= 0) {
                return index > 0;
            }
            else {
                try {
                    for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
                        var p = props_1_1.value;
                        if (Array.isArray(p)) {
                            if (p.indexOf(this.name) >= 0) {
                                return p.indexOf(this.name) > 0;
                            }
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (props_1_1 && !props_1_1.done && (_d = props_1.return)) _d.call(props_1);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
        };
        /**
         * go up
         */
        Edit.prototype.up = function () {
            var e_8, _d;
            if (!this.parent.order) {
                this.parent.order = Object.keys(this.parent.properties);
            }
            var index = this.parent.order.indexOf(this.name);
            if (index >= 0) {
                var tmp = this.parent.order[index - 1];
                this.parent.order[index - 1] = this.parent.order[index];
                this.parent.order[index] = tmp;
            }
            else {
                try {
                    for (var _e = __values(this.parent.order), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var p = _f.value;
                        if (Array.isArray(p)) {
                            index = p.indexOf(this.name);
                            if (index >= 0) {
                                var tmp = p[index - 1];
                                p[index - 1] = p[index];
                                p[index] = tmp;
                            }
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_d = _e.return)) _d.call(_e);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
            }
            this.schemaChange.emit();
        };
        /**
         * can I go down
         */
        Edit.prototype.canDown = function () {
            var e_9, _d;
            if (!this.parent) {
                return false;
            }
            var props = this.parent.order ? this.parent.order : Object.keys(this.parent.properties);
            var index = props.indexOf(this.name);
            if (index >= 0) {
                return index < props.length - 1;
            }
            else {
                try {
                    for (var props_2 = __values(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
                        var p = props_2_1.value;
                        if (Array.isArray(p)) {
                            if (p.indexOf(this.name) >= 0) {
                                return p.indexOf(this.name) < p.length - 1;
                            }
                        }
                    }
                }
                catch (e_9_1) { e_9 = { error: e_9_1 }; }
                finally {
                    try {
                        if (props_2_1 && !props_2_1.done && (_d = props_2.return)) _d.call(props_2);
                    }
                    finally { if (e_9) throw e_9.error; }
                }
            }
        };
        /**
         * go down
         */
        Edit.prototype.down = function () {
            var e_10, _d;
            if (!this.parent.order) {
                this.parent.order = Object.keys(this.parent.properties);
            }
            var index = this.parent.order.indexOf(this.name);
            if (index >= 0) {
                var tmp = this.parent.order[index + 1];
                this.parent.order[index + 1] = this.parent.order[index];
                this.parent.order[index] = tmp;
            }
            else {
                try {
                    for (var _e = __values(this.parent.order), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var p = _f.value;
                        if (Array.isArray(p)) {
                            index = p.indexOf(this.name);
                            if (index >= 0) {
                                var tmp = p[index + 1];
                                p[index + 1] = p[index];
                                p[index] = tmp;
                            }
                        }
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_d = _e.return)) _d.call(_e);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
            }
            this.schemaChange.emit();
        };
        return Edit;
    }());

    var _c0 = ["child"];
    var _c1 = ["children"];
    function JsonSchemaFormComponent_mat_expansion_panel_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-expansion-panel", 3);
            i0.ɵɵelementStart(1, "mat-expansion-panel-header");
            i0.ɵɵelementStart(2, "mat-panel-title");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-panel-description");
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "lib-json-schema-form", 4, 5);
            i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_mat_expansion_panel_0_Template_lib_json_schema_form_valueChange_6_listener($event) { i0.ɵɵrestoreView(_r5_1); var ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.setAndEmit($event); })("schemaChange", function JsonSchemaFormComponent_mat_expansion_panel_0_Template_lib_json_schema_form_schemaChange_6_listener() { i0.ɵɵrestoreView(_r5_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.schemaChange.emit(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngStyle", ctx_r0.schema.style)("ngClass", ctx_r0.schema.class)("expanded", ctx_r0.schema.expanded);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r0.label);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r0.schema.description);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r0.label)("name", ctx_r0.name)("value", ctx_r0.value)("switch", ctx_r0.switch)("rootValue", ctx_r0.rootValue)("rootSchema", ctx_r0.rootSchema)("schema", ctx_r0.schema)("inExpansion", true)("base", ctx_r0.base);
        }
    }
    function JsonSchemaFormComponent_div_1_div_1_button_31_Template(rf, ctx) {
        if (rf & 1) {
            var _r30_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 14);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_button_31_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r30_1); var x_r28 = ctx.$implicit; var ctx_r29 = i0.ɵɵnextContext(3); return ctx_r29.edit.add(x_r28); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var x_r28 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(x_r28);
        }
    }
    function JsonSchemaFormComponent_div_1_div_1_button_34_Template(rf, ctx) {
        if (rf & 1) {
            var _r33_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 14);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_button_34_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r33_1); var x_r31 = ctx.$implicit; var ctx_r32 = i0.ɵɵnextContext(3); return ctx_r32.edit.addSub(x_r31); });
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var x_r31 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(x_r31);
        }
    }
    function JsonSchemaFormComponent_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r35_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "mat-icon", 12);
            i0.ɵɵtext(2, " more_vert ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-menu", null, 13);
            i0.ɵɵelementStart(5, "button", 14);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r35_1); var ctx_r34 = i0.ɵɵnextContext(2); return ctx_r34.edit.edit(); });
            i0.ɵɵelementStart(6, "mat-icon");
            i0.ɵɵtext(7, "edit");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(8, "Edit ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "button", 15);
            i0.ɵɵelementStart(10, "mat-icon");
            i0.ɵɵtext(11, "add");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(12, "Show ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "button", 15);
            i0.ɵɵelementStart(14, "mat-icon");
            i0.ɵɵtext(15, "playlist_add");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(16, "Show inline ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "button", 16);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_Template_button_click_17_listener() { i0.ɵɵrestoreView(_r35_1); var ctx_r36 = i0.ɵɵnextContext(2); return ctx_r36.edit.hide(); });
            i0.ɵɵelementStart(18, "mat-icon");
            i0.ɵɵtext(19, "remove");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(20, "Hide ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(21, "button", 16);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_Template_button_click_21_listener() { i0.ɵɵrestoreView(_r35_1); var ctx_r37 = i0.ɵɵnextContext(2); return ctx_r37.edit.up(); });
            i0.ɵɵelementStart(22, "mat-icon");
            i0.ɵɵtext(23, "north_west");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(24, "Up / Left ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(25, "button", 16);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_div_1_Template_button_click_25_listener() { i0.ɵɵrestoreView(_r35_1); var ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.edit.down(); });
            i0.ɵɵelementStart(26, "mat-icon");
            i0.ɵɵtext(27, "south_east");
            i0.ɵɵelementEnd();
            i0.ɵɵtext(28, "Down / Right ");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(29, "mat-menu", null, 17);
            i0.ɵɵtemplate(31, JsonSchemaFormComponent_div_1_div_1_button_31_Template, 2, 1, "button", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "mat-menu", null, 19);
            i0.ɵɵtemplate(34, JsonSchemaFormComponent_div_1_div_1_button_34_Template, 2, 1, "button", 18);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r23 = i0.ɵɵreference(4);
            var _r24 = i0.ɵɵreference(30);
            var _r26 = i0.ɵɵreference(33);
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matMenuTriggerFor", _r23)("matTooltip", ctx_r7.name ? "Form element " + ctx_r7.name : ctx_r7.isRoot ? "Form root" : "");
            i0.ɵɵadvance(8);
            i0.ɵɵproperty("disabled", !ctx_r7.edit.canAdd())("matMenuTriggerFor", _r24);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", !ctx_r7.edit.canAddSub())("matMenuTriggerFor", _r26);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", !ctx_r7.edit.canHide());
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", !ctx_r7.edit.canUp());
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("disabled", !ctx_r7.edit.canDown());
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx_r7.edit.addable());
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx_r7.edit.subaddable());
        }
    }
    function JsonSchemaFormComponent_div_1_span_2_div_1_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r48_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "lib-json-schema-form", 26, 27);
            i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_span_2_div_1_div_1_div_1_Template_lib_json_schema_form_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r48_1); var x_r43 = i0.ɵɵnextContext().$implicit; var ctx_r46 = i0.ɵɵnextContext(4); return ctx_r46.onValueChange(x_r43.key, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_span_2_div_1_div_1_div_1_Template_lib_json_schema_form_schemaChange_1_listener() { i0.ɵɵrestoreView(_r48_1); var ctx_r49 = i0.ɵɵnextContext(5); return ctx_r49.schemaChange.emit(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var x_r43 = i0.ɵɵnextContext().$implicit;
            var ctx_r44 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("name", x_r43.key)("label", x_r43.value.title ? x_r43.value.title : x_r43.key)("value", ctx_r44.value ? ctx_r44.value[x_r43.key] : undefined)("switch", ctx_r44.value ? ctx_r44.value[ctx_r44.schema.switch] : undefined)("rootValue", ctx_r44.rootValue)("rootSchema", ctx_r44.rootSchema)("schema", x_r43.value)("parentSchema", ctx_r44.schema)("required", ctx_r44.schema.required ? ctx_r44.schema.required.includes(x_r43.key) : false)("hideUndefined", ctx_r44.schema.hideUndefined)("base", ctx_r44.base);
        }
    }
    function JsonSchemaFormComponent_div_1_span_2_div_1_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 25);
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_2_div_1_div_1_div_1_Template, 3, 11, "div", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var x_r43 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", x_r43.value && (x_r43.value.type || x_r43.value.$ref));
        }
    }
    function JsonSchemaFormComponent_div_1_span_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 23);
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_2_div_1_div_1_Template, 2, 1, "div", 24);
            i0.ɵɵpipe(2, "keyvalue");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var op_r41 = ctx.$implicit;
            var ctx_r39 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("fxLayout", ctx_r39.schema.layout !== "vertical" ? "column" : "row wrap");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 2, op_r41, ctx_r39.originalOrder));
        }
    }
    function JsonSchemaFormComponent_div_1_span_2_div_2_div_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r55_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "mat-checkbox", 31);
            i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_span_2_div_2_div_6_Template_mat_checkbox_change_1_listener() { i0.ɵɵrestoreView(_r55_1); var x_r53 = ctx.$implicit; var ctx_r54 = i0.ɵɵnextContext(4); return ctx_r54.showProperty(x_r53); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var x_r53 = ctx.$implicit;
            var ctx_r52 = i0.ɵɵnextContext(4);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx_r52.value ? ctx_r52.value[x_r53] : false)("checked", ctx_r52.value && ctx_r52.value[x_r53] !== undefined);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", x_r53, " ");
        }
    }
    function JsonSchemaFormComponent_div_1_span_2_div_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 28);
            i0.ɵɵelementStart(1, "button", 29);
            i0.ɵɵelementStart(2, "mat-icon");
            i0.ɵɵtext(3, "more_vert");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-menu", null, 13);
            i0.ɵɵtemplate(6, JsonSchemaFormComponent_div_1_span_2_div_2_div_6_Template, 3, 3, "div", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r51 = i0.ɵɵreference(5);
            var ctx_r40 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matMenuTriggerFor", _r51);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r40.showPropertyList());
        }
    }
    function JsonSchemaFormComponent_div_1_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 20);
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_2_div_1_Template, 3, 5, "div", 21);
            i0.ɵɵtemplate(2, JsonSchemaFormComponent_div_1_span_2_div_2_Template, 7, 2, "div", 22);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r8 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("fxLayout", ctx_r8.schema.layout === "vertical" ? "column" : "row wrap")("ngStyle", ctx_r8.schema.style)("ngClass", ctx_r8.schema.class);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r8.orderedProperties);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r8.schema.hideUndefined);
        }
    }
    function JsonSchemaFormComponent_div_1_span_3_div_1_button_8_Template(rf, ctx) {
        if (rf & 1) {
            var _r64_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 38);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_3_div_1_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r64_1); var x_r58 = i0.ɵɵnextContext().$implicit; var ctx_r62 = i0.ɵɵnextContext(3); return ctx_r62.removeField(x_r58.key); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "remove_circle_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r61 = i0.ɵɵnextContext(4);
            i0.ɵɵpropertyInterpolate("matTooltip", ctx_r61.getLabel());
        }
    }
    function JsonSchemaFormComponent_div_1_span_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r66_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 34);
            i0.ɵɵlistener("mouseenter", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r66_1); var i_r59 = ctx.index; var ctx_r65 = i0.ɵɵnextContext(3); return ctx_r65.hover = i_r59; })("mouseleave", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r66_1); var ctx_r67 = i0.ɵɵnextContext(3); return ctx_r67.hover = null; });
            i0.ɵɵelementStart(1, "mat-form-field");
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 35);
            i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_input_change_4_listener($event) { i0.ɵɵrestoreView(_r66_1); var x_r58 = ctx.$implicit; var ctx_r68 = i0.ɵɵnextContext(3); return ctx_r68.fieldNameChange(x_r58.key, $event.target.value); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtext(5, " \u00A0 ");
            i0.ɵɵelementStart(6, "lib-json-schema-form", 36, 27);
            i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_lib_json_schema_form_valueChange_6_listener($event) { i0.ɵɵrestoreView(_r66_1); var x_r58 = ctx.$implicit; var ctx_r69 = i0.ɵɵnextContext(3); return ctx_r69.onValueChange(x_r58.key, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_span_3_div_1_Template_lib_json_schema_form_schemaChange_6_listener() { i0.ɵɵrestoreView(_r66_1); var ctx_r70 = i0.ɵɵnextContext(3); return ctx_r70.schemaChange.emit(); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(8, JsonSchemaFormComponent_div_1_span_3_div_1_button_8_Template, 3, 1, "button", 37);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var x_r58 = ctx.$implicit;
            var ctx_r56 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("", ctx_r56.getLabel(), " key");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx_r56.readOnly)("value", x_r58.key);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("label", ctx_r56.getLabel() + " value")("value", ctx_r56.value[x_r58.key])("rootValue", ctx_r56.rootValue)("rootSchema", ctx_r56.rootSchema)("schema", ctx_r56.schema.additionalProperties)("base", ctx_r56.base);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r56.readOnly);
        }
    }
    function JsonSchemaFormComponent_div_1_span_3_button_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r72_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 39);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_3_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r72_1); var ctx_r71 = i0.ɵɵnextContext(3); return ctx_r71.addField(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "add_circle_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r57 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("matTooltip", ctx_r57.getLabel());
        }
    }
    function JsonSchemaFormComponent_div_1_span_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 20);
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_3_div_1_Template, 9, 10, "div", 32);
            i0.ɵɵpipe(2, "keyvalue");
            i0.ɵɵtemplate(3, JsonSchemaFormComponent_div_1_span_3_button_3_Template, 3, 1, "button", 33);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("fxLayout", ctx_r9.schema.layout === "vertical" ? "column" : "row wrap")("ngStyle", ctx_r9.schema.style)("ngClass", ctx_r9.schema.class);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 5, ctx_r9.value, ctx_r9.originalOrder));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r9.readOnly);
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_mat_form_field_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r84_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field");
            i0.ɵɵelementStart(1, "input", 45);
            i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_mat_form_field_0_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r84_1); var x_r75 = i0.ɵɵnextContext(2).$implicit; var ctx_r82 = i0.ɵɵnextContext(3); return ctx_r82.fieldNameChange(x_r75.key, $event.target.value); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var x_r75 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", x_r75.key);
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var x_r75 = i0.ɵɵnextContext(2).$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(x_r75.key);
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_mat_form_field_0_Template, 2, 1, "mat-form-field", 7);
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_span_1_Template, 2, 1, "span", 7);
        }
        if (rf & 2) {
            var ctx_r77 = i0.ɵɵnextContext(4);
            i0.ɵɵproperty("ngIf", !ctx_r77.readOnly);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r77.readOnly);
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r89_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 38);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r89_1); var x_r75 = i0.ɵɵnextContext().$implicit; var ctx_r87 = i0.ɵɵnextContext(3); return ctx_r87.removeField(x_r75.key); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "remove_circle_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r79 = i0.ɵɵnextContext(4);
            i0.ɵɵpropertyInterpolate("matTooltip", ctx_r79.getLabel());
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r91_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-tab", 42);
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_ng_template_1_Template, 2, 2, "ng-template", 43);
            i0.ɵɵelementStart(2, "lib-json-schema-form", 44, 27);
            i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_Template_lib_json_schema_form_valueChange_2_listener($event) { i0.ɵɵrestoreView(_r91_1); var x_r75 = ctx.$implicit; var ctx_r90 = i0.ɵɵnextContext(3); return ctx_r90.onValueChange(x_r75.key, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_Template_lib_json_schema_form_schemaChange_2_listener() { i0.ɵɵrestoreView(_r91_1); var ctx_r92 = i0.ɵɵnextContext(3); return ctx_r92.schemaChange.emit(); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_button_4_Template, 3, 1, "button", 37);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var x_r75 = ctx.$implicit;
            var ctx_r73 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("value", ctx_r73.value[x_r75.key])("rootValue", ctx_r73.rootValue)("rootSchema", ctx_r73.rootSchema)("schema", ctx_r73.schema.additionalProperties)("base", ctx_r73.base);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r73.readOnly);
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r95_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 39);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r95_1); var ctx_r94 = i0.ɵɵnextContext(4); return ctx_r94.addField(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "add_circle_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r93 = i0.ɵɵnextContext(4);
            i0.ɵɵpropertyInterpolate("matTooltip", ctx_r93.getLabel());
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab");
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_ng_template_1_Template, 3, 1, "ng-template", 43);
            i0.ɵɵelementEnd();
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab-group", 40);
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_1_Template, 5, 6, "mat-tab", 41);
            i0.ɵɵpipe(2, "keyvalue");
            i0.ɵɵtemplate(3, JsonSchemaFormComponent_div_1_mat_tab_group_4_mat_tab_3_Template, 2, 0, "mat-tab", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r10 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngStyle", ctx_r10.schema.style)("ngClass", ctx_r10.schema.class);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 4, ctx_r10.value, ctx_r10.originalOrder));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r10.readOnly);
        }
    }
    function JsonSchemaFormComponent_div_1_span_5_div_1_button_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r104_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 38);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_5_div_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r104_1); var i_r99 = i0.ɵɵnextContext().index; var ctx_r102 = i0.ɵɵnextContext(3); return ctx_r102.remove(i_r99); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "remove_circle_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r101 = i0.ɵɵnextContext(4);
            i0.ɵɵpropertyInterpolate("matTooltip", ctx_r101.getLabel());
        }
    }
    function JsonSchemaFormComponent_div_1_span_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r106_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 34);
            i0.ɵɵlistener("mouseenter", function JsonSchemaFormComponent_div_1_span_5_div_1_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r106_1); var i_r99 = ctx.index; var ctx_r105 = i0.ɵɵnextContext(3); return ctx_r105.hover = i_r99; })("mouseleave", function JsonSchemaFormComponent_div_1_span_5_div_1_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r106_1); var ctx_r107 = i0.ɵɵnextContext(3); return ctx_r107.hover = null; });
            i0.ɵɵelementStart(1, "lib-json-schema-form", 36, 27);
            i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_span_5_div_1_Template_lib_json_schema_form_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r106_1); var i_r99 = ctx.index; var ctx_r108 = i0.ɵɵnextContext(3); return ctx_r108.setIndexAndEmit(i_r99, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_span_5_div_1_Template_lib_json_schema_form_schemaChange_1_listener() { i0.ɵɵrestoreView(_r106_1); var ctx_r109 = i0.ɵɵnextContext(3); return ctx_r109.schemaChange.emit(); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, JsonSchemaFormComponent_div_1_span_5_div_1_button_3_Template, 3, 1, "button", 37);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r99 = ctx.index;
            var ctx_r96 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("label", ctx_r96.getLabel())("value", ctx_r96.value[i_r99])("rootValue", ctx_r96.rootValue)("rootSchema", ctx_r96.rootSchema)("schema", ctx_r96.schema.items)("base", ctx_r96.base);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r96.readOnly);
        }
    }
    function JsonSchemaFormComponent_div_1_span_5_button_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r111_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 39);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r111_1); var ctx_r110 = i0.ɵɵnextContext(3); return ctx_r110.add(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "add_circle_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r97 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("matTooltip", ctx_r97.getLabel());
        }
    }
    function JsonSchemaFormComponent_div_1_span_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 20);
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_5_div_1_Template, 4, 7, "div", 32);
            i0.ɵɵtemplate(2, JsonSchemaFormComponent_div_1_span_5_button_2_Template, 3, 1, "button", 33);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("fxLayout", ctx_r11.schema.layout === "vertical" ? "column" : "row wrap")("ngStyle", ctx_r11.schema.style)("ngClass", ctx_r11.schema.class);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r11.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r11.readOnly);
        }
    }
    function JsonSchemaFormComponent_div_1_span_6_mat_chip_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r116_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-chip", 51);
            i0.ɵɵlistener("removed", function JsonSchemaFormComponent_div_1_span_6_mat_chip_4_Template_mat_chip_removed_0_listener() { i0.ɵɵrestoreView(_r116_1); var v_r114 = ctx.$implicit; var ctx_r115 = i0.ɵɵnextContext(3); return ctx_r115.removeChip(v_r114); });
            i0.ɵɵtext(1);
            i0.ɵɵelementStart(2, "mat-icon", 52);
            i0.ɵɵtext(3, "cancel");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var v_r114 = ctx.$implicit;
            var ctx_r113 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("removable", !ctx_r113.readOnly);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", v_r114, " ");
        }
    }
    function JsonSchemaFormComponent_div_1_span_6_Template(rf, ctx) {
        if (rf & 1) {
            var _r118_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵelementStart(1, "mat-form-field", 46);
            i0.ɵɵelementStart(2, "mat-chip-list", 47, 48);
            i0.ɵɵlistener("cdkDropListDropped", function JsonSchemaFormComponent_div_1_span_6_Template_mat_chip_list_cdkDropListDropped_2_listener($event) { i0.ɵɵrestoreView(_r118_1); var ctx_r117 = i0.ɵɵnextContext(2); return ctx_r117.dropChip($event); });
            i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_span_6_mat_chip_4_Template, 4, 2, "mat-chip", 49);
            i0.ɵɵelementStart(5, "input", 50);
            i0.ɵɵlistener("matChipInputTokenEnd", function JsonSchemaFormComponent_div_1_span_6_Template_input_matChipInputTokenEnd_5_listener($event) { i0.ɵɵrestoreView(_r118_1); var ctx_r119 = i0.ɵɵnextContext(2); return ctx_r119.addChip($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r112 = i0.ɵɵreference(3);
            var ctx_r12 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", ctx_r12.schema.style)("ngClass", ctx_r12.schema.class);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx_r12.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("placeholder", ctx_r12.schema.title)("matChipInputFor", _r112)("matChipInputSeparatorKeyCodes", ctx_r12.separatorKeysCodes)("disabled", ctx_r12.readOnly);
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_button_3_Template(rf, ctx) {
        if (rf & 1) {
            var _r128_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 38);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r128_1); var i_r123 = i0.ɵɵnextContext().index; var ctx_r126 = i0.ɵɵnextContext(3); return ctx_r126.remove(i_r123); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "remove_circle_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r125 = i0.ɵɵnextContext(4);
            i0.ɵɵpropertyInterpolate("matTooltip", ctx_r125.getLabel());
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r130_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-tab", 54);
            i0.ɵɵelementStart(1, "lib-json-schema-form", 44, 27);
            i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_Template_lib_json_schema_form_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r130_1); var i_r123 = ctx.index; var ctx_r129 = i0.ɵɵnextContext(3); return ctx_r129.setIndexAndEmit(i_r123, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_Template_lib_json_schema_form_schemaChange_1_listener() { i0.ɵɵrestoreView(_r130_1); var ctx_r131 = i0.ɵɵnextContext(3); return ctx_r131.schemaChange.emit(); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_button_3_Template, 3, 1, "button", 37);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var i_r123 = ctx.index;
            var ctx_r120 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("label", ctx_r120.getLabel() + " " + i_r123);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r120.value[i_r123])("rootValue", ctx_r120.rootValue)("rootSchema", ctx_r120.rootSchema)("schema", ctx_r120.schema.items)("base", ctx_r120.base);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx_r120.readOnly);
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r134_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 39);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r134_1); var ctx_r133 = i0.ɵɵnextContext(4); return ctx_r133.add(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "add_circle_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r132 = i0.ɵɵnextContext(4);
            i0.ɵɵpropertyInterpolate("matTooltip", ctx_r132.getLabel());
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab");
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_ng_template_1_Template, 3, 1, "ng-template", 43);
            i0.ɵɵelementEnd();
        }
    }
    function JsonSchemaFormComponent_div_1_mat_tab_group_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab-group", 40);
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_1_Template, 4, 7, "mat-tab", 53);
            i0.ɵɵtemplate(2, JsonSchemaFormComponent_div_1_mat_tab_group_7_mat_tab_2_Template, 2, 0, "mat-tab", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r13 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngStyle", ctx_r13.schema.style)("ngClass", ctx_r13.schema.class);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r13.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r13.readOnly);
        }
    }
    function JsonSchemaFormComponent_div_1_span_8_th_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 58);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var x_r138 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", x_r138.value.title ? x_r138.value.title : x_r138.key, "");
        }
    }
    function JsonSchemaFormComponent_div_1_span_8_tr_6_td_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r147_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "td");
            i0.ɵɵelementStart(1, "lib-json-schema-form", 59, 27);
            i0.ɵɵlistener("valueChange", function JsonSchemaFormComponent_div_1_span_8_tr_6_td_1_Template_lib_json_schema_form_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r147_1); var x_r143 = ctx.$implicit; var i_r140 = i0.ɵɵnextContext().index; var ctx_r145 = i0.ɵɵnextContext(3); return ctx_r145.setIndexAndEmitTable(i_r140, x_r143.key, $event); })("schemaChange", function JsonSchemaFormComponent_div_1_span_8_tr_6_td_1_Template_lib_json_schema_form_schemaChange_1_listener() { i0.ɵɵrestoreView(_r147_1); var ctx_r148 = i0.ɵɵnextContext(4); return ctx_r148.schemaChange.emit(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var x_r143 = ctx.$implicit;
            var row_r139 = i0.ɵɵnextContext().$implicit;
            var ctx_r141 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", row_r139[x_r143.key])("rootValue", ctx_r141.rootValue)("rootSchema", ctx_r141.rootSchema)("schema", ctx_r141.schema.items.properties[x_r143.key])("base", ctx_r141.base);
        }
    }
    function JsonSchemaFormComponent_div_1_span_8_tr_6_button_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r152_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 39);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_8_tr_6_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r152_1); var i_r140 = i0.ɵɵnextContext().index; var ctx_r150 = i0.ɵɵnextContext(3); return ctx_r150.remove(i_r140); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "remove_circle_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r142 = i0.ɵɵnextContext(4);
            i0.ɵɵpropertyInterpolate("matTooltip", ctx_r142.getLabel());
        }
    }
    function JsonSchemaFormComponent_div_1_span_8_tr_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "tr");
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_span_8_tr_6_td_1_Template, 3, 5, "td", 30);
            i0.ɵɵpipe(2, "keyvalue");
            i0.ɵɵelementStart(3, "td");
            i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_span_8_tr_6_button_4_Template, 3, 1, "button", 33);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r136 = i0.ɵɵnextContext(3);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(2, 2, ctx_r136.schema.items.properties, ctx_r136.originalOrder));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", !ctx_r136.readOnly);
        }
    }
    function JsonSchemaFormComponent_div_1_span_8_button_7_Template(rf, ctx) {
        if (rf & 1) {
            var _r154_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "button", 39);
            i0.ɵɵlistener("click", function JsonSchemaFormComponent_div_1_span_8_button_7_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r154_1); var ctx_r153 = i0.ɵɵnextContext(3); return ctx_r153.add(); });
            i0.ɵɵelementStart(1, "mat-icon");
            i0.ɵɵtext(2, "add_circle_outline");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r137 = i0.ɵɵnextContext(3);
            i0.ɵɵpropertyInterpolate("matTooltip", ctx_r137.getLabel());
        }
    }
    function JsonSchemaFormComponent_div_1_span_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 46);
            i0.ɵɵelementStart(1, "table", 55);
            i0.ɵɵelementStart(2, "tr");
            i0.ɵɵtemplate(3, JsonSchemaFormComponent_div_1_span_8_th_3_Template, 2, 1, "th", 56);
            i0.ɵɵpipe(4, "keyvalue");
            i0.ɵɵelement(5, "th", 57);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, JsonSchemaFormComponent_div_1_span_8_tr_6_Template, 5, 5, "tr", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, JsonSchemaFormComponent_div_1_span_8_button_7_Template, 3, 1, "button", 33);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngStyle", ctx_r14.schema.style)("ngClass", ctx_r14.schema.class);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind2(4, 5, ctx_r14.schema.items.properties, ctx_r14.originalOrder));
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx_r14.value);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r14.readOnly);
        }
    }
    function JsonSchemaFormComponent_div_1_div_9_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 63);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var x_r156 = ctx.$implicit;
            i0.ɵɵproperty("value", x_r156);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(x_r156);
        }
    }
    function JsonSchemaFormComponent_div_1_div_9_Template(rf, ctx) {
        if (rf & 1) {
            var _r158_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "mat-form-field", 46);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-select", 60);
            i0.ɵɵlistener("selectionChange", function JsonSchemaFormComponent_div_1_div_9_Template_mat_select_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r158_1); var ctx_r157 = i0.ɵɵnextContext(2); return ctx_r157.change($event); });
            i0.ɵɵtemplate(5, JsonSchemaFormComponent_div_1_div_9_mat_option_5_Template, 2, 2, "mat-option", 61);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 62);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r15 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", ctx_r15.schema.style)("ngClass", ctx_r15.schema.class);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r15.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r15.value)("disabled", ctx_r15.readOnly);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r15.schema.enum);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r15.error());
        }
    }
    function JsonSchemaFormComponent_div_1_div_10_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 67);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var choice_r160 = ctx.$implicit;
            i0.ɵɵproperty("value", choice_r160.value)("matTooltip", choice_r160.name !== choice_r160.value ? choice_r160.value : null);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", choice_r160.name, " ");
        }
    }
    function JsonSchemaFormComponent_div_1_div_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r162_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "mat-form-field", 64);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-select", 65);
            i0.ɵɵlistener("focus", function JsonSchemaFormComponent_div_1_div_10_Template_mat_select_focus_4_listener() { i0.ɵɵrestoreView(_r162_1); var ctx_r161 = i0.ɵɵnextContext(2); return ctx_r161.focus(); })("selectionChange", function JsonSchemaFormComponent_div_1_div_10_Template_mat_select_selectionChange_4_listener($event) { i0.ɵɵrestoreView(_r162_1); var ctx_r163 = i0.ɵɵnextContext(2); return ctx_r163.change($event); });
            i0.ɵɵtemplate(5, JsonSchemaFormComponent_div_1_div_10_mat_option_5_Template, 2, 3, "mat-option", 66);
            i0.ɵɵpipe(6, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "p", 62);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matTooltip", ctx_r16.schema.description)("ngStyle", ctx_r16.schema.style)("ngClass", ctx_r16.schema.class);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r16.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r16.value)("disabled", ctx_r16.readOnly);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(6, 8, ctx_r16.choices));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r16.error());
        }
    }
    function JsonSchemaFormComponent_div_1_div_11_Template(rf, ctx) {
        if (rf & 1) {
            var _r166_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "mat-form-field", 46);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "input", 68);
            i0.ɵɵlistener("dateChange", function JsonSchemaFormComponent_div_1_div_11_Template_input_dateChange_4_listener($event) { i0.ɵɵrestoreView(_r166_1); var ctx_r165 = i0.ɵɵnextContext(2); return ctx_r165.change($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "mat-datepicker-toggle", 69);
            i0.ɵɵelement(6, "mat-datepicker", null, 70);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "p", 62);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r164 = i0.ɵɵreference(7);
            var ctx_r17 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", ctx_r17.schema.style)("ngClass", ctx_r17.schema.class);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r17.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r17.parseDate(ctx_r17.value, ctx_r17.schema.dateFormat))("matDatepicker", _r164)("disabled", ctx_r17.readOnly);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("for", _r164);
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(ctx_r17.error());
        }
    }
    function JsonSchemaFormComponent_div_1_div_12_Template(rf, ctx) {
        if (rf & 1) {
            var _r168_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div", 71);
            i0.ɵɵelementStart(1, "mat-checkbox", 72);
            i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_div_12_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r168_1); var ctx_r167 = i0.ɵɵnextContext(2); return ctx_r167.change($event); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "p", 62);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r18 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngStyle", ctx_r18.schema.style)("ngClass", ctx_r18.schema.class);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("checked", ctx_r18.value)("disabled", ctx_r18.readOnly);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r18.label, "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r18.error());
        }
    }
    function JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 67);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var choice_r172 = ctx.$implicit;
            i0.ɵɵproperty("value", choice_r172.value)("matTooltip", choice_r172.name !== choice_r172.value ? choice_r172.value : null);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", choice_r172.name, " ");
        }
    }
    function JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r174_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 46);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-select", 73);
            i0.ɵɵlistener("focus", function JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_Template_mat_select_focus_3_listener() { i0.ɵɵrestoreView(_r174_1); var ctx_r173 = i0.ɵɵnextContext(3); return ctx_r173.focus(); })("selectionChange", function JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_Template_mat_select_selectionChange_3_listener($event) { i0.ɵɵrestoreView(_r174_1); var ctx_r175 = i0.ɵɵnextContext(3); return ctx_r175.change($event); });
            i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_mat_option_4_Template, 2, 3, "mat-option", 66);
            i0.ɵɵpipe(5, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r169 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngStyle", ctx_r169.schema.style)("ngClass", ctx_r169.schema.class);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r169.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("value", ctx_r169.value)("disabled", ctx_r169.readOnly);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 6, ctx_r169.choices));
        }
    }
    function JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 67);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var choice_r178 = ctx.$implicit;
            i0.ɵɵproperty("value", choice_r178.value)("matTooltip", choice_r178.name !== choice_r178.value ? choice_r178.value : null);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", choice_r178.name, " ");
        }
    }
    function JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r180_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mat-form-field", 46);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "input", 74);
            i0.ɵɵlistener("focus", function JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_Template_input_focus_3_listener() { i0.ɵɵrestoreView(_r180_1); var ctx_r179 = i0.ɵɵnextContext(3); return ctx_r179.focus(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-autocomplete", null, 75);
            i0.ɵɵtemplate(6, JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_mat_option_6_Template, 2, 3, "mat-option", 66);
            i0.ɵɵpipe(7, "async");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var _r176 = i0.ɵɵreference(5);
            var ctx_r170 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("ngStyle", ctx_r170.schema.style)("ngClass", ctx_r170.schema.class);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r170.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formControl", ctx_r170.control)("matAutocomplete", _r176);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(7, 6, ctx_r170.filteredOptions));
        }
    }
    function JsonSchemaFormComponent_div_1_div_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_div_13_mat_form_field_1_Template, 6, 8, "mat-form-field", 10);
            i0.ɵɵtemplate(2, JsonSchemaFormComponent_div_1_div_13_mat_form_field_2_Template, 8, 8, "mat-form-field", 10);
            i0.ɵɵelementStart(3, "p", 62);
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r19 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r19.schema.widget === "select");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r19.schema.widget !== "select");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r19.error());
        }
    }
    function JsonSchemaFormComponent_div_1_div_14_input_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r184_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 78);
            i0.ɵɵlistener("input", function JsonSchemaFormComponent_div_1_div_14_input_4_Template_input_input_0_listener($event) { i0.ɵɵrestoreView(_r184_1); var ctx_r183 = i0.ɵɵnextContext(3); return ctx_r183.change($event); })("focus", function JsonSchemaFormComponent_div_1_div_14_input_4_Template_input_focus_0_listener() { i0.ɵɵrestoreView(_r184_1); var ctx_r185 = i0.ɵɵnextContext(3); return ctx_r185.getInputType(ctx_r185.schema) == "password" ? ctx_r185.value = "" : ""; });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r181 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("disabled", ctx_r181.readOnly)("placeholder", ctx_r181.example())("type", ctx_r181.getInputType(ctx_r181.schema))("value", ctx_r181.value);
        }
    }
    function JsonSchemaFormComponent_div_1_div_14_input_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r187_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 79);
            i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_div_14_input_5_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r187_1); var ctx_r186 = i0.ɵɵnextContext(3); return ctx_r186.change($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r182 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("disabled", ctx_r182.readOnly)("placeholder", ctx_r182.example())("type", ctx_r182.getInputType(ctx_r182.schema))("value", ctx_r182.value);
        }
    }
    function JsonSchemaFormComponent_div_1_div_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "mat-form-field", 46);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_div_14_input_4_Template, 1, 4, "input", 76);
            i0.ɵɵtemplate(5, JsonSchemaFormComponent_div_1_div_14_input_5_Template, 1, 4, "input", 77);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 62);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r20 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", ctx_r20.schema.style)("ngClass", ctx_r20.schema.class);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r20.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r20.inArray);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r20.inArray);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r20.error());
        }
    }
    function JsonSchemaFormComponent_div_1_div_15_textarea_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r191_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "textarea", 82);
            i0.ɵɵlistener("input", function JsonSchemaFormComponent_div_1_div_15_textarea_4_Template_textarea_input_0_listener($event) { i0.ɵɵrestoreView(_r191_1); var ctx_r190 = i0.ɵɵnextContext(3); return ctx_r190.change($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r188 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("disabled", ctx_r188.readOnly)("placeholder", ctx_r188.example())("value", ctx_r188.value)("ngStyle", ctx_r188.schema.style)("ngClass", ctx_r188.schema.class);
        }
    }
    function JsonSchemaFormComponent_div_1_div_15_textarea_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r193_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "textarea", 83);
            i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_div_15_textarea_5_Template_textarea_change_0_listener($event) { i0.ɵɵrestoreView(_r193_1); var ctx_r192 = i0.ɵɵnextContext(3); return ctx_r192.change($event); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r189 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("disabled", ctx_r189.readOnly)("placeholder", ctx_r189.example())("value", ctx_r189.value)("ngStyle", ctx_r189.schema.style)("ngClass", ctx_r189.schema.class);
        }
    }
    function JsonSchemaFormComponent_div_1_div_15_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "mat-form-field", 46);
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_div_15_textarea_4_Template, 1, 5, "textarea", 80);
            i0.ɵɵtemplate(5, JsonSchemaFormComponent_div_1_div_15_textarea_5_Template, 1, 5, "textarea", 81);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "p", 62);
            i0.ɵɵtext(7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r21 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", ctx_r21.schema.style)("ngClass", ctx_r21.schema.class);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r21.label);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r21.inArray);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r21.inArray);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r21.error());
        }
    }
    function JsonSchemaFormComponent_div_1_div_16_Template(rf, ctx) {
        if (rf & 1) {
            var _r195_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵelementStart(1, "input", 84);
            i0.ɵɵlistener("change", function JsonSchemaFormComponent_div_1_div_16_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r195_1); var ctx_r194 = i0.ɵɵnextContext(2); return ctx_r194.handleFileInput($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "p", 62);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r22 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", ctx_r22.schema.style)("ngClass", ctx_r22.schema.class)("disabled", ctx_r22.readOnly);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx_r22.error());
        }
    }
    function JsonSchemaFormComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_div_1_Template, 35, 11, "div", 7);
            i0.ɵɵtemplate(2, JsonSchemaFormComponent_div_1_span_2_Template, 3, 5, "span", 8);
            i0.ɵɵtemplate(3, JsonSchemaFormComponent_div_1_span_3_Template, 4, 8, "span", 8);
            i0.ɵɵtemplate(4, JsonSchemaFormComponent_div_1_mat_tab_group_4_Template, 4, 7, "mat-tab-group", 9);
            i0.ɵɵtemplate(5, JsonSchemaFormComponent_div_1_span_5_Template, 3, 5, "span", 8);
            i0.ɵɵtemplate(6, JsonSchemaFormComponent_div_1_span_6_Template, 6, 7, "span", 7);
            i0.ɵɵtemplate(7, JsonSchemaFormComponent_div_1_mat_tab_group_7_Template, 3, 4, "mat-tab-group", 9);
            i0.ɵɵtemplate(8, JsonSchemaFormComponent_div_1_span_8_Template, 8, 8, "span", 10);
            i0.ɵɵtemplate(9, JsonSchemaFormComponent_div_1_div_9_Template, 8, 7, "div", 7);
            i0.ɵɵtemplate(10, JsonSchemaFormComponent_div_1_div_10_Template, 9, 10, "div", 7);
            i0.ɵɵtemplate(11, JsonSchemaFormComponent_div_1_div_11_Template, 10, 8, "div", 7);
            i0.ɵɵtemplate(12, JsonSchemaFormComponent_div_1_div_12_Template, 5, 6, "div", 11);
            i0.ɵɵtemplate(13, JsonSchemaFormComponent_div_1_div_13_Template, 5, 3, "div", 7);
            i0.ɵɵtemplate(14, JsonSchemaFormComponent_div_1_div_14_Template, 8, 6, "div", 7);
            i0.ɵɵtemplate(15, JsonSchemaFormComponent_div_1_div_15_Template, 8, 6, "div", 7);
            i0.ɵɵtemplate(16, JsonSchemaFormComponent_div_1_div_16_Template, 4, 4, "div", 7);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("matTooltip", ctx_r1.schema.description);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.service.editMode && !ctx_r1.schema.static && !ctx_r1.inArray && ctx_r1.getLayout() !== "none");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "object");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "additionalProperties");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "additionalPropertiesTab");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "array");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "chips");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "tab");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "table");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "enum");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "array-select");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "date");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "checkbox");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "autocomplete");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "single");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "textarea");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx_r1.getLayout() === "upload");
        }
    }
    function JsonSchemaFormComponent_ng_template_2_Template(rf, ctx) { }
    /**
     * generates an input form base on JSON schema and JSON object.
     * The component is used recursively.
     */
    var JsonSchemaFormComponent = /** @class */ (function () {
        /**
         * component constructor
         * @param http                        http client
         * @param componentFactoryResolver    allows dynamic components
         * @param service                     application service for registering components etc.
         * @param dialog                      dialog service
         */
        function JsonSchemaFormComponent(http, componentFactoryResolver, service, dialog) {
            this.http = http;
            this.componentFactoryResolver = componentFactoryResolver;
            this.service = service;
            this.dialog = dialog;
            /**
             * emit changes done by the user in the component
             */
            this.valueChange = new i0.EventEmitter();
            /**
             * emit whether this part of the form is valid
             */
            this.errorChange = new i0.EventEmitter();
            /**
             * indicate schema changes done via the layout editor
             */
            this.schemaChange = new i0.EventEmitter();
            /**
             * indicates whether this is the root of the component tree
             */
            this.isRoot = false;
            /**
             * complete chip entry with enter or comma
             */
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA, keycodes.TAB];
            /**
             * angular pipe sorting function for keyValue - keep the JSON order and do not
             * order alphabetically
             */
            this.originalOrder = function (a, b) {
                return 0;
            };
        }
        /**
         * apply order, called anytime properties are set
         */
        JsonSchemaFormComponent.prototype.setOrderedProperties = function () {
            var e_1, _b, e_2, _c, e_3, _d;
            if (this.schema.order) {
                this.orderedProperties = [];
                try {
                    for (var _e = __values(this.schema.order), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var p = _f.value;
                        var arr = Array.isArray(p) ? p : [p];
                        var o = {};
                        try {
                            for (var arr_1 = (e_2 = void 0, __values(arr)), arr_1_1 = arr_1.next(); !arr_1_1.done; arr_1_1 = arr_1.next()) {
                                var q = arr_1_1.value;
                                o[q] = this.schema.properties[q];
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (arr_1_1 && !arr_1_1.done && (_c = arr_1.return)) _c.call(arr_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        this.orderedProperties.push(o);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            else if (this.schema.properties) {
                this.orderedProperties = [];
                try {
                    for (var _g = __values(Object.entries(this.schema.properties)), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var _j = __read(_h.value, 2), key = _j[0], value = _j[1];
                        var o = {};
                        o[key] = value;
                        this.orderedProperties.push(o);
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_h && !_h.done && (_d = _g.return)) _d.call(_g);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        };
        /**
         * initialize the comonent.
         * replace undefined with null and init autocomplete choices
         */
        JsonSchemaFormComponent.prototype.ngOnInit = function () {
            var e_4, _b, e_5, _c;
            var _this = this;
            this.readOnly =
                this.schema.readOnly || (this.schema.createOnly && this.value);
            if (!this.rootSchema) {
                this.rootSchema = this.schema;
                this.rootValue = this.value;
                this.isRoot = true;
            }
            if (!this.schema.type) {
                var p = this.schema.$ref;
                var parts = p.split("#");
                if (parts.length === 1) {
                    // URL only
                    this.url(parts[0], null);
                }
                else {
                    if (parts[0]) {
                        // URL + anchor
                        this.url(parts[0], parts[1]);
                    }
                    else {
                        // local ref
                        this.schema = JsonPointer.jsonPointer(this.rootSchema, parts[1]);
                        this.setOrderedProperties();
                    }
                }
            }
            else {
                this.setOrderedProperties();
            }
            if (typeof this.value === "undefined") {
                if (this.schema.default) {
                    this.value = this.schema.default;
                    setTimeout(function () { return _this.emit(_this.value); }, 500);
                }
                else {
                    if (!this.hideUndefined) {
                        this.value = null;
                    }
                }
            }
            if (this.getLayout() === "custom") {
                this.loadComponent();
            }
            if (this.isRoot) {
                setTimeout(function () {
                    _this.errorChange.emit(_this.recursiveError());
                }, 10);
            }
            this.ch = this.service.displayWithRegistry[this.schema.displayWith];
            if (!this.ch) {
                this.ch = new DefaultChoiceHandler(this.http);
            }
            this.control = new i22.FormControl(this.value);
            this.choices = new rxjs.ReplaySubject();
            if (Array.isArray(this.value)) {
                var arr = [];
                try {
                    for (var _d = __values(this.value), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var i = _e.value;
                        arr.push({ name: i, value: i });
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
                this.choices.next(arr);
            }
            else {
                this.choices.next([{ name: this.value, value: this.value }]);
            }
            if (this.value || this.value === 0) {
                if (Array.isArray(this.value)) {
                    var arr = [];
                    try {
                        for (var _f = __values(this.value), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var i = _g.value;
                            arr.push(this.ch.choice(i, this.schema));
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                    rxjs.forkJoin(arr).subscribe(function (res) { return _this.choices.next(res); });
                }
                else {
                    this.ch
                        .choice(this.value, this.schema)
                        .subscribe(function (res) { return _this.choices.next([res]); });
                }
            }
            this.filteredOptions = this.control.valueChanges.pipe(operators.startWith(this.value), operators.debounceTime(this.ch.debounceTime()), operators.switchMap(function (x) {
                _this.change({ target: { value: x } });
                return _this.ch.filter(_this.value, _this.schema, x, _this.choices);
            }));
            this.edit = new Edit(this.schemaChange, this.name, this.schema, this.parentSchema, this.dialog);
        };
        /**
         * choice element activated - load values
         */
        JsonSchemaFormComponent.prototype.focus = function () {
            var _this = this;
            this.ch.load(this.value, this.schema).subscribe(function (res) {
                _this.choices.next(res);
            });
        };
        /**
         * load schema from ref, apply pointer if needed
         */
        JsonSchemaFormComponent.prototype.url = function (ref, pointer) {
            var _this = this;
            // URL + anchor
            this.base = this.base ? new URL(ref, this.base).href : ref;
            // check root schema referenced map
            if (this.rootSchema.referenced && this.rootSchema.referenced[this.base]) {
                var res = this.rootSchema.referenced[this.base];
                this.schema = pointer ? JsonPointer.jsonPointer(res, pointer) : res;
                this.setOrderedProperties();
                return;
            }
            this.http.get(this.base).subscribe(function (res) {
                _this.schema = pointer ? JsonPointer.jsonPointer(res, pointer) : res;
                _this.setOrderedProperties();
            }, function (error) { return console.log(error); });
            // set temporary pseudo schema
            this.schema = { type: "string" };
            this.setOrderedProperties();
        };
        /**
         * emit valueChange event and also any validation error
         */
        JsonSchemaFormComponent.prototype.emit = function (event) {
            var _this = this;
            this.valueChange.emit(event);
            if (this.isRoot) {
                setTimeout(function () {
                    _this.errorChange.emit(_this.recursiveError());
                }, 10);
            }
        };
        /**
         * if the schema changes from the outside,
         * reset the component state wrt. errors and the choices cache
         */
        JsonSchemaFormComponent.prototype.ngOnChanges = function (changes) {
            if (changes.schema) {
                if (changes.schema.previousValue) {
                    this.rootSchema = null;
                    if (this.widgetHost.viewContainerRef) {
                        this.widgetHost.viewContainerRef.clear();
                    }
                    this.ngOnInit();
                }
            }
            if (changes.switch && !changes.switch.isFirstChange()) {
                if (this.getLayout() === "custom") {
                    this.loadComponent();
                }
                else {
                    if (this.widgetHost.viewContainerRef) {
                        this.widgetHost.viewContainerRef.clear();
                    }
                }
            }
        };
        /**
         * key method to instruct the display which HTML block to activate.
         */
        JsonSchemaFormComponent.prototype.getLayout = function () {
            if (this.schema.case && this.schema.case.indexOf(this.switch) < 0) {
                return "none";
            }
            if (this.schema.widget === "custom") {
                return "custom";
            }
            if (this.hideUndefined && this.value === undefined) {
                return "none";
            }
            if (this.schema.type === "object") {
                if (this.schema.additionalProperties) {
                    if (this.schema.layout === "tab") {
                        return "additionalPropertiesTab";
                    }
                    return "additionalProperties";
                }
                return "object";
            }
            if (this.schema.type === "array") {
                if (this.schema.layout === "tab") {
                    return "tab";
                }
                if (this.schema.layout === "table") {
                    return "table";
                }
                if (this.schema.layout === "select") {
                    return "array-select";
                }
                if (this.schema.layout === "chips") {
                    return "chips";
                }
                return "array";
            }
            if (this.schema.enum) {
                return "enum";
            }
            if (this.schema.widget === "date") {
                return "date";
            }
            if (this.schema.widget === "upload") {
                return "upload";
            }
            if (this.schema.widget === "textarea") {
                return "textarea";
            }
            if (this.schema.type === "boolean") {
                return "checkbox";
            }
            if (this.schema.choicesUrl) {
                return "autocomplete";
            }
            if (this.schema.choices) {
                return "autocomplete";
            }
            if (this.schema.displayWith) {
                return "autocomplete";
            }
            return "single";
        };
        /**
         * called from template in the "simple" type. If "type" is "number" or "integer",
         * the HTML input type is "number" which avoids normal string input
         */
        JsonSchemaFormComponent.prototype.getInputType = function (schema) {
            if (schema.type === "number") {
                return "number";
            }
            if (schema.type === "integer") {
                return "number";
            }
            return schema.widget;
        };
        /**
         * event handler for object display. Catches the child component event and
         * handle it by setting the value[key].
         * Also init null objects with {}
         */
        JsonSchemaFormComponent.prototype.onValueChange = function (key, value) {
            var e_6, _b;
            if (!this.value) {
                this.value = {};
            }
            this.value[key] = value;
            if (this.schema.computed) {
                try {
                    for (var _c = __values(Object.keys(this.schema.computed)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var field = _d.value;
                        var expression = this.schema.computed[field];
                        this.value[field] = jsonata__default['default'](expression).evaluate(this.value);
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
            this.emit(this.value);
        };
        /**
         * add an element to an array.
         * null arrays are initialized with []
         */
        JsonSchemaFormComponent.prototype.add = function () {
            if (!(this.value instanceof Array)) {
                this.value = [];
            }
            if (this.schema.items.type === "array") {
                this.value.push([]);
            }
            else if (this.schema.items.type === "object") {
                this.value.push({});
            }
            else {
                this.value.push(null);
            }
            this.emit(this.value);
        };
        /**
         * event handler for adding a field
         */
        JsonSchemaFormComponent.prototype.addField = function () {
            if (!this.value) {
                this.value = {};
            }
            if (this.value[""]) {
                return;
            }
            this.value[""] = null;
            this.emit(this.value);
        };
        /**
         * remove an element from an array
         */
        JsonSchemaFormComponent.prototype.remove = function (i) {
            this.value.splice(i, 1);
            this.emit(this.value);
        };
        /**
         * remove a field
         */
        JsonSchemaFormComponent.prototype.removeField = function (key) {
            delete this.value[key];
            this.emit(this.value);
        };
        /**
         * event handler for changed field names with "additionalProperties"
         */
        JsonSchemaFormComponent.prototype.fieldNameChange = function (key, newvalue) {
            this.value[newvalue] = this.value[key];
            delete this.value[key];
            this.emit(this.value);
        };
        /**
         * returns the validation error on this level and call recursively for all children.
         * returns null if the form contents is valid
         */
        JsonSchemaFormComponent.prototype.recursiveError = function () {
            var e_7, _b;
            var e = this.error();
            if (e) {
                return e;
            }
            if (this.child) {
                return this.child.recursiveError();
            }
            if (this.children) {
                try {
                    for (var _c = __values(this.children), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var c = _d.value;
                        var r = c.recursiveError();
                        if (r) {
                            return r;
                        }
                    }
                }
                catch (e_7_1) { e_7 = { error: e_7_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_7) throw e_7.error; }
                }
            }
            return null;
        };
        /**
         * return the error message provided in the schema or the generic error message
         * returned from the validation code
         */
        JsonSchemaFormComponent.prototype.e = function (error) {
            if (this.schema.errorMessage) {
                return this.schema.errorMessage;
            }
            return error;
        };
        /**
         * return error string
         */
        JsonSchemaFormComponent.prototype.error = function () {
            var e_8, _b, e_9, _c, e_10, _d, e_11, _e;
            var _a;
            if (this.schema.widget === "custom") {
                return this.customError;
            }
            if (this.schema.case && this.schema.case.indexOf(this.switch) < 0) {
                return null;
            }
            if (this.value) {
                if (this.schema.maxItems) {
                    if (!(this.value.length <= this.schema.maxItems)) {
                        return this.e("Only " + this.schema.maxItems + " array entries allowed");
                    }
                }
                if (this.schema.uniqueItems) {
                    if (!(new Set(this.value).size === this.value.length)) {
                        return this.e("Array entries must be unique");
                    }
                }
                if (this.schema.minItems) {
                    if (!(this.value.length >= this.schema.minItems)) {
                        return this.e("At least " + this.schema.minItems + " array entries required");
                    }
                }
                if (this.schema.maxProperties) {
                    if (!(Object.keys(this.value).length <= this.schema.maxProperties)) {
                        return this.e("Only " + this.schema.maxProperties + " fields allowed");
                    }
                }
                if (this.schema.propertyNames) {
                    try {
                        for (var _f = __values(Object.keys(this.value)), _g = _f.next(); !_g.done; _g = _f.next()) {
                            var key = _g.value;
                            var re = new RegExp(this.schema.propertyNames);
                            if (!re.test(key)) {
                                return this.e("illegal field name: " + key);
                            }
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                }
                if (this.schema.dependencies) {
                    try {
                        for (var _h = __values(Object.keys(this.schema.dependencies)), _j = _h.next(); !_j.done; _j = _h.next()) {
                            var dep = _j.value;
                            if (this.value[dep]) {
                                try {
                                    for (var _k = (e_10 = void 0, __values(this.schema.dependencies[dep])), _l = _k.next(); !_l.done; _l = _k.next()) {
                                        var l = _l.value;
                                        if (!this.value[l]) {
                                            return this.e(dep + " depends on " + l);
                                        }
                                    }
                                }
                                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                                finally {
                                    try {
                                        if (_l && !_l.done && (_d = _k.return)) _d.call(_k);
                                    }
                                    finally { if (e_10) throw e_10.error; }
                                }
                            }
                        }
                    }
                    catch (e_9_1) { e_9 = { error: e_9_1 }; }
                    finally {
                        try {
                            if (_j && !_j.done && (_c = _h.return)) _c.call(_h);
                        }
                        finally { if (e_9) throw e_9.error; }
                    }
                }
                if (this.schema.minProperties) {
                    if (!(Object.keys(this.value).length >= this.schema.minProperties)) {
                        return this.e("At least " + this.schema.minProperties + " fields required");
                    }
                }
                if (this.schema.maxLength) {
                    if (!(("" + this.value).length <= this.schema.maxLength)) {
                        return this.e("Input is longer than " + this.schema.maxLength);
                    }
                }
                if (this.schema.minLength) {
                    if (!(("" + this.value).length >= this.schema.minLength)) {
                        return this.e("Input is shorter than " + this.schema.minLength);
                    }
                }
                if (this.schema.multipleOf) {
                    if (!Number.isInteger(Number(this.value) / this.schema.multipleOf)) {
                        return this.e("Must be multiple of " + this.schema.multipleOf);
                    }
                }
                if (this.schema.exclusiveMaximum) {
                    if (!(Number(this.value) < this.schema.exclusiveMaximum)) {
                        return this.e("Must be less than " + this.schema.exclusiveMaximum);
                    }
                }
                if (this.schema.maximum) {
                    if (!(Number(this.value) <= this.schema.maximum)) {
                        return this.e("Must be less than or equal " + this.schema.maximum);
                    }
                }
                if (this.schema.exclusiveMinimum) {
                    if (!(Number(this.value) > this.schema.exclusiveMinimum)) {
                        return this.e("Must greater than " + this.schema.exclusiveMinimum);
                    }
                }
                if (this.schema.minimum) {
                    if (!(Number(this.value) >= this.schema.minimum)) {
                        return this.e("Must greater than or equal " + this.schema.minimum);
                    }
                }
            }
            if (this.required) {
                if (this.value == null || Object.is(this.value, NaN)) {
                    return this.e("required");
                }
            }
            if (this.schema.required) {
                try {
                    for (var _m = __values(this.schema.required), _o = _m.next(); !_o.done; _o = _m.next()) {
                        var dep = _o.value;
                        if (!this.value[dep] &&
                            this.value[dep] !== false &&
                            this.value[dep] !== 0) {
                            // ignore 'required' if dep is inactive due to switch / case
                            var inactive = false;
                            if (this.schema.switch) {
                                var switc = this.value[this.schema.switch];
                                if (switc && ((_a = this.schema.properties[dep].case) === null || _a === void 0 ? void 0 : _a.indexOf(switc)) < 0) {
                                    inactive = true;
                                }
                            }
                            if (!inactive) {
                                return this.e(dep + " is required");
                            }
                        }
                    }
                }
                catch (e_11_1) { e_11 = { error: e_11_1 }; }
                finally {
                    try {
                        if (_o && !_o.done && (_e = _m.return)) _e.call(_m);
                    }
                    finally { if (e_11) throw e_11.error; }
                }
            }
            if (this.schema.pattern) {
                var re = new RegExp(this.schema.pattern);
                if (!this.value) {
                    return this.e("illegal string");
                }
                if (!re.test(this.value)) {
                    return this.e("illegal string");
                }
            }
            if (this.schema.format && this.service.formats[this.schema.format]) {
                var re = new RegExp(this.service.formats[this.schema.format]);
                if (!this.value) {
                    return this.e("illegal string");
                }
                if (!re.test(this.value)) {
                    return this.e("illegal string");
                }
            }
            return null;
        };
        /**
         * use the element title if present, defaults to the label input or "" is both are null
         */
        JsonSchemaFormComponent.prototype.getLabel = function () {
            if (this.schema.title) {
                return this.schema.title;
            }
            if (this.label) {
                return this.label;
            }
            return "";
        };
        /**
         * input element change handler.
         * normalize the different kind of events, handle the datatypes, set the value and emit the change
         */
        JsonSchemaFormComponent.prototype.change = function (event) {
            var eventTarget;
            if (event instanceof i19.MatSelectChange) {
                event = event.value;
            }
            else if (event instanceof i21.MatDatepickerInputEvent) {
                event = this.serializeDate(event.value, this.schema.dateFormat, this.schema.type);
            }
            else if (event instanceof i23.MatAutocompleteSelectedEvent) {
                event = event.option.value;
            }
            else if (event instanceof i13.MatCheckboxChange) {
                event = event.checked;
            }
            else {
                // save the event target in case the parsing changes the value
                // (e.g. integer input 5.3 becomes 5, this is reflected on the UI via this handle)
                eventTarget = event.target;
                event = event.target.value;
            }
            if (event === "") {
                event = null;
            }
            if (event == null) {
                this.value = null;
            }
            if (this.schema.type === "number") {
                this.value = parseFloat(event);
            }
            else if (this.schema.type === "integer") {
                this.value = parseInt(event, 10);
            }
            else if (this.schema.type === "boolean") {
                if (typeof event === "string") {
                    if (event === "true") {
                        this.value = true;
                    }
                    else if (event === "false") {
                        this.value = false;
                    }
                    else {
                        this.value = null;
                    }
                }
                else {
                    this.value = event;
                }
            }
            else if (this.schema.type === "string") {
                this.value = event;
            }
            else if (this.schema.type === "array") {
                this.value = event;
            }
            else {
                throw new Error("unknown type: " + this.schema.type);
            }
            this.emit(this.value);
        };
        /**
         * allows for the result of a file upload to be written into a text form element
         */
        JsonSchemaFormComponent.prototype.handleFileInput = function (event) {
            var _this = this;
            if (1024 * 1024 <= event.target.files.item(0).size) {
                console.log("The file size is limited to 1MB");
                return;
            }
            var reader = new FileReader();
            reader.onload = function () {
                _this.value = reader.result;
                _this.emit(_this.value);
            };
            reader.readAsDataURL(event.target.files.item(0));
        };
        /**
         * get example values from example array and default
         */
        JsonSchemaFormComponent.prototype.example = function () {
            if (this.schema.examples && this.schema.examples[0]) {
                return this.schema.examples[0];
            }
            if (this.schema.default) {
                return this.schema.default;
            }
            return null;
        };
        /**
         * load the dynamic custom widget
         */
        JsonSchemaFormComponent.prototype.loadComponent = function () {
            var _this = this;
            var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.service.registry[this.schema.widgetType]);
            var viewContainerRef = this.widgetHost.viewContainerRef;
            viewContainerRef.clear();
            var componentRef = viewContainerRef.createComponent(componentFactory);
            // input values
            componentRef.instance.label = this.label;
            componentRef.instance.value = this.value;
            componentRef.instance.schema = this.schema;
            componentRef.instance.rootSchema = this.rootSchema;
            componentRef.instance.rootValue = this.rootValue;
            // subscribe to value changes and forward them
            componentRef.instance.valueChange.subscribe(function (data) {
                _this.value = data;
                _this.emit(_this.value);
            });
            // subscribe to error changes and forward them
            componentRef.instance.errorChange.subscribe(function (error) {
                _this.customError = error;
                _this.errorChange.emit(error);
            });
        };
        /**
         * used for expansion panels - set value and forward event
         */
        JsonSchemaFormComponent.prototype.setAndEmit = function (event) {
            this.value = event;
            this.emit(this.value);
        };
        /**
         * set an array element and emit value change event
         */
        JsonSchemaFormComponent.prototype.setIndexAndEmit = function (i, event) {
            this.value[i] = event;
            this.emit(this.value);
        };
        /**
         * set an array element's field and emit value change event (applies to table layout)
         */
        JsonSchemaFormComponent.prototype.setIndexAndEmitTable = function (i, field, event) {
            this.value[i][field] = event;
            this.emit(this.value);
        };
        /**
         * used when hideUndefined is active. Called from the UI to
         * show a property with undefined value (in order to be able to set if in the form)
         */
        JsonSchemaFormComponent.prototype.showProperty = function (prop) {
            if (!this.value) {
                this.value = {};
            }
            if (this.value[prop] === undefined) {
                this.value[prop] = null;
            }
            else if (this.value[prop] === null) {
                this.value[prop] = undefined;
            }
        };
        /**
         * used when hideUndefined is active. Called from the UI
         * to determine which properties are included in the "to add" list
         */
        JsonSchemaFormComponent.prototype.showPropertyList = function () {
            var e_12, _b;
            if (this.schema.switch && this.value) {
                var sw = this.value[this.schema.switch];
                var props = [];
                try {
                    for (var _c = __values(Object.entries(this.schema.properties)), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var _e = __read(_d.value, 2), k = _e[0], v = _e[1];
                        if (v.case) {
                            if (v.case.includes(sw)) {
                                props.push(k);
                            }
                        }
                        else {
                            props.push(k);
                        }
                    }
                }
                catch (e_12_1) { e_12 = { error: e_12_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                    }
                    finally { if (e_12) throw e_12.error; }
                }
                return props.sort();
            }
            else {
                return Object.keys(this.schema.properties).sort();
            }
        };
        /**
         * string to date
         * @param date    date string / number (millisecs since 1970)
         * @param format  date format
         */
        JsonSchemaFormComponent.prototype.parseDate = function (date, format) {
            if (!date && date !== 0) {
                return date;
            }
            if (typeof date === "number") {
                return this.sameDate(new Date(date));
            }
            if (!format) {
                return date;
            }
            var pdate = date.split(this.getDelimiter(format));
            var pformat = format.split(this.getDelimiter(format));
            return this.sameDate(new Date(pdate[pformat.indexOf("yyyy")], pdate[pformat.indexOf("MM")] - 1, pdate[pformat.indexOf("dd")]));
        };
        /**
         * make sure to return the same date object instance (cannot delete date #83)
         */
        JsonSchemaFormComponent.prototype.sameDate = function (nd) {
            if (!this.date) {
                this.date = nd;
            }
            if (this.date.getTime() !== nd.getTime()) {
                this.date = nd;
            }
            return this.date;
        };
        /**
         * date to string
         * @param date    the date to serialize
         * @param format  the date format (e.g. dd-MM-yyyy)
         * @param type    target datatype (allows serializing to millisecs since 1970)
         */
        JsonSchemaFormComponent.prototype.serializeDate = function (date, format, type) {
            if (date == null) {
                return "";
            }
            if (type === "integer" || type === "number") {
                return "" + date.valueOf();
            }
            if (!format) {
                return date.toISOString();
            }
            var pformat = format.split(this.getDelimiter(format));
            var pdate = [null, null, null];
            pdate[pformat.indexOf("yyyy")] = date.getFullYear();
            pdate[pformat.indexOf("MM")] = date.getMonth() + 1;
            pdate[pformat.indexOf("dd")] = date.getDate();
            return (pdate[0] +
                this.getDelimiter(format) +
                pdate[1] +
                this.getDelimiter(format) +
                pdate[2]);
        };
        /**
         * find the first non letter character in a date format such as dd/MM/yyyy (returns /)
         */
        JsonSchemaFormComponent.prototype.getDelimiter = function (format) {
            var delim = format.match(/\W/g);
            if (!delim[0]) {
                throw new Error("No delimiter found in date format: " + format);
            }
            return delim[0];
        };
        /**
         * new chip entered
         */
        JsonSchemaFormComponent.prototype.addChip = function (event) {
            var input = event.input;
            var value = event.value;
            // Add our fruit
            if ((value || "").trim()) {
                if (!this.value) {
                    this.value = [];
                }
                this.value.push(value.trim());
                this.emit(this.value);
            }
            // Reset the input value
            if (input) {
                input.value = "";
            }
        };
        /**
         * remove a chip
         */
        JsonSchemaFormComponent.prototype.removeChip = function (v) {
            var index = this.value.indexOf(v);
            if (index >= 0) {
                this.value.splice(index, 1);
                if (this.value.length === 0) {
                    this.value = null;
                }
                this.emit(this.value);
            }
        };
        /**
         * chips d&d handler
         */
        JsonSchemaFormComponent.prototype.dropChip = function (event) {
            i18.moveItemInArray(this.value, event.previousIndex, event.currentIndex);
            this.emit(this.value);
        };
        return JsonSchemaFormComponent;
    }());
    JsonSchemaFormComponent.ɵfac = function JsonSchemaFormComponent_Factory(t) { return new (t || JsonSchemaFormComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(JsonSchemaFormService), i0.ɵɵdirectiveInject(i1$1.MatDialog)); };
    JsonSchemaFormComponent.ɵcmp = i0.ɵɵdefineComponent({ type: JsonSchemaFormComponent, selectors: [["lib-json-schema-form"]], viewQuery: function JsonSchemaFormComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0, 1);
                i0.ɵɵviewQuery(WidgetDirective, 3);
                i0.ɵɵviewQuery(_c1, 1);
            }
            if (rf & 2) {
                var _t = void 0;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.child = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.widgetHost = _t.first);
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.children = _t);
            }
        }, inputs: { name: "name", label: "label", value: "value", rootValue: "rootValue", schema: "schema", parentSchema: "parentSchema", rootSchema: "rootSchema", base: "base", switch: "switch", hideUndefined: "hideUndefined", inExpansion: "inExpansion", inArray: "inArray", required: "required" }, outputs: { valueChange: "valueChange", errorChange: "errorChange", schemaChange: "schemaChange" }, features: [i0.ɵɵNgOnChangesFeature], decls: 3, vars: 2, consts: [[3, "ngStyle", "ngClass", "expanded", 4, "ngIf"], [3, "matTooltip", 4, "ngIf"], ["libWidgetHost", ""], [3, "ngStyle", "ngClass", "expanded"], [3, "label", "name", "value", "switch", "rootValue", "rootSchema", "schema", "inExpansion", "base", "valueChange", "schemaChange"], ["child", ""], [3, "matTooltip"], [4, "ngIf"], [3, "fxLayout", "ngStyle", "ngClass", 4, "ngIf"], ["animationDuration", "0ms", "style", "max-width: 96vw", 3, "ngStyle", "ngClass", 4, "ngIf"], [3, "ngStyle", "ngClass", 4, "ngIf"], ["style", "margin: 6px; margin-top: 12px;", 3, "ngStyle", "ngClass", 4, "ngIf"], [2, "cursor", "pointer", 3, "matMenuTriggerFor", "matTooltip"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "disabled", "click"], ["madd", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["madd2", "matMenu"], [3, "fxLayout", "ngStyle", "ngClass"], [3, "fxLayout", 4, "ngFor", "ngForOf"], ["style", "margin-right: 20px;", 4, "ngIf"], [3, "fxLayout"], ["style", "display: flex; margin: 2px", 4, "ngFor", "ngForOf"], [2, "display", "flex", "margin", "2px"], [3, "name", "label", "value", "switch", "rootValue", "rootSchema", "schema", "parentSchema", "required", "hideUndefined", "base", "valueChange", "schemaChange"], ["children", ""], [2, "margin-right", "20px"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [4, "ngFor", "ngForOf"], [3, "disabled", "checked", "change"], ["style", "display: flex; margin: 2px; position: relative", 3, "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "matTooltip", "click", 4, "ngIf"], [2, "display", "flex", "margin", "2px", "position", "relative", 3, "mouseenter", "mouseleave"], ["autocomplete", "off", "matInput", "", 3, "disabled", "value", "change"], ["inArray", "true", 3, "label", "value", "rootValue", "rootSchema", "schema", "base", "valueChange", "schemaChange"], ["mat-icon-button", "", "class", "example-handle", 3, "matTooltip", "click", 4, "ngIf"], ["mat-icon-button", "", 1, "example-handle", 3, "matTooltip", "click"], ["mat-icon-button", "", 3, "matTooltip", "click"], ["animationDuration", "0ms", 2, "max-width", "96vw", 3, "ngStyle", "ngClass"], ["style", "margin: 2px; position: relative", 4, "ngFor", "ngForOf"], [2, "margin", "2px", "position", "relative"], ["mat-tab-label", ""], ["inArray", "true", 3, "value", "rootValue", "rootSchema", "schema", "base", "valueChange", "schemaChange"], ["autocomplete", "off", "matInput", "", 3, "value", "change"], [3, "ngStyle", "ngClass"], ["aria-label", "Fruit selection", "cdkDropList", "", "cdkDropListOrientation", "horizontal", 3, "cdkDropListDropped"], ["chipList", ""], ["cdkDrag", "", 3, "removable", "removed", 4, "ngFor", "ngForOf"], ["autocomplete", "off", 3, "placeholder", "matChipInputFor", "matChipInputSeparatorKeyCodes", "disabled", "matChipInputTokenEnd"], ["cdkDrag", "", 3, "removable", "removed"], ["matChipRemove", ""], ["style", "margin: 2px; position: relative", 3, "label", 4, "ngFor", "ngForOf"], [2, "margin", "2px", "position", "relative", 3, "label"], ["summary", "Properties table"], ["scope", "col", 4, "ngFor", "ngForOf"], ["id", "remove_row"], ["scope", "col"], [3, "value", "rootValue", "rootSchema", "schema", "base", "valueChange", "schemaChange"], [3, "value", "disabled", "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "error", "mat-typography"], [3, "value"], [3, "matTooltip", "ngStyle", "ngClass"], ["multiple", "", 3, "value", "disabled", "focus", "selectionChange"], [3, "value", "matTooltip", 4, "ngFor", "ngForOf"], [3, "value", "matTooltip"], ["autocomplete", "off", "matInput", "", 2, "width", "100%", 3, "value", "matDatepicker", "disabled", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [2, "margin", "6px", "margin-top", "12px", 3, "ngStyle", "ngClass"], [3, "checked", "disabled", "change"], [3, "value", "disabled", "focus", "selectionChange"], ["type", "text", "matInput", "", 3, "formControl", "matAutocomplete", "focus"], ["auto", "matAutocomplete"], ["autocomplete", "off", "matInput", "", 3, "disabled", "placeholder", "type", "value", "input", "focus", 4, "ngIf"], ["autocomplete", "off", "matInput", "", 3, "disabled", "placeholder", "type", "value", "change", 4, "ngIf"], ["autocomplete", "off", "matInput", "", 3, "disabled", "placeholder", "type", "value", "input", "focus"], ["autocomplete", "off", "matInput", "", 3, "disabled", "placeholder", "type", "value", "change"], ["matInput", "", 3, "disabled", "placeholder", "value", "ngStyle", "ngClass", "input", 4, "ngIf"], ["matInput", "", 3, "disabled", "placeholder", "value", "ngStyle", "ngClass", "change", 4, "ngIf"], ["matInput", "", 3, "disabled", "placeholder", "value", "ngStyle", "ngClass", "input"], ["matInput", "", 3, "disabled", "placeholder", "value", "ngStyle", "ngClass", "change"], ["type", "file", "id", "file", 3, "ngStyle", "ngClass", "disabled", "change"]], template: function JsonSchemaFormComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, JsonSchemaFormComponent_mat_expansion_panel_0_Template, 8, 14, "mat-expansion-panel", 0);
                i0.ɵɵtemplate(1, JsonSchemaFormComponent_div_1_Template, 17, 17, "div", 1);
                i0.ɵɵtemplate(2, JsonSchemaFormComponent_ng_template_2_Template, 0, 0, "ng-template", 2);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", (ctx.schema.expanded === true || ctx.schema.expanded === false) && !ctx.inExpansion);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.schema.expanded === null || ctx.schema.expanded === undefined || ctx.inExpansion);
            }
        }, directives: [i4.NgIf, WidgetDirective, i6.MatExpansionPanel, i7.DefaultStyleDirective, i4.NgStyle, i7.DefaultClassDirective, i4.NgClass, i6.MatExpansionPanelHeader, i6.MatExpansionPanelTitle, i6.MatExpansionPanelDescription, JsonSchemaFormComponent, i8.MatTooltip, i9.MatIcon, i10.MatMenuTrigger, i10.MatMenu, i10.MatMenuItem, i4.NgForOf, i11.DefaultLayoutDirective, i12.MatButton, i13.MatCheckbox, i14.MatFormField, i14.MatLabel, i15.MatInput, i16.MatTabGroup, i16.MatTab, i16.MatTabLabel, i17.MatChipList, i18.CdkDropList, i17.MatChipInput, i17.MatChip, i18.CdkDrag, i17.MatChipRemove, i19.MatSelect, i20.MatOption, i21.MatDatepickerInput, i21.MatDatepickerToggle, i14.MatSuffix, i21.MatDatepicker, i22.DefaultValueAccessor, i23.MatAutocompleteTrigger, i22.NgControlStatus, i22.FormControlDirective, i23.MatAutocomplete], pipes: [i4.KeyValuePipe, i4.AsyncPipe], styles: [".example-handle[_ngcontent-%COMP%]{position:absolute;z-index:9;top:0;right:0}.error[_ngcontent-%COMP%]{font-size:small;color:red;position:relative;top:-18px}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonSchemaFormComponent, [{
                type: i0.Component,
                args: [{
                        selector: "lib-json-schema-form",
                        templateUrl: "./json-schema-form.component.html",
                        styleUrls: ["./json-schema-form.component.css"],
                    }]
            }], function () { return [{ type: i1.HttpClient }, { type: i0.ComponentFactoryResolver }, { type: JsonSchemaFormService }, { type: i1$1.MatDialog }]; }, { children: [{
                    type: i0.ViewChildren,
                    args: ["children"]
                }], child: [{
                    type: i0.ViewChild,
                    args: ["child"]
                }], name: [{
                    type: i0.Input
                }], label: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], rootValue: [{
                    type: i0.Input
                }], valueChange: [{
                    type: i0.Output
                }], errorChange: [{
                    type: i0.Output
                }], schemaChange: [{
                    type: i0.Output
                }], schema: [{
                    type: i0.Input
                }], parentSchema: [{
                    type: i0.Input
                }], rootSchema: [{
                    type: i0.Input
                }], base: [{
                    type: i0.Input
                }], switch: [{
                    type: i0.Input
                }], hideUndefined: [{
                    type: i0.Input
                }], inExpansion: [{
                    type: i0.Input
                }], inArray: [{
                    type: i0.Input
                }], required: [{
                    type: i0.Input
                }], widgetHost: [{
                    type: i0.ViewChild,
                    args: [WidgetDirective, { static: true }]
                }] });
    })();

    var JsonSchemaFormModule = /** @class */ (function () {
        function JsonSchemaFormModule() {
        }
        return JsonSchemaFormModule;
    }());
    JsonSchemaFormModule.ɵfac = function JsonSchemaFormModule_Factory(t) { return new (t || JsonSchemaFormModule)(); };
    JsonSchemaFormModule.ɵmod = i0.ɵɵdefineNgModule({ type: JsonSchemaFormModule });
    JsonSchemaFormModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
            // turn off tooltip gestures on mobile: https://github.com/angular/components/issues/4892
            { provide: i8.MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: { touchGestures: 'off' } }
        ], imports: [[
                card.MatCardModule,
                flexLayout.FlexLayoutModule,
                i9.MatIconModule,
                i8.MatTooltipModule,
                table.MatTableModule,
                i16.MatTabsModule,
                i14.MatFormFieldModule,
                i19.MatSelectModule,
                i21.MatDatepickerModule,
                i13.MatCheckboxModule,
                i23.MatAutocompleteModule,
                i1.HttpClientModule,
                i4.CommonModule,
                i15.MatInputModule,
                i20.MatNativeDateModule,
                i12.MatButtonModule,
                i6.MatExpansionModule,
                i10.MatMenuModule,
                i22.ReactiveFormsModule,
                i1$1.MatDialogModule,
                i17.MatChipsModule,
                i18.DragDropModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(JsonSchemaFormModule, { declarations: [JsonSchemaFormComponent, EditElementDialogComponent, WidgetDirective], imports: [card.MatCardModule,
                flexLayout.FlexLayoutModule,
                i9.MatIconModule,
                i8.MatTooltipModule,
                table.MatTableModule,
                i16.MatTabsModule,
                i14.MatFormFieldModule,
                i19.MatSelectModule,
                i21.MatDatepickerModule,
                i13.MatCheckboxModule,
                i23.MatAutocompleteModule,
                i1.HttpClientModule,
                i4.CommonModule,
                i15.MatInputModule,
                i20.MatNativeDateModule,
                i12.MatButtonModule,
                i6.MatExpansionModule,
                i10.MatMenuModule,
                i22.ReactiveFormsModule,
                i1$1.MatDialogModule,
                i17.MatChipsModule,
                i18.DragDropModule], exports: [JsonSchemaFormComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(JsonSchemaFormModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [JsonSchemaFormComponent, EditElementDialogComponent, WidgetDirective],
                        imports: [
                            card.MatCardModule,
                            flexLayout.FlexLayoutModule,
                            i9.MatIconModule,
                            i8.MatTooltipModule,
                            table.MatTableModule,
                            i16.MatTabsModule,
                            i14.MatFormFieldModule,
                            i19.MatSelectModule,
                            i21.MatDatepickerModule,
                            i13.MatCheckboxModule,
                            i23.MatAutocompleteModule,
                            i1.HttpClientModule,
                            i4.CommonModule,
                            i15.MatInputModule,
                            i20.MatNativeDateModule,
                            i12.MatButtonModule,
                            i6.MatExpansionModule,
                            i10.MatMenuModule,
                            i22.ReactiveFormsModule,
                            i1$1.MatDialogModule,
                            i17.MatChipsModule,
                            i18.DragDropModule
                        ],
                        exports: [JsonSchemaFormComponent],
                        providers: [
                            // turn off tooltip gestures on mobile: https://github.com/angular/components/issues/4892
                            { provide: i8.MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: { touchGestures: 'off' } }
                        ]
                    }]
            }], null, null);
    })();
    i0.ɵɵsetComponentScope(EditElementDialogComponent, [i1$1.MatDialogContent, JsonSchemaFormComponent, i1$1.MatDialogActions, i12.MatButton, i1$1.MatDialogClose], []);

    /*
     * Public API Surface of json-schema-form
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DefaultChoiceHandler = DefaultChoiceHandler;
    exports.JsonSchemaFormComponent = JsonSchemaFormComponent;
    exports.JsonSchemaFormModule = JsonSchemaFormModule;
    exports.JsonSchemaFormService = JsonSchemaFormService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dashjoin-json-schema-form.umd.js.map
