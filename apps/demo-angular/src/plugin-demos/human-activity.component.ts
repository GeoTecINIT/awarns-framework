import { Component, NgZone } from '@angular/core';
import { DemoSharedHumanActivity } from '@demo/shared';
import {} from '@awarns/human-activity';

@Component({
  selector: 'demo-human-activity',
  templateUrl: 'human-activity.component.html',
})
export class HumanActivityComponent {
  demoShared: DemoSharedHumanActivity;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedHumanActivity();
  }
}
