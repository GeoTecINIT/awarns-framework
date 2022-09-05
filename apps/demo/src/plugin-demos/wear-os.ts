import { EventData, Page } from '@nativescript/core';
import { DemoSharedWearOs } from '@demo/shared';
import {} from '@awarns/wear-os';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedWearOs {}
