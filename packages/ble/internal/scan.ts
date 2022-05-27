import { Record } from '@awarns/core/entities';
import { BleDeviceInfo } from 'nativescript-context-apis/ble';

export const BleScanType = 'ble-scan';

export class BleScan extends Record {
  constructor(public seen: Array<BleDeviceInfo>, capturedAt: Date) {
    super(BleScanType, capturedAt);
  }
}
