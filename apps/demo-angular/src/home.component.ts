import { Component } from '@angular/core';

@Component({
  selector: 'demo-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent {
  demos = [
    {
      name: 'core',
    },
    {
      name: 'persistence',
    },
    {
      name: 'tracing',
    },
    {
      name: 'battery',
    },
    {
      name: 'geolocation',
    },
    {
      name: 'wifi',
    },
    {
      name: 'ble',
    },
    {
      name: 'geofencing',
    },
    {
      name: 'human-activity',
    },
    {
      name: 'notifications',
    },
    {
      name: 'phone-sensors',
    },
  ];
}
