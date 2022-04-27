import { Record } from './base-record';
import { ProviderInterruption } from './provider-interrupter';
import { BaseProvider } from './base-provider';

export interface PullProvider extends BaseProvider {
  next(): [Promise<Record>, ProviderInterruption];
}
