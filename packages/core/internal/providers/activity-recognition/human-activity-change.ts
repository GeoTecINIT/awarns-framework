import { Record, RecordType, Change } from '../base-record';
import { HumanActivity } from 'nativescript-context-apis/activity-recognition';

export class HumanActivityChange extends Record {
  constructor(public activity: HumanActivity, change: Change, detectedAt: Date, public confidence?: number) {
    super(RecordType.HumanActivity, detectedAt, change);
  }
}

export { HumanActivity } from 'nativescript-context-apis/activity-recognition';
