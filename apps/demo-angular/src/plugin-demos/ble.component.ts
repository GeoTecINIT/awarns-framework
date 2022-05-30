import { Component, NgZone } from '@angular/core';
import { DemoSharedBle } from '@demo/shared';
import {} from '@awarns/ble';

@Component({
  selector: 'demo-ble',
  templateUrl: 'ble.component.html',
})
export class BleComponent {
  demoShared: DemoSharedBle;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedBle();
  }
}
