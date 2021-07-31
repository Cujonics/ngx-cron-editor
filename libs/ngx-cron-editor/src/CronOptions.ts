export interface CronOptions {
  formInputClass: string;
  formSelectClass: string;
  formRadioClass: string;
  formCheckboxClass: string;

  formPrefixes?: CronPrefixes;
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

interface CronPrefixes {
  minutePrefix?: string;
  hourPrefix?: string;
  dayPrefix?: string;
  weekDayPrefix?: string;

  weeklyPrefix?: string;
  weeklyHourPrefix?: string;

  monthlyDayPrefix?: string;
  monthlyMonthPrefix?: string;
  monthlyHourPrefix?: string;

  yearlyDayPrefix?: string;
  yearlyMonthPrefix?: string;
  yearlyTimePrefix?: string;
}
