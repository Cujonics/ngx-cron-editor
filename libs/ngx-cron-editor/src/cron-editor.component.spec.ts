import {FormBuilder, FormControl} from '@angular/forms';
import {CronGenComponent} from './cron-editor.component';
import {autoSpy} from '../../../auto-spy';
import * as assert from 'assert';

const {build} = setup().default();
const c = build();

// Just leave this here to appease Jasmine.
c.cronForm = new FormControl('0 0 1/1 * *')

describe('Quartz ComputeMinutesCron(): ', () => {
  const tests = [
    {
      state: {
        minutes: 0,
        seconds: 0,
      },
      expectedOutput: '0 0/0 * 1/1 * ? *',
      description: 'With default options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz'
      },
    },
    {
      state: {
        minutes: 0,
        seconds: 0,
      },
      expectedOutput: '0/0 * 1/1 * ? *',
      description: 'With removeSeconds option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeSeconds: true,
      },
    },
    {
      state: {
        minutes: 0,
        seconds: 0,
      },
      expectedOutput: '0 0/0 * 1/1 * ?',
      description: 'With removeYears option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
      },
    },
    {
      state: {
        minutes: 0,
        seconds: 0,
      },
      expectedOutput: '0/0 * 1/1 * ?',
      description: 'With removeYears & removeSeconds options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
        removeSeconds: true,
      },
    },
  ]
  tests.forEach((sample) => {
    it(sample.description, async () => {
      c.options = sample.options;
      const computedValue = c._testComputeMinutesCron(sample.state)
      assert.strictEqual(computedValue, sample.expectedOutput);
    });
  });
});

describe('Quartz ComputeHourlyCron(): ', () => {
  const tests = [
    {
      state: {
        minutes: 0,
        seconds: 0,
        hours: 1,
      },
      expectedOutput: '0 0 0/1 1/1 * ? *',
      description: 'With default options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz'
      },
    },
    {
      state: {
        minutes: 0,
        seconds: 0,
        hours: 1,
      },
      expectedOutput: '0 0/1 1/1 * ? *',
      description: 'With removeSeconds option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeSeconds: true,
      },
    },
    {
      state: {
        minutes: 0,
        seconds: 0,
        hours: 1,
      },
      expectedOutput: '0 0 0/1 1/1 * ?',
      description: 'With removeYears option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
      },
    },
    {
      state: {
        minutes: 0,
        seconds: 0,
        hours: 1,
      },
      expectedOutput: '0 0/1 1/1 * ?',
      description: 'With removeYears & removeSeconds options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
        removeSeconds: true,
      },
    },
  ]
  tests.forEach((sample) => {
    it(sample.description, async () => {
      c.options = sample.options;
      const computedValue = c._testComputeHourlyCron(sample.state)
      assert.strictEqual(computedValue, sample.expectedOutput);
    });
  });
});

describe('Quartz ComputeDailyCron() specificDay: ', () => {
  const tests = [
    {
      state: {
        subTab: 'everyDay',
        everyDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          days: 1,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 0 1 1/1 * ? *',
      description: 'With default options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz'
      },
    },
    {
      state: {
        subTab: 'everyDay',
        everyDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          days: 1,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 1/1 * ? *',
      description: 'With removeSeconds option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeSeconds: true,
      },
    },
    {
      state: {
        subTab: 'everyDay',
        everyDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          days: 1,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 0 1 1/1 * ?',
      description: 'With removeYears option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
      },
    },
    {
      state: {
        subTab: 'everyDay',
        everyDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          days: 1,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 1/1 * ?',
      description: 'With removeYears & removeSeconds options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
        removeSeconds: true,
      },
    },
  ]
  tests.forEach((sample) => {
    it(sample.description, async () => {
      c.options = sample.options;
      const computedValue = c._testComputeDailyCron(sample.state)
      assert.strictEqual(computedValue, sample.expectedOutput);
    });
  });
});

describe('Quartz ComputeDailyCron() everyWeekDay: ', () => {
  const tests = [
    {
      state: {
        subTab: 'everyWeekDay',
        everyWeekDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          days: 1,
          nearestWeekday: false,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 0 1 ? * MON-FRI *',
      description: 'With default options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz'
      },
    },
    {
      state: {
        subTab: 'everyWeekDay',
        everyWeekDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          days: 1,
          nearestWeekday: false,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 ? * MON-FRI *',
      description: 'With removeSeconds option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeSeconds: true,
      },
    },
    {
      state: {
        subTab: 'everyWeekDay',
        everyWeekDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          days: 1,
          nearestWeekday: false,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 0 1 ? * MON-FRI',
      description: 'With removeYears option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
      },
    },
    {
      state: {
        subTab: 'everyWeekDay',
        everyWeekDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          days: 1,
          nearestWeekday: false,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 ? * MON-FRI',
      description: 'With removeYears & removeSeconds options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
        removeSeconds: true,
      },
    },
  ]
  tests.forEach((sample) => {
    it(sample.description, async () => {
      c.options = sample.options;
      const computedValue = c._testComputeDailyCron(sample.state)
      assert.strictEqual(computedValue, sample.expectedOutput);
    });
  });
});

