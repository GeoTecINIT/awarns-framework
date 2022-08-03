import { Component, NgZone } from '@angular/core';
import { DemoSharedWearOs } from '@demo/shared';
import {} from '@awarns/wear-os';

@Component({
  selector: 'demo-wear-os',
  templateUrl: 'wear-os.component.html',
})
export class WearOsComponent {
  demoShared: DemoSharedWearOs;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedWearOs();
  }
}
