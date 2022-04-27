import { BaseProvider } from './base-provider';

export interface PushProvider extends BaseProvider {
  startProviding(): Promise<void>;
  stopProviding(): Promise<void>;
}
