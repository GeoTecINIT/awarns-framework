import { PushProvider } from '@awarns/core/providers';
import { Utils } from '@nativescript/core';
import { PhoneSensor, toNativeSensor } from '../../phone-sensor';
import { getTriAxialReceiver } from '../../receiver/android/receiver.android';
import { providerConfigToNativeConfig, ProviderConfiguration } from '../provider-configuration';

import ServiceManager = es.uji.geotec.backgroundsensors.service.manager.ServiceManager;
import SensorManager = es.uji.geotec.backgroundsensors.sensor.SensorManager;
import CollectionConfiguration = es.uji.geotec.backgroundsensors.collection.CollectionConfiguration;
import BaseSensor = es.uji.geotec.backgroundsensors.sensor.BaseSensor;
import RecordCallback = es.uji.geotec.backgroundsensors.record.callback.RecordCallback;
import TriAxialRecord = es.uji.geotec.backgroundsensors.record.TriAxialRecord;

export class AndroidPhoneSensorsProvider implements PushProvider {
  private nativeSensor: BaseSensor;
  private nativeConfiguration: CollectionConfiguration;

  get provides(): string {
    return this.sensor;
  }

  private _callback: RecordCallback<TriAxialRecord>;
  get callback() {
    if (!this._callback) {
      this._callback = new RecordCallback({
        onRecordsCollected: (records: java.util.List<TriAxialRecord>) => getTriAxialReceiver().onReceive(records),
      });
    }
    return this._callback;
  }

  constructor(
    private sensor: PhoneSensor,
    private serviceManager: ServiceManager,
    configuration: ProviderConfiguration,
    private sensorManager = new SensorManager(Utils.android.getApplicationContext())
  ) {
    this.nativeSensor = toNativeSensor(this.sensor);
    this.nativeConfiguration = providerConfigToNativeConfig(this.nativeSensor, configuration);
  }

  async checkIfIsReady(): Promise<void> {
    if (!this.sensorManager.isSensorAvailable(this.nativeSensor)) {
      throw new Error(`Sensor ${this.sensor} is not ready! This sensor might not be available in this device!`);
    }
  }

  async prepare(): Promise<void> {
    return;
  }

  async startProviding(): Promise<void> {
    this.serviceManager.startCollection(this.nativeConfiguration, this.callback);
  }

  async stopProviding(): Promise<void> {
    this.serviceManager.stopCollection(this.nativeSensor);
  }
}
