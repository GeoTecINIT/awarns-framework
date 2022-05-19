import { Record, Change } from '@awarns/core/entities';
import { HumanActivity } from 'nativescript-context-apis/activity-recognition';

export const HumanActivityChangeType = 'human-activity';

export class HumanActivityChange extends Record {
  constructor(public activity: HumanActivity, change: Change, detectedAt: Date, public confidence?: number) {
    super(HumanActivityChangeType, detectedAt, change);
  }
}

export { HumanActivity } from 'nativescript-context-apis/activity-recognition';
