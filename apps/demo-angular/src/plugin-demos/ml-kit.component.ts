import { Component, NgZone } from '@angular/core';
import { DemoSharedMlKit } from '@demo/shared';
import {} from '@awarns/ml-kit';

@Component({
  selector: 'demo-ml-kit',
  templateUrl: 'ml-kit.component.html',
})
export class MlKitComponent {
  demoShared: DemoSharedMlKit;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedMlKit();
  }
}
