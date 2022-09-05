import { WatchSensor } from '../watch-sensor';
import { ProviderConfiguration } from '../provider/provider-configuration';
import { Task, StartPushProviderTask, StopPushProviderTask } from '@awarns/core/tasks';
import { WatchSensorsProvider } from '../provider';
import { SendPlainMessageTask, SendPlainMessageAndAwaitResponseTask } from './plain-message/';

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

export function sendPlainMessageToWatchTask(): Task {
  return new SendPlainMessageTask();
}

export function sendPlainMessageToWatchAndAwaitResponseTask(): Task {
  return new SendPlainMessageAndAwaitResponseTask();
}
