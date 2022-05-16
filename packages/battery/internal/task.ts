import { SinglePullProviderTask, Task } from '@awarns/core/tasks';
import { BatteryProvider } from './provider';

export function acquireBatteryLevel(): Task {
  return new SinglePullProviderTask(new BatteryProvider(), 'Phone');
}
