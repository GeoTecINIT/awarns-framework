import { Delegate, TFLiteDelegate } from './index';

import CompatibilityList = org.tensorflow.lite.gpu.CompatibilityList;
import TFGpuDelegate = org.tensorflow.lite.gpu.GpuDelegate;

export class GPUDelegate implements Delegate {
  private gpuDelegate: TFGpuDelegate;

  constructor(private compatibilityList = new CompatibilityList()) {}

  isSupported(): boolean {
    return this.compatibilityList.isDelegateSupportedOnThisDevice();
  }

  getDelegate(): TFLiteDelegate {
    const delegateOptions = this.compatibilityList.getBestOptionsForThisDevice();
    this.gpuDelegate = new TFGpuDelegate(delegateOptions);
    return this.gpuDelegate;
  }

  close(): void {
    this.gpuDelegate.close();
  }
}
