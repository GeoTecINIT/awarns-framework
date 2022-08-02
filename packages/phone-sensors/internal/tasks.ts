import { Task, StartPushProviderTask, StopPushProviderTask } from '@awarns/core/tasks';
import { getProvider, ProviderConfiguration } from './provider';
import { PhoneSensor } from './phone-sensor';

export function startDetectingSensorChangesTask(
  sensor: PhoneSensor,
  providerConfig: ProviderConfiguration,
  prefix: string = ''
): Task {
  return new StartPushProviderTask(getProvider(sensor, providerConfig), `Phone${prefix}`);
}

export function stopDetectingSensorChangesTask(sensor: PhoneSensor): Task {
  return new StopPushProviderTask(getProvider(sensor), 'Phone');
}
