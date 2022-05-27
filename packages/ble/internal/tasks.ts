import { BatchPullProviderTask, SinglePullProviderTask, Task } from '@awarns/core/tasks';
import { BleScanProvider } from './provider';
import { BleScanMode } from 'nativescript-context-apis/ble';

const DEFAULT_SCAN_TIME = 5000;
const DEFAULT_SCAN_MODE = BleScanMode.BALANCED;

export function acquirePhoneBleScanTask(config: BleScanTaskConfig = {}): Task {
  return new SinglePullProviderTask(
    new BleScanProvider(
      config.scanTime ?? DEFAULT_SCAN_TIME,
      config.scanMode ?? DEFAULT_SCAN_MODE,
      config.iBeaconUuids ?? []
    ),
    'Phone',
    { foreground: true }
  );
}

export function acquireMultiplePhoneBleScanTask(config: BleScanTaskConfig = {}): Task {
  return new BatchPullProviderTask(
    new BleScanProvider(
      config.scanTime ?? DEFAULT_SCAN_TIME,
      config.scanMode ?? DEFAULT_SCAN_MODE,
      config.iBeaconUuids ?? []
    ),
    'Phone',
    { foreground: true }
  );
}

export interface BleScanTaskConfig {
  scanTime?: number;
  scanMode?: BleScanMode;
  iBeaconUuids?: Array<string>;
}

export { BleScanMode };
