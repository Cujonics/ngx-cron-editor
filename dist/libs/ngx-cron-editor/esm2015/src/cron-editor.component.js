import { __awaiter } from "tslib";
import { Component, forwardRef, Input } from '@angular/core';
import { Days, Months, MonthWeeks } from './enums';
import { FormBuilder, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/tabs";
import * as i3 from "@angular/common";
import * as i4 from "./cron-time-picker.component";
import * as i5 from "@angular/material/radio";
import * as i6 from "@angular/material/form-field";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/core";
import * as i9 from "@angular/material/checkbox";
import * as i10 from "@angular/material/input";
function CronGenComponent_mat_tab_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 9);
    i0.ɵɵelementStart(1, "div", 10);
    i0.ɵɵelementStart(2, "p", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "cron-time-picker", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((ctx_r0.options == null ? null : ctx_r0.options.texts == null ? null : ctx_r0.options.texts.frequencyPrefix) || "Every");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r0.minutesForm)("use24HourTime", true)("hideHours", true)("hideSeconds", (ctx_r0.options == null ? null : ctx_r0.options.hideSeconds) || !ctx_r0.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tab", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵelementStart(2, "p", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "cron-time-picker", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate((ctx_r1.options == null ? null : ctx_r1.options.texts == null ? null : ctx_r1.options.texts.frequencyPrefix) || "Every");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r1.hourlyForm)("use24HourTime", ctx_r1.options == null ? null : ctx_r1.options.use24HourTime)("hideSeconds", (ctx_r1.options == null ? null : ctx_r1.options.hideSeconds) || !ctx_r1.isCronFlavorQuartz);
} }
function CronGenComponent_mat_tab_4_mat_option_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDay_r8 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", monthDay_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", monthDay_r8, " ", ctx_r7.hideSelectSuffixes ? "" : "day(s)", " ");
} }
function CronGenComponent_mat_tab_4_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
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
} }
function CronGenComponent_mat_tab_5_mat_checkbox_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-checkbox", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r10 = ctx.$implicit;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("formControlName", day_r10.substr(0, 3).toUpperCase());
    i0.ɵɵproperty("ngClass", (ctx_r9.options == null ? null : ctx_r9.options.formCheckboxClass) || "checkbox-margin");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", day_r10, " ");
} }
function CronGenComponent_mat_tab_5_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
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
} }
function CronGenComponent_mat_tab_6_ng_container_10_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithLast_r19 = ctx.$implicit;
    const ctx_r18 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithLast_r19);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", ctx_r18.monthDayDisplay(monthDaysWithLast_r19), " ", ctx_r18.hideSelectSuffixes ? "" : "day", " ");
} }
function CronGenComponent_mat_tab_6_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CronGenComponent_mat_tab_6_ng_container_10_mat_option_1_Template, 2, 3, "mat-option", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r11.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_6_ng_container_11_mat_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithOutLast_r21 = ctx.$implicit;
    const ctx_r20 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithOutLast_r21);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", ctx_r20.monthDayDisplay(monthDaysWithOutLast_r21), " ", ctx_r20.hideSelectSuffixes ? "" : "day", " ");
} }
function CronGenComponent_mat_tab_6_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CronGenComponent_mat_tab_6_ng_container_11_mat_option_1_Template, 2, 3, "mat-option", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r12.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_6_mat_option_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r22 = ctx.$implicit;
    const ctx_r13 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", month_r22);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", month_r22, " ", ctx_r13.hideSelectSuffixes ? "" : "month(s)", " ");
} }
function CronGenComponent_mat_tab_6_mat_checkbox_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-checkbox", 51);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", (ctx_r14.options == null ? null : ctx_r14.options.formCheckboxClass) || "checkbox-margin");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", (ctx_r14.options == null ? null : ctx_r14.options.texts == null ? null : ctx_r14.options.texts.nearestWeekdayText) || "during the nearest weekday", " ");
} }
function CronGenComponent_mat_tab_6_mat_option_31_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthWeek_r23 = ctx.$implicit;
    const ctx_r15 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", monthWeek_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r15.monthWeekDisplay(monthWeek_r23), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_36_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r24 = ctx.$implicit;
    const ctx_r16 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", day_r24);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r16.dayDisplay(day_r24), " ");
} }
function CronGenComponent_mat_tab_6_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r25 = ctx.$implicit;
    const ctx_r17 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", month_r25);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate2(" ", month_r25, " ", ctx_r17.hideSelectSuffixes ? "" : "month(s)", " ");
} }
function CronGenComponent_mat_tab_6_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
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
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithLast_r34 = ctx.$implicit;
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithLast_r34);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r33.monthDayDisplay(monthDaysWithLast_r34), " ");
} }
function CronGenComponent_mat_tab_7_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 65);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 38);
    i0.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_6_mat_option_4_Template, 2, 2, "mat-option", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r26.selectOptions.monthDaysWithLasts);
} }
function CronGenComponent_mat_tab_7_mat_form_field_7_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthDaysWithOutLast_r36 = ctx.$implicit;
    const ctx_r35 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("value", monthDaysWithOutLast_r36);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r35.monthDayDisplay(monthDaysWithOutLast_r36), " ");
} }
function CronGenComponent_mat_tab_7_mat_form_field_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-form-field", 66);
    i0.ɵɵelementStart(1, "mat-label");
    i0.ɵɵtext(2, "Day");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-select", 38);
    i0.ɵɵtemplate(4, CronGenComponent_mat_tab_7_mat_form_field_7_mat_option_4_Template, 2, 2, "mat-option", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r27 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r27.selectOptions.monthDaysWithOutLasts);
} }
function CronGenComponent_mat_tab_7_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r37 = ctx.$implicit;
    const ctx_r28 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", month_r37);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r28.monthDisplay(month_r37), " ");
} }
function CronGenComponent_mat_tab_7_mat_checkbox_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-checkbox", 51);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r29 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", (ctx_r29.options == null ? null : ctx_r29.options.formCheckboxClass) || "checkbox-margin");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", (ctx_r29.options == null ? null : ctx_r29.options.texts == null ? null : ctx_r29.options.texts.nearestWeekdayText) || "during the nearest weekday", " ");
} }
function CronGenComponent_mat_tab_7_mat_option_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const monthWeek_r38 = ctx.$implicit;
    const ctx_r30 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", monthWeek_r38);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r30.monthWeekDisplay(monthWeek_r38), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r39 = ctx.$implicit;
    const ctx_r31 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", day_r39);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r31.dayDisplay(day_r39), " ");
} }
function CronGenComponent_mat_tab_7_mat_option_39_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r40 = ctx.$implicit;
    const ctx_r32 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("value", month_r40);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r32.monthDisplay(month_r40), " ");
} }
function CronGenComponent_mat_tab_7_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
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
} }
function CronGenComponent_mat_tab_8_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("formGroup", ctx_r6.advancedForm);
} }
export const CRON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CronGenComponent),
    multi: true,
};
export class CronGenComponent {
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
CronGenComponent.ɵfac = function CronGenComponent_Factory(t) { return new (t || CronGenComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); };
CronGenComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CronGenComponent, selectors: [["cron-editor"]], inputs: { backgroundColor: "backgroundColor", color: "color", disabled: "disabled", options: "options", cron: "cron" }, features: [i0.ɵɵProvidersFeature([CRON_VALUE_ACCESSOR])], decls: 9, vars: 9, consts: [[1, "cron-editor-main"], [1, "cron-editor-container", 3, "backgroundColor", "color", "selectedIndexChange"], ["class", "cron-editor-tab minutes-tab", "label", "Minutes", 4, "ngIf"], ["class", "cron-editor-tab hourly-tab", "label", "Hourly", 4, "ngIf"], ["class", "cron-editor-tab daily-tab", "label", "Daily", 4, "ngIf"], ["class", "cron-editor-tab weekly-tab", "label", "Weekly", 4, "ngIf"], ["class", "cron-editor-tab monthly-tab", "label", "Monthly", 4, "ngIf"], ["class", "cron-editor-tab yearly-tab", "label", "Yearly", 4, "ngIf"], ["class", "cron-editor-tab", "label", "Advanced", 4, "ngIf"], ["label", "Minutes", 1, "cron-editor-tab", "minutes-tab"], [1, "cron-editor-tab-content", "minutes-content"], [1, "cron-form-label"], [3, "formGroup", "use24HourTime", "hideHours", "hideSeconds"], ["label", "Hourly", 1, "cron-editor-tab", "hourly-tab"], [1, "cron-editor-tab-content", "hourly-content"], [3, "formGroup", "use24HourTime", "hideSeconds"], ["label", "Daily", 1, "cron-editor-tab", "daily-tab"], [1, "cron-editor-tab-content", "daily-content", 3, "formGroup"], ["formControlName", "subTab", 1, "cron-editor-radio-group"], ["name", "subTab", "value", "everyDay", "checked", "checked", 3, "ngClass"], ["formGroupName", "everyDay", 1, "day-picker", "col-md-4"], ["formControlName", "days"], [3, "value", 4, "ngFor", "ngForOf"], ["formGroupName", "everyDay", 3, "use24HourTime", "hideSeconds"], ["name", "subTab", "value", "everyWeekDay", 3, "ngClass"], ["formGroupName", "everyWeekDay", 3, "use24HourTime", "hideSeconds"], [3, "value"], ["label", "Weekly", 1, "cron-editor-tab", "weekly-tab"], [1, "cron-editor-tab-content", "weekly-content"], [1, "cron-form-days-group", 3, "formGroup"], [3, "ngClass", "formControlName", 4, "ngFor", "ngForOf"], [1, "cron-form-label", "time-label"], [3, "ngClass", "formControlName"], ["label", "Monthly", 1, "cron-editor-tab", "monthly-tab"], [1, "cron-editor-tab-content", "monthly-content", 3, "formGroup"], ["formControlName", "subTab"], ["name", "monthly-radio", "value", "specificDay", "formGroupName", "specificDay", 3, "ngClass"], [1, "day-picker"], ["formControlName", "day", 1, "month-days"], [4, "ngIf"], [1, "month-picker"], ["formControlName", "months", 1, "months-small", 3, "ngClass"], [3, "disabled", "formGroup", "use24HourTime", "hideSeconds"], [3, "formGroup"], ["formControlName", "nearestWeekday", 3, "ngClass", 4, "ngIf"], ["name", "monthly-radio", "value", "specificWeekDay", "formGroupName", "specificWeekDay", 3, "ngClass"], [1, "week-picker"], ["formControlName", "monthWeek", 1, "day-order-in-month", 3, "ngClass"], [1, "weekday-picker"], ["formControlName", "day", 1, "week-days", 3, "ngClass"], ["formControlName", "months", 1, "months-small"], ["formControlName", "nearestWeekday", 3, "ngClass"], ["label", "Yearly", 1, "cron-editor-tab", "yearly-tab"], [1, "cron-editor-tab-content", "yearly-content", 3, "formGroup"], ["name", "yearly-radio", "value", "specificMonthDay", 3, "ngClass"], ["class", "day-picker", "formGroupName", "specificMonthDay", 4, "ngIf"], ["formGroupName", "specificMonthDay", 4, "ngIf"], ["formGroupName", "specificMonthDay", 1, "month-picker"], ["formControlName", "month", 1, "months"], ["name", "yearly-radio", "value", "specificMonthWeek", 3, "ngClass"], ["formGroupName", "specificMonthWeek", 1, "week-picker"], ["formControlName", "monthWeek", 1, "day-order-in-month"], ["formGroupName", "specificMonthWeek", 1, "weekday-picker"], ["formControlName", "day", 1, "week-days"], ["formGroupName", "specificMonthWeek", 1, "month-picker"], ["formGroupName", "specificMonthDay", 1, "day-picker"], ["formGroupName", "specificMonthDay"], ["label", "Advanced", 1, "cron-editor-tab"], [1, "cron-editor-tab-content", 3, "formGroup"], ["matInput", "", "type", "text", "formControlName", "expression", 1, "advanced-cron-editor-input"]], template: function CronGenComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, directives: [i2.MatTabGroup, i3.NgIf, i2.MatTab, i4.TimePickerComponent, i1.NgControlStatusGroup, i1.FormGroupDirective, i5.MatRadioGroup, i1.NgControlStatus, i1.FormControlName, i5.MatRadioButton, i3.NgClass, i6.MatFormField, i1.FormGroupName, i6.MatLabel, i7.MatSelect, i3.NgForOf, i8.MatOption, i9.MatCheckbox, i10.MatInput, i1.DefaultValueAccessor], styles: [".cron-editor-main[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);width:100%}.cron-editor-tab-content[_ngcontent-%COMP%]{border-radius:8px;height:200px;margin-right:10px;margin-top:10px;max-width:700px;overflow:hidden}.cron-editor-tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.cron-editor-tab-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{font-size:20px;margin:10px 10px 5px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}.hourly-content[_ngcontent-%COMP%]   .cron-form-label[_ngcontent-%COMP%], .hourly-content[_ngcontent-%COMP%]   cron-time-picker[_ngcontent-%COMP%], .minutes-content[_ngcontent-%COMP%]   .cron-form-label[_ngcontent-%COMP%], .minutes-content[_ngcontent-%COMP%]   cron-time-picker[_ngcontent-%COMP%]{display:inline}.cron-form-label[_ngcontent-%COMP%]{font-weight:500;margin-left:5px;margin-right:5px}.separator[_ngcontent-%COMP%]{font-size:20px;font-weight:500;margin-left:3px;margin-right:3px}.frequency-group[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]     .mat-tab-body-content{padding-left:10px}[_nghost-%COMP%]     .mat-tab-label-container{display:flex;justify-content:space-evenly}[_nghost-%COMP%]     .mat-tab-labels{justify-content:space-around}[_nghost-%COMP%]     .mat-tab-label{min-width:100px}[_nghost-%COMP%]     .mat-radio-container{display:inline-flex}[_nghost-%COMP%]     .mat-radio-label-content{align-items:baseline;display:inline-flex;padding-top:10px}[_nghost-%COMP%]     mat-radio-button{max-width:100%;overflow:hidden;padding-left:10px}[_nghost-%COMP%]     mat-radio-button:not(.mat-radio-checked){opacity:.4}[_nghost-%COMP%]     .monthly-content .mat-form-field, [_nghost-%COMP%]     .yearly-content .mat-form-field{max-width:90px}[_nghost-%COMP%]     .monthly-content .weekday-picker, [_nghost-%COMP%]     .yearly-content .weekday-picker{margin-left:5px}[_nghost-%COMP%]     .monthly-content .month-picker, [_nghost-%COMP%]     .monthly-content .weekday-picker, [_nghost-%COMP%]     .yearly-content .month-picker, [_nghost-%COMP%]     .yearly-content .weekday-picker{max-width:125px}[_nghost-%COMP%]     .daily-content .mat-form-field, [_nghost-%COMP%]     .weekly-content .mat-form-field, [_nghost-%COMP%]     .yearly-content .mat-form-field{max-width:100px}[_nghost-%COMP%]     .daily-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .monthly-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .weekly-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .yearly-content cron-time-picker .mat-form-field{max-width:75px}[_nghost-%COMP%]     .cron-editor-wrapped-radio{margin-bottom:10px;max-width:95%}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-form-field-wrapper{padding-bottom:.5em}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-radio-label-content{flex-wrap:wrap}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-radio-container{bottom:6px;position:relative}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CronGenComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'cron-editor',
                templateUrl: './cron-editor.template.html',
                styleUrls: ['./cron-editor.component.scss'],
                providers: [CRON_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: i1.FormBuilder }]; }, { backgroundColor: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL2xpYnMvbmd4LWNyb24tZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2Nyb24tZWRpdG9yLmNvbXBvbmVudC50cyIsInNyYy9jcm9uLWVkaXRvci50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVMsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sU0FBUyxDQUFDO0FBQ2pELE9BQU8sRUFBdUIsV0FBVyxFQUFFLFdBQVcsRUFBYSxpQkFBaUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7O0lDRXhHLGtDQUE4RjtJQUM1RiwrQkFBcUQ7SUFDbkQsNkJBQTJCO0lBQUEsWUFBZ0Q7SUFBQSxpQkFBSTtJQUMvRSx1Q0FLbUI7SUFDckIsaUJBQU07SUFDUixpQkFBVTs7O0lBUnFCLGVBQWdEO0lBQWhELDZJQUFnRDtJQUV6RSxlQUF5QjtJQUF6Qiw4Q0FBeUIsdUJBQUEsbUJBQUEsMkdBQUE7OztJQVMvQixtQ0FBMkY7SUFDekYsK0JBQW9EO0lBQ2xELDZCQUEyQjtJQUFBLFlBQWdEO0lBQUEsaUJBQUk7SUFDL0UsdUNBR21CO0lBQ3JCLGlCQUFNO0lBQ1IsaUJBQVU7OztJQU5xQixlQUFnRDtJQUFoRCw2SUFBZ0Q7SUFDekQsZUFBd0I7SUFBeEIsNkNBQXdCLCtFQUFBLDJHQUFBOzs7SUFvQmxDLHNDQUFnRjtJQUM5RSxZQUNGO0lBQUEsaUJBQWE7Ozs7SUFGZ0QsbUNBQWtCO0lBQzdFLGVBQ0Y7SUFERSw0RkFDRjs7O0lBZFosbUNBQXdGO0lBQ3RGLCtCQUEyRTtJQUN6RSwyQ0FBMEU7SUFHeEUsNENBQ29DO0lBQ2xDLDZCQUEyQjtJQUFBLFlBQStDO0lBQUEsaUJBQUk7SUFFOUUsMENBQXFF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LENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNyRSxDQUFDOztnRkF2cUJRLGdCQUFnQjtxREFBaEIsZ0JBQWdCLHlMQUZkLENBQUMsbUJBQW1CLENBQUM7UUNsQnBDLGtDQUFrQztRQUNoQyx3Q0FDbUU7UUFEdEIsc0lBQXVCLHNCQUFrQixJQUFDO1FBSXJGLHlFQVVVO1FBR1YseUVBUVU7UUFHViwyRUF5Q1U7UUFHViwwRUFzQlU7UUFHViwyRUFzR1U7UUFHViwyRUFzR1U7UUFHVix5RUFPVTtRQUNaLGlCQUFnQjtRQUNsQixpQkFBVTs7UUEzVE8sZUFBbUM7UUFBbkMscURBQW1DLG9CQUFBO1FBR2MsZUFBOEI7UUFBOUIsaUZBQThCO1FBYWhDLGVBQTZCO1FBQTdCLGdGQUE2QjtRQVcvQixlQUE0QjtRQUE1QiwrRUFBNEI7UUE0QzFCLGVBQTZCO1FBQTdCLGdGQUE2QjtRQXlCM0IsZUFBOEI7UUFBOUIsaUZBQThCO1FBeUdoQyxlQUE2QjtRQUE3QixnRkFBNkI7UUF5R3RDLGVBQStCO1FBQS9CLGtGQUErQjs7dUZEaFN6RSxnQkFBZ0I7Y0FQNUIsU0FBUztlQUFDO2dCQUNQLDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFdBQVcsRUFBRSw2QkFBNkI7Z0JBQzFDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2dCQUMzQyxTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUNuQzs4REFHbUIsZUFBZTtrQkFBOUIsS0FBSztZQUNVLEtBQUs7a0JBQXBCLEtBQUs7WUFDVSxRQUFRO2tCQUF2QixLQUFLO1lBQ1UsT0FBTztrQkFBdEIsS0FBSztZQStCTyxJQUFJO2tCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIGZvcndhcmRSZWYsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Nyb25PcHRpb25zfSBmcm9tICcuL0Nyb25PcHRpb25zJztcclxuaW1wb3J0IHtEYXlzLCBNb250aHMsIE1vbnRoV2Vla3N9IGZyb20gJy4vZW51bXMnO1xyXG5pbXBvcnQge0NvbnRyb2xWYWx1ZUFjY2Vzc29yLCBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtUaGVtZVBhbGV0dGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDUk9OX1ZBTFVFX0FDQ0VTU09SOiBhbnkgPSB7XHJcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENyb25HZW5Db21wb25lbnQpLFxyXG4gICAgbXVsdGk6IHRydWUsXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICAgIHNlbGVjdG9yOiAnY3Jvbi1lZGl0b3InLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2Nyb24tZWRpdG9yLnRlbXBsYXRlLmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY3Jvbi1lZGl0b3IuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIHByb3ZpZGVyczogW0NST05fVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcm9uR2VuQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcblxyXG4gICAgQElucHV0KCkgcHVibGljIGJhY2tncm91bmRDb2xvcjogVGhlbWVQYWxldHRlO1xyXG4gICAgQElucHV0KCkgcHVibGljIGNvbG9yOiBUaGVtZVBhbGV0dGU7XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBASW5wdXQoKSBwdWJsaWMgb3B0aW9uczogQ3Jvbk9wdGlvbnM7XHJcbiAgICBwdWJsaWMgYWN0aXZlVGFiOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2VsZWN0T3B0aW9ucyA9IHRoaXMuZ2V0U2VsZWN0T3B0aW9ucygpO1xyXG5cclxuICAgIHB1YmxpYyB3ZWVrZGF5czogc3RyaW5nW10gPSBbJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknLCAnU3VuZGF5J107XHJcbiAgICBwdWJsaWMgc3RhdGU6IGFueTtcclxuICAgIGNyb25Gb3JtOiBGb3JtQ29udHJvbDtcclxuICAgIG1pbnV0ZXNGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBob3VybHlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBkYWlseUZvcm06IEZvcm1Hcm91cDtcclxuICAgIHdlZWtseUZvcm06IEZvcm1Hcm91cDtcclxuICAgIG1vbnRobHlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICB5ZWFybHlGb3JtOiBGb3JtR3JvdXA7XHJcbiAgICBhZHZhbmNlZEZvcm06IEZvcm1Hcm91cDtcclxuICAgIHByb3RlY3RlZCBfdGFiczogc3RyaW5nW10gPSBbJ21pbnV0ZXMnLCAnaG91cmx5JywgJ2RhaWx5JywgJ3dlZWtseScsICdtb250aGx5JywgJ3llYXJseScsICdhZHZhbmNlZCddXHJcbiAgICBwcm90ZWN0ZWQgX21pbnV0ZXNSZWdleCA9IC9cXGQrIDBcXC9cXGQrIFxcKiAxXFwvMSBcXCogWz8qXSBcXCovZztcclxuICAgIHByb3RlY3RlZCBfaG91cmx5UmVnZXggPSAvXFxkKyBcXGQrIFxcZCsgMVxcL1xcZCsgXFwqIFs/Kl0gXFwqL2c7XHJcbiAgICBwcm90ZWN0ZWQgX2RhaWx5RXZlcnlEYXlSZWdleCA9IC9cXGQrIFxcZCsgXFxkKyAxXFwvXFxkKyBcXCogWz8qXSBcXCovZztcclxuICAgIHByb3RlY3RlZCBfZGFpbHlFdmVyeVdlZWtEYXlSZWdleCA9IC9cXGQrIFxcZCsgXFxkKyBbPypdIFxcKiBNT04tRlJJIFxcKi9nO1xyXG4gICAgcHJvdGVjdGVkIF93ZWVrbHlSZWdleCA9IC9cXGQrIFxcZCsgXFxkKyBbPypdIFxcKiAoTU9OfFRVRXxXRUR8VEhVfEZSSXxTQVR8U1VOKSgsKE1PTnxUVUV8V0VEfFRIVXxGUkl8U0FUfFNVTikpKiBcXCovZztcclxuICAgIHByb3RlY3RlZCBfbW9udGhseVNwZWNpZmljRGF5UmVnZXggPSAvXFxkKyBcXGQrIFxcZCsgKFxcZCt8THxMV3wxVykgMVxcL1xcZCsgWz8qXSBcXCovZztcclxuICAgIHByb3RlY3RlZCBfbW9udGhseVNwZWNpZmljV2Vla0RheVJlZ2V4ID0gL1xcZCsgXFxkKyBcXGQrIFs/Kl0gMVxcL1xcZCsgKE1PTnxUVUV8V0VEfFRIVXxGUkl8U0FUfFNVTikoKCNbMS01XSl8TCkgXFwqL2c7XHJcbiAgICBwcm90ZWN0ZWQgX3llYXJseVNwZWNpZmljTW9udGhEYXlSZWdleCA9IC9cXGQrIFxcZCsgXFxkKyAoXFxkK3xMfExXfDFXKSBcXGQrIFs/Kl0gXFwqL2c7XHJcbiAgICBwcm90ZWN0ZWQgX3llYXJseVNwZWNpZmljTW9udGhXZWVrUmVnZXggPSAvXFxkKyBcXGQrIFxcZCsgWz8qXSBcXGQrIChNT058VFVFfFdFRHxUSFV8RlJJfFNBVHxTVU4pKCgjWzEtNV0pfEwpIFxcKi9nO1xyXG5cclxuICAgIHByaXZhdGUgbG9jYWxDcm9uID0gJzAgMCAxLzEgKiAqJztcclxuICAgIHByaXZhdGUgaXNEaXJ0eTogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZiOiBGb3JtQnVpbGRlcikge1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpIGdldCBjcm9uKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxDcm9uO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBjcm9uKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmxvY2FsQ3JvbiA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0Nyb25GbGF2b3JRdWFydHooKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jcm9uRmxhdm9yID09PSAncXVhcnR6JztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNDcm9uRmxhdm9yU3RhbmRhcmQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jcm9uRmxhdm9yID09PSAnc3RhbmRhcmQnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZW1vdmVTZWNvbmRzKCkge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMub3B0aW9ucy5yZW1vdmVTZWNvbmRzXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhpZGVTZWxlY3RTdWZmaXhlcygpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm9wdGlvbnMuaGlkZVNlbGVjdFN1ZmZpeGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByZW1vdmVZZWFycygpIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm9wdGlvbnMucmVtb3ZlWWVhcnM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHllYXJEZWZhdWx0Q2hhcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNyb25GbGF2b3IgPT09ICdxdWFydHonID8gJyonIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHdlZWtEYXlEZWZhdWx0Q2hhcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmNyb25GbGF2b3IgPT09ICdxdWFydHonID8gJz8nIDogJyonO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb250aERheURlZmF1bHRDaGFyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY3JvbkZsYXZvciA9PT0gJ3F1YXJ0eicgPyAnPycgOiAnKic7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJhZGl4KCkge1xyXG4gICAgICAgIHJldHVybiAxMDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBVcGRhdGUgdGhlIGNyb24gb3V0cHV0IHRvIHRoYXQgb2YgdGhlIHNlbGVjdGVkIHRhYi5cclxuICAgICAqIFRoZSBjcm9uIG91dHB1dCB2YWx1ZSBpcyB1cGRhdGVkIHdoZW5ldmVyIGEgZm9ybSBpcyB1cGRhdGVkLiBUbyBtYWtlIGl0IGNoYW5nZSBpbiByZXNwb25zZSB0byB0YWIgc2VsZWN0aW9uLCB3ZSBzaW1wbHkgcmVzZXRcclxuICAgICAqIHRoZSB2YWx1ZSBvZiB0aGUgZm9ybSB0aGF0IGdvZXMgaW50byBmb2N1cy4gKi9cclxuICAgIHB1YmxpYyBvblRhYkZvY3VzKGlkeDogbnVtYmVyKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgdGFiRm9ybSA9IHRoaXMuX3RhYnNbaWR4XSArICdGb3JtJztcclxuICAgICAgICAgICAgdGhpc1t0YWJGb3JtXS5zZXRWYWx1ZSh0aGlzW3RhYkZvcm1dLnZhbHVlKTtcclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgdGhyb3cobmV3IEVycm9yKGBJbnZhbGlkIHRhYiBzZWxlY3RlZCEgVGFiIEluZGV4OiAke2lkeH1gKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5nZXREZWZhdWx0U3RhdGUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVNb2RlbENoYW5nZSh0aGlzLmNyb24pO1xyXG5cclxuICAgICAgICBjb25zdCBbZGVmYXVsdEhvdXJzLCBkZWZhdWx0TWludXRlcywgZGVmYXVsdFNlY29uZHNdID0gdGhpcy5vcHRpb25zLmRlZmF1bHRUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcblxyXG4gICAgICAgIHRoaXMuY3JvbkZvcm0gPSBuZXcgRm9ybUNvbnRyb2woJzAgMCAxLzEgKiAqJyk7XHJcblxyXG4gICAgICAgIHRoaXMubWludXRlc0Zvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc2Vjb25kczogWzBdLFxyXG4gICAgICAgICAgICBtaW51dGVzOiBbMV0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5taW51dGVzRm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMuY29tcHV0ZU1pbnV0ZXNDcm9uKHZhbHVlKSk7XHJcblxyXG4gICAgICAgIHRoaXMuaG91cmx5Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBzZWNvbmRzOiBbMF0sXHJcbiAgICAgICAgICAgIG1pbnV0ZXM6IFswXSxcclxuICAgICAgICAgICAgaG91cnM6IFsxXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaG91cmx5Rm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMuY29tcHV0ZUhvdXJseUNyb24odmFsdWUpKTtcclxuXHJcbiAgICAgICAgdGhpcy5kYWlseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc3ViVGFiOiBbJ2V2ZXJ5RGF5J10sXHJcbiAgICAgICAgICAgIGV2ZXJ5RGF5OiB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgICAgIHNlY29uZHM6IFswXSxcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXM6IFswXSxcclxuICAgICAgICAgICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cigxKV0sXHJcbiAgICAgICAgICAgICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoMCldLFxyXG4gICAgICAgICAgICAgICAgZGF5czogWzFdXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBldmVyeVdlZWtEYXk6IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kczogWzBdLFxyXG4gICAgICAgICAgICAgICAgbWludXRlczogWzBdLFxyXG4gICAgICAgICAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKDEpXSxcclxuICAgICAgICAgICAgICAgIGhvdXJUeXBlOiBbdGhpcy5nZXRIb3VyVHlwZSgwKV0sXHJcbiAgICAgICAgICAgICAgICBkYXlzOiBbMF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmRhaWx5Rm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMuY29tcHV0ZURhaWx5Q3Jvbih2YWx1ZSkpO1xyXG5cclxuICAgICAgICB0aGlzLndlZWtseUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgc2Vjb25kczogW2RlZmF1bHRTZWNvbmRzXSxcclxuICAgICAgICAgICAgbWludXRlczogW2RlZmF1bHRNaW51dGVzXSxcclxuICAgICAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyldLFxyXG4gICAgICAgICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKV0sXHJcbiAgICAgICAgICAgIE1PTjogW3RydWVdLFxyXG4gICAgICAgICAgICBUVUU6IFtmYWxzZV0sXHJcbiAgICAgICAgICAgIFdFRDogW2ZhbHNlXSxcclxuICAgICAgICAgICAgVEhVOiBbZmFsc2VdLFxyXG4gICAgICAgICAgICBGUkk6IFtmYWxzZV0sXHJcbiAgICAgICAgICAgIFNBVDogW2ZhbHNlXSxcclxuICAgICAgICAgICAgU1VOOiBbZmFsc2VdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy53ZWVrbHlGb3JtLnZhbHVlQ2hhbmdlcy5zdWJzY3JpYmUobmV4dCA9PiB0aGlzLmNvbXB1dGVXZWVrbHlDcm9uKG5leHQpKTtcclxuXHJcbiAgICAgICAgdGhpcy5tb250aGx5Rm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICBzdWJUYWI6IFsnc3BlY2lmaWNEYXknXSxcclxuICAgICAgICAgICAgc3BlY2lmaWNEYXk6IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kczogW2RlZmF1bHRTZWNvbmRzXSxcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXM6IFtkZWZhdWx0TWludXRlc10sXHJcbiAgICAgICAgICAgICAgICBob3VyczogW3RoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKV0sXHJcbiAgICAgICAgICAgICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKV0sXHJcbiAgICAgICAgICAgICAgICBkYXk6IFsnMSddLFxyXG4gICAgICAgICAgICAgICAgbW9udGhzOiBbMV0sXHJcbiAgICAgICAgICAgICAgICBuZWFyZXN0V2Vla2RheTogW2ZhbHNlXVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgc3BlY2lmaWNXZWVrRGF5OiB0aGlzLmZiLmdyb3VwKHtcclxuICAgICAgICAgICAgICAgIHNlY29uZHM6IFtkZWZhdWx0U2Vjb25kc10sXHJcbiAgICAgICAgICAgICAgICBtaW51dGVzOiBbZGVmYXVsdE1pbnV0ZXNdLFxyXG4gICAgICAgICAgICAgICAgaG91cnM6IFt0aGlzLmdldEFtUG1Ib3VyKGRlZmF1bHRIb3VycyldLFxyXG4gICAgICAgICAgICAgICAgaG91clR5cGU6IFt0aGlzLmdldEhvdXJUeXBlKGRlZmF1bHRIb3VycyldLFxyXG4gICAgICAgICAgICAgICAgZGF5OiBbJ01PTiddLFxyXG4gICAgICAgICAgICAgICAgbW9udGhzOiBbMV0sXHJcbiAgICAgICAgICAgICAgICBtb250aFdlZWs6IFsnIzEnXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubW9udGhseUZvcm0udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShuZXh0ID0+IHRoaXMuY29tcHV0ZU1vbnRobHlDcm9uKG5leHQpKTtcclxuXHJcbiAgICAgICAgdGhpcy55ZWFybHlGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIHN1YlRhYjogWydzcGVjaWZpY01vbnRoRGF5J10sXHJcbiAgICAgICAgICAgIHNwZWNpZmljTW9udGhEYXk6IHRoaXMuZmIuZ3JvdXAoe1xyXG4gICAgICAgICAgICAgICAgc2Vjb25kczogW2RlZmF1bHRTZWNvbmRzXSxcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXM6IFtkZWZhdWx0TWludXRlc10sXHJcbiAgICAgICAgICAgICAgICBob3VyczogW3RoaXMuZ2V0QW1QbUhvdXIoZGVmYXVsdEhvdXJzKV0sXHJcbiAgICAgICAgICAgICAgICBob3VyVHlwZTogW3RoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKV0sXHJcbiAgICAgICAgICAgICAgICBkYXk6IFsnMSddLFxyXG4gICAgICAgICAgICAgICAgbW9udGg6IFsxXSxcclxuICAgICAgICAgICAgICAgIG5lYXJlc3RXZWVrZGF5OiBbZmFsc2VdXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBzcGVjaWZpY01vbnRoV2VlazogdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgICAgICBzZWNvbmRzOiBbZGVmYXVsdFNlY29uZHNdLFxyXG4gICAgICAgICAgICAgICAgbWludXRlczogW2RlZmF1bHRNaW51dGVzXSxcclxuICAgICAgICAgICAgICAgIGhvdXJzOiBbdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpXSxcclxuICAgICAgICAgICAgICAgIGhvdXJUeXBlOiBbdGhpcy5nZXRIb3VyVHlwZShkZWZhdWx0SG91cnMpXSxcclxuICAgICAgICAgICAgICAgIGRheTogWydNT04nXSxcclxuICAgICAgICAgICAgICAgIG1vbnRoOiBbMV0sXHJcbiAgICAgICAgICAgICAgICBtb250aFdlZWs6IFsnIzEnXVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMueWVhcmx5Rm9ybS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKG5leHQgPT4gdGhpcy5jb21wdXRlWWVhcmx5Q3JvbihuZXh0KSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWR2YW5jZWRGb3JtID0gdGhpcy5mYi5ncm91cCh7XHJcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/ICcwIDE1IDEwIEwtMiAqID8gKicgOiAnMTUgMTAgMiAqIConXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuYWR2YW5jZWRGb3JtLmNvbnRyb2xzLmV4cHJlc3Npb24udmFsdWVDaGFuZ2VzLnN1YnNjcmliZShuZXh0ID0+IHRoaXMuY29tcHV0ZUFkdmFuY2VkRXhwcmVzc2lvbihuZXh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRheURpc3BsYXkoZGF5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBEYXlzW2RheV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vbnRoV2Vla0Rpc3BsYXkobW9udGhXZWVrTnVtYmVyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBNb250aFdlZWtzW21vbnRoV2Vla051bWJlcl07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vbnRoRGlzcGxheShtb250aDogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gTW9udGhzW21vbnRoXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW9udGhEYXlEaXNwbGF5KG1vbnRoOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChtb250aCA9PT0gJ0wnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnTGFzdCBEYXknO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT09ICdMVycpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdMYXN0IFdlZWtkYXknO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobW9udGggPT09ICcxVycpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdGaXJzdCBXZWVrZGF5JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYCR7bW9udGh9JHt0aGlzLmdldE9yZGluYWxTdWZmaXgobW9udGgpfWA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgKiBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gICAgICovXHJcbiAgICBvbkNoYW5nZSA9IChfOiBhbnkpID0+IHtcclxuICAgIH07XHJcblxyXG4gICAgb25Ub3VjaGVkID0gKCkgPT4ge1xyXG4gICAgfTtcclxuXHJcbiAgICB3cml0ZVZhbHVlKG9iajogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jcm9uID0gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck9uVG91Y2hlZChmbjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICAvKiBVbml0IFRlc3RpbmcgRnVuY3Rpb25zIFN0YXJ0XHJcbiAgICAqICBXZSB1dGlsaXplIHRoZXNlIHB1YmxpYyBmdW5jdGlvbnMsIGJlY2F1c2UgeW91IGNhbm5vdCB0ZXN0IHByaXZhdGUgZnVuY3Rpb25zXHJcbiAgICAqL1xyXG4gICAgcHVibGljIF90ZXN0Q29tcHV0ZU1pbnV0ZXNDcm9uKHN0YXRlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNvbXB1dGVNaW51dGVzQ3JvbihzdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX3Rlc3RDb21wdXRlSG91cmx5Q3JvbihzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlSG91cmx5Q3JvbihzdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX3Rlc3RDb21wdXRlRGFpbHlDcm9uKHN0YXRlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNvbXB1dGVEYWlseUNyb24oc3RhdGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF90ZXN0Q29tcHV0ZVdlZWtseUNyb24oc3RhdGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZVdlZWtseUNyb24oc3RhdGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIF90ZXN0Q29tcHV0ZU1vbnRobHlDcm9uKHN0YXRlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNvbXB1dGVNb250aGx5Q3JvbihzdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgX3Rlc3RDb21wdXRlWWVhcmx5Q3JvbihzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlWWVhcmx5Q3JvbihzdGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JvbjtcclxuICAgIH1cclxuXHJcbiAgICAvKiBVbml0IFRlc3RpbmcgRnVuY3Rpb25zIEVuZCAqL1xyXG5cclxuICAgIGhvdXJUb0Nyb24oaG91cjogbnVtYmVyLCBob3VyVHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy51c2UyNEhvdXJUaW1lKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBob3VyO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBob3VyVHlwZSA9PT0gJ0FNJyA/IChob3VyID09PSAxMiA/IDAgOiBob3VyKSA6IChob3VyID09PSAxMiA/IDEyIDogaG91ciArIDEyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wdXRlTWludXRlc0Nyb24oc3RhdGU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ICYmICF0aGlzLnJlbW92ZVNlY29uZHMgPyBzdGF0ZS5zZWNvbmRzIDogJyd9IDAvJHtzdGF0ZS5taW51dGVzfSAqIDEvMSAqICR7dGhpcy53ZWVrRGF5RGVmYXVsdENoYXJ9ICR7IXRoaXMucmVtb3ZlWWVhcnMgPyB0aGlzLnllYXJEZWZhdWx0Q2hhciA6ICcnfWAudHJpbSgpO1xyXG4gICAgICAgIHRoaXMuY3JvbkZvcm0uc2V0VmFsdWUodGhpcy5jcm9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbXB1dGVIb3VybHlDcm9uKHN0YXRlOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiAmJiAhdGhpcy5yZW1vdmVTZWNvbmRzID8gc3RhdGUuc2Vjb25kcyA6ICcnfSAke3N0YXRlLm1pbnV0ZXN9IDAvJHtzdGF0ZS5ob3Vyc30gMS8xICogJHt0aGlzLndlZWtEYXlEZWZhdWx0Q2hhcn0gJHshdGhpcy5yZW1vdmVZZWFycyA/IHRoaXMueWVhckRlZmF1bHRDaGFyIDogJyd9YC50cmltKCk7XHJcbiAgICAgICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29tcHV0ZURhaWx5Q3JvbihzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgc3dpdGNoIChzdGF0ZS5zdWJUYWIpIHtcclxuICAgICAgICAgICAgY2FzZSAnZXZlcnlEYXknOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogJiYgIXRoaXMucmVtb3ZlU2Vjb25kcyA/IHN0YXRlLmV2ZXJ5RGF5LnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5ldmVyeURheS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5ldmVyeURheS5ob3Vycywgc3RhdGUuZXZlcnlEYXkuaG91clR5cGUpfSAxLyR7c3RhdGUuZXZlcnlEYXkuZGF5c30gKiAke3RoaXMud2Vla0RheURlZmF1bHRDaGFyfSAkeyF0aGlzLnJlbW92ZVllYXJzID8gdGhpcy55ZWFyRGVmYXVsdENoYXIgOiAnJ31gLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdldmVyeVdlZWtEYXknOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogJiYgIXRoaXMucmVtb3ZlU2Vjb25kcyA/IHN0YXRlLmV2ZXJ5V2Vla0RheS5zZWNvbmRzIDogJyd9ICR7c3RhdGUuZXZlcnlXZWVrRGF5Lm1pbnV0ZXN9ICR7dGhpcy5ob3VyVG9Dcm9uKHN0YXRlLmV2ZXJ5V2Vla0RheS5ob3Vycywgc3RhdGUuZXZlcnlXZWVrRGF5LmhvdXJUeXBlKX0gJHt0aGlzLm1vbnRoRGF5RGVmYXVsdENoYXJ9ICogTU9OLUZSSSAkeyF0aGlzLnJlbW92ZVllYXJzID8gdGhpcy55ZWFyRGVmYXVsdENoYXIgOiAnJ31gLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNyb24gZGFpbHkgc3VidGFiIHNlbGVjdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wdXRlV2Vla2x5Q3JvbihzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgZGF5cyA9IHRoaXMuc2VsZWN0T3B0aW9ucy5kYXlzXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKGFjYywgZGF5KSA9PiBzdGF0ZVtkYXldID8gYWNjLmNvbmNhdChbZGF5XSkgOiBhY2MsIFtdKVxyXG4gICAgICAgICAgICAuam9pbignLCcpO1xyXG4gICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ICYmICF0aGlzLnJlbW92ZVNlY29uZHMgPyBzdGF0ZS5zZWNvbmRzIDogJyd9ICR7c3RhdGUubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuaG91cnMsIHN0YXRlLmhvdXJUeXBlKX0gJHt0aGlzLm1vbnRoRGF5RGVmYXVsdENoYXJ9ICogJHtkYXlzfSAkeyF0aGlzLnJlbW92ZVllYXJzID8gdGhpcy55ZWFyRGVmYXVsdENoYXIgOiAnJ31gLnRyaW0oKTtcclxuICAgICAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wdXRlTW9udGhseUNyb24oc3RhdGU6IGFueSkge1xyXG4gICAgICAgIHN3aXRjaCAoc3RhdGUuc3ViVGFiKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3NwZWNpZmljRGF5JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ICYmICF0aGlzLnJlbW92ZVNlY29uZHMgPyBzdGF0ZS5zcGVjaWZpY0RheS5zZWNvbmRzIDogJyd9ICR7c3RhdGUuc3BlY2lmaWNEYXkubWludXRlc30gJHt0aGlzLmhvdXJUb0Nyb24oc3RhdGUuc3BlY2lmaWNEYXkuaG91cnMsIHN0YXRlLnNwZWNpZmljRGF5LmhvdXJUeXBlKX0gJHtzdGF0ZS5zcGVjaWZpY0RheS5kYXl9JHtzdGF0ZS5zcGVjaWZpY0RheT8ubmVhcmVzdFdlZWtkYXkgPyAnVycgOiAnJ30gMS8ke3N0YXRlLnNwZWNpZmljRGF5Lm1vbnRoc30gJHt0aGlzLndlZWtEYXlEZWZhdWx0Q2hhcn0gJHshdGhpcy5yZW1vdmVZZWFycyA/IHRoaXMueWVhckRlZmF1bHRDaGFyIDogJyd9YC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3BlY2lmaWNXZWVrRGF5JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JvbiA9IGAke3RoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ICYmICF0aGlzLnJlbW92ZVNlY29uZHMgPyBzdGF0ZS5zcGVjaWZpY1dlZWtEYXkuc2Vjb25kcyA6ICcnfSAke3N0YXRlLnNwZWNpZmljV2Vla0RheS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5zcGVjaWZpY1dlZWtEYXkuaG91cnMsIHN0YXRlLnNwZWNpZmljV2Vla0RheS5ob3VyVHlwZSl9ICR7dGhpcy5tb250aERheURlZmF1bHRDaGFyfSAxLyR7c3RhdGUuc3BlY2lmaWNXZWVrRGF5Lm1vbnRoc30gJHtzdGF0ZS5zcGVjaWZpY1dlZWtEYXkuZGF5fSR7c3RhdGUuc3BlY2lmaWNXZWVrRGF5Lm1vbnRoV2Vla30gJHshdGhpcy5yZW1vdmVZZWFycyA/IHRoaXMueWVhckRlZmF1bHRDaGFyIDogJyd9YC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcm9uIG1vbnRobHkgc3VidGFiIHNlbGVjdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wdXRlWWVhcmx5Q3JvbihzdGF0ZTogYW55KSB7XHJcbiAgICAgICAgc3dpdGNoIChzdGF0ZS5zdWJUYWIpIHtcclxuICAgICAgICAgICAgY2FzZSAnc3BlY2lmaWNNb250aERheSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyb24gPSBgJHt0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiAmJiAhdGhpcy5yZW1vdmVTZWNvbmRzID8gc3RhdGUuc3BlY2lmaWNNb250aERheS5zZWNvbmRzIDogJyd9ICR7c3RhdGUuc3BlY2lmaWNNb250aERheS5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5zcGVjaWZpY01vbnRoRGF5LmhvdXJzLCBzdGF0ZS5zcGVjaWZpY01vbnRoRGF5LmhvdXJUeXBlKX0gJHtzdGF0ZS5zcGVjaWZpY01vbnRoRGF5LmRheX0ke3N0YXRlLnNwZWNpZmljTW9udGhEYXk/Lm5lYXJlc3RXZWVrZGF5ID8gJ1cnIDogJyd9ICR7c3RhdGUuc3BlY2lmaWNNb250aERheS5tb250aH0gJHt0aGlzLndlZWtEYXlEZWZhdWx0Q2hhcn0gJHshdGhpcy5yZW1vdmVZZWFycyA/IHRoaXMueWVhckRlZmF1bHRDaGFyIDogJyd9YC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnc3BlY2lmaWNNb250aFdlZWsnOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5jcm9uID0gYCR7dGhpcy5pc0Nyb25GbGF2b3JRdWFydHogJiYgIXRoaXMucmVtb3ZlU2Vjb25kcyA/IHN0YXRlLnNwZWNpZmljTW9udGhXZWVrLnNlY29uZHMgOiAnJ30gJHtzdGF0ZS5zcGVjaWZpY01vbnRoV2Vlay5taW51dGVzfSAke3RoaXMuaG91clRvQ3JvbihzdGF0ZS5zcGVjaWZpY01vbnRoV2Vlay5ob3Vycywgc3RhdGUuc3BlY2lmaWNNb250aFdlZWsuaG91clR5cGUpfSAke3RoaXMubW9udGhEYXlEZWZhdWx0Q2hhcn0gJHtzdGF0ZS5zcGVjaWZpY01vbnRoV2Vlay5tb250aH0gJHtzdGF0ZS5zcGVjaWZpY01vbnRoV2Vlay5kYXl9JHtzdGF0ZS5zcGVjaWZpY01vbnRoV2Vlay5tb250aFdlZWt9ICR7IXRoaXMucmVtb3ZlWWVhcnMgPyB0aGlzLnllYXJEZWZhdWx0Q2hhciA6ICcnfWAudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgY3JvbiB5ZWFybHkgc3VidGFiIHNlbGVjdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNyb25Gb3JtLnNldFZhbHVlKHRoaXMuY3Jvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb21wdXRlQWR2YW5jZWRFeHByZXNzaW9uKGV4cHJlc3Npb246IGFueSkge1xyXG4gICAgICAgIHRoaXMuY3JvbiA9IGV4cHJlc3Npb247XHJcbiAgICAgICAgdGhpcy5jcm9uRm9ybS5zZXRWYWx1ZSh0aGlzLmNyb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0QW1QbUhvdXIoaG91cjogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy51c2UyNEhvdXJUaW1lID8gaG91ciA6IChob3VyICsgMTEpICUgMTIgKyAxO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0SG91clR5cGUoaG91cjogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy51c2UyNEhvdXJUaW1lID8gdW5kZWZpbmVkIDogKGhvdXIgPj0gMTIgPyAnUE0nIDogJ0FNJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0aHJvd0Vycm9ycygpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc0Nyb25GbGF2b3JRdWFydHopIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHF1YXJ0eiBjcm9uIGV4cHJlc3Npb24sIHRoZXJlIG11c3QgYmUgNiBvciA3IHNlZ21lbnRzJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQ3JvbkZsYXZvclN0YW5kYXJkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdGFuZGFyZCBjcm9uIGV4cHJlc3Npb24sIHRoZXJlIG11c3QgYmUgNSBzZWdtZW50cycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBjcm9uRmxhdm9yIHNlbGVjdGVkLCBwbGVhc2UgY2hvb3NlIHF1YXJ0eiBvciBzdGFuZGFyZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZU1vZGVsQ2hhbmdlKGNyb246IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaXNEaXJ0eSA9ICEhdGhpcy5pc0RpcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0RpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5jcm9uSXNWYWxpZChjcm9uKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3JzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvcmlnQ3Jvbjogc3RyaW5nID0gY3JvbjtcclxuICAgICAgICBpZiAoY3Jvbi5zcGxpdCgnICcpLmxlbmd0aCA9PT0gNSAmJiB0aGlzLmlzQ3JvbkZsYXZvclN0YW5kYXJkKSB7XHJcbiAgICAgICAgICAgIGNyb24gPSBgMCAke2Nyb259ICpgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgW3NlY29uZHMsIG1pbnV0ZXMsIGhvdXJzLCBkYXlPZk1vbnRoLCBtb250aCwgZGF5T2ZXZWVrXSA9IGNyb24uc3BsaXQoJyAnKTtcclxuXHJcbiAgICAgICAgLy8gR2VuZXJpYyB2YWx1ZXMgdXNlZCBhY3Jvc3MgbXVsdGlwbGUgdGFicy5cclxuICAgICAgICBjb25zdCBwYXJzZWRTZWNvbmRzID0gcGFyc2VJbnQoc2Vjb25kcywgdGhpcy5yYWRpeCk7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkTWludXRlcyA9IHBhcnNlSW50KG1pbnV0ZXMsIHRoaXMucmFkaXgpXHJcbiAgICAgICAgY29uc3QgcGFyc2VkSG91cnMgPSBwYXJzZUludChob3VycywgdGhpcy5yYWRpeCk7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkQW1QbUhvdXJzID0gdGhpcy5nZXRBbVBtSG91cihwYXJzZWRIb3Vycyk7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkSG91clR5cGUgPSB0aGlzLmdldEhvdXJUeXBlKHBhcnNlZEhvdXJzKTtcclxuICAgICAgICBjb25zdCBkYXkgPSBkYXlPZldlZWsuc3Vic3RyKDAsIDMpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoV2VlayA9IGRheU9mV2Vlay5zdWJzdHIoMyk7XHJcbiAgICAgICAgY29uc3QgcGFyc2VkTW9udGggPSBwYXJzZUludChtb250aCwgdGhpcy5yYWRpeClcclxuICAgICAgICBjb25zdCBtb250aHMgPSBwYXJzZUludChtb250aC5zdWJzdHJpbmcoMiksIHRoaXMucmFkaXgpO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgICAgICAgY2FzZSB0aGlzLl9taW51dGVzUmVnZXgudGVzdChjcm9uKToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnbWludXRlcyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1pbnV0ZXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kczogcGFyc2VkU2Vjb25kcyxcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiBwYXJzZUludChtaW51dGVzLnN1YnN0cmluZygyKSwgdGhpcy5yYWRpeCksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuX2hvdXJseVJlZ2V4LnRlc3QoY3Jvbik6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ2hvdXJseSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmhvdXJseSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBwYXJzZWRTZWNvbmRzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXM6IHBhcnNlZE1pbnV0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM6IHBhcnNlSW50KGhvdXJzLnN1YnN0cmluZygyKSwgdGhpcy5yYWRpeCksXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuX2RhaWx5RXZlcnlEYXlSZWdleC50ZXN0KGNyb24pOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9ICdkYWlseSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhaWx5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YlRhYjogJ2V2ZXJ5RGF5JyxcclxuICAgICAgICAgICAgICAgICAgICBldmVyeURheToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBwYXJzZWRTZWNvbmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiBwYXJzZWRNaW51dGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyczogcGFyc2VkQW1QbUhvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyVHlwZTogcGFyc2VkSG91clR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheXM6IHBhcnNlSW50KGRheU9mTW9udGguc3Vic3RyaW5nKDIpLCB0aGlzLnJhZGl4KSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuX2RhaWx5RXZlcnlXZWVrRGF5UmVnZXgudGVzdChjcm9uKToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnZGFpbHknO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5kYWlseSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzdWJUYWI6ICdldmVyeVdlZWtEYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZXJ5V2Vla0RheToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBwYXJzZWRTZWNvbmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiBwYXJzZWRNaW51dGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyczogcGFyc2VkQW1QbUhvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyVHlwZTogcGFyc2VkSG91clR5cGVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0aGlzLl93ZWVrbHlSZWdleC50ZXN0KGNyb24pOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9ICd3ZWVrbHknO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS53ZWVrbHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kczogcGFyc2VkU2Vjb25kcyxcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiBwYXJzZWRNaW51dGVzLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzOiBwYXJzZWRBbVBtSG91cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91clR5cGU6IHBhcnNlZEhvdXJUeXBlLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RPcHRpb25zLmRheXMuZm9yRWFjaCh3ZWVrRGF5ID0+IHRoaXMuc3RhdGUud2Vla2x5W3dlZWtEYXldID0gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgZGF5T2ZXZWVrLnNwbGl0KCcsJykuZm9yRWFjaCh3ZWVrRGF5ID0+IHRoaXMuc3RhdGUud2Vla2x5W3dlZWtEYXldID0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIHRoaXMuX21vbnRobHlTcGVjaWZpY0RheVJlZ2V4LnRlc3QoY3Jvbik6IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlVGFiID0gJ21vbnRobHknO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5tb250aGx5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YlRhYjogJ3NwZWNpZmljRGF5JyxcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY0RheToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBwYXJzZWRTZWNvbmRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiBwYXJzZWRNaW51dGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyczogcGFyc2VkQW1QbUhvdXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBob3VyVHlwZTogcGFyc2VkSG91clR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRheTogZGF5T2ZNb250aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhzOiBtb250aHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5lYXJlc3RXZWVrZGF5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0aGlzLl9tb250aGx5U3BlY2lmaWNXZWVrRGF5UmVnZXgudGVzdChjcm9uKToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnbW9udGhseSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLm1vbnRobHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViVGFiOiAnc3BlY2lmaWNXZWVrRGF5JyxcclxuICAgICAgICAgICAgICAgICAgICBzcGVjaWZpY1dlZWtEYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kczogcGFyc2VkU2Vjb25kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlczogcGFyc2VkTWludXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnM6IHBhcnNlZEFtUG1Ib3VycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG91clR5cGU6IHBhcnNlZEhvdXJUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6IGRheSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhXZWVrOiBtb250aFdlZWssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoczogbW9udGhzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSB0aGlzLl95ZWFybHlTcGVjaWZpY01vbnRoRGF5UmVnZXgudGVzdChjcm9uKToge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSAneWVhcmx5JztcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUueWVhcmx5ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN1YlRhYjogJ3NwZWNpZmljTW9udGhEYXknLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpZmljTW9udGhEYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kczogcGFyc2VkU2Vjb25kcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlczogcGFyc2VkTWludXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG91cnM6IHBhcnNlZEFtUG1Ib3VycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaG91clR5cGU6IHBhcnNlZEhvdXJUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXk6IGRheU9mTW9udGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiBwYXJzZWRNb250aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmVhcmVzdFdlZWtkYXk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgdGhpcy5feWVhcmx5U3BlY2lmaWNNb250aFdlZWtSZWdleC50ZXN0KGNyb24pOiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZVRhYiA9ICd5ZWFybHknO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS55ZWFybHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ViVGFiOiAnc3BlY2lmaWNNb250aFdlZWsnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpZmljTW9udGhXZWVrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZHM6IHBhcnNlZFNlY29uZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXM6IHBhcnNlZE1pbnV0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJzOiBwYXJzZWRBbVBtSG91cnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdXJUeXBlOiBwYXJzZWRIb3VyVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiBkYXksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiBwYXJzZWRNb250aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGhXZWVrOiBtb250aFdlZWssXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDogeyAvLyBBZHZhbmNlZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVUYWIgPSAnYWR2YW5jZWQnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5hZHZhbmNlZC5leHByZXNzaW9uID0gb3JpZ0Nyb247XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyb25Jc1ZhbGlkKGNyb246IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChjcm9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNyb25QYXJ0cyA9IGNyb24uc3BsaXQoJyAnKTtcclxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiAmJiAoY3JvblBhcnRzLmxlbmd0aCA9PT0gNlxyXG4gICAgICAgICAgICAgICAgfHwgY3JvblBhcnRzLmxlbmd0aCA9PT0gNylcclxuICAgICAgICAgICAgICAgIHx8ICh0aGlzLmlzQ3JvbkZsYXZvclN0YW5kYXJkICYmIGNyb25QYXJ0cy5sZW5ndGggPT09IDUpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldERlZmF1bHRTdGF0ZSgpIHtcclxuICAgICAgICBjb25zdCBbZGVmYXVsdEhvdXJzLCBkZWZhdWx0TWludXRlcywgZGVmYXVsdFNlY29uZHNdID0gdGhpcy5vcHRpb25zLmRlZmF1bHRUaW1lLnNwbGl0KCc6JykubWFwKE51bWJlcik7XHJcbiAgICAgICAgY29uc3QgZGVmYXVsdEFtUG1Ib3VyID0gdGhpcy5nZXRBbVBtSG91cihkZWZhdWx0SG91cnMpO1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRIb3VyVHlwZSA9IHRoaXMuZ2V0SG91clR5cGUoZGVmYXVsdEhvdXJzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDcm9uRmxhdm9yUXVhcnR6ICYmICF0aGlzLmlzRGlydHkpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbENyb24gPSAnMCAwIDEvMSAqICogKidcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWludXRlczoge1xyXG4gICAgICAgICAgICAgICAgbWludXRlczogMSxcclxuICAgICAgICAgICAgICAgIHNlY29uZHM6IDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaG91cmx5OiB7XHJcbiAgICAgICAgICAgICAgICBob3VyczogMSxcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXM6IDAsXHJcbiAgICAgICAgICAgICAgICBzZWNvbmRzOiAwXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhaWx5OiB7XHJcbiAgICAgICAgICAgICAgICBzdWJUYWI6ICdldmVyeURheScsXHJcbiAgICAgICAgICAgICAgICBldmVyeURheToge1xyXG4gICAgICAgICAgICAgICAgICAgIGRheXM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM6IGRlZmF1bHRBbVBtSG91cixcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgICAgICAgICAgICBob3VyVHlwZTogZGVmYXVsdEhvdXJUeXBlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXZlcnlXZWVrRGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM6IGRlZmF1bHRBbVBtSG91cixcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgICAgICAgICAgICBob3VyVHlwZTogZGVmYXVsdEhvdXJUeXBlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHdlZWtseToge1xyXG4gICAgICAgICAgICAgICAgTU9OOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgVFVFOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFdFRDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBUSFU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgRlJJOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIFNBVDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBTVU46IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaG91cnM6IGRlZmF1bHRBbVBtSG91cixcclxuICAgICAgICAgICAgICAgIG1pbnV0ZXM6IGRlZmF1bHRNaW51dGVzLFxyXG4gICAgICAgICAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXHJcbiAgICAgICAgICAgICAgICBob3VyVHlwZTogZGVmYXVsdEhvdXJUeXBlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vbnRobHk6IHtcclxuICAgICAgICAgICAgICAgIHN1YlRhYjogJ3NwZWNpZmljRGF5JyxcclxuICAgICAgICAgICAgICAgIHNwZWNpZmljRGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5OiAnMScsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvdXJzOiBkZWZhdWx0QW1QbUhvdXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlczogZGVmYXVsdE1pbnV0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kczogZGVmYXVsdFNlY29uZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91clR5cGU6IGRlZmF1bHRIb3VyVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBuZWFyZXN0V2Vla2RheTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzcGVjaWZpY1dlZWtEYXk6IHtcclxuICAgICAgICAgICAgICAgICAgICBtb250aFdlZWs6ICcjMScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5OiAnTU9OJyxcclxuICAgICAgICAgICAgICAgICAgICBtb250aHM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM6IGRlZmF1bHRBbVBtSG91cixcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgICAgICAgICAgICBob3VyVHlwZTogZGVmYXVsdEhvdXJUeXBlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHllYXJseToge1xyXG4gICAgICAgICAgICAgICAgc3ViVGFiOiAnc3BlY2lmaWNNb250aERheScsXHJcbiAgICAgICAgICAgICAgICBzcGVjaWZpY01vbnRoRGF5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF5OiAnMScsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM6IGRlZmF1bHRBbVBtSG91cixcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgICAgICAgICAgICBob3VyVHlwZTogZGVmYXVsdEhvdXJUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIG5lYXJlc3RXZWVrZGF5OiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNwZWNpZmljTW9udGhXZWVrOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGhXZWVrOiAnIzEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRheTogJ01PTicsXHJcbiAgICAgICAgICAgICAgICAgICAgbW9udGg6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgaG91cnM6IGRlZmF1bHRBbVBtSG91cixcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzOiBkZWZhdWx0TWludXRlcyxcclxuICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiBkZWZhdWx0U2Vjb25kcyxcclxuICAgICAgICAgICAgICAgICAgICBob3VyVHlwZTogZGVmYXVsdEhvdXJUeXBlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFkdmFuY2VkOiB7XHJcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiB0aGlzLmlzQ3JvbkZsYXZvclF1YXJ0eiA/ICcwIDE1IDEwIEwtMiAqID8gKicgOiAnMTUgMTAgMiAqIConXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T3JkaW5hbFN1ZmZpeCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kVG9MYXN0RGlnaXQgPSB2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMik7XHJcbiAgICAgICAgICAgIGlmIChzZWNvbmRUb0xhc3REaWdpdCA9PT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3RoJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBsYXN0RGlnaXQgPSB2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgc3dpdGNoIChsYXN0RGlnaXQpIHtcclxuICAgICAgICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3N0JztcclxuICAgICAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25kJztcclxuICAgICAgICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3JkJztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiAndGgnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFNlbGVjdE9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbW9udGhzOiB0aGlzLmdldFJhbmdlKDEsIDEyKSxcclxuICAgICAgICAgICAgbW9udGhXZWVrczogWycjMScsICcjMicsICcjMycsICcjNCcsICcjNScsICdMJ10sXHJcbiAgICAgICAgICAgIGRheXM6IFsnTU9OJywgJ1RVRScsICdXRUQnLCAnVEhVJywgJ0ZSSScsICdTQVQnLCAnU1VOJ10sXHJcbiAgICAgICAgICAgIG1pbnV0ZXM6IHRoaXMuZ2V0UmFuZ2UoMCwgNTkpLFxyXG4gICAgICAgICAgICBmdWxsTWludXRlczogdGhpcy5nZXRSYW5nZSgwLCA1OSksXHJcbiAgICAgICAgICAgIHNlY29uZHM6IHRoaXMuZ2V0UmFuZ2UoMCwgNTkpLFxyXG4gICAgICAgICAgICBob3VyczogdGhpcy5nZXRSYW5nZSgxLCAyMyksXHJcbiAgICAgICAgICAgIG1vbnRoRGF5czogdGhpcy5nZXRSYW5nZSgxLCAzMSksXHJcbiAgICAgICAgICAgIG1vbnRoRGF5c1dpdGhMYXN0czogWy4uLlsuLi50aGlzLmdldFJhbmdlKDEsIDMxKS5tYXAoU3RyaW5nKV0sICdMJ10sXHJcbiAgICAgICAgICAgIG1vbnRoRGF5c1dpdGhPdXRMYXN0czogWy4uLlsuLi50aGlzLmdldFJhbmdlKDEsIDMxKS5tYXAoU3RyaW5nKV1dLFxyXG4gICAgICAgICAgICBob3VyVHlwZXM6IFsnQU0nLCAnUE0nXVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRSYW5nZShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IG51bWJlcltdIHtcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBlbmQgLSBzdGFydCArIDE7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KGxlbmd0aCkpLm1hcCgoXywgaSkgPT4gaSArIHN0YXJ0KTtcclxuICAgIH1cclxuXHJcbn1cclxuIiwiPHNlY3Rpb24gY2xhc3M9XCJjcm9uLWVkaXRvci1tYWluXCI+XHJcbiAgPG1hdC10YWItZ3JvdXAgY2xhc3M9XCJjcm9uLWVkaXRvci1jb250YWluZXJcIiAoc2VsZWN0ZWRJbmRleENoYW5nZSk9XCJvblRhYkZvY3VzKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgIFtiYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZENvbG9yXCIgW2NvbG9yXT1cImNvbG9yXCI+XHJcblxyXG4gICAgPCEtLSBNaW51dGUgLS0+XHJcbiAgICA8bWF0LXRhYiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYiBtaW51dGVzLXRhYlwiIGxhYmVsPVwiTWludXRlc1wiICpuZ0lmPVwiIW9wdGlvbnM/LmhpZGVNaW51dGVzVGFiXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudCBtaW51dGVzLWNvbnRlbnRcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImNyb24tZm9ybS1sYWJlbFwiPnt7IG9wdGlvbnM/LnRleHRzPy5mcmVxdWVuY3lQcmVmaXggfHwgJ0V2ZXJ5JyB9fTwvcD5cclxuICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlclxyXG4gICAgICAgICAgW2Zvcm1Hcm91cF09XCJtaW51dGVzRm9ybVwiXHJcbiAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJ0cnVlXCJcclxuICAgICAgICAgIFtoaWRlSG91cnNdPVwidHJ1ZVwiXHJcbiAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucz8uaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxyXG4gICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21hdC10YWI+XHJcblxyXG4gICAgPCEtLSBIb3VybHkgLS0+XHJcbiAgICA8bWF0LXRhYiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYiBob3VybHktdGFiXCIgbGFiZWw9XCJIb3VybHlcIiAqbmdJZj1cIiFvcHRpb25zPy5oaWRlSG91cmx5VGFiXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWVkaXRvci10YWItY29udGVudCBob3VybHktY29udGVudFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiY3Jvbi1mb3JtLWxhYmVsXCI+e3sgb3B0aW9ucz8udGV4dHM/LmZyZXF1ZW5jeVByZWZpeCB8fCAnRXZlcnknIH19PC9wPlxyXG4gICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtmb3JtR3JvdXBdPVwiaG91cmx5Rm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucz8udXNlMjRIb3VyVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnM/LmhpZGVTZWNvbmRzIHx8ICAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XHJcbiAgICAgICAgPC9jcm9uLXRpbWUtcGlja2VyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LXRhYj5cclxuXHJcbiAgICA8IS0tIERhaWx5IC0tPlxyXG4gICAgPG1hdC10YWIgY2xhc3M9XCJjcm9uLWVkaXRvci10YWIgZGFpbHktdGFiXCIgbGFiZWw9XCJEYWlseVwiICpuZ0lmPVwiIW9wdGlvbnM/LmhpZGVEYWlseVRhYlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiLWNvbnRlbnQgZGFpbHktY29udGVudFwiIFtmb3JtR3JvdXBdPVwiZGFpbHlGb3JtXCI+XHJcbiAgICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImNyb24tZWRpdG9yLXJhZGlvLWdyb3VwXCIgZm9ybUNvbnRyb2xOYW1lPVwic3ViVGFiXCI+XHJcblxyXG4gICAgICAgICAgPCEtLSBEYXkgRnJlcXVlbmN5IC0tPlxyXG4gICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gbmFtZT1cInN1YlRhYlwiIFtuZ0NsYXNzXT1cIm9wdGlvbnM/LmZvcm1SYWRpb0NsYXNzIHx8ICdjcm9uLWVkaXRvci1yYWRpby1idXR0b24gZnJlcXVlbmN5LWdyb3VwJ1wiIHZhbHVlPVwiZXZlcnlEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD1cImNoZWNrZWRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj57e29wdGlvbnM/LnRleHRzPy5mcmVxdWVuY3lQcmVmaXggfHwgJ0V2ZXJ5J319IDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmb3JtR3JvdXBOYW1lPVwiZXZlcnlEYXlcIiBjbGFzcz1cImRheS1waWNrZXIgY29sLW1kLTRcIj5cclxuICAgICAgICAgICAgICA8bWF0LWxhYmVsPkRheShzKTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImRheXNcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheSBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1wiIFt2YWx1ZV09XCJtb250aERheVwiPlxyXG4gICAgICAgICAgICAgICAgICB7e21vbnRoRGF5fX0ge3toaWRlU2VsZWN0U3VmZml4ZXMgPyAnJyA6ICdkYXkocyknfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNyb24tZm9ybS1sYWJlbFwiPnt7b3B0aW9ucz8udGV4dHM/LnRpbWVQcmVmaXggfHwgJ2F0J319IDwvcD5cclxuXHJcbiAgICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyXHJcbiAgICAgICAgICAgICAgZm9ybUdyb3VwTmFtZT1cImV2ZXJ5RGF5XCJcclxuICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zPy51c2UyNEhvdXJUaW1lXCJcclxuICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucz8uaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxyXG4gICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XHJcblxyXG4gICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDwhLS0gRXZlcnkgV29yayBEYXkgLS0+XHJcbiAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBuYW1lPVwic3ViVGFiXCIgW25nQ2xhc3NdPVwib3B0aW9ucz8uZm9ybVJhZGlvQ2xhc3MgfHwgJ2Nyb24tZWRpdG9yLXJhZGlvLWJ1dHRvbiBmcmVxdWVuY3ktZ3JvdXAnXCIgdmFsdWU9XCJldmVyeVdlZWtEYXlcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj57e29wdGlvbnM/LnRleHRzPy53ZWVrRGF5UHJlZml4IHx8ICdFdmVyeSB3b3JraW5nIGRheSBhdCd9fSA8L3A+XHJcblxyXG4gICAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlclxyXG4gICAgICAgICAgICAgIGZvcm1Hcm91cE5hbWU9XCJldmVyeVdlZWtEYXlcIlxyXG4gICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnM/LnVzZTI0SG91clRpbWVcIlxyXG4gICAgICAgICAgICAgIFtoaWRlU2Vjb25kc109XCJvcHRpb25zPy5oaWRlU2Vjb25kcyB8fCAhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XHJcbiAgICAgICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cclxuXHJcbiAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtdGFiPlxyXG5cclxuICAgIDwhLS0gV2Vla2x5IC0tPlxyXG4gICAgPG1hdC10YWIgY2xhc3M9XCJjcm9uLWVkaXRvci10YWIgd2Vla2x5LXRhYlwiIGxhYmVsPVwiV2Vla2x5XCIgKm5nSWY9XCIhb3B0aW9ucz8uaGlkZVdlZWtseVRhYlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiLWNvbnRlbnQgd2Vla2x5LWNvbnRlbnRcIj5cclxuICAgICAgICA8aDIgY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj57eyBvcHRpb25zPy50ZXh0cz8ud2Vla2x5RGF5VGl0bGUgfHwgJ0RheShzKScgfX08L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjcm9uLWZvcm0tZGF5cy1ncm91cFwiIFtmb3JtR3JvdXBdPVwid2Vla2x5Rm9ybVwiPlxyXG4gICAgICAgICAgPG1hdC1jaGVja2JveFxyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWtkYXlzXCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwib3B0aW9ucz8uZm9ybUNoZWNrYm94Q2xhc3MgfHwgJ2NoZWNrYm94LW1hcmdpbidcIlxyXG4gICAgICAgICAgICBmb3JtQ29udHJvbE5hbWU9XCJ7e2RheS5zdWJzdHIoMCwgMykudG9VcHBlckNhc2UoKX19XCI+XHJcbiAgICAgICAgICAgIHt7ZGF5fX1cclxuICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8aHI+XHJcblxyXG4gICAgICAgIDxoMiBjbGFzcz1cImNyb24tZm9ybS1sYWJlbCB0aW1lLWxhYmVsXCI+e3sgb3B0aW9ucz8udGV4dHM/LndlZWtseVRpbWVUaXRsZSB8fCAnVGltZSd9fTwvaDI+XHJcblxyXG4gICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtmb3JtR3JvdXBdPVwid2Vla2x5Rm9ybVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucz8udXNlMjRIb3VyVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnM/LmhpZGVTZWNvbmRzfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxyXG4gICAgICAgIDwvY3Jvbi10aW1lLXBpY2tlcj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtdGFiPlxyXG5cclxuICAgIDwhLS0gTW9udGhseSAtLT5cclxuICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiIG1vbnRobHktdGFiXCIgbGFiZWw9XCJNb250aGx5XCIgKm5nSWY9XCIhb3B0aW9ucz8uaGlkZU1vbnRobHlUYWJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYi1jb250ZW50IG1vbnRobHktY29udGVudFwiIFtmb3JtR3JvdXBdPVwibW9udGhseUZvcm1cIj5cclxuICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGZvcm1Db250cm9sTmFtZT1cInN1YlRhYlwiPlxyXG5cclxuICAgICAgICAgIDwhLS0gU3BlY2lmaWMgZGF5IC0tPlxyXG4gICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gbmFtZT1cIm1vbnRobHktcmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwib3B0aW9ucz8uZm9ybVJhZGlvQ2xhc3MgfHwgJ2Nyb24tZWRpdG9yLXJhZGlvLWJ1dHRvbiBmcmVxdWVuY3ktZ3JvdXAgY3Jvbi1lZGl0b3Itd3JhcHBlZC1yYWRpbydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzcGVjaWZpY0RheVwiIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY0RheVwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNyb24tZm9ybS1sYWJlbFwiPnt7IG9wdGlvbnM/LnRleHRzPy5zcGVjaWZpY0RheVByZWZpeCB8fCAnT24gdGhlJ319PC9wPlxyXG5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZGF5LXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+RGF5PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJtb250aC1kYXlzXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF5XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNDcm9uRmxhdm9yUXVhcnR6XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheXNXaXRoTGFzdCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1dpdGhMYXN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm1vbnRoRGF5c1dpdGhMYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3sgbW9udGhEYXlEaXNwbGF5KG1vbnRoRGF5c1dpdGhMYXN0KX19IHt7aGlkZVNlbGVjdFN1ZmZpeGVzID8gJycgOiAnZGF5J319XHJcbiAgICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNDcm9uRmxhdm9yUXVhcnR6XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheXNXaXRoT3V0TGFzdCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1dpdGhPdXRMYXN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJtb250aERheXNXaXRoT3V0TGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7IG1vbnRoRGF5RGlzcGxheShtb250aERheXNXaXRoT3V0TGFzdCl9fSB7e2hpZGVTZWxlY3RTdWZmaXhlcyA/ICcnIDogJ2RheSd9fVxyXG4gICAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcblxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj57eyBvcHRpb25zPy50ZXh0cz8ubW9udGhseU1vbnRoUHJlZml4IHx8ICdvZiBldmVyeSd9fTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1vbnRoLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+TW9udGg8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRocy1zbWFsbFwiIGZvcm1Db250cm9sTmFtZT1cIm1vbnRoc1wiIFtuZ0NsYXNzXT1cIm9wdGlvbnM/LmZvcm1TZWxlY3RDbGFzcyB8fCAnZm9ybS1jb250cm9sIGNyb24tZWRpdG9yLWlucHV0J1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoIG9mIHNlbGVjdE9wdGlvbnMubW9udGhzXCIgW3ZhbHVlXT1cIm1vbnRoXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7bW9udGh9fSB7e2hpZGVTZWxlY3RTdWZmaXhlcyA/ICcnIDogJ21vbnRoKHMpJ319XHJcbiAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNyb24tZm9ybS1sYWJlbFwiPnt7IG9wdGlvbnM/LnRleHRzPy50aW1lUHJlZml4IHx8ICdhdCd9fTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPGNyb24tdGltZS1waWNrZXIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2Zvcm1Hcm91cF09XCJtb250aGx5Rm9ybS5jb250cm9scy5zcGVjaWZpY0RheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3VzZTI0SG91clRpbWVdPVwib3B0aW9ucz8udXNlMjRIb3VyVGltZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnM/LmhpZGVTZWNvbmRzIHx8ICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cclxuICAgICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IFtmb3JtR3JvdXBdPVwibW9udGhseUZvcm0uY29udHJvbHMuc3BlY2lmaWNEYXlcIj5cclxuICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94ICpuZ0lmPVwiIW9wdGlvbnM/LmhpZGVOZWFyZXN0V2Vla2RheUNoZWNrXCJcclxuICAgICAgICAgICAgICAgIGZvcm1Db250cm9sTmFtZT1cIm5lYXJlc3RXZWVrZGF5XCJcclxuICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIm9wdGlvbnM/LmZvcm1DaGVja2JveENsYXNzIHx8ICdjaGVja2JveC1tYXJnaW4nXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBvcHRpb25zPy50ZXh0cz8ubmVhcmVzdFdlZWtkYXlUZXh0IHx8ICdkdXJpbmcgdGhlIG5lYXJlc3Qgd2Vla2RheSd9fVxyXG4gICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvbWF0LXJhZGlvLWJ1dHRvbj5cclxuXHJcbiAgICAgICAgICA8IS0tIFNwZWNpZmljIFdlZWsgZGF5IC0tPlxyXG4gICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gbmFtZT1cIm1vbnRobHktcmFkaW9cIiBbbmdDbGFzc109XCJvcHRpb25zPy5mb3JtUmFkaW9DbGFzcyB8fCAnY3Jvbi1lZGl0b3ItcmFkaW8tYnV0dG9uIGZyZXF1ZW5jeS1ncm91cCdcIiB2YWx1ZT1cInNwZWNpZmljV2Vla0RheVwiIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY1dlZWtEYXlcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj57eyBvcHRpb25zPy50ZXh0cz8uc3BlY2lmaWNEYXlQcmVmaXggfHwgJ09uIHRoZSd9fTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIndlZWstcGlja2VyXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1sYWJlbD5XZWVrPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJkYXktb3JkZXItaW4tbW9udGhcIiBmb3JtQ29udHJvbE5hbWU9XCJtb250aFdlZWtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cIm9wdGlvbnM/LmZvcm1TZWxlY3RDbGFzcyB8fCAnZm9ybS1jb250cm9sIGNyb24tZWRpdG9yLWlucHV0J1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoV2VlayBvZiBzZWxlY3RPcHRpb25zLm1vbnRoV2Vla3NcIiBbdmFsdWVdPVwibW9udGhXZWVrXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7bW9udGhXZWVrRGlzcGxheShtb250aFdlZWspfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJ3ZWVrZGF5LXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+RGF5PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJ3ZWVrLWRheXNcIiBmb3JtQ29udHJvbE5hbWU9XCJkYXlcIiBbbmdDbGFzc109XCJvcHRpb25zPy5mb3JtU2VsZWN0Q2xhc3MgfHwgJ2Zvcm0tY29udHJvbCBjcm9uLWVkaXRvci1pbnB1dCdcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBkYXkgb2Ygc2VsZWN0T3B0aW9ucy5kYXlzXCIgW3ZhbHVlXT1cImRheVwiPlxyXG4gICAgICAgICAgICAgICAgICB7e2RheURpc3BsYXkoZGF5KX19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj57eyBvcHRpb25zPy50ZXh0cz8ubW9udGhseU1vbnRoUHJlZml4IHx8ICdvZiBldmVyeSd9fTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1vbnRoLXBpY2tlclwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+TW9udGg8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRocy1zbWFsbFwiIGZvcm1Db250cm9sTmFtZT1cIm1vbnRoc1wiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoIG9mIHNlbGVjdE9wdGlvbnMubW9udGhzXCIgW3ZhbHVlXT1cIm1vbnRoXCI+XHJcbiAgICAgICAgICAgICAgICAgIHt7bW9udGh9fSB7e2hpZGVTZWxlY3RTdWZmaXhlcyA/ICcnIDogJ21vbnRoKHMpJ319XHJcbiAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj57eyBvcHRpb25zPy50ZXh0cz8udGltZVByZWZpeCB8fCAnYXQnfX08L3A+XHJcblxyXG4gICAgICAgICAgICA8Y3Jvbi10aW1lLXBpY2tlciBbZm9ybUdyb3VwXT1cIm1vbnRobHlGb3JtLmNvbnRyb2xzLnNwZWNpZmljV2Vla0RheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnM/LnVzZTI0SG91clRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucz8uaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxyXG4gICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XHJcbiAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcblxyXG4gICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LXRhYj5cclxuXHJcbiAgICA8IS0tIFllYXJseSAtLT5cclxuICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiIHllYXJseS10YWJcIiBsYWJlbD1cIlllYXJseVwiICpuZ0lmPVwiIW9wdGlvbnM/LmhpZGVZZWFybHlUYWJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNyb24tZWRpdG9yLXRhYi1jb250ZW50IHllYXJseS1jb250ZW50XCIgW2Zvcm1Hcm91cF09XCJ5ZWFybHlGb3JtXCI+XHJcbiAgICAgICAgPG1hdC1yYWRpby1ncm91cCBmb3JtQ29udHJvbE5hbWU9XCJzdWJUYWJcIj5cclxuXHJcbiAgICAgICAgICA8IS0tIFNwZWNpZmljIE1vbnRoIERheSAtLT5cclxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIG5hbWU9XCJ5ZWFybHktcmFkaW9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwib3B0aW9ucz8uZm9ybVJhZGlvQ2xhc3MgfHwgJ2Nyb24tZWRpdG9yLXJhZGlvLWJ1dHRvbiBmcmVxdWVuY3ktZ3JvdXAgY3Jvbi1lZGl0b3Itd3JhcHBlZC1yYWRpbydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJzcGVjaWZpY01vbnRoRGF5XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY3Jvbi1mb3JtLWxhYmVsXCI+e3sgb3B0aW9ucz8udGV4dHM/LnNwZWNpZmljRGF5UHJlZml4IHx8ICdPbiB0aGUnfX08L3A+XHJcblxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJkYXktcGlja2VyXCIgZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljTW9udGhEYXlcIiAqbmdJZj1cIm9wdGlvbnM/LmNyb25GbGF2b3IgPT09ICdxdWFydHonXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1sYWJlbD5EYXk8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRoLWRheXNcIiBmb3JtQ29udHJvbE5hbWU9XCJkYXlcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aERheXNXaXRoTGFzdCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoRGF5c1dpdGhMYXN0c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmFsdWVdPVwibW9udGhEYXlzV2l0aExhc3RcIj5cclxuICAgICAgICAgICAgICAgICAge3ttb250aERheURpc3BsYXkobW9udGhEYXlzV2l0aExhc3QpfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQgZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljTW9udGhEYXlcIiAqbmdJZj1cIm9wdGlvbnM/LmNyb25GbGF2b3IgPT09ICdzdGFuZGFyZCdcIj5cclxuICAgICAgICAgICAgICA8bWF0LWxhYmVsPkRheTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwibW9udGgtZGF5c1wiIGZvcm1Db250cm9sTmFtZT1cImRheVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG1vbnRoRGF5c1dpdGhPdXRMYXN0IG9mIHNlbGVjdE9wdGlvbnMubW9udGhEYXlzV2l0aE91dExhc3RzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJtb250aERheXNXaXRoT3V0TGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgICB7e21vbnRoRGF5RGlzcGxheShtb250aERheXNXaXRoT3V0TGFzdCl9fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY3Jvbi1mb3JtLWxhYmVsXCI+e3sgb3B0aW9ucz8udGV4dHM/LnllYXJseU1vbnRoUHJlZml4IHx8ICdvZid9fTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1vbnRoLXBpY2tlclwiIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY01vbnRoRGF5XCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1sYWJlbD5Nb250aDwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwibW9udGhzXCIgZm9ybUNvbnRyb2xOYW1lPVwibW9udGhcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aCBvZiBzZWxlY3RPcHRpb25zLm1vbnRoc1wiIFt2YWx1ZV09XCJtb250aFwiPlxyXG4gICAgICAgICAgICAgICAgICB7e21vbnRoRGlzcGxheShtb250aCl9fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY3Jvbi1mb3JtLWxhYmVsXCI+e3sgb3B0aW9ucz8udGV4dHM/LnRpbWVQcmVmaXggfHwgJ2F0J319PC9wPlxyXG5cclxuICAgICAgICAgICAgPGNyb24tdGltZS1waWNrZXIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJ5ZWFybHlGb3JtLmNvbnRyb2xzLnNwZWNpZmljTW9udGhEYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdXNlMjRIb3VyVGltZV09XCJvcHRpb25zPy51c2UyNEhvdXJUaW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2hpZGVTZWNvbmRzXT1cIm9wdGlvbnM/LmhpZGVTZWNvbmRzIHx8ICFpc0Nyb25GbGF2b3JRdWFydHpcIj5cclxuICAgICAgICAgICAgPC9jcm9uLXRpbWUtcGlja2VyPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBbZm9ybUdyb3VwXT1cInllYXJseUZvcm0uY29udHJvbHMuc3BlY2lmaWNNb250aERheVwiPlxyXG4gICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggKm5nSWY9XCIhb3B0aW9ucz8uaGlkZU5lYXJlc3RXZWVrZGF5Q2hlY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybUNvbnRyb2xOYW1lPVwibmVhcmVzdFdlZWtkYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwib3B0aW9ucz8uZm9ybUNoZWNrYm94Q2xhc3MgfHwgJ2NoZWNrYm94LW1hcmdpbidcIj5cclxuICAgICAgICAgICAgICAgIHt7IG9wdGlvbnM/LnRleHRzPy5uZWFyZXN0V2Vla2RheVRleHQgfHwgJ2R1cmluZyB0aGUgbmVhcmVzdCB3ZWVrZGF5J319XHJcbiAgICAgICAgICAgICAgPC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG5cclxuICAgICAgICAgIDwhLS0gU3BlY2lmaWMgTW9udGggV2VlayAtLT5cclxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIG5hbWU9XCJ5ZWFybHktcmFkaW9cIiAgW25nQ2xhc3NdPVwib3B0aW9ucz8uZm9ybVJhZGlvQ2xhc3MgfHwgJ2Nyb24tZWRpdG9yLXJhZGlvLWJ1dHRvbiBmcmVxdWVuY3ktZ3JvdXAnXCIgdmFsdWU9XCJzcGVjaWZpY01vbnRoV2Vla1wiPlxyXG5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjcm9uLWZvcm0tbGFiZWxcIj57eyBvcHRpb25zPy50ZXh0cz8uc3BlY2lmaWNEYXlQcmVmaXggfHwgJ09uIHRoZSd9fTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIndlZWstcGlja2VyXCIgZm9ybUdyb3VwTmFtZT1cInNwZWNpZmljTW9udGhXZWVrXCI+XHJcbiAgICAgICAgICAgICAgPG1hdC1sYWJlbD5XZWVrPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgPG1hdC1zZWxlY3QgY2xhc3M9XCJkYXktb3JkZXItaW4tbW9udGhcIiBmb3JtQ29udHJvbE5hbWU9XCJtb250aFdlZWtcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBtb250aFdlZWsgb2Ygc2VsZWN0T3B0aW9ucy5tb250aFdlZWtzXCIgW3ZhbHVlXT1cIm1vbnRoV2Vla1wiPlxyXG4gICAgICAgICAgICAgICAgICB7e21vbnRoV2Vla0Rpc3BsYXkobW9udGhXZWVrKX19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1vcHRpb24+XHJcbiAgICAgICAgICAgICAgPC9tYXQtc2VsZWN0PlxyXG4gICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwid2Vla2RheS1waWNrZXJcIiBmb3JtR3JvdXBOYW1lPVwic3BlY2lmaWNNb250aFdlZWtcIj5cclxuICAgICAgICAgICAgICA8bWF0LWxhYmVsPkRheTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGNsYXNzPVwid2Vlay1kYXlzXCIgZm9ybUNvbnRyb2xOYW1lPVwiZGF5XCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgZGF5IG9mIHNlbGVjdE9wdGlvbnMuZGF5c1wiIFt2YWx1ZV09XCJkYXlcIj5cclxuICAgICAgICAgICAgICAgICAge3tkYXlEaXNwbGF5KGRheSl9fVxyXG4gICAgICAgICAgICAgICAgPC9tYXQtb3B0aW9uPlxyXG4gICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY3Jvbi1mb3JtLWxhYmVsXCI+e3sgb3B0aW9ucz8udGV4dHM/LnllYXJseU1vbnRoUHJlZml4IHx8ICdvZid9fTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cIm1vbnRoLXBpY2tlclwiIGZvcm1Hcm91cE5hbWU9XCJzcGVjaWZpY01vbnRoV2Vla1wiPlxyXG4gICAgICAgICAgICAgIDxtYXQtbGFiZWw+TW9udGg8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBjbGFzcz1cIm1vbnRoc1wiIGZvcm1Db250cm9sTmFtZT1cIm1vbnRoXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbW9udGggb2Ygc2VsZWN0T3B0aW9ucy5tb250aHNcIiBbdmFsdWVdPVwibW9udGhcIj5cclxuICAgICAgICAgICAgICAgICAge3ttb250aERpc3BsYXkobW9udGgpfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNyb24tZm9ybS1sYWJlbFwiPnt7IG9wdGlvbnM/LnRleHRzPy50aW1lUHJlZml4IHx8ICdhdCd9fTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxjcm9uLXRpbWUtcGlja2VyIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwieWVhcmx5Rm9ybS5jb250cm9scy5zcGVjaWZpY01vbnRoV2Vla1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt1c2UyNEhvdXJUaW1lXT1cIm9wdGlvbnM/LnVzZTI0SG91clRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaGlkZVNlY29uZHNdPVwib3B0aW9ucz8uaGlkZVNlY29uZHMgfHwgIWlzQ3JvbkZsYXZvclF1YXJ0elwiPlxyXG4gICAgICAgICAgICA8L2Nyb24tdGltZS1waWNrZXI+XHJcbiAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYXQtdGFiPlxyXG5cclxuICAgIDwhLS0gQWR2YW5jZWQtLT5cclxuICAgIDxtYXQtdGFiIGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiXCIgbGFiZWw9XCJBZHZhbmNlZFwiICpuZ0lmPVwiIW9wdGlvbnM/LmhpZGVBZHZhbmNlZFRhYlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY3Jvbi1lZGl0b3ItdGFiLWNvbnRlbnRcIiBbZm9ybUdyb3VwXT1cImFkdmFuY2VkRm9ybVwiPlxyXG4gICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgIDxtYXQtbGFiZWw+RXhwcmVzc2lvbjwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJhZHZhbmNlZC1jcm9uLWVkaXRvci1pbnB1dFwiIGZvcm1Db250cm9sTmFtZT1cImV4cHJlc3Npb25cIj5cclxuICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWF0LXRhYj5cclxuICA8L21hdC10YWItZ3JvdXA+XHJcbjwvc2VjdGlvbj5cclxuIl19