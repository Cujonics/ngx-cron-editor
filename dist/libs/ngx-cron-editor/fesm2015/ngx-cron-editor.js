import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵproperty, ɵɵadvance, ɵɵtextInterpolate, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵnextContext, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵProvidersFeature, ɵsetClassMetadata, Component, Input, ɵɵelement, ɵɵtextInterpolate2, ɵɵtextInterpolate1, ɵɵpropertyInterpolate, forwardRef, ɵɵlistener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { ControlContainer, NgControlStatusGroup, FormGroupDirective, NgControlStatus, FormControlName, NG_VALUE_ACCESSOR, FormControl, FormBuilder, FormGroupName, DefaultValueAccessor, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgForOf, NgClass, CommonModule } from '@angular/common';
import { MatFormField, MatLabel, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { __awaiter } from 'tslib';
import { MatTabGroup, MatTab, MatTabsModule } from '@angular/material/tabs';
import { MatRadioGroup, MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';

function TimePickerComponent_ng_container_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const hour_r5 = ctx.$implicit;
    ɵɵproperty("value", hour_r5);
    ɵɵadvance(1);
    ɵɵtextInterpolate(hour_r5);
} }
function TimePickerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "mat-form-field");
    ɵɵelementStart(2, "mat-label");
    ɵɵtext(3, "Hour(s)");
    ɵɵelementEnd();
    ɵɵelementStart(4, "mat-select", 2);
    ɵɵtemplate(5, TimePickerComponent_ng_container_1_mat_option_5_Template, 2, 2, "mat-option", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r0.hours);
} }
function TimePickerComponent_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span", 7);
    ɵɵtext(1, ":");
    ɵɵelementEnd();
} }
function TimePickerComponent_ng_container_2_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const minute_r8 = ctx.$implicit;
    ɵɵproperty("value", minute_r8);
    ɵɵadvance(1);
    ɵɵtextInterpolate(minute_r8 >= 0 && minute_r8 <= 9 ? "0" + minute_r8 : minute_r8);
} }
function TimePickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TimePickerComponent_ng_container_2_span_1_Template, 2, 0, "span", 5);
    ɵɵelementStart(2, "mat-form-field");
    ɵɵelementStart(3, "mat-label");
    ɵɵtext(4, "Minute(s)");
    ɵɵelementEnd();
    ɵɵelementStart(5, "mat-select", 6);
    ɵɵtemplate(6, TimePickerComponent_ng_container_2_mat_option_6_Template, 2, 2, "mat-option", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r1.hideHours);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r1.minutes);
} }
function TimePickerComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, ":");
    ɵɵelementEnd();
} }
function TimePickerComponent_ng_container_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const second_r11 = ctx.$implicit;
    ɵɵproperty("value", second_r11);
    ɵɵadvance(1);
    ɵɵtextInterpolate(second_r11 >= 0 && second_r11 <= 9 ? "0" + second_r11 : second_r11);
} }
function TimePickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TimePickerComponent_ng_container_3_span_1_Template, 2, 0, "span", 1);
    ɵɵelementStart(2, "mat-form-field");
    ɵɵelementStart(3, "mat-label");
    ɵɵtext(4, "Second(s)");
    ɵɵelementEnd();
    ɵɵelementStart(5, "mat-select", 8);
    ɵɵtemplate(6, TimePickerComponent_ng_container_3_mat_option_6_Template, 2, 2, "mat-option", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r2.hideMinutes);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r2.seconds);
} }
function TimePickerComponent_ng_container_4_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 4);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const hourType_r13 = ctx.$implicit;
    ɵɵproperty("value", hourType_r13);
    ɵɵadvance(1);
    ɵɵtextInterpolate(hourType_r13);
} }
function TimePickerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-form-field");
    ɵɵelementStart(4, "mat-select", 9);
    ɵɵtemplate(5, TimePickerComponent_ng_container_4_mat_option_5_Template, 2, 2, "mat-option", 3);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵtextInterpolate(" ");
    ɵɵadvance(3);
    ɵɵproperty("ngForOf", ctx_r3.hourTypes);
} }
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
class TimePickerComponent {
    constructor(parent) {
        this.parent = parent;
        this.use24HourTime = true;
        this.hideHours = false;
        this.hideMinutes = false;
        this.hideSeconds = true;
        this.minutes = [...range(0, 59)];
        this.seconds = [...range(0, 59)];
        this.hourTypes = ['AM', 'PM'];
    }
    get hours() {
        return this.use24HourTime ? [...range(0, 23)] : [...range(0, 12)];
    }
}
TimePickerComponent.ɵfac = function TimePickerComponent_Factory(t) { return new (t || TimePickerComponent)(ɵɵdirectiveInject(ControlContainer)); };
TimePickerComponent.ɵcmp = ɵɵdefineComponent({ type: TimePickerComponent, selectors: [["cron-time-picker"]], inputs: { disabled: "disabled", use24HourTime: "use24HourTime", hideHours: "hideHours", hideMinutes: "hideMinutes", hideSeconds: "hideSeconds" }, features: [ɵɵProvidersFeature([])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "hours"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "separator", 4, "ngIf"], ["formControlName", "minutes"], [1, "separator"], ["formControlName", "seconds"], ["formControlName", "hourType"]], template: function TimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵtemplate(1, TimePickerComponent_ng_container_1_Template, 6, 1, "ng-container", 1);
        ɵɵtemplate(2, TimePickerComponent_ng_container_2_Template, 7, 2, "ng-container", 1);
        ɵɵtemplate(3, TimePickerComponent_ng_container_3_Template, 7, 2, "ng-container", 1);
        ɵɵtemplate(4, TimePickerComponent_ng_container_4_Template, 6, 2, "ng-container", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("formGroup", ctx.parent.control);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.hideHours);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.hideMinutes);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.hideSeconds);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !ctx.use24HourTime);
    } }, directives: [NgControlStatusGroup, FormGroupDirective, NgIf, MatFormField, MatLabel, MatSelect, NgControlStatus, FormControlName, NgForOf, MatOption], styles: [".cron-editor-main[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);width:100%}.cron-editor-tab-content[_ngcontent-%COMP%]{border-radius:8px;height:200px;margin-right:10px;margin-top:10px;max-width:700px;overflow:hidden}.cron-editor-tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.cron-editor-tab-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{font-size:20px;margin:10px 10px 5px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}.hourly-content[_ngcontent-%COMP%]   .cron-form-label[_ngcontent-%COMP%], .hourly-content[_ngcontent-%COMP%]   cron-time-picker[_ngcontent-%COMP%], .minutes-content[_ngcontent-%COMP%]   .cron-form-label[_ngcontent-%COMP%], .minutes-content[_ngcontent-%COMP%]   cron-time-picker[_ngcontent-%COMP%]{display:inline}.cron-form-label[_ngcontent-%COMP%]{font-weight:500;margin-left:5px;margin-right:5px}.separator[_ngcontent-%COMP%]{font-size:20px;font-weight:500;margin-left:3px;margin-right:3px}.frequency-group[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]     .mat-tab-body-content{padding-left:10px}[_nghost-%COMP%]     .mat-tab-label-container{display:flex;justify-content:space-evenly}[_nghost-%COMP%]     .mat-tab-labels{justify-content:space-around}[_nghost-%COMP%]     .mat-tab-label{min-width:100px}[_nghost-%COMP%]     .mat-radio-container{display:inline-flex}[_nghost-%COMP%]     .mat-radio-label-content{align-items:baseline;display:inline-flex;padding-top:10px}[_nghost-%COMP%]     mat-radio-button{max-width:100%;overflow:hidden;padding-left:10px}[_nghost-%COMP%]     mat-radio-button:not(.mat-radio-checked){opacity:.4}[_nghost-%COMP%]     .monthly-content .mat-form-field, [_nghost-%COMP%]     .yearly-content .mat-form-field{max-width:90px}[_nghost-%COMP%]     .monthly-content .weekday-picker, [_nghost-%COMP%]     .yearly-content .weekday-picker{margin-left:5px}[_nghost-%COMP%]     .monthly-content .month-picker, [_nghost-%COMP%]     .monthly-content .weekday-picker, [_nghost-%COMP%]     .yearly-content .month-picker, [_nghost-%COMP%]     .yearly-content .weekday-picker{max-width:125px}[_nghost-%COMP%]     .daily-content .mat-form-field, [_nghost-%COMP%]     .weekly-content .mat-form-field, [_nghost-%COMP%]     .yearly-content .mat-form-field{max-width:100px}[_nghost-%COMP%]     .daily-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .monthly-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .weekly-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .yearly-content cron-time-picker .mat-form-field{max-width:75px}[_nghost-%COMP%]     .cron-editor-wrapped-radio{margin-bottom:10px;max-width:95%}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-form-field-wrapper{padding-bottom:.5em}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-radio-label-content{flex-wrap:wrap}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-radio-container{bottom:6px;position:relative}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(TimePickerComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'cron-time-picker',
                templateUrl: './cron-time-picker.template.html',
                styleUrls: ['./cron-editor.component.scss'],
                providers: []
            }]
    }], function () { return [{ type: ControlContainer }]; }, { disabled: [{
            type: Input
        }], use24HourTime: [{
            type: Input
        }], hideHours: [{
            type: Input
        }], hideMinutes: [{
            type: Input
        }], hideSeconds: [{
            type: Input
        }] }); })();

