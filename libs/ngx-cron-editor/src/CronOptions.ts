export interface CronOptions {
  // Required
  cronFlavor: string; // ex: quartz
  defaultTime: string, // ex: 00:00:00

  // Optional
  formInputClass?: string;

  formRadioClass?: string; // Default: cron-editor-radio-button frequency-group
  formCheckboxClass?: string; // Default: checkbox-margin
  formSelectClass?: string; // Default: form-control cron-editor-input

  texts?: CronTextOptions; // Default: {}

  hideMinutesTab?: boolean; // Default: false
  hideHourlyTab?: boolean; // Default: false
  hideDailyTab?: boolean; // Default: false
  hideWeeklyTab?: boolean; // Default: false
  hideMonthlyTab?: boolean; // Default: false
  hideYearlyTab?: boolean; // Default: false
  hideAdvancedTab?: boolean; // Default: false
  hideSpecificWeekDayTab?: boolean;
  hideSpecificMonthWeekTab?: boolean;
  hideNearestWeekdayCheck?: boolean; // Default: false

  use24HourTime?: boolean; // Default: true
  hideSeconds?: boolean; // Default: false

  removeSeconds?: boolean; // Default: true
  removeYears?: boolean; // Default: true
}

interface CronTextOptions {
  frequencyPrefix?: string; // Default: every
  timePrefix?: string; // Default: at
  weekDayPrefix?: string; // Default: Every working day at

  specificDayPrefix?: string; // Default: On the
  yearlyMonthPrefix?: string; // Default: of
  monthlyMonthPrefix?: string; // Default: of every

  weeklyDayTitle?: string; // Default: Day(s)
  weeklyTimeTitle?: string; // Default: Time

  nearestWeekdayText?: string; // Default: during the nearest weekday
}
