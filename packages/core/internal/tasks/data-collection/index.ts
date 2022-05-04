import { Task } from 'nativescript-task-dispatcher/tasks';

import { StartPushProviderTask, StopPushProviderTask } from './push-based';
import { HumanActivityProvider, Resolution } from '../../providers/activity-recognition/provider';

export const dataCollectionTasks: Array<Task> = [
  /* Human activity recognition */
  new StartPushProviderTask(new HumanActivityProvider(Resolution.LOW), 'Coarse'),
  new StopPushProviderTask(new HumanActivityProvider(Resolution.LOW), 'Coarse'),
  new StartPushProviderTask(new HumanActivityProvider(Resolution.MEDIUM), 'Intermediate'),
  new StopPushProviderTask(new HumanActivityProvider(Resolution.MEDIUM), 'Intermediate'),
];
