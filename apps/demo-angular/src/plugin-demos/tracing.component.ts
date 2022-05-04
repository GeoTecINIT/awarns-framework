import { Component, NgZone } from '@angular/core';
import { DemoSharedTracing } from '@demo/shared';
import {} from '@awarns/tracing';

@Component({
  selector: 'demo-tracing',
  templateUrl: 'tracing.component.html',
})
export class TracingComponent {
  demoShared: DemoSharedTracing;

  constructor(private _ngZone: NgZone) {}

  ngOnInit() {
    this.demoShared = new DemoSharedTracing();
  }
}
