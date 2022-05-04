import { EventData, Page } from '@nativescript/core';
import { DemoSharedNotifications } from '@demo/shared';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNotifications {}
