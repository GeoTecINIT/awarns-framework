import { EventData, Page } from '@nativescript/core';
import { DemoSharedMlKit } from '@demo/shared';
import {} from '@awarns/ml-kit';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMlKit {}
