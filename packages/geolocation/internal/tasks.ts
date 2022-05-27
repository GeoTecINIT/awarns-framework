import { Task, SinglePullProviderTask, BatchPullProviderTask } from '@awarns/core/tasks';
import { GeolocationProvider } from './provider';

const DEFAULT_SINGLE_BEST_OF = 3;
const DEFAULT_SINGLE_TIMEOUT = 10000;

const DEFAULT_BATCH_BEST_OF = 1;
const DEFAULT_BATCH_TIMEOUT = 15000;

export function acquirePhoneGeolocationTask(config: GeolocationTaskConfig = {}): Task {
  return new SinglePullProviderTask(
    new GeolocationProvider(config.bestOf ?? DEFAULT_SINGLE_BEST_OF, config.timeout ?? DEFAULT_SINGLE_TIMEOUT),
    'Phone',
    { foreground: true }
  );
}

export function acquireMultiplePhoneGeolocationTask(config: GeolocationTaskConfig = {}): Task {
  return new BatchPullProviderTask(
    new GeolocationProvider(config.bestOf ?? DEFAULT_BATCH_BEST_OF, config.timeout ?? DEFAULT_BATCH_TIMEOUT),
    'Phone',
    { foreground: true }
  );
}

export interface GeolocationTaskConfig {
  bestOf?: number;
  timeout?: number;
}
