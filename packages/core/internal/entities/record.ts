import { Change } from './change';
import { uuid } from '../utils/uuid';

export abstract class Record {
  protected constructor(
    public type: string,
    public timestamp = new Date(),
    public change = Change.NONE,
    public id = uuid()
  ) {}
}
