export interface CronOptions {
    cronFlavor: string;
    defaultTime: string;
    formInputClass?: string;
    formRadioClass?: string;
    formCheckboxClass?: string;
    formSelectClass?: string;
    texts?: CronTextOptions;
    hideMinutesTab?: boolean;
    hideHourlyTab?: boolean;
    hideDailyTab?: boolean;
    hideWeeklyTab?: boolean;
    hideMonthlyTab?: boolean;
    hideYearlyTab?: boolean;
    hideAdvancedTab?: boolean;
    hideSpecificWeekDayTab?: boolean;
    hideSpecificMonthWeekTab?: boolean;
    hideNearestWeekdayCheck?: boolean;
    hideSelectSuffixes?: boolean;
    use24HourTime?: boolean;
    hideSeconds?: boolean;
    removeSeconds?: boolean;
    removeYears?: boolean;
}
interface CronTextOptions {
    frequencyPrefix?: string;
    timePrefix?: string;
    weekDayPrefix?: string;
    specificDayPrefix?: string;
    yearlyMonthPrefix?: string;
    monthlyMonthPrefix?: string;
    weeklyDayTitle?: string;
    weeklyTimeTitle?: string;
    nearestWeekdayText?: string;
}
export {};
//# sourceMappingURL=CronOptions.d.ts.map