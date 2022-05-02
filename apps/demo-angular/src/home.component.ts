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
