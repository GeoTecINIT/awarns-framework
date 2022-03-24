import { Component, NgZone } from '@angular/core';
import { DemoSharedCore } from '@demo/shared';
import {} from '@awarns/core';

@Component({
  selector: 'demo-core',
  templateUrl: 'core.component.html',
})
export class CoreComponent {
  demoShared: DemoSharedCore;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedCore();
  }
}
