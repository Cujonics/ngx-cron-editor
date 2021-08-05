import {Component, OnInit, ViewChild} from '@angular/core';
import {CronGenComponent, CronOptions} from '../../../../libs/ngx-cron-editor/public_api';
import {FormControl} from '@angular/forms';

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
    hideAdvancedTab: false,

    hideSpecificWeekDayTab: false,
    hideSpecificMonthWeekTab: false,
    hideNearestWeekdayCheck: false,

    use24HourTime: true,
    hideSeconds: true,

    removeSeconds: false,
    removeYears: false,

    cronFlavor: 'quartz'
  };

  demoOptions = ['hideMinutesTab', 'hideHourlyTab', 'hideDailyTab', 'hideWeeklyTab', 'hideYearlyTab', 'hideAdvancedTab',
    'hideSpecificWeekDayTab', 'hideSpecificMonthWeekTab', 'hideNearestWeekdayCheck', 'use24HourTime', 'hideSeconds', 'removeSeconds', 'removeYears', 'hideSelectSuffixes'
  ]

  @ViewChild('cronEditorDemo')
  cronEditorDemo: CronGenComponent;

  cronForm: FormControl;

  constructor() {
  }

  ngOnInit(): void {
    this.cronForm = new FormControl(this.cronExpression);
  }

  cronFlavorChange(cronFlavor: string) {
    this.cronOptions.cronFlavor = cronFlavor;
  }

  optionsChanged($event, option, optVal) {
    this.cronOptions[option] = $event;
  }
}
