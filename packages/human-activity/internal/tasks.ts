import { Task, StartPushProviderTask, StopPushProviderTask } from '@awarns/core/tasks';

import { HumanActivityProvider, Resolution } from './provider';

export function startDetectingCoarseHumanActivityChanges(): Task {
  return new StartPushProviderTask(new HumanActivityProvider(Resolution.LOW), 'Coarse');
}

export function stopDetectingCoarseHumanActivityChanges(): Task {
  return new StopPushProviderTask(new HumanActivityProvider(Resolution.LOW), 'Coarse');
}

export function startDetectingIntermediateHumanActivityChanges(): Task {
  return new StartPushProviderTask(new HumanActivityProvider(Resolution.MEDIUM), 'Intermediate');
}

export function stopDetectingIntermediateHumanActivityChanges(): Task {
  return new StopPushProviderTask(new HumanActivityProvider(Resolution.MEDIUM), 'Intermediate');
}
