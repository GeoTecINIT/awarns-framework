import { EventData, Page } from '@nativescript/core';
import { DemoSharedBle } from '@demo/shared';
import {} from '@awarns/ble';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedBle {}
