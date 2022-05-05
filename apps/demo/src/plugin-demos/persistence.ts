import { EventData, Page } from '@nativescript/core';
import { DemoSharedPersistence } from '@demo/shared';
import {} from '@awarns/persistence';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedPersistence {}
