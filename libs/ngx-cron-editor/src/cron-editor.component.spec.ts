import {FormBuilder} from '@angular/forms';
import {CronGenComponent} from './cron-editor.component';
import {autoSpy} from '../../../auto-spy';
import * as assert from 'assert';

const {build} = setup().default();
const c = build();

describe('ComputeMinutesCron(): ', () => {
  const minutesCronTests = [
    {
      state: {
        minutes: 0,
        seconds: 0,
      },
      expectedOutput: '0 0/0 * 1/1 * ? *',
      description: 'Quartz minutes cron with default options',
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
      description: 'Quartz minutes cron with removeSeconds option',
      options: {
        defaultTime: '00:00:00',
        cronFlavor: 'quartz',
        removeSeconds: true,
      },
    },
  ]

  // _testComputeMinutesCron, _testComputeHourlyCron, _testComputeDailyCron
  // _testComputeWeeklyCron, _testComputeMonthlyCron, _testComputeYearlyCron

  minutesCronTests.forEach((sample) => {
    it(sample.description, async () => {
      c.options = sample.options;
      c.ngOnInit();
      const computedValue = c._testComputeMinutesCron(sample.state)
      assert.strictEqual(computedValue, sample.expectedOutput);
    });
  });

  // it('when ngOnInit is called it should', () => {
  //   // arrange
  //   // act
  //   c.ngOnInit();
  //   // assert
  //   // expect(c).toEqual
  // })
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
