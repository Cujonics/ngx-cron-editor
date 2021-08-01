export interface CronOptions {
  formInputClass: string;
  formSelectClass: string;
  formRadioClass: string;
  formCheckboxClass: string;

  texts?: CronTextOptions;
  reactive?: boolean;

  defaultTime: string,

  hideMinutesTab: boolean;
  hideHourlyTab: boolean;
  hideDailyTab: boolean;
  hideWeeklyTab: boolean;
  hideMonthlyTab: boolean;
  hideYearlyTab: boolean;
  hideAdvancedTab: boolean;
  hideSpecificWeekDayTab: boolean;
  hideSpecificMonthWeekTab: boolean;

  use24HourTime: boolean;
  hideSeconds: boolean;

  cronFlavor: string;
}

interface CronTextOptions {
  frequencyPrefix?: string; // Default: every
  timePrefix?: string; // Default: at
  weekDayPrefix?: string; // Default: Every working day at

  specificDayPrefix?: string; // Default: On the
  yearlyMonthPrefix?: string; // Default: of
  monthlyMonthPrefix?: string; // of every

  weeklyDayTitle?: string; // Default: Day(s)
  weeklyTimeTitle?: string; // Default: Time

  nearestWeekdayText?: string; // Default: during the nearest weekday
}
