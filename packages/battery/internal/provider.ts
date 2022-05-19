import { BatteryLevel, BatteryLevelType } from './battery-level';
import { Application, isAndroid } from '@nativescript/core';
import { PullProvider, ProviderInterruption } from '@awarns/core/providers';

export class BatteryProvider implements PullProvider {
  get provides() {
    return BatteryLevelType;
  }

  constructor(private sdkVersion?: number) {
    if (isAndroid && !this.sdkVersion) {
      this.sdkVersion = android.os.Build.VERSION.SDK_INT;
    }
  }

  next(): [Promise<BatteryLevel>, ProviderInterruption] {
    const value = this.getBatteryPercentage();
    const batteryLevel = BatteryLevel.fromPercentage(value);

    return [Promise.resolve(batteryLevel), () => null];
  }

  checkIfIsReady(): Promise<void> {
    return Promise.resolve();
  }

  prepare(): Promise<void> {
    return Promise.resolve();
  }

  private getBatteryPercentage(): number {
    if (!isAndroid) {
      return -1;
    }
    if (this.sdkVersion >= 21) {
      const batteryManager: android.os.BatteryManager = Application.android.context.getSystemService(
        android.content.Context.BATTERY_SERVICE
      );

      return batteryManager.getIntProperty(android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY);
    }
    const intentFilter = new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
    const batteryStatus = Application.android.context.registerReceiver(null, intentFilter);

    const level = batteryStatus ? batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1) : -1;
    const scale = batteryStatus ? batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1) : -1;

    const batteryPercentage = level / scale;

    return Math.trunc(batteryPercentage * 100);
  }
}
