import { Component, NgZone } from '@angular/core';
import { DemoSharedWifi } from '@demo/shared';
import {} from '@awarns/wifi';

@Component({
  selector: 'demo-wifi',
  templateUrl: 'wifi.component.html',
})
export class WifiComponent {
  demoShared: DemoSharedWifi;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedWifi();
  }
}
