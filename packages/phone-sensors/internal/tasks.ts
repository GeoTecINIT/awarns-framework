import { Task, StartPushProviderTask, StopPushProviderTask } from '@awarns/core/tasks';
import { getProvider, ProviderConfiguration } from './provider';
import { PhoneSensor } from './phone-sensor';
import { BaseSensorRecordingService, NTPSyncedSensorRecordingService, SensorRecordingService } from './service';
import ServiceManager = es.uji.geotec.backgroundsensors.service.manager.ServiceManager;
import { Utils } from '@nativescript/core';

export function startDetectingPhoneSensorChangesTask(
  sensor: PhoneSensor,
  providerConfig: ProviderConfiguration,
  prefix = ''
): Task {
  return new StartPushProviderTask(
    getProvider(sensor, createServiceManager(new BaseSensorRecordingService()), providerConfig),
    `${prefix}Phone`
  );
}

export function startDetectingPhoneNTPSyncedSensorChanges(
  sensor: PhoneSensor,
  providerConfig: ProviderConfiguration,
  prefix = ''
): Task {
  return new StartPushProviderTask(
    getProvider(sensor, createServiceManager(new NTPSyncedSensorRecordingService()), providerConfig),
    `${prefix}PhoneNTPSynced`
  );
}

export function stopDetectingPhoneSensorChangesTask(sensor: PhoneSensor): Task {
  return new StopPushProviderTask(getProvider(sensor, createServiceManager(new BaseSensorRecordingService())), 'Phone');
}

export function stopDetectingPhoneNTPSyncedSensorChangesTask(sensor: PhoneSensor): Task {
  return new StopPushProviderTask(
    getProvider(sensor, createServiceManager(new NTPSyncedSensorRecordingService())),
    'PhoneNTPSynced'
  );
}

function createServiceManager(service: SensorRecordingService): ServiceManager {
  return new ServiceManager(Utils.android.getApplicationContext(), service.getClass());
}