const Days = {
    'SUN': 'Sunday',
    'MON': 'Monday',
    'TUE': 'Tuesday',
    'WED': 'Wednesday',
    'THU': 'Thursday',
    'FRI': 'Friday',
    'SAT': 'Saturday'
};
const MonthWeeks = {
    '#1': 'First',
    '#2': 'Second',
    '#3': 'Third',
    '#4': 'Fourth',
    '#5': 'Fifth',
    'L': 'Last'
};
var Months;
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
})(Months || (Months = {}));

function CronGenComponent_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 9);
    ɵɵelementStart(1, "div", 10);
    ɵɵelementStart(2, "p", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelement(4, "cron-time-picker", 12);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate((ctx_r0.options == null ? null : ctx_r0.options.texts == null ? null : ctx_r0.options.texts.frequencyPrefix) || "Every");
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r0.minutesForm)("use24HourTime", true)("hideHours", true)("hideSeconds", (ctx_r0.options == null ? null : ctx_r0.options.hideSeconds) || !ctx_r0.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 13);
    ɵɵelementStart(1, "div", 14);
    ɵɵelementStart(2, "p", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelement(4, "cron-time-picker", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate((ctx_r1.options == null ? null : ctx_r1.options.texts == null ? null : ctx_r1.options.texts.frequencyPrefix) || "Every");
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r1.hourlyForm)("use24HourTime", ctx_r1.options == null ? null : ctx_r1.options.use24HourTime)("hideSeconds", (ctx_r1.options == null ? null : ctx_r1.options.hideSeconds) || !ctx_r1.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_4_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const monthDay_r8 = ctx.$implicit;
    const ctx_r7 = ɵɵnextContext(2);
    ɵɵproperty("value", monthDay_r8);
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", monthDay_r8, " ", ctx_r7.hideSelectSuffixes ? "" : "day(s)", " ");
} }
function CronGenComponent_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 16);
    ɵɵelementStart(1, "div", 17);
    ɵɵelementStart(2, "mat-radio-group", 18);
    ɵɵelementStart(3, "mat-radio-button", 19);
    ɵɵelementStart(4, "p", 11);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-form-field", 20);
    ɵɵelementStart(7, "mat-label");
    ɵɵtext(8, "Day(s)");
    ɵɵelementEnd();
    ɵɵelementStart(9, "mat-select", 21);
    ɵɵtemplate(10, CronGenComponent_mat_tab_4_mat_option_10_Template, 2, 3, "mat-option", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(11, "p", 11);
    ɵɵtext(12);
    ɵɵelementEnd();
    ɵɵelement(13, "cron-time-picker", 23);
    ɵɵelementEnd();
    ɵɵelementStart(14, "mat-radio-button", 24);
    ɵɵelementStart(15, "p", 11);
    ɵɵtext(16);
    ɵɵelementEnd();
    ɵɵelement(17, "cron-time-picker", 25);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r2.dailyForm);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", (ctx_r2.options == null ? null : ctx_r2.options.formRadioClass) || "cron-editor-radio-button frequency-group");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", (ctx_r2.options == null ? null : ctx_r2.options.texts == null ? null : ctx_r2.options.texts.frequencyPrefix) || "Every", " ");
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r2.selectOptions.monthDays);
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", (ctx_r2.options == null ? null : ctx_r2.options.texts == null ? null : ctx_r2.options.texts.timePrefix) || "at", " ");
    ɵɵadvance(1);
    ɵɵproperty("use24HourTime", ctx_r2.options == null ? null : ctx_r2.options.use24HourTime)("hideSeconds", (ctx_r2.options == null ? null : ctx_r2.options.hideSeconds) || !ctx_r2.isCronFlavorQuartz);
    ɵɵadvance(1);
    ɵɵproperty("ngClass", (ctx_r2.options == null ? null : ctx_r2.options.formRadioClass) || "cron-editor-radio-button frequency-group");
    ɵɵadvance(2);
    ɵɵtextInterpolate1("", (ctx_r2.options == null ? null : ctx_r2.options.texts == null ? null : ctx_r2.options.texts.weekDayPrefix) || "Every working day at", " ");
    ɵɵadvance(1);
    ɵɵproperty("use24HourTime", ctx_r2.options == null ? null : ctx_r2.options.use24HourTime)("hideSeconds", (ctx_r2.options == null ? null : ctx_r2.options.hideSeconds) || !ctx_r2.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_5_mat_checkbox_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-checkbox", 32);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r10 = ctx.$implicit;
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵpropertyInterpolate("formControlName", day_r10.substr(0, 3).toUpperCase());
    ɵɵproperty("ngClass", (ctx_r9.options == null ? null : ctx_r9.options.formCheckboxClass) || "checkbox-margin");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", day_r10, " ");
} }
function CronGenComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 27);
    ɵɵelementStart(1, "div", 28);
    ɵɵelementStart(2, "h2", 11);
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 29);
    ɵɵtemplate(5, CronGenComponent_mat_tab_5_mat_checkbox_5_Template, 2, 3, "mat-checkbox", 30);
    ɵɵelementEnd();
    ɵɵelement(6, "hr");
    ɵɵelementStart(7, "h2", 31);
    ɵɵtext(8);
    ɵɵelementEnd();
    ɵɵelement(9, "cron-time-picker", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵtextInterpolate((ctx_r3.options == null ? null : ctx_r3.options.texts == null ? null : ctx_r3.options.texts.weeklyDayTitle) || "Day(s)");
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r3.weeklyForm);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r3.weekdays);
    ɵɵadvance(3);
    ɵɵtextInterpolate((ctx_r3.options == null ? null : ctx_r3.options.texts == null ? null : ctx_r3.options.texts.weeklyTimeTitle) || "Time");
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r3.weeklyForm)("use24HourTime", ctx_r3.options == null ? null : ctx_r3.options.use24HourTime)("hideSeconds", (ctx_r3.options == null ? null : ctx_r3.options.hideSeconds) || !ctx_r3.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_6_ng_container_10_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithLast_r19 = ctx.$implicit;
    const ctx_r18 = ɵɵnextContext(3);
    ɵɵproperty("value", monthDaysWithLast_r19);
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", ctx_r18.monthDayDisplay(monthDaysWithLast_r19), " ", ctx_r18.hideSelectSuffixes ? "" : "day", " ");
} }
function CronGenComponent_mat_tab_6_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CronGenComponent_mat_tab_6_ng_container_10_mat_option_1_Template, 2, 3, "mat-option", 22);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r11.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_6_ng_container_11_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithOutLast_r21 = ctx.$implicit;
    const ctx_r20 = ɵɵnextContext(3);
    ɵɵproperty("value", monthDaysWithOutLast_r21);
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", ctx_r20.monthDayDisplay(monthDaysWithOutLast_r21), " ", ctx_r20.hideSelectSuffixes ? "" : "day", " ");
} }
function CronGenComponent_mat_tab_6_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, CronGenComponent_mat_tab_6_ng_container_11_mat_option_1_Template, 2, 3, "mat-option", 22);
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r12.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_6_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const month_r22 = ctx.$implicit;
    const ctx_r13 = ɵɵnextContext(2);
    ɵɵproperty("value", month_r22);
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", month_r22, " ", ctx_r13.hideSelectSuffixes ? "" : "month(s)", " ");
} }
function CronGenComponent_mat_tab_6_mat_checkbox_23_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-checkbox", 51);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", (ctx_r14.options == null ? null : ctx_r14.options.formCheckboxClass) || "checkbox-margin");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", (ctx_r14.options == null ? null : ctx_r14.options.texts == null ? null : ctx_r14.options.texts.nearestWeekdayText) || "during the nearest weekday", " ");
} }
function CronGenComponent_mat_tab_6_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const monthWeek_r23 = ctx.$implicit;
    const ctx_r15 = ɵɵnextContext(2);
    ɵɵproperty("value", monthWeek_r23);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r15.monthWeekDisplay(monthWeek_r23), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r24 = ctx.$implicit;
    const ctx_r16 = ɵɵnextContext(2);
    ɵɵproperty("value", day_r24);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r16.dayDisplay(day_r24), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const month_r25 = ctx.$implicit;
    const ctx_r17 = ɵɵnextContext(2);
    ɵɵproperty("value", month_r25);
    ɵɵadvance(1);
    ɵɵtextInterpolate2(" ", month_r25, " ", ctx_r17.hideSelectSuffixes ? "" : "month(s)", " ");
} }
function CronGenComponent_mat_tab_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 33);
    ɵɵelementStart(1, "div", 34);
    ɵɵelementStart(2, "mat-radio-group", 35);
    ɵɵelementStart(3, "mat-radio-button", 36);
    ɵɵelementStart(4, "p", 11);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵelementStart(6, "mat-form-field", 37);
    ɵɵelementStart(7, "mat-label");
    ɵɵtext(8, "Day");
    ɵɵelementEnd();
    ɵɵelementStart(9, "mat-select", 38);
    ɵɵtemplate(10, CronGenComponent_mat_tab_6_ng_container_10_Template, 2, 1, "ng-container", 39);
    ɵɵtemplate(11, CronGenComponent_mat_tab_6_ng_container_11_Template, 2, 1, "ng-container", 39);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(12, "p", 11);
    ɵɵtext(13);
    ɵɵelementEnd();
    ɵɵelementStart(14, "mat-form-field", 40);
    ɵɵelementStart(15, "mat-label");
    ɵɵtext(16, "Month");
    ɵɵelementEnd();
    ɵɵelementStart(17, "mat-select", 41);
    ɵɵtemplate(18, CronGenComponent_mat_tab_6_mat_option_18_Template, 2, 3, "mat-option", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(19, "p", 11);
    ɵɵtext(20);
    ɵɵelementEnd();
    ɵɵelement(21, "cron-time-picker", 42);
    ɵɵelementStart(22, "div", 43);
    ɵɵtemplate(23, CronGenComponent_mat_tab_6_mat_checkbox_23_Template, 2, 2, "mat-checkbox", 44);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(24, "mat-radio-button", 45);
    ɵɵelementStart(25, "p", 11);
    ɵɵtext(26);
    ɵɵelementEnd();
    ɵɵelementStart(27, "mat-form-field", 46);
    ɵɵelementStart(28, "mat-label");
    ɵɵtext(29, "Week");
    ɵɵelementEnd();
    ɵɵelementStart(30, "mat-select", 47);
    ɵɵtemplate(31, CronGenComponent_mat_tab_6_mat_option_31_Template, 2, 2, "mat-option", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(32, "mat-form-field", 48);
    ɵɵelementStart(33, "mat-label");
    ɵɵtext(34, "Day");
    ɵɵelementEnd();
    ɵɵelementStart(35, "mat-select", 49);
    ɵɵtemplate(36, CronGenComponent_mat_tab_6_mat_option_36_Template, 2, 2, "mat-option", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(37, "p", 11);
    ɵɵtext(38);
    ɵɵelementEnd();
    ɵɵelementStart(39, "mat-form-field", 40);
    ɵɵelementStart(40, "mat-label");
    ɵɵtext(41, "Month");
    ɵɵelementEnd();
    ɵɵelementStart(42, "mat-select", 50);
    ɵɵtemplate(43, CronGenComponent_mat_tab_6_mat_option_43_Template, 2, 3, "mat-option", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(44, "p", 11);
    ɵɵtext(45);
    ɵɵelementEnd();
    ɵɵelement(46, "cron-time-picker", 15);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r4.monthlyForm);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", (ctx_r4.options == null ? null : ctx_r4.options.formRadioClass) || "cron-editor-radio-button frequency-group cron-editor-wrapped-radio");
    ɵɵadvance(2);
    ɵɵtextInterpolate((ctx_r4.options == null ? null : ctx_r4.options.texts == null ? null : ctx_r4.options.texts.specificDayPrefix) || "On the");
    ɵɵadvance(5);
    ɵɵproperty("ngIf", ctx_r4.isCronFlavorQuartz);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !ctx_r4.isCronFlavorQuartz);
    ɵɵadvance(2);
    ɵɵtextInterpolate((ctx_r4.options == null ? null : ctx_r4.options.texts == null ? null : ctx_r4.options.texts.monthlyMonthPrefix) || "of every");
    ɵɵadvance(4);
    ɵɵproperty("ngClass", (ctx_r4.options == null ? null : ctx_r4.options.formSelectClass) || "form-control cron-editor-input");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
    ɵɵadvance(2);
    ɵɵtextInterpolate((ctx_r4.options == null ? null : ctx_r4.options.texts == null ? null : ctx_r4.options.texts.timePrefix) || "at");
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r4.disabled)("formGroup", ctx_r4.monthlyForm.controls.specificDay)("use24HourTime", ctx_r4.options == null ? null : ctx_r4.options.use24HourTime)("hideSeconds", (ctx_r4.options == null ? null : ctx_r4.options.hideSeconds) || !ctx_r4.isCronFlavorQuartz);
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r4.monthlyForm.controls.specificDay);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r4.options == null ? null : ctx_r4.options.hideNearestWeekdayCheck));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", (ctx_r4.options == null ? null : ctx_r4.options.formRadioClass) || "cron-editor-radio-button frequency-group");
    ɵɵadvance(2);
    ɵɵtextInterpolate((ctx_r4.options == null ? null : ctx_r4.options.texts == null ? null : ctx_r4.options.texts.specificDayPrefix) || "On the");
    ɵɵadvance(4);
    ɵɵproperty("ngClass", (ctx_r4.options == null ? null : ctx_r4.options.formSelectClass) || "form-control cron-editor-input");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.selectOptions.monthWeeks);
    ɵɵadvance(4);
    ɵɵproperty("ngClass", (ctx_r4.options == null ? null : ctx_r4.options.formSelectClass) || "form-control cron-editor-input");
    ɵɵadvance(1);
    ɵɵproperty("ngForOf", ctx_r4.selectOptions.days);
    ɵɵadvance(2);
    ɵɵtextInterpolate((ctx_r4.options == null ? null : ctx_r4.options.texts == null ? null : ctx_r4.options.texts.monthlyMonthPrefix) || "of every");
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r4.selectOptions.months);
    ɵɵadvance(2);
    ɵɵtextInterpolate((ctx_r4.options == null ? null : ctx_r4.options.texts == null ? null : ctx_r4.options.texts.timePrefix) || "at");
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r4.monthlyForm.controls.specificWeekDay)("use24HourTime", ctx_r4.options == null ? null : ctx_r4.options.use24HourTime)("hideSeconds", (ctx_r4.options == null ? null : ctx_r4.options.hideSeconds) || !ctx_r4.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithLast_r34 = ctx.$implicit;
    const ctx_r33 = ɵɵnextContext(3);
    ɵɵproperty("value", monthDaysWithLast_r34);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r33.monthDayDisplay(monthDaysWithLast_r34), " ");
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field", 65);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Day");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-select", 38);
    ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx_r26.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_7_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithOutLast_r36 = ctx.$implicit;
    const ctx_r35 = ɵɵnextContext(3);
    ɵɵproperty("value", monthDaysWithOutLast_r36);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r35.monthDayDisplay(monthDaysWithOutLast_r36), " ");
} }
function CronGenComponent_mat_tab_7_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-form-field", 66);
    ɵɵelementStart(1, "mat-label");
    ɵɵtext(2, "Day");
    ɵɵelementEnd();
    ɵɵelementStart(3, "mat-select", 38);
    ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = ɵɵnextContext(2);
    ɵɵadvance(4);
    ɵɵproperty("ngForOf", ctx_r27.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_7_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const month_r37 = ctx.$implicit;
    const ctx_r28 = ɵɵnextContext(2);
    ɵɵproperty("value", month_r37);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r28.monthDisplay(month_r37), " ");
} }
function CronGenComponent_mat_tab_7_mat_checkbox_19_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-checkbox", 51);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = ɵɵnextContext(2);
    ɵɵproperty("ngClass", (ctx_r29.options == null ? null : ctx_r29.options.formCheckboxClass) || "checkbox-margin");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", (ctx_r29.options == null ? null : ctx_r29.options.texts == null ? null : ctx_r29.options.texts.nearestWeekdayText) || "during the nearest weekday", " ");
} }
function CronGenComponent_mat_tab_7_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const monthWeek_r38 = ctx.$implicit;
    const ctx_r30 = ɵɵnextContext(2);
    ɵɵproperty("value", monthWeek_r38);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r30.monthWeekDisplay(monthWeek_r38), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const day_r39 = ctx.$implicit;
    const ctx_r31 = ɵɵnextContext(2);
    ɵɵproperty("value", day_r39);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r31.dayDisplay(day_r39), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-option", 26);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const month_r40 = ctx.$implicit;
    const ctx_r32 = ɵɵnextContext(2);
    ɵɵproperty("value", month_r40);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ctx_r32.monthDisplay(month_r40), " ");
} }
function CronGenComponent_mat_tab_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 52);
    ɵɵelementStart(1, "div", 53);
    ɵɵelementStart(2, "mat-radio-group", 35);
    ɵɵelementStart(3, "mat-radio-button", 54);
    ɵɵelementStart(4, "p", 11);
    ɵɵtext(5);
    ɵɵelementEnd();
    ɵɵtemplate(6, CronGenComponent_mat_tab_7_mat_form_field_6_Template, 5, 1, "mat-form-field", 55);
    ɵɵtemplate(7, CronGenComponent_mat_tab_7_mat_form_field_7_Template, 5, 1, "mat-form-field", 56);
    ɵɵelementStart(8, "p", 11);
    ɵɵtext(9);
    ɵɵelementEnd();
    ɵɵelementStart(10, "mat-form-field", 57);
    ɵɵelementStart(11, "mat-label");
    ɵɵtext(12, "Month");
    ɵɵelementEnd();
    ɵɵelementStart(13, "mat-select", 58);
    ɵɵtemplate(14, CronGenComponent_mat_tab_7_mat_option_14_Template, 2, 2, "mat-option", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(15, "p", 11);
    ɵɵtext(16);
    ɵɵelementEnd();
    ɵɵelement(17, "cron-time-picker", 42);
    ɵɵelementStart(18, "div", 43);
    ɵɵtemplate(19, CronGenComponent_mat_tab_7_mat_checkbox_19_Template, 2, 2, "mat-checkbox", 44);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(20, "mat-radio-button", 59);
    ɵɵelementStart(21, "p", 11);
    ɵɵtext(22);
    ɵɵelementEnd();
    ɵɵelementStart(23, "mat-form-field", 60);
    ɵɵelementStart(24, "mat-label");
    ɵɵtext(25, "Week");
    ɵɵelementEnd();
    ɵɵelementStart(26, "mat-select", 61);
    ɵɵtemplate(27, CronGenComponent_mat_tab_7_mat_option_27_Template, 2, 2, "mat-option", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(28, "mat-form-field", 62);
    ɵɵelementStart(29, "mat-label");
    ɵɵtext(30, "Day");
    ɵɵelementEnd();
    ɵɵelementStart(31, "mat-select", 63);
    ɵɵtemplate(32, CronGenComponent_mat_tab_7_mat_option_32_Template, 2, 2, "mat-option", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(33, "p", 11);
    ɵɵtext(34);
    ɵɵelementEnd();
    ɵɵelementStart(35, "mat-form-field", 64);
    ɵɵelementStart(36, "mat-label");
    ɵɵtext(37, "Month");
    ɵɵelementEnd();
    ɵɵelementStart(38, "mat-select", 58);
    ɵɵtemplate(39, CronGenComponent_mat_tab_7_mat_option_39_Template, 2, 2, "mat-option", 22);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementStart(40, "p", 11);
    ɵɵtext(41);
    ɵɵelementEnd();
    ɵɵelement(42, "cron-time-picker", 42);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r5.yearlyForm);
    ɵɵadvance(2);
    ɵɵproperty("ngClass", (ctx_r5.options == null ? null : ctx_r5.options.formRadioClass) || "cron-editor-radio-button frequency-group cron-editor-wrapped-radio");
    ɵɵadvance(2);
    ɵɵtextInterpolate((ctx_r5.options == null ? null : ctx_r5.options.texts == null ? null : ctx_r5.options.texts.specificDayPrefix) || "On the");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r5.options == null ? null : ctx_r5.options.cronFlavor) === "quartz");
    ɵɵadvance(1);
    ɵɵproperty("ngIf", (ctx_r5.options == null ? null : ctx_r5.options.cronFlavor) === "standard");
    ɵɵadvance(2);
    ɵɵtextInterpolate((ctx_r5.options == null ? null : ctx_r5.options.texts == null ? null : ctx_r5.options.texts.yearlyMonthPrefix) || "of");
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
    ɵɵadvance(2);
    ɵɵtextInterpolate((ctx_r5.options == null ? null : ctx_r5.options.texts == null ? null : ctx_r5.options.texts.timePrefix) || "at");
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthDay)("use24HourTime", ctx_r5.options == null ? null : ctx_r5.options.use24HourTime)("hideSeconds", (ctx_r5.options == null ? null : ctx_r5.options.hideSeconds) || !ctx_r5.isCronFlavorQuartz);
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r5.yearlyForm.controls.specificMonthDay);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", !(ctx_r5.options == null ? null : ctx_r5.options.hideNearestWeekdayCheck));
    ɵɵadvance(1);
    ɵɵproperty("ngClass", (ctx_r5.options == null ? null : ctx_r5.options.formRadioClass) || "cron-editor-radio-button frequency-group");
    ɵɵadvance(2);
    ɵɵtextInterpolate((ctx_r5.options == null ? null : ctx_r5.options.texts == null ? null : ctx_r5.options.texts.specificDayPrefix) || "On the");
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r5.selectOptions.monthWeeks);
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r5.selectOptions.days);
    ɵɵadvance(2);
    ɵɵtextInterpolate((ctx_r5.options == null ? null : ctx_r5.options.texts == null ? null : ctx_r5.options.texts.yearlyMonthPrefix) || "of");
    ɵɵadvance(5);
    ɵɵproperty("ngForOf", ctx_r5.selectOptions.months);
    ɵɵadvance(2);
    ɵɵtextInterpolate((ctx_r5.options == null ? null : ctx_r5.options.texts == null ? null : ctx_r5.options.texts.timePrefix) || "at");
    ɵɵadvance(1);
    ɵɵproperty("disabled", ctx_r5.disabled)("formGroup", ctx_r5.yearlyForm.controls.specificMonthWeek)("use24HourTime", ctx_r5.options == null ? null : ctx_r5.options.use24HourTime)("hideSeconds", (ctx_r5.options == null ? null : ctx_r5.options.hideSeconds) || !ctx_r5.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-tab", 67);
    ɵɵelementStart(1, "div", 68);
    ɵɵelementStart(2, "mat-form-field");
    ɵɵelementStart(3, "mat-label");
    ɵɵtext(4, "Expression");
    ɵɵelementEnd();
    ɵɵelement(5, "input", 69);
    ɵɵelementEnd();
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance(1);
    ɵɵproperty("formGroup", ctx_r6.advancedForm);
} }
const CRON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CronGenComponent),
    multi: true,
};
class CronGenComponent {
    constructor(fb) {
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
        this.onChange = (_) => {
        };
        this.onTouched = () => {
        };
    }
    get cron() {
        return this.localCron;
    }
    set cron(value) {
        this.localCron = value;
        this.onChange(value);
    }
    get isCronFlavorQuartz() {
        return this.options.cronFlavor === 'quartz';
    }
    get isCronFlavorStandard() {
        return this.options.cronFlavor === 'standard';
    }
    get removeSeconds() {
        return !!this.options.removeSeconds;
    }
    get hideSelectSuffixes() {
        return !!this.options.hideSelectSuffixes;
    }
    get removeYears() {
        return !!this.options.removeYears;
    }
    get yearDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '*' : '';
    }
    get weekDayDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '?' : '*';
    }
    get monthDayDefaultChar() {
        return this.options.cronFlavor === 'quartz' ? '?' : '*';
    }
    get radix() {
        return 10;
    }
    /* Update the cron output to that of the selected tab.
     * The cron output value is updated whenever a form is updated. To make it change in response to tab selection, we simply reset
     * the value of the form that goes into focus. */
    onTabFocus(idx) {
        try {
            const tabForm = this._tabs[idx] + 'Form';
            this[tabForm].setValue(this[tabForm].value);
        }
        catch (err) {
            throw (new Error(`Invalid tab selected! Tab Index: ${idx}`));
        }
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.state = this.getDefaultState();
            this.handleModelChange(this.cron);
            const [defaultHours, defaultMinutes, defaultSeconds] = this.options.defaultTime.split(':').map(Number);
            this.cronForm = new FormControl('0 0 1/1 * *');
            this.minutesForm = this.fb.group({
                seconds: [0],
                minutes: [1],
            });
            this.minutesForm.valueChanges.subscribe(value => this.computeMinutesCron(value));
            this.hourlyForm = this.fb.group({
                seconds: [0],
                minutes: [0],
                hours: [1]
            });
            this.hourlyForm.valueChanges.subscribe(value => this.computeHourlyCron(value));
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
            this.dailyForm.valueChanges.subscribe(value => this.computeDailyCron(value));
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
            this.weeklyForm.valueChanges.subscribe(next => this.computeWeeklyCron(next));
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
            this.monthlyForm.valueChanges.subscribe(next => this.computeMonthlyCron(next));
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
            this.yearlyForm.valueChanges.subscribe(next => this.computeYearlyCron(next));
            this.advancedForm = this.fb.group({
                expression: [this.isCronFlavorQuartz ? '0 15 10 L-2 * ? *' : '15 10 2 * *']
            });
            this.advancedForm.controls.expression.valueChanges.subscribe(next => this.computeAdvancedExpression(next));
        });
    }
    dayDisplay(day) {
        return Days[day];
    }
    monthWeekDisplay(monthWeekNumber) {
        return MonthWeeks[monthWeekNumber];
    }
    monthDisplay(month) {
        return Months[month];
    }
    monthDayDisplay(month) {
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
            return `${month}${this.getOrdinalSuffix(month)}`;
        }
    }
    writeValue(obj) {
        this.cron = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /* Unit Testing Functions Start
    *  We utilize these public functions, because you cannot test private functions
    */
    _testComputeMinutesCron(state) {
        this.computeMinutesCron(state);
        return this.cron;
    }
    _testComputeHourlyCron(state) {
        this.computeHourlyCron(state);
        return this.cron;
    }
    _testComputeDailyCron(state) {
        this.computeDailyCron(state);
        return this.cron;
    }
    _testComputeWeeklyCron(state) {
        this.computeWeeklyCron(state);
        return this.cron;
    }
    _testComputeMonthlyCron(state) {
        this.computeMonthlyCron(state);
        return this.cron;
    }
    _testComputeYearlyCron(state) {
        this.computeYearlyCron(state);
        return this.cron;
    }
    /* Unit Testing Functions End */
    hourToCron(hour, hourType) {
        if (this.options.use24HourTime) {
            return hour;
        }
        else {
            return hourType === 'AM' ? (hour === 12 ? 0 : hour) : (hour === 12 ? 12 : hour + 12);
        }
    }
    computeMinutesCron(state) {
        this.cron = `${this.isCronFlavorQuartz && !this.removeSeconds ? state.seconds : ''} 0/${state.minutes} * 1/1 * ${this.weekDayDefaultChar} ${!this.removeYears ? this.yearDefaultChar : ''}`.trim();
        this.cronForm.setValue(this.cron);
    }
    computeHourlyCron(state) {
        this.cron = `${this.isCronFlavorQuartz && !this.removeSeconds ? state.seconds : ''} ${state.minutes} 0/${state.hours} 1/1 * ${this.weekDayDefaultChar} ${!this.removeYears ? this.yearDefaultChar : ''}`.trim();
        this.cronForm.setValue(this.cron);
    }
    computeDailyCron(state) {
        switch (state.subTab) {
            case 'everyDay':
                this.cron = `${this.isCronFlavorQuartz && !this.removeSeconds ? state.everyDay.seconds : ''} ${state.everyDay.minutes} ${this.hourToCron(state.everyDay.hours, state.everyDay.hourType)} 1/${state.everyDay.days} * ${this.weekDayDefaultChar} ${!this.removeYears ? this.yearDefaultChar : ''}`.trim();
                break;
            case 'everyWeekDay':
                this.cron = `${this.isCronFlavorQuartz && !this.removeSeconds ? state.everyWeekDay.seconds : ''} ${state.everyWeekDay.minutes} ${this.hourToCron(state.everyWeekDay.hours, state.everyWeekDay.hourType)} ${this.monthDayDefaultChar} * MON-FRI ${!this.removeYears ? this.yearDefaultChar : ''}`.trim();
                break;
            default:
                throw new Error('Invalid cron daily subtab selection');
        }
        this.cronForm.setValue(this.cron);
    }
    computeWeeklyCron(state) {
        const days = this.selectOptions.days
            .reduce((acc, day) => state[day] ? acc.concat([day]) : acc, [])
            .join(',');
        this.cron = `${this.isCronFlavorQuartz && !this.removeSeconds ? state.seconds : ''} ${state.minutes} ${this.hourToCron(state.hours, state.hourType)} ${this.monthDayDefaultChar} * ${days} ${!this.removeYears ? this.yearDefaultChar : ''}`.trim();
        this.cronForm.setValue(this.cron);
    }
    computeMonthlyCron(state) {
        var _a;
        switch (state.subTab) {
            case 'specificDay':
                this.cron = `${this.isCronFlavorQuartz && !this.removeSeconds ? state.specificDay.seconds : ''} ${state.specificDay.minutes} ${this.hourToCron(state.specificDay.hours, state.specificDay.hourType)} ${state.specificDay.day}${((_a = state.specificDay) === null || _a === void 0 ? void 0 : _a.nearestWeekday) ? 'W' : ''} 1/${state.specificDay.months} ${this.weekDayDefaultChar} ${!this.removeYears ? this.yearDefaultChar : ''}`.trim();
                break;
            case 'specificWeekDay':
                this.cron = `${this.isCronFlavorQuartz && !this.removeSeconds ? state.specificWeekDay.seconds : ''} ${state.specificWeekDay.minutes} ${this.hourToCron(state.specificWeekDay.hours, state.specificWeekDay.hourType)} ${this.monthDayDefaultChar} 1/${state.specificWeekDay.months} ${state.specificWeekDay.day}${state.specificWeekDay.monthWeek} ${!this.removeYears ? this.yearDefaultChar : ''}`.trim();
                break;
            default:
                throw new Error('Invalid cron monthly subtab selection');
        }
        this.cronForm.setValue(this.cron);
    }
    computeYearlyCron(state) {
        var _a;
        switch (state.subTab) {
            case 'specificMonthDay':
                this.cron = `${this.isCronFlavorQuartz && !this.removeSeconds ? state.specificMonthDay.seconds : ''} ${state.specificMonthDay.minutes} ${this.hourToCron(state.specificMonthDay.hours, state.specificMonthDay.hourType)} ${state.specificMonthDay.day}${((_a = state.specificMonthDay) === null || _a === void 0 ? void 0 : _a.nearestWeekday) ? 'W' : ''} ${state.specificMonthDay.month} ${this.weekDayDefaultChar} ${!this.removeYears ? this.yearDefaultChar : ''}`.trim();
                break;
            case 'specificMonthWeek':
                this.cron = `${this.isCronFlavorQuartz && !this.removeSeconds ? state.specificMonthWeek.seconds : ''} ${state.specificMonthWeek.minutes} ${this.hourToCron(state.specificMonthWeek.hours, state.specificMonthWeek.hourType)} ${this.monthDayDefaultChar} ${state.specificMonthWeek.month} ${state.specificMonthWeek.day}${state.specificMonthWeek.monthWeek} ${!this.removeYears ? this.yearDefaultChar : ''}`.trim();
                break;
            default:
                throw new Error('Invalid cron yearly subtab selection');
        }
        this.cronForm.setValue(this.cron);
    }
    computeAdvancedExpression(expression) {
        this.cron = expression;
        this.cronForm.setValue(this.cron);
    }
    getAmPmHour(hour) {
        return this.options.use24HourTime ? hour : (hour + 11) % 12 + 1;
    }
    getHourType(hour) {
        return this.options.use24HourTime ? undefined : (hour >= 12 ? 'PM' : 'AM');
    }
    throwErrors() {
        if (this.isCronFlavorQuartz) {
            throw new Error('Invalid quartz cron expression, there must be 6 or 7 segments');
        }
        else if (this.isCronFlavorStandard) {
            throw new Error('Invalid standard cron expression, there must be 5 segments');
        }
        else {
            throw new Error('Invalid cronFlavor selected, please choose quartz or standard');
        }
    }
    handleModelChange(cron) {
        this.isDirty = !!this.isDirty;
        if (this.isDirty) {
            this.isDirty = false;
            return;
        }
        if (!this.cronIsValid(cron)) {
            this.throwErrors();
        }
        const origCron = cron;
        if (cron.split(' ').length === 5 && this.isCronFlavorStandard) {
            cron = `0 ${cron} *`;
        }
        const [seconds, minutes, hours, dayOfMonth, month, dayOfWeek] = cron.split(' ');
        // Generic values used across multiple tabs.
        const parsedSeconds = parseInt(seconds, this.radix);
        const parsedMinutes = parseInt(minutes, this.radix);
        const parsedHours = parseInt(hours, this.radix);
        const parsedAmPmHours = this.getAmPmHour(parsedHours);
        const parsedHourType = this.getHourType(parsedHours);
        const day = dayOfWeek.substr(0, 3);
        const monthWeek = dayOfWeek.substr(3);
        const parsedMonth = parseInt(month, this.radix);
        const months = parseInt(month.substring(2), this.radix);
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
                this.selectOptions.days.forEach(weekDay => this.state.weekly[weekDay] = false);
                dayOfWeek.split(',').forEach(weekDay => this.state.weekly[weekDay] = true);
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
    }
    cronIsValid(cron) {
        if (cron) {
            const cronParts = cron.split(' ');
            return (this.isCronFlavorQuartz && (cronParts.length === 6
                || cronParts.length === 7)
                || (this.isCronFlavorStandard && cronParts.length === 5));
        }
        return false;
    }
    getDefaultState() {
        const [defaultHours, defaultMinutes, defaultSeconds] = this.options.defaultTime.split(':').map(Number);
        const defaultAmPmHour = this.getAmPmHour(defaultHours);
        const defaultHourType = this.getHourType(defaultHours);
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
    }
    getOrdinalSuffix(value) {
        if (value.length > 1) {
            const secondToLastDigit = value.charAt(value.length - 2);
            if (secondToLastDigit === '1') {
                return 'th';
            }
        }
        const lastDigit = value.charAt(value.length - 1);
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
    }
    getSelectOptions() {
        return {
            months: this.getRange(1, 12),
            monthWeeks: ['#1', '#2', '#3', '#4', '#5', 'L'],
            days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            minutes: this.getRange(0, 59),
            fullMinutes: this.getRange(0, 59),
            seconds: this.getRange(0, 59),
            hours: this.getRange(1, 23),
            monthDays: this.getRange(1, 31),
            monthDaysWithLasts: [...[...this.getRange(1, 31).map(String)], 'L'],
            monthDaysWithOutLasts: [...[...this.getRange(1, 31).map(String)]],
            hourTypes: ['AM', 'PM']
        };
    }
    getRange(start, end) {
        const length = end - start + 1;
        return Array.apply(null, Array(length)).map((_, i) => i + start);
    }
}
CronGenComponent.ɵfac = function CronGenComponent_Factory(t) { return new (t || CronGenComponent)(ɵɵdirectiveInject(FormBuilder)); };
CronGenComponent.ɵcmp = ɵɵdefineComponent({ type: CronGenComponent, selectors: [["cron-editor"]], inputs: { backgroundColor: "backgroundColor", color: "color", disabled: "disabled", options: "options", cron: "cron" }, features: [ɵɵProvidersFeature([CRON_VALUE_ACCESSOR])], decls: 9, vars: 9, consts: [[1, "cron-editor-main"], [1, "cron-editor-container", 3, "backgroundColor", "color", "selectedIndexChange"], ["class", "cron-editor-tab minutes-tab", "label", "Minutes", 4, "ngIf"], ["class", "cron-editor-tab hourly-tab", "label", "Hourly", 4, "ngIf"], ["class", "cron-editor-tab daily-tab", "label", "Daily", 4, "ngIf"], ["class", "cron-editor-tab weekly-tab", "label", "Weekly", 4, "ngIf"], ["class", "cron-editor-tab monthly-tab", "label", "Monthly", 4, "ngIf"], ["class", "cron-editor-tab yearly-tab", "label", "Yearly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Advanced", 4, "ngIf"], ["label", "Minutes", 1, "cron-editor-tab", "minutes-tab"], [1, "cron-editor-tab-content", "minutes-content"], [1, "cron-form-label"], [3, "formGroup", "use24HourTime", "hideHours", "hideSeconds"], ["label", "Hourly", 1, "cron-editor-tab", "hourly-tab"], [1, "cron-editor-tab-content", "hourly-content"], [3, "formGroup", "use24HourTime", "hideSeconds"], ["label", "Daily", 1, "cron-editor-tab", "daily-tab"], [1, "cron-editor-tab-content", "daily-content", 3, "formGroup"], ["formControlName", "subTab", 1, "cron-editor-radio-group"], ["name", "subTab", "value", "everyDay", "checked", "checked", 3, "ngClass"], ["formGroupName", "everyDay", 1, "day-picker", "col-md-4"], ["formControlName", "days"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "everyDay", 3, "use24HourTime", "hideSeconds"], ["name", "subTab", "value", "everyWeekDay", 3, "ngClass"], ["formGroupName", "everyWeekDay", 3, "use24HourTime", "hideSeconds"], [3, "value"], ["label", "Weekly", 1, "cron-editor-tab", "weekly-tab"], [1, "cron-editor-tab-content", "weekly-content"], [1, "cron-form-days-group", 3, "formGroup"], [3, "ngClass", "formControlName", 4, "ngFor", "ngForOf"], [1, "cron-form-label", "time-label"], [3, "ngClass", "formControlName"], ["label", "Monthly", 1, "cron-editor-tab", "monthly-tab"], [1, "cron-editor-tab-content", "monthly-content", 3, "formGroup"], ["formControlName", "subTab"], ["name", "monthly-radio", "value", "specificDay", "formGroupName", "specificDay", 3, "ngClass"], [1, "day-picker"], ["formControlName", "day", 1, "month-days"], [4, "ngIf"], [1, "month-picker"], ["formControlName", "months", 1, "months-small", 3, "ngClass"], [3, "disabled", "formGroup", "use24HourTime", "hideSeconds"], [3, "formGroup"], ["formControlName", "nearestWeekday", 3, "ngClass", 4, "ngIf"], ["name", "monthly-radio", "value", "specificWeekDay", "formGroupName", "specificWeekDay", 3, "ngClass"], [1, "week-picker"], ["formControlName", "monthWeek", 1, "day-order-in-month", 3, "ngClass"], [1, "weekday-picker"], ["formControlName", "day", 1, "week-days", 3, "ngClass"], ["formControlName", "months", 1, "months-small"], ["formControlName", "nearestWeekday", 3, "ngClass"], ["label", "Yearly", 1, "cron-editor-tab", "yearly-tab"], [1, "cron-editor-tab-content", "yearly-content", 3, "formGroup"], ["name", "yearly-radio", "value", "specificMonthDay", 3, "ngClass"], ["class", "day-picker", "formGroupName", "specificMonthDay", 4, "ngIf"], ["formGroupName", "specificMonthDay", 4, "ngIf"], ["formGroupName", "specificMonthDay", 1, "month-picker"], ["formControlName", "month", 1, "months"], ["name", "yearly-radio", "value", "specificMonthWeek", 3, "ngClass"], ["formGroupName", "specificMonthWeek", 1, "week-picker"], ["formControlName", "monthWeek", 1, "day-order-in-month"], ["formGroupName", "specificMonthWeek", 1, "weekday-picker"], ["formControlName", "day", 1, "week-days"], ["formGroupName", "specificMonthWeek", 1, "month-picker"], ["formGroupName", "specificMonthDay", 1, "day-picker"], ["formGroupName", "specificMonthDay"], ["label", "Advanced", 1, "cron-editor-tab"], [1, "cron-editor-tab-content", 3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "expression", 1, "advanced-cron-editor-input"]], template: function CronGenComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "section", 0);
        ɵɵelementStart(1, "mat-tab-group", 1);
        ɵɵlistener("selectedIndexChange", function CronGenComponent_Template_mat_tab_group_selectedIndexChange_1_listener($event) { return ctx.onTabFocus($event); });
        ɵɵtemplate(2, CronGenComponent_mat_tab_2_Template, 5, 5, "mat-tab", 2);
        ɵɵtemplate(3, CronGenComponent_mat_tab_3_Template, 5, 4, "mat-tab", 3);
        ɵɵtemplate(4, CronGenComponent_mat_tab_4_Template, 18, 11, "mat-tab", 4);
        ɵɵtemplate(5, CronGenComponent_mat_tab_5_Template, 10, 7, "mat-tab", 5);
        ɵɵtemplate(6, CronGenComponent_mat_tab_6_Template, 47, 27, "mat-tab", 6);
        ɵɵtemplate(7, CronGenComponent_mat_tab_7_Template, 43, 25, "mat-tab", 7);
        ɵɵtemplate(8, CronGenComponent_mat_tab_8_Template, 6, 1, "mat-tab", 8);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(1);
        ɵɵproperty("backgroundColor", ctx.backgroundColor)("color", ctx.color);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideMinutesTab));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideHourlyTab));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideDailyTab));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideWeeklyTab));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideMonthlyTab));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideYearlyTab));
        ɵɵadvance(1);
        ɵɵproperty("ngIf", !(ctx.options == null ? null : ctx.options.hideAdvancedTab));
    } }, directives: [MatTabGroup, NgIf, MatTab, TimePickerComponent, NgControlStatusGroup, FormGroupDirective, MatRadioGroup, NgControlStatus, FormControlName, MatRadioButton, NgClass, MatFormField, FormGroupName, MatLabel, MatSelect, NgForOf, MatOption, MatCheckbox, MatInput, DefaultValueAccessor], styles: [".cron-editor-main[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);width:100%}.cron-editor-tab-content[_ngcontent-%COMP%]{border-radius:8px;height:200px;margin-right:10px;margin-top:10px;max-width:700px;overflow:hidden}.cron-editor-tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.cron-editor-tab-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{font-size:20px;margin:10px 10px 5px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}.hourly-content[_ngcontent-%COMP%]   .cron-form-label[_ngcontent-%COMP%], .hourly-content[_ngcontent-%COMP%]   cron-time-picker[_ngcontent-%COMP%], .minutes-content[_ngcontent-%COMP%]   .cron-form-label[_ngcontent-%COMP%], .minutes-content[_ngcontent-%COMP%]   cron-time-picker[_ngcontent-%COMP%]{display:inline}.cron-form-label[_ngcontent-%COMP%]{font-weight:500;margin-left:5px;margin-right:5px}.separator[_ngcontent-%COMP%]{font-size:20px;font-weight:500;margin-left:3px;margin-right:3px}.frequency-group[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]     .mat-tab-body-content{padding-left:10px}[_nghost-%COMP%]     .mat-tab-label-container{display:flex;justify-content:space-evenly}[_nghost-%COMP%]     .mat-tab-labels{justify-content:space-around}[_nghost-%COMP%]     .mat-tab-label{min-width:100px}[_nghost-%COMP%]     .mat-radio-container{display:inline-flex}[_nghost-%COMP%]     .mat-radio-label-content{align-items:baseline;display:inline-flex;padding-top:10px}[_nghost-%COMP%]     mat-radio-button{max-width:100%;overflow:hidden;padding-left:10px}[_nghost-%COMP%]     mat-radio-button:not(.mat-radio-checked){opacity:.4}[_nghost-%COMP%]     .monthly-content .mat-form-field, [_nghost-%COMP%]     .yearly-content .mat-form-field{max-width:90px}[_nghost-%COMP%]     .monthly-content .weekday-picker, [_nghost-%COMP%]     .yearly-content .weekday-picker{margin-left:5px}[_nghost-%COMP%]     .monthly-content .month-picker, [_nghost-%COMP%]     .monthly-content .weekday-picker, [_nghost-%COMP%]     .yearly-content .month-picker, [_nghost-%COMP%]     .yearly-content .weekday-picker{max-width:125px}[_nghost-%COMP%]     .daily-content .mat-form-field, [_nghost-%COMP%]     .weekly-content .mat-form-field, [_nghost-%COMP%]     .yearly-content .mat-form-field{max-width:100px}[_nghost-%COMP%]     .daily-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .monthly-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .weekly-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .yearly-content cron-time-picker .mat-form-field{max-width:75px}[_nghost-%COMP%]     .cron-editor-wrapped-radio{margin-bottom:10px;max-width:95%}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-form-field-wrapper{padding-bottom:.5em}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-radio-label-content{flex-wrap:wrap}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-radio-container{bottom:6px;position:relative}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CronGenComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'cron-editor',
                templateUrl: './cron-editor.template.html',
                styleUrls: ['./cron-editor.component.scss'],
                providers: [CRON_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: FormBuilder }]; }, { backgroundColor: [{
            type: Input
        }], color: [{
            type: Input
        }], disabled: [{
            type: Input
        }], options: [{
            type: Input
        }], cron: [{
            type: Input
        }] }); })();

