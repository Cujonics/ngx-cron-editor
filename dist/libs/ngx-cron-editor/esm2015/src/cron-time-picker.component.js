import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/select";
import * as i5 from "@angular/material/core";
function TimePickerComponent_ng_container_1_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r5 = ctx.$implicit;
    i0.ɵɵproperty("value", hour_r5);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(hour_r5);
} }
function TimePickerComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r0.hours);
} }
function TimePickerComponent_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵtext(1, ":");
    i0.ɵɵelementEnd();
} }
function TimePickerComponent_ng_container_2_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const minute_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", minute_r8);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(minute_r8 >= 0 && minute_r8 <= 9 ? "0" + minute_r8 : minute_r8);
} }
function TimePickerComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.hideHours);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.minutes);
} }
function TimePickerComponent_ng_container_3_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, ":");
    i0.ɵɵelementEnd();
} }
function TimePickerComponent_ng_container_3_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const second_r11 = ctx.$implicit;
    i0.ɵɵproperty("value", second_r11);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(second_r11 >= 0 && second_r11 <= 9 ? "0" + second_r11 : second_r11);
} }
function TimePickerComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.hideMinutes);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r2.seconds);
} }
function TimePickerComponent_ng_container_4_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hourType_r13 = ctx.$implicit;
    i0.ɵɵproperty("value", hourType_r13);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(hourType_r13);
} }
function TimePickerComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(" ");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r3.hourTypes);
} }
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
export class TimePickerComponent {
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
TimePickerComponent.ɵfac = function TimePickerComponent_Factory(t) { return new (t || TimePickerComponent)(i0.ɵɵdirectiveInject(i1.ControlContainer)); };
TimePickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TimePickerComponent, selectors: [["cron-time-picker"]], inputs: { disabled: "disabled", use24HourTime: "use24HourTime", hideHours: "hideHours", hideMinutes: "hideMinutes", hideSeconds: "hideSeconds" }, features: [i0.ɵɵProvidersFeature([])], decls: 5, vars: 5, consts: [[3, "formGroup"], [4, "ngIf"], ["formControlName", "hours"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["class", "separator", 4, "ngIf"], ["formControlName", "minutes"], [1, "separator"], ["formControlName", "seconds"], ["formControlName", "hourType"]], template: function TimePickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵtemplate(1, TimePickerComponent_ng_container_1_Template, 6, 1, "ng-container", 1);
        i0.ɵɵtemplate(2, TimePickerComponent_ng_container_2_Template, 7, 2, "ng-container", 1);
        i0.ɵɵtemplate(3, TimePickerComponent_ng_container_3_Template, 7, 2, "ng-container", 1);
        i0.ɵɵtemplate(4, TimePickerComponent_ng_container_4_Template, 6, 2, "ng-container", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("formGroup", ctx.parent.control);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideHours);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.hideSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.use24HourTime);
    } }, directives: [i1.NgControlStatusGroup, i1.FormGroupDirective, i2.NgIf, i3.MatFormField, i3.MatLabel, i4.MatSelect, i1.NgControlStatus, i1.FormControlName, i2.NgForOf, i5.MatOption], styles: [".cron-editor-main[_ngcontent-%COMP%]{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12);width:100%}.cron-editor-tab-content[_ngcontent-%COMP%]{border-radius:8px;height:200px;margin-right:10px;margin-top:10px;max-width:700px;overflow:hidden}.cron-editor-tab-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-bottom:5px}.cron-editor-tab-content[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{font-size:20px;margin:10px 10px 5px}.nav-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.checkbox-margin[_ngcontent-%COMP%]{margin:0 10px}.hourly-content[_ngcontent-%COMP%]   .cron-form-label[_ngcontent-%COMP%], .hourly-content[_ngcontent-%COMP%]   cron-time-picker[_ngcontent-%COMP%], .minutes-content[_ngcontent-%COMP%]   .cron-form-label[_ngcontent-%COMP%], .minutes-content[_ngcontent-%COMP%]   cron-time-picker[_ngcontent-%COMP%]{display:inline}.cron-form-label[_ngcontent-%COMP%]{font-weight:500;margin-left:5px;margin-right:5px}.separator[_ngcontent-%COMP%]{font-size:20px;font-weight:500;margin-left:3px;margin-right:3px}.frequency-group[_ngcontent-%COMP%]{display:block}[_nghost-%COMP%]     .mat-tab-body-content{padding-left:10px}[_nghost-%COMP%]     .mat-tab-label-container{display:flex;justify-content:space-evenly}[_nghost-%COMP%]     .mat-tab-labels{justify-content:space-around}[_nghost-%COMP%]     .mat-tab-label{min-width:100px}[_nghost-%COMP%]     .mat-radio-container{display:inline-flex}[_nghost-%COMP%]     .mat-radio-label-content{align-items:baseline;display:inline-flex;padding-top:10px}[_nghost-%COMP%]     mat-radio-button{max-width:100%;overflow:hidden;padding-left:10px}[_nghost-%COMP%]     mat-radio-button:not(.mat-radio-checked){opacity:.4}[_nghost-%COMP%]     .monthly-content .mat-form-field, [_nghost-%COMP%]     .yearly-content .mat-form-field{max-width:90px}[_nghost-%COMP%]     .monthly-content .weekday-picker, [_nghost-%COMP%]     .yearly-content .weekday-picker{margin-left:5px}[_nghost-%COMP%]     .monthly-content .month-picker, [_nghost-%COMP%]     .monthly-content .weekday-picker, [_nghost-%COMP%]     .yearly-content .month-picker, [_nghost-%COMP%]     .yearly-content .weekday-picker{max-width:125px}[_nghost-%COMP%]     .daily-content .mat-form-field, [_nghost-%COMP%]     .weekly-content .mat-form-field, [_nghost-%COMP%]     .yearly-content .mat-form-field{max-width:100px}[_nghost-%COMP%]     .daily-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .monthly-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .weekly-content cron-time-picker .mat-form-field, [_nghost-%COMP%]     .yearly-content cron-time-picker .mat-form-field{max-width:75px}[_nghost-%COMP%]     .cron-editor-wrapped-radio{margin-bottom:10px;max-width:95%}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-form-field-wrapper{padding-bottom:.5em}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-radio-label-content{flex-wrap:wrap}[_nghost-%COMP%]     .cron-editor-wrapped-radio .mat-radio-container{bottom:6px;position:relative}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimePickerComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line:component-selector
                selector: 'cron-time-picker',
                templateUrl: './cron-time-picker.template.html',
                styleUrls: ['./cron-editor.component.scss'],
                providers: []
            }]
    }], function () { return [{ type: i1.ControlContainer }]; }, { disabled: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi10aW1lLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vbGlicy9uZ3gtY3Jvbi1lZGl0b3IvIiwic291cmNlcyI6WyJzcmMvY3Jvbi10aW1lLXBpY2tlci5jb21wb25lbnQudHMiLCJzcmMvY3Jvbi10aW1lLXBpY2tlci50ZW1wbGF0ZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7OztJQ0t4QyxxQ0FBc0Q7SUFBQSxZQUFRO0lBQUEsaUJBQWE7OztJQUFwQywrQkFBYztJQUFDLGVBQVE7SUFBUiw2QkFBUTs7O0lBSnBFLDZCQUFpQztJQUMvQixzQ0FBZ0I7SUFDZCxpQ0FBVztJQUFBLHVCQUFPO0lBQUEsaUJBQVk7SUFDOUIscUNBQW9DO0lBQ2xDLGlHQUEyRTtJQUM3RSxpQkFBYTtJQUNmLGlCQUFpQjtJQUNuQiwwQkFBZTs7O0lBSG9CLGVBQVE7SUFBUixzQ0FBUTs7O0lBTXpDLCtCQUEyQztJQUFBLGlCQUFDO0lBQUEsaUJBQU87OztJQUkvQyxxQ0FBNEQ7SUFBQSxZQUF3RDtJQUFBLGlCQUFhOzs7SUFBdEYsaUNBQWdCO0lBQUMsZUFBd0Q7SUFBeEQsb0ZBQXdEOzs7SUFMMUgsNkJBQW1DO0lBQ2pDLHFGQUFtRDtJQUNuRCxzQ0FBZ0I7SUFDZCxpQ0FBVztJQUFBLHlCQUFTO0lBQUEsaUJBQVk7SUFDaEMscUNBQXNDO0lBQ3BDLGlHQUFpSTtJQUNuSSxpQkFBYTtJQUNmLGlCQUFpQjtJQUNuQiwwQkFBZTs7O0lBUFksZUFBZ0I7SUFBaEIsd0NBQWdCO0lBSU4sZUFBVTtJQUFWLHdDQUFVOzs7SUFNN0MsNEJBQTJCO0lBQUEsaUJBQUM7SUFBQSxpQkFBTzs7O0lBSS9CLHFDQUE0RDtJQUFBLFlBQXNEO0lBQUEsaUJBQWE7OztJQUFwRixrQ0FBZ0I7SUFBQyxlQUFzRDtJQUF0RCx3RkFBc0Q7OztJQUx4SCw2QkFBbUM7SUFDakMscUZBQW1DO0lBQ25DLHNDQUFnQjtJQUNkLGlDQUFXO0lBQUEseUJBQVM7SUFBQSxpQkFBWTtJQUNoQyxxQ0FBc0M7SUFDcEMsaUdBQStIO0lBQ2pJLGlCQUFhO0lBQ2YsaUJBQWlCO0lBQ25CLDBCQUFlOzs7SUFQTixlQUFrQjtJQUFsQiwwQ0FBa0I7SUFJVSxlQUFVO0lBQVYsd0NBQVU7OztJQVN6QyxxQ0FBa0U7SUFBQSxZQUFZO0lBQUEsaUJBQWE7OztJQUE1QyxvQ0FBa0I7SUFBQyxlQUFZO0lBQVosa0NBQVk7OztJQUpwRiw2QkFBcUM7SUFDbkMsNEJBQU07SUFBQSxZQUFTO0lBQUEsaUJBQU87SUFDdEIsc0NBQWdCO0lBQ2QscUNBQXVDO0lBQ3JDLGlHQUEyRjtJQUM3RixpQkFBYTtJQUNmLGlCQUFpQjtJQUNuQiwwQkFBZTs7O0lBTlAsZUFBUztJQUFULHlCQUFTO0lBR3NCLGVBQVk7SUFBWiwwQ0FBWTs7QUR4QnJELFFBQVEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFhLEVBQUUsR0FBVztJQUN4QyxLQUFLLElBQUksQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ2pDLE1BQU0sQ0FBQyxDQUFDO0tBQ1Q7QUFDSCxDQUFDO0FBU0QsTUFBTSxPQUFPLG1CQUFtQjtJQVc5QixZQUFtQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVIzQixrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzVCLFlBQU8sR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLFlBQU8sR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLGNBQVMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUdoQyxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O3NGQWhCVSxtQkFBbUI7d0RBQW5CLG1CQUFtQix3TkFGbkIsRUFBRTtRQ3RCZiwrQkFBbUM7UUFFakMsc0ZBT2U7UUFFZixzRkFRZTtRQUVmLHNGQVFlO1FBRWYsc0ZBT2U7UUFDakIsaUJBQU87O1FBdkNELDhDQUE0QjtRQUVqQixlQUFnQjtRQUFoQixxQ0FBZ0I7UUFTaEIsZUFBa0I7UUFBbEIsdUNBQWtCO1FBVWxCLGVBQWtCO1FBQWxCLHVDQUFrQjtRQVVsQixlQUFvQjtRQUFwQix5Q0FBb0I7O3VGRFB4QixtQkFBbUI7Y0FQL0IsU0FBUztlQUFDO2dCQUNULDhDQUE4QztnQkFDOUMsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLGtDQUFrQztnQkFDL0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7Z0JBQzNDLFNBQVMsRUFBRSxFQUFFO2FBQ2Q7bUVBR2lCLFFBQVE7a0JBQXZCLEtBQUs7WUFDVSxhQUFhO2tCQUE1QixLQUFLO1lBQ1UsU0FBUztrQkFBeEIsS0FBSztZQUNVLFdBQVc7a0JBQTFCLEtBQUs7WUFDVSxXQUFXO2tCQUExQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDb250cm9sQ29udGFpbmVyfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaW1lUGlja2VyTW9kZWwge1xyXG4gIGRheXM6IG51bWJlcjtcclxuICBob3VyczogbnVtYmVyO1xyXG4gIG1pbnV0ZXM6IG51bWJlcjtcclxuICBzZWNvbmRzOiBudW1iZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByYW5nZShzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcikge1xyXG4gIGZvciAobGV0IGkgPSBzdGFydDsgaSA8PSBlbmQ7IGkrKykge1xyXG4gICAgeWllbGQgaTtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Nyb24tdGltZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jcm9uLXRpbWUtcGlja2VyLnRlbXBsYXRlLmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Nyb24tZWRpdG9yLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGltZVBpY2tlckNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHB1YmxpYyBkaXNhYmxlZDtcclxuICBASW5wdXQoKSBwdWJsaWMgdXNlMjRIb3VyVGltZSA9IHRydWU7XHJcbiAgQElucHV0KCkgcHVibGljIGhpZGVIb3VycyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlTWludXRlcyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBoaWRlU2Vjb25kcyA9IHRydWU7XHJcbiAgcHVibGljIG1pbnV0ZXMgPSBbLi4ucmFuZ2UoMCwgNTkpXTtcclxuICBwdWJsaWMgc2Vjb25kcyA9IFsuLi5yYW5nZSgwLCA1OSldO1xyXG4gIHB1YmxpYyBob3VyVHlwZXMgPSBbJ0FNJywgJ1BNJ107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIpIHtcclxuICB9XHJcblxyXG4gIGdldCBob3VycygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy51c2UyNEhvdXJUaW1lID8gWy4uLnJhbmdlKDAsIDIzKV0gOiBbLi4ucmFuZ2UoMCwgMTIpXTtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiIsIjxzcGFuIFtmb3JtR3JvdXBdPVwicGFyZW50LmNvbnRyb2xcIj5cclxuXHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFoaWRlSG91cnNcIj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPG1hdC1sYWJlbD5Ib3VyKHMpPC9tYXQtbGFiZWw+XHJcbiAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImhvdXJzXCI+XHJcbiAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IGhvdXIgb2YgaG91cnNcIiBbdmFsdWVdPVwiaG91clwiPnt7aG91cn19PC9tYXQtb3B0aW9uPlxyXG4gICAgICA8L21hdC1zZWxlY3Q+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhpZGVNaW51dGVzXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInNlcGFyYXRvclwiICpuZ0lmPVwiIWhpZGVIb3Vyc1wiPjo8L3NwYW4+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQ+XHJcbiAgICAgIDxtYXQtbGFiZWw+TWludXRlKHMpPC9tYXQtbGFiZWw+XHJcbiAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cIm1pbnV0ZXNcIj5cclxuICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbWludXRlIG9mIG1pbnV0ZXNcIiBbdmFsdWVdPVwibWludXRlXCI+e3sgbWludXRlID49IDAgJiYgbWludXRlIDw9IDkgPyAnMCcgKyBtaW51dGUgOiBtaW51dGUgfX08L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGlkZVNlY29uZHNcIj5cclxuICAgIDxzcGFuICpuZ0lmPVwiIWhpZGVNaW51dGVzXCI+Ojwvc3Bhbj5cclxuICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgPG1hdC1sYWJlbD5TZWNvbmQocyk8L21hdC1sYWJlbD5cclxuICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwic2Vjb25kc1wiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBzZWNvbmQgb2Ygc2Vjb25kc1wiIFt2YWx1ZV09XCJzZWNvbmRcIj57e3NlY29uZCA+PSAwICYmIHNlY29uZCA8PSA5ID8gJzAnICsgc2Vjb25kIDogc2Vjb25kfX08L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdXNlMjRIb3VyVGltZVwiPlxyXG4gICAgPHNwYW4+e3sgJyAnIH19PC9zcGFuPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkPlxyXG4gICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJob3VyVHlwZVwiPlxyXG4gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBob3VyVHlwZSBvZiBob3VyVHlwZXNcIiBbdmFsdWVdPVwiaG91clR5cGVcIj57e2hvdXJUeXBlfX08L21hdC1vcHRpb24+XHJcbiAgICAgIDwvbWF0LXNlbGVjdD5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbjwvc3Bhbj5cclxuPCEtLTxzcGFuIFtmb3JtR3JvdXBdPVwicGFyZW50LmNvbnRyb2xcIj4tLT5cclxuXHJcbjwhLS0gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGlkZUhvdXJzXCI+LS0+XHJcbjwhLS0gICAgPG1hdC1mb3JtLWZpZWxkPi0tPlxyXG48IS0tICAgICAgPG1hdC1sYWJlbD5Ib3VyKHMpPC9tYXQtbGFiZWw+LS0+XHJcbjwhLS0gICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJob3Vyc1wiPi0tPlxyXG48IS0tICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgaG91ciBvZiBob3Vyc1wiIFt2YWx1ZV09XCJob3VyXCI+e3tob3VyfX08L21hdC1vcHRpb24+LS0+XHJcbjwhLS0gICAgICA8L21hdC1zZWxlY3Q+LS0+XHJcbjwhLS0gICAgPC9tYXQtZm9ybS1maWVsZD4tLT5cclxuPCEtLSAgPC9uZy1jb250YWluZXI+LS0+XHJcblxyXG48IS0tICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWhpZGVNaW51dGVzXCI+LS0+XHJcbjwhLS0gICAgPHNwYW4gKm5nSWY9XCIhaGlkZUhvdXJzXCI+Ojwvc3Bhbj4tLT5cclxuPCEtLSAgICA8bWF0LWZvcm0tZmllbGQ+LS0+XHJcbjwhLS0gICAgICA8bWF0LWxhYmVsPk1pbnV0ZShzKTwvbWF0LWxhYmVsPi0tPlxyXG48IS0tICAgICAgPG1hdC1zZWxlY3QgZm9ybUNvbnRyb2xOYW1lPVwibWludXRlc1wiPi0tPlxyXG48IS0tICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgbWludXRlIG9mIG1pbnV0ZXNcIiBbdmFsdWVdPVwibWludXRlXCI+e3ttaW51dGV9fTwvbWF0LW9wdGlvbj4tLT5cclxuPCEtLSAgICAgIDwvbWF0LXNlbGVjdD4tLT5cclxuPCEtLSAgICA8L21hdC1mb3JtLWZpZWxkPi0tPlxyXG48IS0tICA8L25nLWNvbnRhaW5lcj4tLT5cclxuXHJcbjwhLS0gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGlkZVNlY29uZHNcIj4tLT5cclxuPCEtLSAgICA8c3BhbiAqbmdJZj1cIiFoaWRlTWludXRlc1wiPjo8L3NwYW4+LS0+XHJcbjwhLS0gICAgPG1hdC1mb3JtLWZpZWxkPi0tPlxyXG48IS0tICAgICAgPG1hdC1sYWJlbD5TZWNvbmQocyk8L21hdC1sYWJlbD4tLT5cclxuPCEtLSAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cInNlY29uZHNcIj4tLT5cclxuPCEtLSAgICAgICAgPG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IHNlY29uZCBvZiBzZWNvbmRzXCIgW3ZhbHVlXT1cInNlY29uZFwiPnt7c2Vjb25kfX08L21hdC1vcHRpb24+LS0+XHJcbjwhLS0gICAgICA8L21hdC1zZWxlY3Q+LS0+XHJcbjwhLS0gICAgPC9tYXQtZm9ybS1maWVsZD4tLT5cclxuPCEtLSAgPC9uZy1jb250YWluZXI+LS0+XHJcblxyXG48IS0tICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXVzZTI0SG91clRpbWVcIj4tLT5cclxuPCEtLSAgICA8c3Bhbj48L3NwYW4+Li0tPlxyXG48IS0tICAgIDxtYXQtZm9ybS1maWVsZD4tLT5cclxuPCEtLSAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImhvdXJUeXBlXCI+LS0+XHJcbjwhLS0gICAgICAgIDxtYXQtb3B0aW9uICpuZ0Zvcj1cImxldCBob3VyVHlwZSBvZiBob3VyVHlwZXNcIiBbdmFsdWVdPVwiaG91clR5cGVcIj57e2hvdXJUeXBlfX08L21hdC1vcHRpb24+LS0+XHJcbjwhLS0gICAgICA8L21hdC1zZWxlY3Q+LS0+XHJcbjwhLS0gICAgPC9tYXQtZm9ybS1maWVsZD4tLT5cclxuPCEtLSAgPC9uZy1jb250YWluZXI+LS0+XHJcbjwhLS08L3NwYW4+LS0+XHJcbiJdfQ==