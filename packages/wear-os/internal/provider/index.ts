import { PushProvider } from '@awarns/core/providers';
import { getWatchSensorsReceiver } from '../receiver/sensors';
import { SensorType } from 'nativescript-wearos-sensors/sensors';
import { CollectionConfiguration, CollectorManager, getCollectorManager } from 'nativescript-wearos-sensors/collection';
import { Watch } from '../watch';
import { toSensorType, WatchSensor } from '../watch-sensor';
import { areWatchFeaturesEnabled, getWatchInUse } from '../setup';
import { defaultConfig, ProviderConfiguration, toCollectionConfiguration } from './provider-configuration';

export class WatchSensorsProvider implements PushProvider {
  static setup() {
    getCollectorManager().addSensorListener((sensorRecords) => {
      getWatchSensorsReceiver().onReceive(sensorRecords);
    });
  }

  private sensorType: SensorType;
  private collectionConfiguration: CollectionConfiguration;

  get provides(): string {
    return this.sensor;
  }

  private _watch: Watch;
  get watch(): Watch {
    if (!this._watch) {
      this._watch = getWatchInUse();
    }
    return this._watch;
  }

  private _collectorManager: CollectorManager;
  get collectorManager(): CollectorManager {
    if (!this._collectorManager) {
      this._collectorManager = getCollectorManager();
    }
    return this._collectorManager;
  }

  constructor(private sensor: WatchSensor, configuration: ProviderConfiguration = defaultConfig) {
    this.sensorType = toSensorType(this.sensor);
    this.collectionConfiguration = toCollectionConfiguration(configuration);
  }

  async checkIfIsReady(): Promise<void> {
    if (!areWatchFeaturesEnabled()) {
      return;
    }

    const isReady = await this.collectorManager.isReady(this.watch, this.sensorType);
    if (!isReady) {
      throw new Error(
        `Watch sensor ${this.sensor} is not ready! This sensor might not be available in ${this.watch.name} or permissions are required!`
      );
    }
  }

  async prepare(): Promise<void> {
    if (!areWatchFeaturesEnabled()) {
      return;
    }

    const prepareErrors = await this.collectorManager.prepare(this.watch, this.sensorType);
    if (prepareErrors) {
      throw new Error(
        `Could not prepare watch sensor ${this.sensor} in ${this.watch.name} device! Reason: ${JSON.stringify(
          prepareErrors
        )}`
      );
    }
  }

  async startProviding(): Promise<void> {
    if (!areWatchFeaturesEnabled()) {
      return;
    }

    return await this.collectorManager.startCollecting(this.watch, this.sensorType, this.collectionConfiguration);
  }

  async stopProviding(): Promise<void> {
    if (!areWatchFeaturesEnabled()) {
      return;
    }

    return await this.collectorManager.stopCollecting(this.watch, this.sensorType);
  }
}
