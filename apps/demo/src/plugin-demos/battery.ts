import { EventData, Page } from '@nativescript/core';
import { DemoSharedBattery } from '@demo/shared';
import {} from '@awarns/battery';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBattery {}
