import { Change } from './change';

export abstract class Record {
  protected constructor(public type: string, public timestamp = new Date(), public change = Change.NONE) {}
}