describe('Quartz ComputeWeeklyCron(): ', () => {
  const tests = [
    {
      state: {
        seconds: 0,
        minutes: 0,
        hours: 1,
        MON: [true],
        TUE: [false],
        WED: [false],
        THU: [false],
        FRI: [false],
        SAT: [false],
        SUN: [false],
        days: ['MON'],
        hourType: 'AM'
      },
      expectedOutput: '0 0 1 ? * MON *',
      description: 'With default options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz'
      },
    },
    {
      state: {
        seconds: 0,
        minutes: 0,
        hours: 1,
        MON: [true],
        TUE: [true],
        WED: [false],
        THU: [false],
        FRI: [true],
        SAT: [false],
        SUN: [true],
        days: ['MON', 'TUE', 'FRI', 'SUN'],
        hourType: 'AM'
      },
      expectedOutput: '0 1 ? * MON,TUE,FRI,SUN *',
      description: 'With removeSeconds option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeSeconds: true,
      },
    },
    {
      state: {
        seconds: 0,
        minutes: 0,
        hours: 1,
        MON: [false],
        TUE: [false],
        WED: [false],
        THU: [false],
        FRI: [true],
        SAT: [true],
        SUN: [true],
        days: ['FRI', 'SAT', 'SUN'],
        hourType: 'AM'
      },
      expectedOutput: '0 0 1 ? * FRI,SAT,SUN',
      description: 'With removeYears option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
      },
    },
    {
      state: {
        seconds: 0,
        minutes: 0,
        hours: 1,
        MON: [false],
        TUE: [true],
        WED: [false],
        THU: [false],
        FRI: [true],
        SAT: [true],
        SUN: [true],
        days: ['TUE', 'FRI', 'SAT', 'SUN'],
        hourType: 'AM'
      },
      expectedOutput: '0 1 ? * TUE,FRI,SAT,SUN',
      description: 'With removeYears & removeSeconds options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
        removeSeconds: true,
      },
    },
  ]
  tests.forEach((sample) => {
    it(sample.description, async () => {
      c.options = sample.options;
      c.selectOptions.days = sample.state.days
      const computedValue = c._testComputeWeeklyCron(sample.state)
      assert.strictEqual(computedValue, sample.expectedOutput);
    });
  });
});

describe('Quartz ComputeMonthlyCron() specificDay: ', () => {
  const tests = [
    {
      state: {
        subTab: 'specificDay',
        specificDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 2,
          months: 3,
          nearestWeekday: false,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 0 1 2 1/3 ? *',
      description: 'With default options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz'
      },
    },
    {
      state: {
        subTab: 'specificDay',
        specificDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 2,
          months: 3,
          nearestWeekday: false,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 2 1/3 ? *',
      description: 'With removeSeconds option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeSeconds: true,
      },
    },
    {
      state: {
        subTab: 'specificDay',
        specificDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 2,
          months: 3,
          nearestWeekday: false,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 0 1 2 1/3 ?',
      description: 'With removeYears option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
      },
    },
    {
      state: {
        subTab: 'specificDay',
        specificDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 2,
          months: 3,
          nearestWeekday: false,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 2 1/3 ?',
      description: 'With removeYears & removeSeconds options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
        removeSeconds: true,
      },
    },
    {
      state: {
        subTab: 'specificDay',
        specificDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 2,
          months: 3,
          nearestWeekday: true,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 2W 1/3 ?',
      description: 'With removeYears & removeSeconds & nearestWeekday options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
        removeSeconds: true,
      },
    },
  ]
  tests.forEach((sample) => {
    it(sample.description, async () => {
      c.options = sample.options;
      const computedValue = c._testComputeMonthlyCron(sample.state)
      assert.strictEqual(computedValue, sample.expectedOutput);
    });
  });
});

