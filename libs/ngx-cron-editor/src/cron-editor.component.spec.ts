import {FormBuilder} from '@angular/forms';
import {CronGenComponent} from './cron-editor.component';
import {autoSpy} from '../../../auto-spy';

describe('Default Options', () => {
  const defaultTests = [
    {
      input: ''
    }
  ]

  it('when ngOnInit is called it should', () => {
    // arrange
    const {build} = setup().default();
    const c = build();

    c.options = {
      defaultTime: '00:00:00',
      cronFlavor: 'quartz'
    }

    // act
    c.ngOnInit();
    // assert
    // expect(c).toEqual
  })
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
