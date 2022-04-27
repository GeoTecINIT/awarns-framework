import { HumanActivityChangeReceiver } from './receiver';
import { EventData } from 'nativescript-task-dispatcher/internal/events';

import { ActivityChange, HumanActivity, Transition } from 'nativescript-context-apis/internal/activity-recognition';
import { HumanActivityChange } from './human-activity-change';

import { Change } from '../base-record';

describe('Human activity change receiver', () => {
  let eventEmitter: (eventName: string, eventData?: EventData) => void;
  let receiver: HumanActivityChangeReceiver;

  beforeEach(() => {
    eventEmitter = jasmine.createSpy();
    receiver = new HumanActivityChangeReceiver(eventEmitter);
  });

  it('receives an ending human activity change and generates two events', () => {
    const activityChange: ActivityChange = {
      type: HumanActivity.STILL,
      transition: Transition.ENDED,
      timestamp: new Date(),
      confidence: 1,
    };

    const expectedChange = new HumanActivityChange(activityChange.type, Change.END, activityChange.timestamp, activityChange.confidence);

    receiver.onReceive(activityChange);
    expect(eventEmitter).toHaveBeenCalledWith('userActivityChanged', expectedChange);
    expect(eventEmitter).toHaveBeenCalledWith('userFinishedBeingStill', expectedChange);
  });

  it('receives a starting human activity change and generates two events', () => {
    const activityChange: ActivityChange = {
      type: HumanActivity.TILTING,
      transition: Transition.STARTED,
      timestamp: new Date(),
      confidence: 1,
    };

    const expectedChange = new HumanActivityChange(activityChange.type, Change.START, activityChange.timestamp, activityChange.confidence);

    receiver.onReceive(activityChange);
    expect(eventEmitter).toHaveBeenCalledWith('userActivityChanged', expectedChange);
    expect(eventEmitter).toHaveBeenCalledWith('userStartedStandingUp', expectedChange);
  });
});