describe('Quartz ComputeMonthlyCron() specificWeekDay: ', () => {
  const tests = [
    {
      state: {
        subTab: 'specificWeekDay',
        specificWeekDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 'MON',
          monthWeek: '#1',
          months: 1,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 0 1 ? 1/1 MON#1 *',
      description: 'With default options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz'
      },
    },
    {
      state: {
        subTab: 'specificWeekDay',
        specificWeekDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 'MON',
          monthWeek: '#1',
          months: 1,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 ? 1/1 MON#1 *',
      description: 'With removeSeconds option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeSeconds: true,
      },
    },
    {
      state: {
        subTab: 'specificWeekDay',
        specificWeekDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 'MON',
          monthWeek: '#1',
          months: 1,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 0 1 ? 1/1 MON#1',
      description: 'With removeYears option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
      },
    },
    {
      state: {
        subTab: 'specificWeekDay',
        specificWeekDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 'MON',
          monthWeek: '#1',
          months: 1,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 ? 1/1 MON#1',
      description: 'With removeYears & removeSeconds options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
        removeSeconds: true,
      },
    },
  ]
  tests.forEach((sample) => {
    it(sample.description, async () => {
      c.options = sample.options;
      const computedValue = c._testComputeMonthlyCron(sample.state)
      assert.strictEqual(computedValue, sample.expectedOutput);
    });
  });
});

describe('Quartz ComputeYearlyCron() specificMonthDay: ', () => {
  const tests = [
    {
      state: {
        subTab: 'specificMonthDay',
        specificMonthDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 2,
          month: 1,
          nearestWeekday: false,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 0 1 2 1 ? *',
      description: 'With default options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz'
      },
    },
    {
      state: {
        subTab: 'specificMonthDay',
        specificMonthDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 2,
          month: 1,
          nearestWeekday: false,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 2 1 ? *',
      description: 'With removeSeconds option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeSeconds: true,
      },
    },
    {
      state: {
        subTab: 'specificMonthDay',
        specificMonthDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 2,
          month: 1,
          nearestWeekday: false,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 0 1 2 1 ?',
      description: 'With removeYears option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
      },
    },
    {
      state: {
        subTab: 'specificMonthDay',
        specificMonthDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 2,
          month: 1,
          nearestWeekday: false,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 2 1 ?',
      description: 'With removeYears & removeSeconds options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
        removeSeconds: true,
      },
    },
    {
      state: {
        subTab: 'specificMonthDay',
        specificMonthDay: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 2,
          month: 1,
          nearestWeekday: true,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 2W 1 ?',
      description: 'With removeYears & removeSeconds & nearestWeekday options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
        removeSeconds: true,
      },
    },
  ]
  tests.forEach((sample) => {
    it(sample.description, async () => {
      c.options = sample.options;
      const computedValue = c._testComputeYearlyCron(sample.state)
      assert.strictEqual(computedValue, sample.expectedOutput);
    });
  });
});

describe('Quartz ComputeMonthlyCron() specificMonthWeek: ', () => {
  const tests = [
    {
      state: {
        subTab: 'specificMonthWeek',
        specificMonthWeek: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 'MON',
          monthWeek: '#1',
          month: 1,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 0 1 ? 1 MON#1 *',
      description: 'With default options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz'
      },
    },
    {
      state: {
        subTab: 'specificMonthWeek',
        specificMonthWeek: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 'MON',
          monthWeek: '#1',
          month: 1,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 ? 1 MON#1 *',
      description: 'With removeSeconds option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeSeconds: true,
      },
    },
    {
      state: {
        subTab: 'specificMonthWeek',
        specificMonthWeek: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 'MON',
          monthWeek: '#1',
          month: 1,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 0 1 ? 1 MON#1',
      description: 'With removeYears option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
      },
    },
    {
      state: {
        subTab: 'specificMonthWeek',
        specificMonthWeek: {
          seconds: 0,
          minutes: 0,
          hours: 1,
          day: 'MON',
          monthWeek: '#1',
          month: 1,
          hourType: 'AM'
        }
      },
      expectedOutput: '0 1 ? 1 MON#1',
      description: 'With removeYears & removeSeconds options',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeYears: true,
        removeSeconds: true,
      },
    },
  ]
  tests.forEach((sample) => {
    it(sample.description, async () => {
      c.options = sample.options;
      const computedValue = c._testComputeYearlyCron(sample.state)
      assert.strictEqual(computedValue, sample.expectedOutput);
    });
  });
});


function setup() {
  const fb = autoSpy(FormBuilder);
  const builder = {
    fb,
    default() {
      return builder;
    },
    build() {
      return new CronGenComponent(fb);
    }
  };
  return builder;
}
