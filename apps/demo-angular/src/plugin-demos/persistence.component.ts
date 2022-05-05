import { Component, NgZone } from '@angular/core';
import { DemoSharedPersistence } from '@demo/shared';
import {} from '@awarns/persistence';

@Component({
  selector: 'demo-persistence',
  templateUrl: 'persistence.component.html',
})
export class PersistenceComponent {
  demoShared: DemoSharedPersistence;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedPersistence();
  }
}
