import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimePickerComponent } from './cron-time-picker.component';
import { CronGenComponent } from './cron-editor.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export class CronEditorModule {
}
CronEditorModule.ɵfac = function CronEditorModule_Factory(t) { return new (t || CronEditorModule)(); };
CronEditorModule.ɵmod = i0.ɵɵdefineNgModule({ type: CronEditorModule });
CronEditorModule.ɵinj = i0.ɵɵdefineInjector({ providers: [
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CronEditorModule, { declarations: [TimePickerComponent, CronGenComponent], imports: [CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatTabsModule,
        MatListModule,
        MatSelectModule,
        MatInputModule,
        MatRadioModule,
        MatCheckboxModule], exports: [TimePickerComponent, CronGenComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CronEditorModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3Jvbi1lZGl0b3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL2xpYnMvbmd4LWNyb24tZWRpdG9yLyIsInNvdXJjZXMiOlsic3JjL2Nyb24tZWRpdG9yLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxXQUFXLEVBQUUsbUJBQW1CLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUMsOEJBQThCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7QUFzQjVFLE1BQU0sT0FBTyxnQkFBZ0I7O2dGQUFoQixnQkFBZ0I7b0RBQWhCLGdCQUFnQjt5REFKZDtRQUNYLEVBQUMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLFFBQVEsRUFBRSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsRUFBQztLQUM3RSxZQWZRO1lBQ1AsWUFBWTtZQUNaLFdBQVc7WUFDWCxtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGFBQWE7WUFDYixlQUFlO1lBQ2YsY0FBYztZQUNkLGNBQWM7WUFDZCxpQkFBaUI7U0FDbEI7d0ZBT1UsZ0JBQWdCLG1CQUxWLG1CQUFtQixFQUFFLGdCQUFnQixhQVhwRCxZQUFZO1FBQ1osV0FBVztRQUNYLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsYUFBYTtRQUNiLGVBQWU7UUFDZixjQUFjO1FBQ2QsY0FBYztRQUNkLGlCQUFpQixhQUVQLG1CQUFtQixFQUFFLGdCQUFnQjt1RkFNdEMsZ0JBQWdCO2NBbEI1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxtQkFBbUI7b0JBQ25CLGFBQWE7b0JBQ2IsYUFBYTtvQkFDYixlQUFlO29CQUNmLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxpQkFBaUI7aUJBQ2xCO2dCQUNDLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDO2dCQUNoRCxZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxnQkFBZ0IsQ0FBQztnQkFDckQsU0FBUyxFQUFFO29CQUNYLEVBQUMsT0FBTyxFQUFFLDhCQUE4QixFQUFFLFFBQVEsRUFBRSxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsRUFBQztpQkFDN0U7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVGltZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vY3Jvbi10aW1lLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDcm9uR2VuQ29tcG9uZW50IH0gZnJvbSAnLi9jcm9uLWVkaXRvci5jb21wb25lbnQnO1xyXG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xyXG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xyXG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcclxuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7TUFUX0ZPUk1fRklFTERfREVGQVVMVF9PUFRJT05TfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuXHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBGb3Jtc01vZHVsZSxcclxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXHJcbiAgICBNYXRUYWJzTW9kdWxlLFxyXG4gICAgTWF0TGlzdE1vZHVsZSxcclxuICAgIE1hdFNlbGVjdE1vZHVsZSxcclxuICAgIE1hdElucHV0TW9kdWxlLFxyXG4gICAgTWF0UmFkaW9Nb2R1bGUsXHJcbiAgICBNYXRDaGVja2JveE1vZHVsZVxyXG4gIF0sXHJcbiAgICBleHBvcnRzOiBbVGltZVBpY2tlckNvbXBvbmVudCwgQ3JvbkdlbkNvbXBvbmVudF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtUaW1lUGlja2VyQ29tcG9uZW50LCBDcm9uR2VuQ29tcG9uZW50XSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAge3Byb3ZpZGU6IE1BVF9GT1JNX0ZJRUxEX0RFRkFVTFRfT1BUSU9OUywgdXNlVmFsdWU6IHthcHBlYXJhbmNlOiAnb3V0bGluZSd9fVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENyb25FZGl0b3JNb2R1bGUge1xyXG59XHJcbiJdfQ==