import { SinglePullProviderTask, Task } from '@awarns/core/tasks';
import { BatteryProvider } from './provider';

export function acquireBatteryLevelTask(): Task {
  return new SinglePullProviderTask(new BatteryProvider(), 'Phone');
}
