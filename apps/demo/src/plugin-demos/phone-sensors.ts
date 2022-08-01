import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedPhoneSensors } from '@demo/shared';
import {} from '@awarns/phone-sensors';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPhoneSensors {}
