import { Task, StartPushProviderTask, StopPushProviderTask } from '@awarns/core/tasks';
import { getProvider, ProviderConfiguration } from './provider';
import { PhoneSensor } from './phone-sensor';

export function startDetectingPhoneSensorChangesTask(
  sensor: PhoneSensor,
  providerConfig: ProviderConfiguration,
  prefix = ''
): Task {
  return new StartPushProviderTask(getProvider(sensor, providerConfig), `Phone${prefix}`);
}

export function stopDetectingPhoneSensorChangesTask(sensor: PhoneSensor): Task {
  return new StopPushProviderTask(getProvider(sensor), 'Phone');
}
