import { Component, NgZone } from '@angular/core';
import { DemoSharedNotifications } from '@demo/shared';
import {} from '@awarns/notifications';

@Component({
  selector: 'demo-notifications',
  templateUrl: 'notifications.component.html',
})
export class NotificationsComponent {
  demoShared: DemoSharedNotifications;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedNotifications();
  }
}
