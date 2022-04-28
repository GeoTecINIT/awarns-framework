import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGeofencing } from '@demo/shared';
import {} from '@awarns/geofencing';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedGeofencing {}
