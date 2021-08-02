import {Component, OnInit, ViewChild} from '@angular/core';
import { CronOptions } from '../../../../libs/ngx-cron-editor/public_api';
import { CronGenComponent } from '../../../../libs/ngx-cron-editor/public_api';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public cronExpression = '0 0 1/1 * *';
  public isCronDisabled = false;
  public cronOptions: CronOptions = {
    defaultTime: '00:00:00',

    hideMinutesTab: false,
    hideHourlyTab: false,
    hideDailyTab: false,
    hideWeeklyTab: false,
    hideMonthlyTab: false,
    hideYearlyTab: false,
    hideAdvancedTab: true,
    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab: false,
    hideNearestWeekdayCheck: true,

    use24HourTime: true,
    hideSeconds: true,

    removeSeconds: false,
    removeYears: false,

    cronFlavor: 'quartz'
  };

  @ViewChild('cronEditorDemo')
  cronEditorDemo: CronGenComponent;

  cronForm: FormControl;

  constructor() {}

  ngOnInit(): void {
    this.cronForm = new FormControl(this.cronExpression);
  }

  cronFlavorChange() {
    this.cronEditorDemo.options = this.cronOptions;
  }
}
