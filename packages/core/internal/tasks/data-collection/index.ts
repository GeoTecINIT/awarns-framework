import { Task } from 'nativescript-task-dispatcher/tasks';
import { SinglePullProviderTask, BatchPullProviderTask } from './pull-based';

import { StartPushProviderTask, StopPushProviderTask } from './push-based';
import { GeolocationProvider } from '../../providers/geolocation/provider';
import { HumanActivityProvider, Resolution } from '../../providers/activity-recognition/provider';

export const dataCollectionTasks: Array<Task> = [
  /* Geolocation */
  new SinglePullProviderTask(new GeolocationProvider(3, 10000), 'Phone', {
    foreground: true,
    sensitiveData: true,
  }),
  new BatchPullProviderTask(new GeolocationProvider(1, 15000), 'Phone', {
    foreground: true,
    sensitiveData: true,
  }),
  /* Human activity recognition */
  new StartPushProviderTask(new HumanActivityProvider(Resolution.LOW), 'Coarse'),
  new StopPushProviderTask(new HumanActivityProvider(Resolution.LOW), 'Coarse'),
  new StartPushProviderTask(new HumanActivityProvider(Resolution.MEDIUM), 'Intermediate'),
  new StopPushProviderTask(new HumanActivityProvider(Resolution.MEDIUM), 'Intermediate'),
];
