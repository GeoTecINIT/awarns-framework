import { Record } from '../entities';
import { ProviderInterruption } from './provider-interrupter';
import { BaseProvider } from './base-provider';

export interface PullProvider extends BaseProvider {
  next(): [Promise<Record>, ProviderInterruption];
}
