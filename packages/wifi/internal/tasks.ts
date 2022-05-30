import { BatchPullProviderTask, SinglePullProviderTask, Task } from '@awarns/core/tasks';
import { WifiScanProvider } from './provider';

const DEFAULT_ENSURE_IS_NEW = true;
const DEFAULT_TIMEOUT = 15000;

export function acquirePhoneWifiScanTask(config: WifiScanTaskConfig = {}): Task {
  return new SinglePullProviderTask(
    new WifiScanProvider(config.ensureIsNew ?? DEFAULT_ENSURE_IS_NEW, config.timeout ?? DEFAULT_TIMEOUT),
    'Phone',
    { foreground: true }
  );
}

export function acquireMultiplePhoneWifiScanTask(config: WifiScanTaskConfig = {}): Task {
  return new BatchPullProviderTask(
    new WifiScanProvider(config.ensureIsNew ?? DEFAULT_ENSURE_IS_NEW, config.timeout ?? DEFAULT_TIMEOUT),
    'Phone',
    { foreground: true }
  );
}

export interface WifiScanTaskConfig {
  ensureIsNew?: boolean;
  timeout?: number;
}