class CronEditorModule {
}
CronEditorModule.ɵfac = function CronEditorModule_Factory(t) { return new (t || CronEditorModule)(); };
CronEditorModule.ɵmod = ɵɵdefineNgModule({ type: CronEditorModule });
CronEditorModule.ɵinj = ɵɵdefineInjector({ providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
    ], imports: [[
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            MatTabsModule,
            MatListModule,
            MatSelectModule,
            MatInputModule,
            MatRadioModule,
            MatCheckboxModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CronEditorModule, { declarations: [TimePickerComponent, CronGenComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatListModule,
        MatSelectModule,
        MatInputModule,
        MatRadioModule,
        MatCheckboxModule], exports: [TimePickerComponent, CronGenComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(CronEditorModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    MatTabsModule,
                    MatListModule,
                    MatSelectModule,
                    MatInputModule,
                    MatRadioModule,
                    MatCheckboxModule
                ],
                exports: [TimePickerComponent, CronGenComponent],
                declarations: [TimePickerComponent, CronGenComponent],
                providers: [
                    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of pmsys
 */

/**
 * Generated bundle index. Do not edit.
 */

export { CRON_VALUE_ACCESSOR, CronEditorModule, CronGenComponent, Days, MonthWeeks, Months, TimePickerComponent };
//# sourceMappingURL=ngx-cron-editor.js.map
