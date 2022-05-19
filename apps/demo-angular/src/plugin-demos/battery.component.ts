import { Component, NgZone } from '@angular/core';
import { DemoSharedBattery } from '@demo/shared';
import {} from '@awarns/battery';

@Component({
  selector: 'demo-battery',
  templateUrl: 'battery.component.html',
})
export class BatteryComponent {
  demoShared: DemoSharedBattery;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBattery();
  }
}
