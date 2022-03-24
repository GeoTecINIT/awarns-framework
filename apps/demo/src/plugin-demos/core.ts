import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedCore } from '@demo/shared';
import {} from '@awarns/core';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedCore {}
