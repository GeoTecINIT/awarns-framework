import { ProviderInterrupter, ProviderInterruption, PullProvider } from '@awarns/core/providers';
import { BleScan, BleScanType } from './scan';
import {
  getBleScanProvider as getNativeProvider,
  BleScanProvider as NativeProvider,
  BleScanMode,
  BleScanResult,
} from 'nativescript-context-apis/ble';
import { firstValueFrom, map, Subject, takeUntil, timer, toArray } from 'rxjs';

export class BleScanProvider implements PullProvider {
  get provides(): string {
    return BleScanType;
  }

  constructor(
    private scanTime: number,
    private scanMode: BleScanMode,
    private iBeaconUuids: Array<string>,
    private nativeProvider: () => NativeProvider = getNativeProvider
  ) {}

  async checkIfIsReady(): Promise<void> {
    const isReady = await this.nativeProvider().isReady();
    if (!isReady) {
      throw bleScanProviderNotReadyErr;
    }
  }

  async prepare(): Promise<void> {
    return this.nativeProvider().prepare();
  }

  next(): [Promise<BleScan>, ProviderInterruption] {
    const interrupter = new ProviderInterrupter();
    const scanResult = this.obtainBleScan(interrupter);
    return [scanResult, () => interrupter.interrupt()];
  }

  private obtainBleScan(interrupter: ProviderInterrupter): Promise<BleScan> {
    const interrupted$ = new Subject<void>();
    interrupter.interruption = () => {
      interrupted$.next();
      interrupted$.complete();
    };

    return firstValueFrom(
      this.nativeProvider()
        .bleScanStream({
          reportInterval: 100 /* Lower report intervals don't seem to report anything in background*/,
          scanMode: this.scanMode,
          iBeaconUuids: this.iBeaconUuids,
        })
        .pipe(
          takeUntil(timer(this.scanTime)),
          toArray(),
          map((results) => scanFromResults(results))
        )
    );
  }
}

function scanFromResults(results: Array<BleScanResult>): BleScan {
  if (results.length === 0) {
    throw new Error('No BLE devices were found nearby!');
  }
  return new BleScan(
    results.reduce((prev, curr) => [...prev, ...curr.seen], []),
    results[results.length - 1].timestamp
  );
}

const bleScanProviderNotReadyErr = new Error(
  "BLE scan provider is not ready. Perhaps permissions haven't been granted, location services have been disabled or Bluetooth is turn off"
);
