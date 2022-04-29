import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedGeolocation } from '@demo/shared';
import {} from '@awarns/geolocation';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedGeolocation {}
