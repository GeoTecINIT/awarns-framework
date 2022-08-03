import { WatchSensor } from '../watch-sensor';
import { ProviderConfiguration } from '../provider/provider-configuration';
import { Task, StartPushProviderTask, StopPushProviderTask } from '@awarns/core/tasks';
import { WatchSensorsProvider } from '../provider';

export function startDetectingWatchSensorChangesTask(
  sensor: WatchSensor,
  providerConfig: ProviderConfiguration,
  prefix = ''
): Task {
  return new StartPushProviderTask(new WatchSensorsProvider(sensor, providerConfig), prefix);
}

export function stopDetectingWatchSensorChangesTask(sensor: WatchSensor, prefix = ''): Task {
  return new StopPushProviderTask(new WatchSensorsProvider(sensor), prefix);
}
