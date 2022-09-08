import { Delegate, TFLiteDelegate } from './index';
import NnApiDelegate = org.tensorflow.lite.nnapi.NnApiDelegate;

export class NNApiDelegate implements Delegate {
  private nnApiDelegate: NnApiDelegate;

  isSupported(): boolean {
    return android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.P;
  }

  getDelegate(): TFLiteDelegate {
    this.nnApiDelegate = new NnApiDelegate();
    return this.nnApiDelegate;
  }

  close(): void {
    this.nnApiDelegate.close();
  }
}
