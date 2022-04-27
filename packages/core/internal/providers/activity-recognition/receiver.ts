import { taskDispatcher } from 'nativescript-task-dispatcher';
import { EventData } from 'nativescript-task-dispatcher/events';

import { ActivityChange, HumanActivity, Transition } from 'nativescript-context-apis/activity-recognition';
import { HumanActivityChange } from './human-activity-change';
import { Change } from '../base-record';

const DEFAULT_EVENT = 'userActivityChanged';

export class HumanActivityChangeReceiver {
  constructor(private emitEvent: (eventName: string, eventData?: EventData) => void) {}

  onReceive(activityChange: ActivityChange) {
    const { type, timestamp, confidence } = activityChange;
    const change = activityChange.transition === Transition.STARTED ? Change.START : Change.END;
    const record = new HumanActivityChange(type, change, timestamp, confidence);
    this.emitEvent(DEFAULT_EVENT, record);
    this.emitEvent(generateEventNameFromActivityChange(record), record);
  }
}

function generateEventNameFromActivityChange(activityChange: HumanActivityChange) {
  const transition = activityChange.change === Change.START ? 'Started' : 'Finished';
  return `user${transition}${actionFromActivityType(activityChange.activity)}`;
}

function actionFromActivityType(type: HumanActivity) {
  switch (type) {
    case HumanActivity.STILL:
      return 'BeingStill';
    case HumanActivity.TILTING:
      return 'StandingUp';
    case HumanActivity.WALKING:
      return 'Walking';
    case HumanActivity.RUNNING:
      return 'Running';
    case HumanActivity.ON_BICYCLE:
      return 'RidingABicycle';
    case HumanActivity.IN_VEHICLE:
      return 'BeingInAVehicle';
  }
}

let _receiver: HumanActivityChangeReceiver;
export function getHumanActivityChangeReceiver(): HumanActivityChangeReceiver {
  if (!_receiver) {
    _receiver = new HumanActivityChangeReceiver(taskDispatcher.emitEvent);
  }
  return _receiver;
}
