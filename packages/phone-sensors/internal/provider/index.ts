import { PhoneSensor } from '../phone-sensor';
import { defaultConfig, ProviderConfiguration } from './provider-configuration';
import { PushProvider } from '@awarns/core/providers';
import { Application } from '@nativescript/core';
import { AndroidPhoneSensorsProvider } from './android/provider.android';
import ServiceManager = es.uji.geotec.backgroundsensors.service.manager.ServiceManager;

export * from './provider-configuration';

export function getProvider(
  sensor: PhoneSensor,
  serviceManager: ServiceManager,
  configuration: ProviderConfiguration = defaultConfig
): PushProvider {
  if (Application.android) {
    return new AndroidPhoneSensorsProvider(sensor, serviceManager, configuration);
  } else {
    return undefined;
  }
}
