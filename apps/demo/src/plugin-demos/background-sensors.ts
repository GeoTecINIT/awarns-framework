import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedBackgroundSensors } from '@demo/shared';
import {} from '@awarns/background-sensors';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBackgroundSensors {}
