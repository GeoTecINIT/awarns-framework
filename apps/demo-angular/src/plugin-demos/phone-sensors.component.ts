import { Component, NgZone } from '@angular/core';
import { DemoSharedPhoneSensors } from '@demo/shared';
import {} from '@awarns/phone-sensors';

@Component({
  selector: 'demo-phone-sensors',
  templateUrl: 'phone-sensors.component.html',
})
export class PhoneSensorsComponent {
  demoShared: DemoSharedPhoneSensors;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedPhoneSensors();
  }
}
