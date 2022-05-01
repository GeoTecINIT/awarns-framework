import { Task, StartPushProviderTask, StopPushProviderTask } from '@awarns/core/tasks';

import { HumanActivityProvider, Resolution } from './provider';

export function startDetectingCoarseHumanActivityChangesTask(): Task {
  return new StartPushProviderTask(new HumanActivityProvider(Resolution.LOW), 'Coarse');
}

export function stopDetectingCoarseHumanActivityChangesTask(): Task {
  return new StopPushProviderTask(new HumanActivityProvider(Resolution.LOW), 'Coarse');
}

export function startDetectingIntermediateHumanActivityChangesTask(): Task {
  return new StartPushProviderTask(new HumanActivityProvider(Resolution.MEDIUM), 'Intermediate');
}

export function stopDetectingIntermediateHumanActivityChangesTask(): Task {
  return new StopPushProviderTask(new HumanActivityProvider(Resolution.MEDIUM), 'Intermediate');
}
