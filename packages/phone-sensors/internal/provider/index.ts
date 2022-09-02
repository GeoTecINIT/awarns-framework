import { PhoneSensor } from '../phone-sensor';
import { defaultConfig, ProviderConfiguration } from './provider-configuration';
import { PushProvider } from '@awarns/core/providers';
import { Application } from '@nativescript/core';
import { AndroidPhoneSensorsProvider } from './android/provider.android';

export * from './provider-configuration';

export function getProvider(sensor: PhoneSensor, configuration: ProviderConfiguration = defaultConfig): PushProvider {
  if (Application.android) {
    return new AndroidPhoneSensorsProvider(sensor, configuration);
  } else {
    return undefined;
  }
}
