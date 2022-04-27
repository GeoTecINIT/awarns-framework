import { RecordType } from './record-type';
import { Change } from './change';

export abstract class Record {
  protected constructor(public type: RecordType | string, public timestamp = new Date(), public change = Change.NONE) {}
}
