﻿import {Component, Input} from '@angular/core';
import {ControlContainer} from '@angular/forms';


export interface TimePickerModel {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function* range(start: number, end: number) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'cron-time-picker',
  templateUrl: './cron-time-picker.template.html',
  styleUrls: ['./cron-editor.component.scss'],
  providers: []
})
export class TimePickerComponent {

  @Input() public disabled;
  @Input() public use24HourTime = true;
  @Input() public hideHours = false;
  @Input() public hideMinutes = false;
  @Input() public hideSeconds = true;
  public minutes = [...range(0, 59)];
  public seconds = [...range(0, 59)];
  public hourTypes = ['AM', 'PM'];

  constructor(public parent: ControlContainer) {
  }

  get hours(): number[] {
    return this.use24HourTime ? [...range(0, 23)] : [...range(0, 12)];
  }


}


