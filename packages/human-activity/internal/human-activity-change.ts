import { Record, Change, KnownTypes } from '@awarns/core/entities';
import { HumanActivity } from 'nativescript-context-apis/activity-recognition';

export class HumanActivityChange extends Record {
  constructor(public activity: HumanActivity, change: Change, detectedAt: Date, public confidence?: number) {
    super(KnownTypes.HumanActivity, detectedAt, change);
  }
}

export { HumanActivity } from 'nativescript-context-apis/activity-recognition';
