import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedHumanActivity } from '@demo/shared';
import {} from '@awarns/human-activity';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedHumanActivity {}
