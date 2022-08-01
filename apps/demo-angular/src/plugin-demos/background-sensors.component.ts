import { Component, NgZone } from '@angular/core';
import { DemoSharedBackgroundSensors } from '@demo/shared';
import {} from '@awarns/background-sensors';

@Component({
  selector: 'demo-background-sensors',
  templateUrl: 'background-sensors.component.html',
})
export class BackgroundSensorsComponent {
  demoShared: DemoSharedBackgroundSensors;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBackgroundSensors();
  }
}
