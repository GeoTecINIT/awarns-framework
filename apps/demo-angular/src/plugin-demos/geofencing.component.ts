import { Component, NgZone } from '@angular/core';
import { DemoSharedGeofencing } from '@demo/shared';
import {} from '@awarns/geofencing';

@Component({
  selector: 'demo-geofencing',
  templateUrl: 'geofencing.component.html',
})
export class GeofencingComponent {
  demoShared: DemoSharedGeofencing;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedGeofencing();
  }
}
