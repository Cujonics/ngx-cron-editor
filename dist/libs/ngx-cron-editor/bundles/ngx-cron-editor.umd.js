(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/material/form-field'), require('@angular/material/select'), require('@angular/material/core'), require('@angular/material/tabs'), require('@angular/material/radio'), require('@angular/material/checkbox'), require('@angular/material/input'), require('@angular/material/list')) :
    typeof define === 'function' && define.amd ? define('ngx-cron-editor', ['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/material/form-field', '@angular/material/select', '@angular/material/core', '@angular/material/tabs', '@angular/material/radio', '@angular/material/checkbox', '@angular/material/input', '@angular/material/list'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-cron-editor'] = {}, global.ng.core, global.ng.forms, global.ng.common, global.ng.material.formField, global.ng.material.select, global.ng.material.core, global.ng.material.tabs, global.ng.material.radio, global.ng.material.checkbox, global.ng.material.input, global.ng.material.list));
}(this, (function (exports, i0, i1, i3, i3$1, i4, i5, i2, i5$1, i9, i10, list) { 'use strict';

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
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || from);
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

    function TimePickerComponent_ng_container_1_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var hour_r5 = ctx.$implicit;
            i0.ɵɵproperty("value", hour_r5);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(hour_r5);
        }
    }
    function TimePickerComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "mat-form-field");
            i0.ɵɵelementStart(2, "mat-label");
            i0.ɵɵtext(3, "Hour(s)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "mat-select", 2);
            i0.ɵɵtemplate(5, TimePickerComponent_ng_container_1_mat_option_5_Template, 2, 2, "mat-option", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r0.hours);
        }
    }
    function TimePickerComponent_ng_container_2_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 7);
            i0.ɵɵtext(1, ":");
            i0.ɵɵelementEnd();
        }
    }
    function TimePickerComponent_ng_container_2_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var minute_r8 = ctx.$implicit;
            i0.ɵɵproperty("value", minute_r8);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(minute_r8 >= 0 && minute_r8 <= 9 ? "0" + minute_r8 : minute_r8);
        }
    }
    function TimePickerComponent_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, TimePickerComponent_ng_container_2_span_1_Template, 2, 0, "span", 5);
            i0.ɵɵelementStart(2, "mat-form-field");
            i0.ɵɵelementStart(3, "mat-label");
            i0.ɵɵtext(4, "Minute(s)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-select", 6);
            i0.ɵɵtemplate(6, TimePickerComponent_ng_container_2_mat_option_6_Template, 2, 2, "mat-option", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r1.hideHours);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r1.minutes);
        }
    }
    function TimePickerComponent_ng_container_3_span_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, ":");
            i0.ɵɵelementEnd();
        }
    }
    function TimePickerComponent_ng_container_3_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var second_r11 = ctx.$implicit;
            i0.ɵɵproperty("value", second_r11);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(second_r11 >= 0 && second_r11 <= 9 ? "0" + second_r11 : second_r11);
        }
    }
    function TimePickerComponent_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, TimePickerComponent_ng_container_3_span_1_Template, 2, 0, "span", 1);
            i0.ɵɵelementStart(2, "mat-form-field");
            i0.ɵɵelementStart(3, "mat-label");
            i0.ɵɵtext(4, "Second(s)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "mat-select", 8);
            i0.ɵɵtemplate(6, TimePickerComponent_ng_container_3_mat_option_6_Template, 2, 2, "mat-option", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r2.hideMinutes);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r2.seconds);
        }
    }
    function TimePickerComponent_ng_container_4_mat_option_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var hourType_r13 = ctx.$implicit;
            i0.ɵɵproperty("value", hourType_r13);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(hourType_r13);
        }
    }
    function TimePickerComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-form-field");
            i0.ɵɵelementStart(4, "mat-select", 9);
            i0.ɵɵtemplate(5, TimePickerComponent_ng_container_4_mat_option_5_Template, 2, 2, "mat-option", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(" ");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx_r3.hourTypes);
        }
    }
    function range(start, end) {
        var i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = start;
                    _a.label = 1;
                case 1:
                    if (!(i <= end)) return [3 /*break*/, 4];
                    return [4 /*yield*/, i];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3:
                    i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    }
    var TimePickerComponent = /** @class */ (function () {
        function TimePickerComponent(parent) {
            this.parent = parent;
            this.use24HourTime = true;
            this.hideHours = false;
            this.hideMinutes = false;
            this.hideSeconds = true;
            this.minutes = __spread(range(0, 59));
            this.seconds = __spread(range(0, 59));
            this.hourTypes = ['AM', 'PM'];
        }
        Object.defineProperty(TimePickerComponent.prototype, "hours", {
            get: function () {
                return this.use24HourTime ? __spread(range(0, 23)) : __spread(range(0, 12));
            },
            enumerable: false,
            configurable: true
        });
        return TimePickerComponent;
    }());
    TimePickerComponent.ɵfac = function TimePickerComponent_Factory(t) { return new (t || TimePickerComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer)); };
    TimePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimePickerComponent, selectors: [["cron-time-picker"]], inputs: { disabled: "disabled", use24HourTime: "use24HourTime", hideHours: "hideHours", hideMinutes: "hideMinutes", hideSeconds: "hideSeconds" }, features: [i0.ɵɵProvidersFeature([])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "hours"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "separator", 4, "ngIf"], ["formControlName", "minutes"], [1, "separator"], ["formControlName", "seconds"], ["formControlName", "hourType"]], template: function TimePickerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "span", 0);
                i0.ɵɵtemplate(1, TimePickerComponent_ng_container_1_Template, 6, 1, "ng-container", 1);
                i0.ɵɵtemplate(2, TimePickerComponent_ng_container_2_Template, 7, 2, "ng-container", 1);
                i0.ɵɵtemplate(3, TimePickerComponent_ng_container_3_Template, 7, 2, "ng-container", 1);
                i0.ɵɵtemplate(4, TimePickerComponent_ng_container_4_Template, 6, 2, "ng-container", 1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.parent.control);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.hideHours);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.hideMinutes);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.hideSeconds);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !ctx.use24HourTime);
            }
        }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i3.NgIf, i3$1.MatFormField, i3$1.MatLabel, i4.MatSelect, i1.NgControlStatus, i1.FormControlName, i3.NgForOf, i5.MatOption], styles: [".cron-editor-main[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);width:100%}.cron-editor-tab-content[_ngcontent-%COMP%]{border-radius:8px;height:200px;margin-right:10px;margin-top:10px;max-width:700px;overflow:hidden}.cron-editor-tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.cron-editor-tab-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{font-size:20px;margin:10px 10px 5px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}.hourly-content[_ngcontent-%COMP%]   .cron-form-label[_ngcontent-%COMP%], .hourly-content[_ngcontent-%COMP%]   cron-time-picker[_ngcontent-%COMP%], .minutes-content[_ngcontent-%COMP%]   .cron-form-label[_ngcontent-%COMP%], .minutes-content[_ngcontent-%COMP%]   cron-time-picker[_ngcontent-%COMP%]{display:inline}.cron-form-label[_ngcontent-%COMP%]{font-weight:500;margin-left:5px;margin-right:5px}.separator[_ngcontent-%COMP%]{font-size:20px;font-weight:500;margin-left:3px;margin-right:3px}.frequency-group[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]     .mat-tab-body-content{padding-left:10px}[_nghost-%COMP%]     .mat-tab-label-container{display:flex;justify-content:space-evenly}[_nghost-%COMP%]     .mat-tab-labels{justify-content:space-around}[_nghost-%COMP%]     .mat-tab-label{min-width:100px}[_nghost-%COMP%]     .mat-radio-container{display:inline-flex}[_nghost-%COMP%]     .mat-radio-label-content{align-items:baseline;display:inline-flex;padding-top:10px}[_nghost-%COMP%]     mat-radio-button{max-width:100%;overflow:hidden;padding-left:10px}[_nghost-%COMP%]     mat-radio-button:not(.mat-radio-checked){opacity:.4}[_nghost-%COMP%]     .monthly-content .mat-form-field, [_nghost-%COMP%]     .yearly-content .mat-form-field{max-width:90px}[_nghost-%COMP%]     .monthly-content .weekday-picker, [_nghost-%COMP%]     .yearly-content .weekday-picker{margin-left:5px}[_nghost-%COMP%]     .monthly-content .month-picker, [_nghost-%COMP%]     .monthly-content .weekday-picker, [_nghost-%COMP%]     .yearly-content .month-picker, [_nghost-%COMP%]     .yearly-content .weekday-picker{max-width:125px}[_nghost-%COMP%]     .daily-content .mat-form-field, [_nghost-%COMP%]     .weekly-content .mat-form-field, [_nghost-%COMP%]     .yearly-content .mat-form-field{max-width:100px}[_nghost-%COMP%]     .daily-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .monthly-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .weekly-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .yearly-content cron-time-picker .mat-form-field{max-width:75px}[_nghost-%COMP%]     .cron-editor-wrapped-radio{margin-bottom:10px;max-width:95%}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-form-field-wrapper{padding-bottom:.5em}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-radio-label-content{flex-wrap:wrap}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-radio-container{bottom:6px;position:relative}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimePickerComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'cron-time-picker',
                        templateUrl: './cron-time-picker.template.html',
                        styleUrls: ['./cron-editor.component.scss'],
                        providers: []
                    }]
            }], function () { return [{ type: i1.ControlContainer }]; }, { disabled: [{
                    type: i0.Input
                }], use24HourTime: [{
                    type: i0.Input
                }], hideHours: [{
                    type: i0.Input
                }], hideMinutes: [{
                    type: i0.Input
                }], hideSeconds: [{
                    type: i0.Input
                }] });
    })();

    var Days = {
        'SUN': 'Sunday',
        'MON': 'Monday',
        'TUE': 'Tuesday',
        'WED': 'Wednesday',
        'THU': 'Thursday',
        'FRI': 'Friday',
        'SAT': 'Saturday'
    };
    var MonthWeeks = {
        '#1': 'First',
        '#2': 'Second',
        '#3': 'Third',
        '#4': 'Fourth',
        '#5': 'Fifth',
        'L': 'Last'
    };
    (function (Months) {
        Months[Months["January"] = 1] = "January";
        Months[Months["February"] = 2] = "February";
        Months[Months["March"] = 3] = "March";
        Months[Months["April"] = 4] = "April";
        Months[Months["May"] = 5] = "May";
        Months[Months["June"] = 6] = "June";
        Months[Months["July"] = 7] = "July";
        Months[Months["August"] = 8] = "August";
        Months[Months["September"] = 9] = "September";
        Months[Months["October"] = 10] = "October";
        Months[Months["November"] = 11] = "November";
        Months[Months["December"] = 12] = "December";
    })(exports.Months || (exports.Months = {}));

    function CronGenComponent_mat_tab_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab", 9);
            i0.ɵɵelementStart(1, "div", 10);
            i0.ɵɵelementStart(2, "p", 11);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "cron-time-picker", 12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate((ctx_r0.options == null ? null : ctx_r0.options.texts == null ? null : ctx_r0.options.texts.frequencyPrefix) || "Every");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx_r0.minutesForm)("use24HourTime", true)("hideHours", true)("hideSeconds", (ctx_r0.options == null ? null : ctx_r0.options.hideSeconds) || !ctx_r0.isCronFlavorQuartz);
        }
    }
    function CronGenComponent_mat_tab_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab", 13);
            i0.ɵɵelementStart(1, "div", 14);
            i0.ɵɵelementStart(2, "p", 11);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "cron-time-picker", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate((ctx_r1.options == null ? null : ctx_r1.options.texts == null ? null : ctx_r1.options.texts.frequencyPrefix) || "Every");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx_r1.hourlyForm)("use24HourTime", ctx_r1.options == null ? null : ctx_r1.options.use24HourTime)("hideSeconds", (ctx_r1.options == null ? null : ctx_r1.options.hideSeconds) || !ctx_r1.isCronFlavorQuartz);
        }
    }
    function CronGenComponent_mat_tab_4_mat_option_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthDay_r8 = ctx.$implicit;
            var ctx_r7 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", monthDay_r8);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2(" ", monthDay_r8, " ", ctx_r7.hideSelectSuffixes ? "" : "day(s)", " ");
        }
    }
    function CronGenComponent_mat_tab_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab", 16);
            i0.ɵɵelementStart(1, "div", 17);
            i0.ɵɵelementStart(2, "mat-radio-group", 18);
            i0.ɵɵelementStart(3, "mat-radio-button", 19);
            i0.ɵɵelementStart(4, "p", 11);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-form-field", 20);
            i0.ɵɵelementStart(7, "mat-label");
            i0.ɵɵtext(8, "Day(s)");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-select", 21);
            i0.ɵɵtemplate(10, CronGenComponent_mat_tab_4_mat_option_10_Template, 2, 3, "mat-option", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "p", 11);
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(13, "cron-time-picker", 23);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-radio-button", 24);
            i0.ɵɵelementStart(15, "p", 11);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "cron-time-picker", 25);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx_r2.dailyForm);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", (ctx_r2.options == null ? null : ctx_r2.options.formRadioClass) || "cron-editor-radio-button frequency-group");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", (ctx_r2.options == null ? null : ctx_r2.options.texts == null ? null : ctx_r2.options.texts.frequencyPrefix) || "Every", " ");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r2.selectOptions.monthDays);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", (ctx_r2.options == null ? null : ctx_r2.options.texts == null ? null : ctx_r2.options.texts.timePrefix) || "at", " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("use24HourTime", ctx_r2.options == null ? null : ctx_r2.options.use24HourTime)("hideSeconds", (ctx_r2.options == null ? null : ctx_r2.options.hideSeconds) || !ctx_r2.isCronFlavorQuartz);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", (ctx_r2.options == null ? null : ctx_r2.options.formRadioClass) || "cron-editor-radio-button frequency-group");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", (ctx_r2.options == null ? null : ctx_r2.options.texts == null ? null : ctx_r2.options.texts.weekDayPrefix) || "Every working day at", " ");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("use24HourTime", ctx_r2.options == null ? null : ctx_r2.options.use24HourTime)("hideSeconds", (ctx_r2.options == null ? null : ctx_r2.options.hideSeconds) || !ctx_r2.isCronFlavorQuartz);
        }
    }
    function CronGenComponent_mat_tab_5_mat_checkbox_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-checkbox", 32);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r10 = ctx.$implicit;
            var ctx_r9 = i0.ɵɵnextContext(2);
            i0.ɵɵpropertyInterpolate("formControlName", day_r10.substr(0, 3).toUpperCase());
            i0.ɵɵproperty("ngClass", (ctx_r9.options == null ? null : ctx_r9.options.formCheckboxClass) || "checkbox-margin");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", day_r10, " ");
        }
    }
    function CronGenComponent_mat_tab_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab", 27);
            i0.ɵɵelementStart(1, "div", 28);
            i0.ɵɵelementStart(2, "h2", 11);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 29);
            i0.ɵɵtemplate(5, CronGenComponent_mat_tab_5_mat_checkbox_5_Template, 2, 3, "mat-checkbox", 30);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "hr");
            i0.ɵɵelementStart(7, "h2", 31);
            i0.ɵɵtext(8);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(9, "cron-time-picker", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r3 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate((ctx_r3.options == null ? null : ctx_r3.options.texts == null ? null : ctx_r3.options.texts.weeklyDayTitle) || "Day(s)");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx_r3.weeklyForm);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r3.weekdays);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate((ctx_r3.options == null ? null : ctx_r3.options.texts == null ? null : ctx_r3.options.texts.weeklyTimeTitle) || "Time");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx_r3.weeklyForm)("use24HourTime", ctx_r3.options == null ? null : ctx_r3.options.use24HourTime)("hideSeconds", (ctx_r3.options == null ? null : ctx_r3.options.hideSeconds) || !ctx_r3.isCronFlavorQuartz);
        }
    }
    function CronGenComponent_mat_tab_6_ng_container_10_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthDaysWithLast_r19 = ctx.$implicit;
            var ctx_r18 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("value", monthDaysWithLast_r19);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2(" ", ctx_r18.monthDayDisplay(monthDaysWithLast_r19), " ", ctx_r18.hideSelectSuffixes ? "" : "day", " ");
        }
    }
    function CronGenComponent_mat_tab_6_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, CronGenComponent_mat_tab_6_ng_container_10_mat_option_1_Template, 2, 3, "mat-option", 22);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r11 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r11.selectOptions.monthDaysWithLasts);
        }
    }
    function CronGenComponent_mat_tab_6_ng_container_11_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthDaysWithOutLast_r21 = ctx.$implicit;
            var ctx_r20 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("value", monthDaysWithOutLast_r21);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2(" ", ctx_r20.monthDayDisplay(monthDaysWithOutLast_r21), " ", ctx_r20.hideSelectSuffixes ? "" : "day", " ");
        }
    }
    function CronGenComponent_mat_tab_6_ng_container_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵtemplate(1, CronGenComponent_mat_tab_6_ng_container_11_mat_option_1_Template, 2, 3, "mat-option", 22);
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r12 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r12.selectOptions.monthDaysWithOutLasts);
        }
    }
    function CronGenComponent_mat_tab_6_mat_option_18_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var month_r22 = ctx.$implicit;
            var ctx_r13 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", month_r22);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2(" ", month_r22, " ", ctx_r13.hideSelectSuffixes ? "" : "month(s)", " ");
        }
    }
    function CronGenComponent_mat_tab_6_mat_checkbox_23_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-checkbox", 51);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r14 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngClass", (ctx_r14.options == null ? null : ctx_r14.options.formCheckboxClass) || "checkbox-margin");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", (ctx_r14.options == null ? null : ctx_r14.options.texts == null ? null : ctx_r14.options.texts.nearestWeekdayText) || "during the nearest weekday", " ");
        }
    }
    function CronGenComponent_mat_tab_6_mat_option_31_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthWeek_r23 = ctx.$implicit;
            var ctx_r15 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", monthWeek_r23);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r15.monthWeekDisplay(monthWeek_r23), " ");
        }
    }
    function CronGenComponent_mat_tab_6_mat_option_36_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r24 = ctx.$implicit;
            var ctx_r16 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", day_r24);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r16.dayDisplay(day_r24), " ");
        }
    }
    function CronGenComponent_mat_tab_6_mat_option_43_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var month_r25 = ctx.$implicit;
            var ctx_r17 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", month_r25);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2(" ", month_r25, " ", ctx_r17.hideSelectSuffixes ? "" : "month(s)", " ");
        }
    }
    function CronGenComponent_mat_tab_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab", 33);
            i0.ɵɵelementStart(1, "div", 34);
            i0.ɵɵelementStart(2, "mat-radio-group", 35);
            i0.ɵɵelementStart(3, "mat-radio-button", 36);
            i0.ɵɵelementStart(4, "p", 11);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "mat-form-field", 37);
            i0.ɵɵelementStart(7, "mat-label");
            i0.ɵɵtext(8, "Day");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-select", 38);
            i0.ɵɵtemplate(10, CronGenComponent_mat_tab_6_ng_container_10_Template, 2, 1, "ng-container", 39);
            i0.ɵɵtemplate(11, CronGenComponent_mat_tab_6_ng_container_11_Template, 2, 1, "ng-container", 39);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "p", 11);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(14, "mat-form-field", 40);
            i0.ɵɵelementStart(15, "mat-label");
            i0.ɵɵtext(16, "Month");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(17, "mat-select", 41);
            i0.ɵɵtemplate(18, CronGenComponent_mat_tab_6_mat_option_18_Template, 2, 3, "mat-option", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(19, "p", 11);
            i0.ɵɵtext(20);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(21, "cron-time-picker", 42);
            i0.ɵɵelementStart(22, "div", 43);
            i0.ɵɵtemplate(23, CronGenComponent_mat_tab_6_mat_checkbox_23_Template, 2, 2, "mat-checkbox", 44);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(24, "mat-radio-button", 45);
            i0.ɵɵelementStart(25, "p", 11);
            i0.ɵɵtext(26);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(27, "mat-form-field", 46);
            i0.ɵɵelementStart(28, "mat-label");
            i0.ɵɵtext(29, "Week");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(30, "mat-select", 47);
            i0.ɵɵtemplate(31, CronGenComponent_mat_tab_6_mat_option_31_Template, 2, 2, "mat-option", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(32, "mat-form-field", 48);
            i0.ɵɵelementStart(33, "mat-label");
            i0.ɵɵtext(34, "Day");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "mat-select", 49);
            i0.ɵɵtemplate(36, CronGenComponent_mat_tab_6_mat_option_36_Template, 2, 2, "mat-option", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(37, "p", 11);
            i0.ɵɵtext(38);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(39, "mat-form-field", 40);
            i0.ɵɵelementStart(40, "mat-label");
            i0.ɵɵtext(41, "Month");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(42, "mat-select", 50);
            i0.ɵɵtemplate(43, CronGenComponent_mat_tab_6_mat_option_43_Template, 2, 3, "mat-option", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(44, "p", 11);
            i0.ɵɵtext(45);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(46, "cron-time-picker", 15);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r4 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx_r4.monthlyForm);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", (ctx_r4.options == null ? null : ctx_r4.options.formRadioClass) || "cron-editor-radio-button frequency-group cron-editor-wrapped-radio");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((ctx_r4.options == null ? null : ctx_r4.options.texts == null ? null : ctx_r4.options.texts.specificDayPrefix) || "On the");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx_r4.isCronFlavorQuartz);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx_r4.isCronFlavorQuartz);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((ctx_r4.options == null ? null : ctx_r4.options.texts == null ? null : ctx_r4.options.texts.monthlyMonthPrefix) || "of every");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", (ctx_r4.options == null ? null : ctx_r4.options.formSelectClass) || "form-control cron-editor-input");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((ctx_r4.options == null ? null : ctx_r4.options.texts == null ? null : ctx_r4.options.texts.timePrefix) || "at");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx_r4.disabled)("formGroup", ctx_r4.monthlyForm.controls.specificDay)("use24HourTime", ctx_r4.options == null ? null : ctx_r4.options.use24HourTime)("hideSeconds", (ctx_r4.options == null ? null : ctx_r4.options.hideSeconds) || !ctx_r4.isCronFlavorQuartz);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx_r4.monthlyForm.controls.specificDay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !(ctx_r4.options == null ? null : ctx_r4.options.hideNearestWeekdayCheck));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", (ctx_r4.options == null ? null : ctx_r4.options.formRadioClass) || "cron-editor-radio-button frequency-group");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((ctx_r4.options == null ? null : ctx_r4.options.texts == null ? null : ctx_r4.options.texts.specificDayPrefix) || "On the");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", (ctx_r4.options == null ? null : ctx_r4.options.formSelectClass) || "form-control cron-editor-input");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.monthWeeks);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngClass", (ctx_r4.options == null ? null : ctx_r4.options.formSelectClass) || "form-control cron-editor-input");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.days);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((ctx_r4.options == null ? null : ctx_r4.options.texts == null ? null : ctx_r4.options.texts.monthlyMonthPrefix) || "of every");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((ctx_r4.options == null ? null : ctx_r4.options.texts == null ? null : ctx_r4.options.texts.timePrefix) || "at");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx_r4.monthlyForm.controls.specificWeekDay)("use24HourTime", ctx_r4.options == null ? null : ctx_r4.options.use24HourTime)("hideSeconds", (ctx_r4.options == null ? null : ctx_r4.options.hideSeconds) || !ctx_r4.isCronFlavorQuartz);
        }
    }
    function CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthDaysWithLast_r34 = ctx.$implicit;
            var ctx_r33 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("value", monthDaysWithLast_r34);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r33.monthDayDisplay(monthDaysWithLast_r34), " ");
        }
    }
    function CronGenComponent_mat_tab_7_mat_form_field_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 65);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Day");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-select", 38);
            i0.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r26 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx_r26.selectOptions.monthDaysWithLasts);
        }
    }
    function CronGenComponent_mat_tab_7_mat_form_field_7_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthDaysWithOutLast_r36 = ctx.$implicit;
            var ctx_r35 = i0.ɵɵnextContext(3);
            i0.ɵɵproperty("value", monthDaysWithOutLast_r36);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r35.monthDayDisplay(monthDaysWithOutLast_r36), " ");
        }
    }
    function CronGenComponent_mat_tab_7_mat_form_field_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-form-field", 66);
            i0.ɵɵelementStart(1, "mat-label");
            i0.ɵɵtext(2, "Day");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "mat-select", 38);
            i0.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r27 = i0.ɵɵnextContext(2);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngForOf", ctx_r27.selectOptions.monthDaysWithOutLasts);
        }
    }
    function CronGenComponent_mat_tab_7_mat_option_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var month_r37 = ctx.$implicit;
            var ctx_r28 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", month_r37);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r28.monthDisplay(month_r37), " ");
        }
    }
    function CronGenComponent_mat_tab_7_mat_checkbox_19_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-checkbox", 51);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r29 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("ngClass", (ctx_r29.options == null ? null : ctx_r29.options.formCheckboxClass) || "checkbox-margin");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", (ctx_r29.options == null ? null : ctx_r29.options.texts == null ? null : ctx_r29.options.texts.nearestWeekdayText) || "during the nearest weekday", " ");
        }
    }
    function CronGenComponent_mat_tab_7_mat_option_27_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var monthWeek_r38 = ctx.$implicit;
            var ctx_r30 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", monthWeek_r38);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r30.monthWeekDisplay(monthWeek_r38), " ");
        }
    }
    function CronGenComponent_mat_tab_7_mat_option_32_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var day_r39 = ctx.$implicit;
            var ctx_r31 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", day_r39);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r31.dayDisplay(day_r39), " ");
        }
    }
    function CronGenComponent_mat_tab_7_mat_option_39_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 26);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var month_r40 = ctx.$implicit;
            var ctx_r32 = i0.ɵɵnextContext(2);
            i0.ɵɵproperty("value", month_r40);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r32.monthDisplay(month_r40), " ");
        }
    }
    function CronGenComponent_mat_tab_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab", 52);
            i0.ɵɵelementStart(1, "div", 53);
            i0.ɵɵelementStart(2, "mat-radio-group", 35);
            i0.ɵɵelementStart(3, "mat-radio-button", 54);
            i0.ɵɵelementStart(4, "p", 11);
            i0.ɵɵtext(5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, CronGenComponent_mat_tab_7_mat_form_field_6_Template, 5, 1, "mat-form-field", 55);
            i0.ɵɵtemplate(7, CronGenComponent_mat_tab_7_mat_form_field_7_Template, 5, 1, "mat-form-field", 56);
            i0.ɵɵelementStart(8, "p", 11);
            i0.ɵɵtext(9);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(10, "mat-form-field", 57);
            i0.ɵɵelementStart(11, "mat-label");
            i0.ɵɵtext(12, "Month");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "mat-select", 58);
            i0.ɵɵtemplate(14, CronGenComponent_mat_tab_7_mat_option_14_Template, 2, 2, "mat-option", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "p", 11);
            i0.ɵɵtext(16);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(17, "cron-time-picker", 42);
            i0.ɵɵelementStart(18, "div", 43);
            i0.ɵɵtemplate(19, CronGenComponent_mat_tab_7_mat_checkbox_19_Template, 2, 2, "mat-checkbox", 44);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "mat-radio-button", 59);
            i0.ɵɵelementStart(21, "p", 11);
            i0.ɵɵtext(22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "mat-form-field", 60);
            i0.ɵɵelementStart(24, "mat-label");
            i0.ɵɵtext(25, "Week");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(26, "mat-select", 61);
            i0.ɵɵtemplate(27, CronGenComponent_mat_tab_7_mat_option_27_Template, 2, 2, "mat-option", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(28, "mat-form-field", 62);
            i0.ɵɵelementStart(29, "mat-label");
            i0.ɵɵtext(30, "Day");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(31, "mat-select", 63);
            i0.ɵɵtemplate(32, CronGenComponent_mat_tab_7_mat_option_32_Template, 2, 2, "mat-option", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(33, "p", 11);
            i0.ɵɵtext(34);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(35, "mat-form-field", 64);
            i0.ɵɵelementStart(36, "mat-label");
            i0.ɵɵtext(37, "Month");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(38, "mat-select", 58);
            i0.ɵɵtemplate(39, CronGenComponent_mat_tab_7_mat_option_39_Template, 2, 2, "mat-option", 22);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(40, "p", 11);
            i0.ɵɵtext(41);
            i0.ɵɵelementEnd();
            i0.ɵɵelement(42, "cron-time-picker", 42);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r5 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx_r5.yearlyForm);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngClass", (ctx_r5.options == null ? null : ctx_r5.options.formRadioClass) || "cron-editor-radio-button frequency-group cron-editor-wrapped-radio");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((ctx_r5.options == null ? null : ctx_r5.options.texts == null ? null : ctx_r5.options.texts.specificDayPrefix) || "On the");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx_r5.options == null ? null : ctx_r5.options.cronFlavor) === "quartz");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", (ctx_r5.options == null ? null : ctx_r5.options.cronFlavor) === "standard");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((ctx_r5.options == null ? null : ctx_r5.options.texts == null ? null : ctx_r5.options.texts.yearlyMonthPrefix) || "of");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((ctx_r5.options == null ? null : ctx_r5.options.texts == null ? null : ctx_r5.options.texts.timePrefix) || "at");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthDay)("use24HourTime", ctx_r5.options == null ? null : ctx_r5.options.use24HourTime)("hideSeconds", (ctx_r5.options == null ? null : ctx_r5.options.hideSeconds) || !ctx_r5.isCronFlavorQuartz);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx_r5.yearlyForm.controls.specificMonthDay);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !(ctx_r5.options == null ? null : ctx_r5.options.hideNearestWeekdayCheck));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", (ctx_r5.options == null ? null : ctx_r5.options.formRadioClass) || "cron-editor-radio-button frequency-group");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((ctx_r5.options == null ? null : ctx_r5.options.texts == null ? null : ctx_r5.options.texts.specificDayPrefix) || "On the");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.monthWeeks);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.days);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((ctx_r5.options == null ? null : ctx_r5.options.texts == null ? null : ctx_r5.options.texts.yearlyMonthPrefix) || "of");
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate((ctx_r5.options == null ? null : ctx_r5.options.texts == null ? null : ctx_r5.options.texts.timePrefix) || "at");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthWeek)("use24HourTime", ctx_r5.options == null ? null : ctx_r5.options.use24HourTime)("hideSeconds", (ctx_r5.options == null ? null : ctx_r5.options.hideSeconds) || !ctx_r5.isCronFlavorQuartz);
        }
    }
    function CronGenComponent_mat_tab_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-tab", 67);
            i0.ɵɵelementStart(1, "div", 68);
            i0.ɵɵelementStart(2, "mat-form-field");
            i0.ɵɵelementStart(3, "mat-label");
            i0.ɵɵtext(4, "Expression");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "input", 69);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r6 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("formGroup", ctx_r6.advancedForm);
        }
    }
    var CRON_VALUE_ACCESSOR = {
        provide: i1.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return CronGenComponent; }),
        multi: true,
    };
    var CronGenComponent = /** @class */ (function () {
        function CronGenComponent(fb) {
            this.fb = fb;
            this.selectOptions = this.getSelectOptions();
            this.weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            this._tabs = ['minutes', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'advanced'];
            this._minutesRegex = /\d+ 0\/\d+ \* 1\/1 \* [?*] \*/g;
            this._hourlyRegex = /\d+ \d+ \d+ 1\/\d+ \* [?*] \*/g;
            this._dailyEveryDayRegex = /\d+ \d+ \d+ 1\/\d+ \* [?*] \*/g;
            this._dailyEveryWeekDayRegex = /\d+ \d+ \d+ [?*] \* MON-FRI \*/g;
            this._weeklyRegex = /\d+ \d+ \d+ [?*] \* (MON|TUE|WED|THU|FRI|SAT|SUN)(,(MON|TUE|WED|THU|FRI|SAT|SUN))* \*/g;
            this._monthlySpecificDayRegex = /\d+ \d+ \d+ (\d+|L|LW|1W) 1\/\d+ [?*] \*/g;
            this._monthlySpecificWeekDayRegex = /\d+ \d+ \d+ [?*] 1\/\d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/g;
            this._yearlySpecificMonthDayRegex = /\d+ \d+ \d+ (\d+|L|LW|1W) \d+ [?*] \*/g;
            this._yearlySpecificMonthWeekRegex = /\d+ \d+ \d+ [?*] \d+ (MON|TUE|WED|THU|FRI|SAT|SUN)((#[1-5])|L) \*/g;
            this.localCron = '0 0 1/1 * *';
            /*
             * ControlValueAccessor
             */
            this.onChange = function (_) {
            };
            this.onTouched = function () {
            };
        }
        Object.defineProperty(CronGenComponent.prototype, "cron", {
            get: function () {
                return this.localCron;
            },
            set: function (value) {
                this.localCron = value;
                this.onChange(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "isCronFlavorQuartz", {
            get: function () {
                return this.options.cronFlavor === 'quartz';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "isCronFlavorStandard", {
            get: function () {
                return this.options.cronFlavor === 'standard';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "removeSeconds", {
            get: function () {
                return !!this.options.removeSeconds;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "hideSelectSuffixes", {
            get: function () {
                return !!this.options.hideSelectSuffixes;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "removeYears", {
            get: function () {
                return !!this.options.removeYears;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "yearDefaultChar", {
            get: function () {
                return this.options.cronFlavor === 'quartz' ? '*' : '';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "weekDayDefaultChar", {
            get: function () {
                return this.options.cronFlavor === 'quartz' ? '?' : '*';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "monthDayDefaultChar", {
            get: function () {
                return this.options.cronFlavor === 'quartz' ? '?' : '*';
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CronGenComponent.prototype, "radix", {
            get: function () {
                return 10;
            },
            enumerable: false,
            configurable: true
        });
        /* Update the cron output to that of the selected tab.
         * The cron output value is updated whenever a form is updated. To make it change in response to tab selection, we simply reset
         * the value of the form that goes into focus. */
        CronGenComponent.prototype.onTabFocus = function (idx) {
            try {
                var tabForm = this._tabs[idx] + 'Form';
                this[tabForm].setValue(this[tabForm].value);
            }
            catch (err) {
                throw (new Error("Invalid tab selected! Tab Index: " + idx));
            }
        };
        CronGenComponent.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var _b, defaultHours, defaultMinutes, defaultSeconds;
                var _this = this;
                return __generator(this, function (_c) {
                    this.state = this.getDefaultState();
                    this.handleModelChange(this.cron);
                    _b = __read(this.options.defaultTime.split(':').map(Number), 3), defaultHours = _b[0], defaultMinutes = _b[1], defaultSeconds = _b[2];
                    this.cronForm = new i1.FormControl('0 0 1/1 * *');
                    this.minutesForm = this.fb.group({
                        seconds: [0],
                        minutes: [1],
                    });
                    this.minutesForm.valueChanges.subscribe(function (value) { return _this.computeMinutesCron(value); });
                    this.hourlyForm = this.fb.group({
                        seconds: [0],
                        minutes: [0],
                        hours: [1]
                    });
                    this.hourlyForm.valueChanges.subscribe(function (value) { return _this.computeHourlyCron(value); });
                    this.dailyForm = this.fb.group({
                        subTab: ['everyDay'],
                        everyDay: this.fb.group({
                            seconds: [0],
                            minutes: [0],
                            hours: [this.getAmPmHour(1)],
                            hourType: [this.getHourType(0)],
                            days: [1]
                        }),
                        everyWeekDay: this.fb.group({
                            seconds: [0],
                            minutes: [0],
                            hours: [this.getAmPmHour(1)],
                            hourType: [this.getHourType(0)],
                            days: [0]
                        })
                    });
                    this.dailyForm.valueChanges.subscribe(function (value) { return _this.computeDailyCron(value); });
                    this.weeklyForm = this.fb.group({
                        seconds: [defaultSeconds],
                        minutes: [defaultMinutes],
                        hours: [this.getAmPmHour(defaultHours)],
                        hourType: [this.getHourType(defaultHours)],
                        MON: [true],
                        TUE: [false],
                        WED: [false],
                        THU: [false],
                        FRI: [false],
                        SAT: [false],
                        SUN: [false]
                    });
                    this.weeklyForm.valueChanges.subscribe(function (next) { return _this.computeWeeklyCron(next); });
                    this.monthlyForm = this.fb.group({
                        subTab: ['specificDay'],
                        specificDay: this.fb.group({
                            seconds: [defaultSeconds],
                            minutes: [defaultMinutes],
                            hours: [this.getAmPmHour(defaultHours)],
                            hourType: [this.getHourType(defaultHours)],
                            day: ['1'],
                            months: [1],
                            nearestWeekday: [false]
                        }),
                        specificWeekDay: this.fb.group({
                            seconds: [defaultSeconds],
                            minutes: [defaultMinutes],
                            hours: [this.getAmPmHour(defaultHours)],
                            hourType: [this.getHourType(defaultHours)],
                            day: ['MON'],
                            months: [1],
                            monthWeek: ['#1']
                        })
                    });
                    this.monthlyForm.valueChanges.subscribe(function (next) { return _this.computeMonthlyCron(next); });
                    this.yearlyForm = this.fb.group({
                        subTab: ['specificMonthDay'],
                        specificMonthDay: this.fb.group({
                            seconds: [defaultSeconds],
                            minutes: [defaultMinutes],
                            hours: [this.getAmPmHour(defaultHours)],
                            hourType: [this.getHourType(defaultHours)],
                            day: ['1'],
                            month: [1],
                            nearestWeekday: [false]
                        }),
                        specificMonthWeek: this.fb.group({
                            seconds: [defaultSeconds],
                            minutes: [defaultMinutes],
                            hours: [this.getAmPmHour(defaultHours)],
                            hourType: [this.getHourType(defaultHours)],
                            day: ['MON'],
                            month: [1],
                            monthWeek: ['#1']
                        })
                    });
                    this.yearlyForm.valueChanges.subscribe(function (next) { return _this.computeYearlyCron(next); });
                    this.advancedForm = this.fb.group({
                        expression: [this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *']
                    });
                    this.advancedForm.controls.expression.valueChanges.subscribe(function (next) { return _this.computeAdvancedExpression(next); });
                    return [2 /*return*/];
                });
            });
        };
        CronGenComponent.prototype.dayDisplay = function (day) {
            return Days[day];
        };
        CronGenComponent.prototype.monthWeekDisplay = function (monthWeekNumber) {
            return MonthWeeks[monthWeekNumber];
        };
        CronGenComponent.prototype.monthDisplay = function (month) {
            return exports.Months[month];
        };
        CronGenComponent.prototype.monthDayDisplay = function (month) {
            if (month === 'L') {
                return 'Last Day';
            }
            else if (month === 'LW') {
                return 'Last Weekday';
            }
            else if (month === '1W') {
                return 'First Weekday';
            }
            else {
                return "" + month + this.getOrdinalSuffix(month);
            }
        };
        CronGenComponent.prototype.writeValue = function (obj) {
            this.cron = obj;
        };
        CronGenComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        CronGenComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        CronGenComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        /* Unit Testing Functions Start
        *  We utilize these public functions, because you cannot test private functions
        */
        CronGenComponent.prototype._testComputeMinutesCron = function (state) {
            this.computeMinutesCron(state);
            return this.cron;
        };
        CronGenComponent.prototype._testComputeHourlyCron = function (state) {
            this.computeHourlyCron(state);
            return this.cron;
        };
        CronGenComponent.prototype._testComputeDailyCron = function (state) {
            this.computeDailyCron(state);
            return this.cron;
        };
        CronGenComponent.prototype._testComputeWeeklyCron = function (state) {
            this.computeWeeklyCron(state);
            return this.cron;
        };
        CronGenComponent.prototype._testComputeMonthlyCron = function (state) {
            this.computeMonthlyCron(state);
            return this.cron;
        };
        CronGenComponent.prototype._testComputeYearlyCron = function (state) {
            this.computeYearlyCron(state);
            return this.cron;
        };
        /* Unit Testing Functions End */
        CronGenComponent.prototype.hourToCron = function (hour, hourType) {
            if (this.options.use24HourTime) {
                return hour;
            }
            else {
                return hourType === 'AM' ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12);
            }
        };
        CronGenComponent.prototype.computeMinutesCron = function (state) {
            this.cron = ((this.isCronFlavorQuartz && !this.removeSeconds ? state.seconds : '') + " 0/" + state.minutes + " * 1/1 * " + this.weekDayDefaultChar + " " + (!this.removeYears ? this.yearDefaultChar : '')).trim();
            this.cronForm.setValue(this.cron);
        };
        CronGenComponent.prototype.computeHourlyCron = function (state) {
            this.cron = ((this.isCronFlavorQuartz && !this.removeSeconds ? state.seconds : '') + " " + state.minutes + " 0/" + state.hours + " 1/1 * " + this.weekDayDefaultChar + " " + (!this.removeYears ? this.yearDefaultChar : '')).trim();
            this.cronForm.setValue(this.cron);
        };
        CronGenComponent.prototype.computeDailyCron = function (state) {
            switch (state.subTab) {
                case 'everyDay':
                    this.cron = ((this.isCronFlavorQuartz && !this.removeSeconds ? state.everyDay.seconds : '') + " " + state.everyDay.minutes + " " + this.hourToCron(state.everyDay.hours, state.everyDay.hourType) + " 1/" + state.everyDay.days + " * " + this.weekDayDefaultChar + " " + (!this.removeYears ? this.yearDefaultChar : '')).trim();
                    break;
                case 'everyWeekDay':
                    this.cron = ((this.isCronFlavorQuartz && !this.removeSeconds ? state.everyWeekDay.seconds : '') + " " + state.everyWeekDay.minutes + " " + this.hourToCron(state.everyWeekDay.hours, state.everyWeekDay.hourType) + " " + this.monthDayDefaultChar + " * MON-FRI " + (!this.removeYears ? this.yearDefaultChar : '')).trim();
                    break;
                default:
                    throw new Error('Invalid cron daily subtab selection');
            }
            this.cronForm.setValue(this.cron);
        };
        CronGenComponent.prototype.computeWeeklyCron = function (state) {
            var days = this.selectOptions.days
                .reduce(function (acc, day) { return state[day] ? acc.concat([day]) : acc; }, [])
                .join(',');
            this.cron = ((this.isCronFlavorQuartz && !this.removeSeconds ? state.seconds : '') + " " + state.minutes + " " + this.hourToCron(state.hours, state.hourType) + " " + this.monthDayDefaultChar + " * " + days + " " + (!this.removeYears ? this.yearDefaultChar : '')).trim();
            this.cronForm.setValue(this.cron);
        };
        CronGenComponent.prototype.computeMonthlyCron = function (state) {
            var _a;
            switch (state.subTab) {
                case 'specificDay':
                    this.cron = ((this.isCronFlavorQuartz && !this.removeSeconds ? state.specificDay.seconds : '') + " " + state.specificDay.minutes + " " + this.hourToCron(state.specificDay.hours, state.specificDay.hourType) + " " + state.specificDay.day + (((_a = state.specificDay) === null || _a === void 0 ? void 0 : _a.nearestWeekday) ? 'W' : '') + " 1/" + state.specificDay.months + " " + this.weekDayDefaultChar + " " + (!this.removeYears ? this.yearDefaultChar : '')).trim();
                    break;
                case 'specificWeekDay':
                    this.cron = ((this.isCronFlavorQuartz && !this.removeSeconds ? state.specificWeekDay.seconds : '') + " " + state.specificWeekDay.minutes + " " + this.hourToCron(state.specificWeekDay.hours, state.specificWeekDay.hourType) + " " + this.monthDayDefaultChar + " 1/" + state.specificWeekDay.months + " " + state.specificWeekDay.day + state.specificWeekDay.monthWeek + " " + (!this.removeYears ? this.yearDefaultChar : '')).trim();
                    break;
                default:
                    throw new Error('Invalid cron monthly subtab selection');
            }
            this.cronForm.setValue(this.cron);
        };
        CronGenComponent.prototype.computeYearlyCron = function (state) {
            var _a;
            switch (state.subTab) {
                case 'specificMonthDay':
                    this.cron = ((this.isCronFlavorQuartz && !this.removeSeconds ? state.specificMonthDay.seconds : '') + " " + state.specificMonthDay.minutes + " " + this.hourToCron(state.specificMonthDay.hours, state.specificMonthDay.hourType) + " " + state.specificMonthDay.day + (((_a = state.specificMonthDay) === null || _a === void 0 ? void 0 : _a.nearestWeekday) ? 'W' : '') + " " + state.specificMonthDay.month + " " + this.weekDayDefaultChar + " " + (!this.removeYears ? this.yearDefaultChar : '')).trim();
                    break;
                case 'specificMonthWeek':
                    this.cron = ((this.isCronFlavorQuartz && !this.removeSeconds ? state.specificMonthWeek.seconds : '') + " " + state.specificMonthWeek.minutes + " " + this.hourToCron(state.specificMonthWeek.hours, state.specificMonthWeek.hourType) + " " + this.monthDayDefaultChar + " " + state.specificMonthWeek.month + " " + state.specificMonthWeek.day + state.specificMonthWeek.monthWeek + " " + (!this.removeYears ? this.yearDefaultChar : '')).trim();
                    break;
                default:
                    throw new Error('Invalid cron yearly subtab selection');
            }
            this.cronForm.setValue(this.cron);
        };
        CronGenComponent.prototype.computeAdvancedExpression = function (expression) {
            this.cron = expression;
            this.cronForm.setValue(this.cron);
        };
        CronGenComponent.prototype.getAmPmHour = function (hour) {
            return this.options.use24HourTime ? hour : (hour + 11) % 12 + 1;
        };
        CronGenComponent.prototype.getHourType = function (hour) {
            return this.options.use24HourTime ? undefined : (hour >= 12 ? 'PM' : 'AM');
        };
        CronGenComponent.prototype.throwErrors = function () {
            if (this.isCronFlavorQuartz) {
                throw new Error('Invalid quartz cron expression, there must be 6 or 7 segments');
            }
            else if (this.isCronFlavorStandard) {
                throw new Error('Invalid standard cron expression, there must be 5 segments');
            }
            else {
                throw new Error('Invalid cronFlavor selected, please choose quartz or standard');
            }
        };
        CronGenComponent.prototype.handleModelChange = function (cron) {
            var _this = this;
            this.isDirty = !!this.isDirty;
            if (this.isDirty) {
                this.isDirty = false;
                return;
            }
            if (!this.cronIsValid(cron)) {
                this.throwErrors();
            }
            var origCron = cron;
            if (cron.split(' ').length === 5 && this.isCronFlavorStandard) {
                cron = "0 " + cron + " *";
            }
            var _b = __read(cron.split(' '), 6), seconds = _b[0], minutes = _b[1], hours = _b[2], dayOfMonth = _b[3], month = _b[4], dayOfWeek = _b[5];
            // Generic values used across multiple tabs.
            var parsedSeconds = parseInt(seconds, this.radix);
            var parsedMinutes = parseInt(minutes, this.radix);
            var parsedHours = parseInt(hours, this.radix);
            var parsedAmPmHours = this.getAmPmHour(parsedHours);
            var parsedHourType = this.getHourType(parsedHours);
            var day = dayOfWeek.substr(0, 3);
            var monthWeek = dayOfWeek.substr(3);
            var parsedMonth = parseInt(month, this.radix);
            var months = parseInt(month.substring(2), this.radix);
            switch (true) {
                case this._minutesRegex.test(cron): {
                    this.activeTab = 'minutes';
                    this.state.minutes = {
                        seconds: parsedSeconds,
                        minutes: parseInt(minutes.substring(2), this.radix),
                    };
                    break;
                }
                case this._hourlyRegex.test(cron): {
                    this.activeTab = 'hourly';
                    this.state.hourly = {
                        seconds: parsedSeconds,
                        minutes: parsedMinutes,
                        hours: parseInt(hours.substring(2), this.radix),
                    };
                    break;
                }
                case this._dailyEveryDayRegex.test(cron): {
                    this.activeTab = 'daily';
                    this.state.daily = {
                        subTab: 'everyDay',
                        everyDay: {
                            seconds: parsedSeconds,
                            minutes: parsedMinutes,
                            hours: parsedAmPmHours,
                            hourType: parsedHourType,
                            days: parseInt(dayOfMonth.substring(2), this.radix),
                        }
                    };
                    break;
                }
                case this._dailyEveryWeekDayRegex.test(cron): {
                    this.activeTab = 'daily';
                    this.state.daily = {
                        subTab: 'everyWeekDay',
                        everyWeekDay: {
                            seconds: parsedSeconds,
                            minutes: parsedMinutes,
                            hours: parsedAmPmHours,
                            hourType: parsedHourType
                        },
                    };
                    break;
                }
                case this._weeklyRegex.test(cron): {
                    this.activeTab = 'weekly';
                    this.state.weekly = {
                        seconds: parsedSeconds,
                        minutes: parsedMinutes,
                        hours: parsedAmPmHours,
                        hourType: parsedHourType,
                    };
                    this.selectOptions.days.forEach(function (weekDay) { return _this.state.weekly[weekDay] = false; });
                    dayOfWeek.split(',').forEach(function (weekDay) { return _this.state.weekly[weekDay] = true; });
                    break;
                }
                case this._monthlySpecificDayRegex.test(cron): {
                    this.activeTab = 'monthly';
                    this.state.monthly = {
                        subTab: 'specificDay',
                        specificDay: {
                            seconds: parsedSeconds,
                            minutes: parsedMinutes,
                            hours: parsedAmPmHours,
                            hourType: parsedHourType,
                            day: dayOfMonth,
                            months: months,
                            nearestWeekday: false,
                        },
                    };
                    break;
                }
                case this._monthlySpecificWeekDayRegex.test(cron): {
                    this.activeTab = 'monthly';
                    this.state.monthly = {
                        subTab: 'specificWeekDay',
                        specificWeekDay: {
                            seconds: parsedSeconds,
                            minutes: parsedMinutes,
                            hours: parsedAmPmHours,
                            hourType: parsedHourType,
                            day: day,
                            monthWeek: monthWeek,
                            months: months
                        }
                    };
                    break;
                }
                case this._yearlySpecificMonthDayRegex.test(cron): {
                    this.activeTab = 'yearly';
                    this.state.yearly = {
                        subTab: 'specificMonthDay',
                        specificMonthDay: {
                            seconds: parsedSeconds,
                            minutes: parsedMinutes,
                            hours: parsedAmPmHours,
                            hourType: parsedHourType,
                            day: dayOfMonth,
                            month: parsedMonth,
                            nearestWeekday: false,
                        }
                    };
                    break;
                }
                case this._yearlySpecificMonthWeekRegex.test(cron): {
                    this.activeTab = 'yearly';
                    this.state.yearly = {
                        subTab: 'specificMonthWeek',
                        specificMonthWeek: {
                            seconds: parsedSeconds,
                            minutes: parsedMinutes,
                            hours: parsedAmPmHours,
                            hourType: parsedHourType,
                            day: day,
                            month: parsedMonth,
                            monthWeek: monthWeek,
                        }
                    };
                    break;
                }
                default: { // Advanced
                    this.activeTab = 'advanced';
                    this.state.advanced.expression = origCron;
                    break;
                }
            }
        };
        CronGenComponent.prototype.cronIsValid = function (cron) {
            if (cron) {
                var cronParts = cron.split(' ');
                return (this.isCronFlavorQuartz && (cronParts.length === 6
                    || cronParts.length === 7)
                    || (this.isCronFlavorStandard && cronParts.length === 5));
            }
            return false;
        };
        CronGenComponent.prototype.getDefaultState = function () {
            var _b = __read(this.options.defaultTime.split(':').map(Number), 3), defaultHours = _b[0], defaultMinutes = _b[1], defaultSeconds = _b[2];
            var defaultAmPmHour = this.getAmPmHour(defaultHours);
            var defaultHourType = this.getHourType(defaultHours);
            if (this.isCronFlavorQuartz && !this.isDirty) {
                this.localCron = '0 0 1/1 * * *';
            }
            return {
                minutes: {
                    minutes: 1,
                    seconds: 0
                },
                hourly: {
                    hours: 1,
                    minutes: 0,
                    seconds: 0
                },
                daily: {
                    subTab: 'everyDay',
                    everyDay: {
                        days: 1,
                        hours: defaultAmPmHour,
                        minutes: defaultMinutes,
                        seconds: defaultSeconds,
                        hourType: defaultHourType
                    },
                    everyWeekDay: {
                        hours: defaultAmPmHour,
                        minutes: defaultMinutes,
                        seconds: defaultSeconds,
                        hourType: defaultHourType
                    }
                },
                weekly: {
                    MON: true,
                    TUE: false,
                    WED: false,
                    THU: false,
                    FRI: false,
                    SAT: false,
                    SUN: false,
                    hours: defaultAmPmHour,
                    minutes: defaultMinutes,
                    seconds: defaultSeconds,
                    hourType: defaultHourType
                },
                monthly: {
                    subTab: 'specificDay',
                    specificDay: {
                        day: '1',
                        months: 1,
                        hours: defaultAmPmHour,
                        minutes: defaultMinutes,
                        seconds: defaultSeconds,
                        hourType: defaultHourType,
                        nearestWeekday: false
                    },
                    specificWeekDay: {
                        monthWeek: '#1',
                        day: 'MON',
                        months: 1,
                        hours: defaultAmPmHour,
                        minutes: defaultMinutes,
                        seconds: defaultSeconds,
                        hourType: defaultHourType
                    }
                },
                yearly: {
                    subTab: 'specificMonthDay',
                    specificMonthDay: {
                        month: 1,
                        day: '1',
                        hours: defaultAmPmHour,
                        minutes: defaultMinutes,
                        seconds: defaultSeconds,
                        hourType: defaultHourType,
                        nearestWeekday: false
                    },
                    specificMonthWeek: {
                        monthWeek: '#1',
                        day: 'MON',
                        month: 1,
                        hours: defaultAmPmHour,
                        minutes: defaultMinutes,
                        seconds: defaultSeconds,
                        hourType: defaultHourType
                    }
                },
                advanced: {
                    expression: this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *'
                }
            };
        };
        CronGenComponent.prototype.getOrdinalSuffix = function (value) {
            if (value.length > 1) {
                var secondToLastDigit = value.charAt(value.length - 2);
                if (secondToLastDigit === '1') {
                    return 'th';
                }
            }
            var lastDigit = value.charAt(value.length - 1);
            switch (lastDigit) {
                case '1':
                    return 'st';
                case '2':
                    return 'nd';
                case '3':
                    return 'rd';
                default:
                    return 'th';
            }
        };
        CronGenComponent.prototype.getSelectOptions = function () {
            return {
                months: this.getRange(1, 12),
                monthWeeks: ['#1', '#2', '#3', '#4', '#5', 'L'],
                days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
                minutes: this.getRange(0, 59),
                fullMinutes: this.getRange(0, 59),
                seconds: this.getRange(0, 59),
                hours: this.getRange(1, 23),
                monthDays: this.getRange(1, 31),
                monthDaysWithLasts: __spread(__spread(this.getRange(1, 31).map(String)), ['L']),
                monthDaysWithOutLasts: __spread(this.getRange(1, 31).map(String)),
                hourTypes: ['AM', 'PM']
            };
        };
        CronGenComponent.prototype.getRange = function (start, end) {
            var length = end - start + 1;
            return Array.apply(null, Array(length)).map(function (_, i) { return i + start; });
        };
        return CronGenComponent;
    }());
    CronGenComponent.ɵfac = function CronGenComponent_Factory(t) { return new (t || CronGenComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
    CronGenComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CronGenComponent, selectors: [["cron-editor"]], inputs: { backgroundColor: "backgroundColor", color: "color", disabled: "disabled", options: "options", cron: "cron" }, features: [i0.ɵɵProvidersFeature([CRON_VALUE_ACCESSOR])], decls: 9, vars: 9, consts: [[1, "cron-editor-main"], [1, "cron-editor-container", 3, "backgroundColor", "color", "selectedIndexChange"], ["class", "cron-editor-tab minutes-tab", "label", "Minutes", 4, "ngIf"], ["class", "cron-editor-tab hourly-tab", "label", "Hourly", 4, "ngIf"], ["class", "cron-editor-tab daily-tab", "label", "Daily", 4, "ngIf"], ["class", "cron-editor-tab weekly-tab", "label", "Weekly", 4, "ngIf"], ["class", "cron-editor-tab monthly-tab", "label", "Monthly", 4, "ngIf"], ["class", "cron-editor-tab yearly-tab", "label", "Yearly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Advanced", 4, "ngIf"], ["label", "Minutes", 1, "cron-editor-tab", "minutes-tab"], [1, "cron-editor-tab-content", "minutes-content"], [1, "cron-form-label"], [3, "formGroup", "use24HourTime", "hideHours", "hideSeconds"], ["label", "Hourly", 1, "cron-editor-tab", "hourly-tab"], [1, "cron-editor-tab-content", "hourly-content"], [3, "formGroup", "use24HourTime", "hideSeconds"], ["label", "Daily", 1, "cron-editor-tab", "daily-tab"], [1, "cron-editor-tab-content", "daily-content", 3, "formGroup"], ["formControlName", "subTab", 1, "cron-editor-radio-group"], ["name", "subTab", "value", "everyDay", "checked", "checked", 3, "ngClass"], ["formGroupName", "everyDay", 1, "day-picker", "col-md-4"], ["formControlName", "days"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "everyDay", 3, "use24HourTime", "hideSeconds"], ["name", "subTab", "value", "everyWeekDay", 3, "ngClass"], ["formGroupName", "everyWeekDay", 3, "use24HourTime", "hideSeconds"], [3, "value"], ["label", "Weekly", 1, "cron-editor-tab", "weekly-tab"], [1, "cron-editor-tab-content", "weekly-content"], [1, "cron-form-days-group", 3, "formGroup"], [3, "ngClass", "formControlName", 4, "ngFor", "ngForOf"], [1, "cron-form-label", "time-label"], [3, "ngClass", "formControlName"], ["label", "Monthly", 1, "cron-editor-tab", "monthly-tab"], [1, "cron-editor-tab-content", "monthly-content", 3, "formGroup"], ["formControlName", "subTab"], ["name", "monthly-radio", "value", "specificDay", "formGroupName", "specificDay", 3, "ngClass"], [1, "day-picker"], ["formControlName", "day", 1, "month-days"], [4, "ngIf"], [1, "month-picker"], ["formControlName", "months", 1, "months-small", 3, "ngClass"], [3, "disabled", "formGroup", "use24HourTime", "hideSeconds"], [3, "formGroup"], ["formControlName", "nearestWeekday", 3, "ngClass", 4, "ngIf"], ["name", "monthly-radio", "value", "specificWeekDay", "formGroupName", "specificWeekDay", 3, "ngClass"], [1, "week-picker"], ["formControlName", "monthWeek", 1, "day-order-in-month", 3, "ngClass"], [1, "weekday-picker"], ["formControlName", "day", 1, "week-days", 3, "ngClass"], ["formControlName", "months", 1, "months-small"], ["formControlName", "nearestWeekday", 3, "ngClass"], ["label", "Yearly", 1, "cron-editor-tab", "yearly-tab"], [1, "cron-editor-tab-content", "yearly-content", 3, "formGroup"], ["name", "yearly-radio", "value", "specificMonthDay", 3, "ngClass"], ["class", "day-picker", "formGroupName", "specificMonthDay", 4, "ngIf"], ["formGroupName", "specificMonthDay", 4, "ngIf"], ["formGroupName", "specificMonthDay", 1, "month-picker"], ["formControlName", "month", 1, "months"], ["name", "yearly-radio", "value", "specificMonthWeek", 3, "ngClass"], ["formGroupName", "specificMonthWeek", 1, "week-picker"], ["formControlName", "monthWeek", 1, "day-order-in-month"], ["formGroupName", "specificMonthWeek", 1, "weekday-picker"], ["formControlName", "day", 1, "week-days"], ["formGroupName", "specificMonthWeek", 1, "month-picker"], ["formGroupName", "specificMonthDay", 1, "day-picker"], ["formGroupName", "specificMonthDay"], ["label", "Advanced", 1, "cron-editor-tab"], [1, "cron-editor-tab-content", 3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "expression", 1, "advanced-cron-editor-input"]], template: function CronGenComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "section", 0);
                i0.ɵɵelementStart(1, "mat-tab-group", 1);
                i0.ɵɵlistener("selectedIndexChange", function CronGenComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.onTabFocus($event); });
                i0.ɵɵtemplate(2, CronGenComponent_mat_tab_2_Template, 5, 5, "mat-tab", 2);
                i0.ɵɵtemplate(3, CronGenComponent_mat_tab_3_Template, 5, 4, "mat-tab", 3);
                i0.ɵɵtemplate(4, CronGenComponent_mat_tab_4_Template, 18, 11, "mat-tab", 4);
                i0.ɵɵtemplate(5, CronGenComponent_mat_tab_5_Template, 10, 7, "mat-tab", 5);
                i0.ɵɵtemplate(6, CronGenComponent_mat_tab_6_Template, 47, 27, "mat-tab", 6);
                i0.ɵɵtemplate(7, CronGenComponent_mat_tab_7_Template, 43, 25, "mat-tab", 7);
                i0.ɵɵtemplate(8, CronGenComponent_mat_tab_8_Template, 6, 1, "mat-tab", 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("backgroundColor", ctx.backgroundColor)("color", ctx.color);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideMinutesTab));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideHourlyTab));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideDailyTab));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideWeeklyTab));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideMonthlyTab));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideYearlyTab));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideAdvancedTab));
            }
        }, directives: [i2.MatTabGroup, i3.NgIf, i2.MatTab, TimePickerComponent, i1.NgControlStatusGroup, i1.FormGroupDirective, i5$1.MatRadioGroup, i1.NgControlStatus, i1.FormControlName, i5$1.MatRadioButton, i3.NgClass, i3$1.MatFormField, i1.FormGroupName, i3$1.MatLabel, i4.MatSelect, i3.NgForOf, i5.MatOption, i9.MatCheckbox, i10.MatInput, i1.DefaultValueAccessor], styles: [".cron-editor-main[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);width:100%}.cron-editor-tab-content[_ngcontent-%COMP%]{border-radius:8px;height:200px;margin-right:10px;margin-top:10px;max-width:700px;overflow:hidden}.cron-editor-tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.cron-editor-tab-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{font-size:20px;margin:10px 10px 5px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}.hourly-content[_ngcontent-%COMP%]   .cron-form-label[_ngcontent-%COMP%], .hourly-content[_ngcontent-%COMP%]   cron-time-picker[_ngcontent-%COMP%], .minutes-content[_ngcontent-%COMP%]   .cron-form-label[_ngcontent-%COMP%], .minutes-content[_ngcontent-%COMP%]   cron-time-picker[_ngcontent-%COMP%]{display:inline}.cron-form-label[_ngcontent-%COMP%]{font-weight:500;margin-left:5px;margin-right:5px}.separator[_ngcontent-%COMP%]{font-size:20px;font-weight:500;margin-left:3px;margin-right:3px}.frequency-group[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]     .mat-tab-body-content{padding-left:10px}[_nghost-%COMP%]     .mat-tab-label-container{display:flex;justify-content:space-evenly}[_nghost-%COMP%]     .mat-tab-labels{justify-content:space-around}[_nghost-%COMP%]     .mat-tab-label{min-width:100px}[_nghost-%COMP%]     .mat-radio-container{display:inline-flex}[_nghost-%COMP%]     .mat-radio-label-content{align-items:baseline;display:inline-flex;padding-top:10px}[_nghost-%COMP%]     mat-radio-button{max-width:100%;overflow:hidden;padding-left:10px}[_nghost-%COMP%]     mat-radio-button:not(.mat-radio-checked){opacity:.4}[_nghost-%COMP%]     .monthly-content .mat-form-field, [_nghost-%COMP%]     .yearly-content .mat-form-field{max-width:90px}[_nghost-%COMP%]     .monthly-content .weekday-picker, [_nghost-%COMP%]     .yearly-content .weekday-picker{margin-left:5px}[_nghost-%COMP%]     .monthly-content .month-picker, [_nghost-%COMP%]     .monthly-content .weekday-picker, [_nghost-%COMP%]     .yearly-content .month-picker, [_nghost-%COMP%]     .yearly-content .weekday-picker{max-width:125px}[_nghost-%COMP%]     .daily-content .mat-form-field, [_nghost-%COMP%]     .weekly-content .mat-form-field, [_nghost-%COMP%]     .yearly-content .mat-form-field{max-width:100px}[_nghost-%COMP%]     .daily-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .monthly-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .weekly-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .yearly-content cron-time-picker .mat-form-field{max-width:75px}[_nghost-%COMP%]     .cron-editor-wrapped-radio{margin-bottom:10px;max-width:95%}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-form-field-wrapper{padding-bottom:.5em}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-radio-label-content{flex-wrap:wrap}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-radio-container{bottom:6px;position:relative}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CronGenComponent, [{
                type: i0.Component,
                args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'cron-editor',
                        templateUrl: './cron-editor.template.html',
                        styleUrls: ['./cron-editor.component.scss'],
                        providers: [CRON_VALUE_ACCESSOR]
                    }]
            }], function () { return [{ type: i1.FormBuilder }]; }, { backgroundColor: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }], cron: [{
                    type: i0.Input
                }] });
    })();

    var CronEditorModule = /** @class */ (function () {
        function CronEditorModule() {
        }
        return CronEditorModule;
    }());
    CronEditorModule.ɵfac = function CronEditorModule_Factory(t) { return new (t || CronEditorModule)(); };
    CronEditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: CronEditorModule });
    CronEditorModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
            { provide: i3$1.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
        ], imports: [[
                i3.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i2.MatTabsModule,
                list.MatListModule,
                i4.MatSelectModule,
                i10.MatInputModule,
                i5$1.MatRadioModule,
                i9.MatCheckboxModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CronEditorModule, { declarations: [TimePickerComponent, CronGenComponent], imports: [i3.CommonModule,
                i1.FormsModule,
                i1.ReactiveFormsModule,
                i2.MatTabsModule,
                list.MatListModule,
                i4.MatSelectModule,
                i10.MatInputModule,
                i5$1.MatRadioModule,
                i9.MatCheckboxModule], exports: [TimePickerComponent, CronGenComponent] });
    })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CronEditorModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i1.FormsModule,
                            i1.ReactiveFormsModule,
                            i2.MatTabsModule,
                            list.MatListModule,
                            i4.MatSelectModule,
                            i10.MatInputModule,
                            i5$1.MatRadioModule,
                            i9.MatCheckboxModule
                        ],
                        exports: [TimePickerComponent, CronGenComponent],
                        declarations: [TimePickerComponent, CronGenComponent],
                        providers: [
                            { provide: i3$1.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
                        ]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of pmsys
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CRON_VALUE_ACCESSOR = CRON_VALUE_ACCESSOR;
    exports.CronEditorModule = CronEditorModule;
    exports.CronGenComponent = CronGenComponent;
    exports.Days = Days;
    exports.MonthWeeks = MonthWeeks;
    exports.TimePickerComponent = TimePickerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-cron-editor.umd.js.map
