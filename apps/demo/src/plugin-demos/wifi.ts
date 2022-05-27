import { EventData, Page } from '@nativescript/core';
import { DemoSharedWifi } from '@demo/shared';
import {} from '@awarns/wifi';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedWifi {}
