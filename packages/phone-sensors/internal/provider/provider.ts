import { PushProvider } from '@awarns/core/providers';
import { TriAxialType } from '../tri-axial';
import { Utils } from '@nativescript/core';
import { PhoneSensor, toNativeSensor } from '../phone-sensor';
import { getTriAxialReceiver } from '../receiver';
import { defaultConfig, providerConfigToNativeConfig, ProviderConfiguration } from './provider-configuration';

import ServiceManager = es.uji.geotec.backgroundsensors.service.manager.ServiceManager;
import BaseSensorRecordingService = es.uji.geotec.backgroundsensors.service.BaseSensorRecordingService;
import SensorManager = es.uji.geotec.backgroundsensors.sensor.SensorManager;
import CollectionConfiguration = es.uji.geotec.backgroundsensors.collection.CollectionConfiguration;
import BaseSensor = es.uji.geotec.backgroundsensors.sensor.BaseSensor;
import RecordCallback = es.uji.geotec.backgroundsensors.record.callback.RecordCallback;
import TriAxialRecord = es.uji.geotec.backgroundsensors.record.TriAxialRecord;

export class PhoneSensorsProvider implements PushProvider {
  static callback = new RecordCallback({
    onRecordsCollected: (records: java.util.List<TriAxialRecord>) => getTriAxialReceiver().onReceive(records),
  });

  private nativeSensor: BaseSensor;
  private nativeConfiguration: CollectionConfiguration;

  get provides(): string {
    return TriAxialType;
  }

  constructor(
    private sensor: PhoneSensor,
    configuration: ProviderConfiguration = defaultConfig,
    private sensorManager = new SensorManager(Utils.android.getApplicationContext()),
    private serviceManager = new ServiceManager(Utils.android.getApplicationContext(), BaseSensorRecordingService.class)
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
    this.serviceManager.startCollection(this.nativeConfiguration, PhoneSensorsProvider.callback);
  }

  async stopProviding(): Promise<void> {
    this.serviceManager.stopCollection(this.nativeSensor);
  }
}
