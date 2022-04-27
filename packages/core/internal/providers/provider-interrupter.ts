export class ProviderInterrupter {
  private _interruption: ProviderInterruption = () => null;

  set interruption(f: ProviderInterruption) {
    this._interruption = f;
  }

  interrupt() {
    this._interruption();
  }
}

export type ProviderInterruption = () => void;
