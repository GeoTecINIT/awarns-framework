import { EventData, Page } from '@nativescript/core';
import { DemoSharedTracing } from '@demo/shared';
import {} from '@awarns/tracing';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedTracing {}
