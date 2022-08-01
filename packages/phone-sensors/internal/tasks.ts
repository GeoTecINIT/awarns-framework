import { Task, StartPushProviderTask, StopPushProviderTask } from '@awarns/core/tasks';
import { PhoneSensorsProvider, ProviderConfiguration } from './provider';
import { PhoneSensor } from './phone-sensor';
import { pascalCase } from '@awarns/core/utils/strings';

export function startDetectingSensorChangesTask(
  sensor: PhoneSensor,
  providerConfig: ProviderConfiguration,
  prefix: string = ''
): Task {
  return new StartPushProviderTask(
    new PhoneSensorsProvider(sensor, providerConfig),
    `Phone${prefix}${pascalCase(sensor)}`
  );
}

export function stopDetectingSensorChangesTask(sensor: PhoneSensor): Task {
  return new StopPushProviderTask(new PhoneSensorsProvider(sensor), `Phone${pascalCase(sensor)}`);
}
