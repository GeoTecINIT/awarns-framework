import { Task, StartPushProviderTask, StopPushProviderTask } from '@awarns/core/tasks';
import { BackgroundSensorsProvider, ProviderConfiguration } from './provider';
import { PhoneSensor } from './phone-sensor';
import { pascalCase } from '@awarns/core/utils/strings';

export function startDetectingSensorChangesTask(
  sensor: PhoneSensor,
  providerConfig: ProviderConfiguration,
  prefix: string = ''
): Task {
  return new StartPushProviderTask(
    new BackgroundSensorsProvider(sensor, providerConfig),
    `Phone${prefix}${pascalCase(sensor)}`
  );
}

export function stopDetectingSensorChangesTask(sensor: PhoneSensor, prefix: string = ''): Task {
  return new StopPushProviderTask(new BackgroundSensorsProvider(sensor), `Phone${prefix}${pascalCase(sensor)}`);
}
