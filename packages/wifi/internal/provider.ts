import { ProviderInterrupter, ProviderInterruption, PullProvider } from '@awarns/core/providers';
import { WifiScan, WifiScanType } from './scan';
import {
  FingerprintGrouping,
  getWifiScanProvider as getNativeProvider,
  WifiFingerprint,
  WifiScanProvider as NativeProvider,
} from 'nativescript-context-apis/wifi';
import { firstValueFrom, map, of, Subject, takeUntil, timeout } from 'rxjs';

export class WifiScanProvider implements PullProvider {
  get provides(): string {
    return WifiScanType;
  }

  constructor(
    private ensureIsNew: boolean,
    private timeout: number,
    private nativeProvider: () => NativeProvider = getNativeProvider
  ) {}

  async checkIfIsReady(): Promise<void> {
    const isReady = await this.nativeProvider().isReady();
    if (!isReady) {
      throw wifiScanProviderNotReadyErr;
    }
  }

  async prepare(): Promise<void> {
    return this.nativeProvider().prepare();
  }

  next(): [Promise<WifiScan>, ProviderInterruption] {
    const interrupter = new ProviderInterrupter();
    const scanResult = this.obtainWifiScan(interrupter);
    return [scanResult.then((fingerprint) => scanFromFingerprint(fingerprint)), () => undefined];
  }

  private obtainWifiScan(interrupter: ProviderInterrupter): Promise<WifiScan> {
    const interrupted$ = new Subject<void>();
    interrupter.interruption = () => {
      interrupted$.next();
      interrupted$.complete();
    };

    return firstValueFrom(
      this.nativeProvider()
        .wifiFingerprintStream({
          ensureAlwaysNew: this.ensureIsNew,
          grouping: FingerprintGrouping.NONE,
          continueOnFailure: false,
        })
        .pipe(
          takeUntil(interrupted$),
          timeout({ each: this.timeout, with: () => of(null) }),
          map((fingerprint) => scanFromFingerprint(fingerprint))
        )
    );
  }
}

function scanFromFingerprint(fingerprint: WifiFingerprint): WifiScan {
  const { seen, isNew, timestamp } = fingerprint;
  return new WifiScan(seen, isNew, timestamp);
}

export const wifiScanProviderNotReadyErr = new Error(
  "Wifi scan provider is not ready. Perhaps permissions haven't been granted, location services have been disabled or wifi is turn off"
);
