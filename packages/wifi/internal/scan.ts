import { Record } from '@awarns/core/entities';
import { WifiApInfo } from 'nativescript-context-apis/wifi';

export const WifiScanType = 'wifi-scan';

export class WifiScan extends Record {
  constructor(public seen: Array<WifiApInfo>, public isNew: boolean, capturedAt: Date) {
    super(WifiScanType, capturedAt);
  }
}
