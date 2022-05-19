import { Change, Record } from '@awarns/core/entities';

export const BatteryLevelType = 'battery-level';

export class BatteryLevel extends Record {
  static fromPercentage(level: number) {
    return new BatteryLevel(level);
  }
  constructor(public value: number, public capturedAt = new Date()) {
    super(BatteryLevelType, capturedAt, Change.NONE);
  }
}
