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
      name: 'geolocation',
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
  ];
}
