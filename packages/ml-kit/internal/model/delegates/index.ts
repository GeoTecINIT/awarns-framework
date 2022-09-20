import { NNApiDelegate } from './nnapi';
import { GPUDelegate } from './gpu';
import { getLogger } from '@awarns/core/utils/logger';

export type TFLiteDelegate = org.tensorflow.lite.Delegate;

export enum DelegateType {
  GPU,
  NNAPI,
}

export interface Delegate {
  isSupported(): boolean;
  getDelegate(): TFLiteDelegate;
  close(): void;
}

export function getDelegate(type: DelegateType): Delegate {
  const delegate: Delegate = type === DelegateType.GPU ? new GPUDelegate() : new NNApiDelegate();

  if (!delegate.isSupported()) {
    getLogger('DELEGATES').warn(`Delegate ${type} is not supported in this device.`);
    return undefined;
  }
  return delegate;
}
