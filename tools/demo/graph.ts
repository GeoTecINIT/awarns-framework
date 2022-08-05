import { TaskGraph, EventListenerGenerator, RunnableTaskDescriptor } from '@awarns/core/tasks';
import { TapActionType } from '@awarns/notifications';

class DemoTaskGraph implements TaskGraph {
  async describe(on: EventListenerGenerator, run: RunnableTaskDescriptor): Promise<void> {
    on('startEvent', run('startDetectingCoarseHumanActivityChanges'));

    on('userActivityChanged', run('trackEvent'));
    on('userActivityChanged', run('writeRecords'));

    on('stopEvent', run('stopDetectingCoarseHumanActivityChanges'));

    on('startEvent', run('acquirePhoneBatteryLevel').every(1, 'minutes').cancelOn('stopEvent'));

    on(
      'startEvent',
      run('sendRandomNotification', {
        options: [
          { title: '#1 App started 1 minute ago' },
          { title: '#2 One minute has passed', body: 'since you opened the app' },
        ],
      })
        .in(1, 'minutes')
        .cancelOn('stopEvent')
    );

    on('startEvent', run('acquirePhoneGeolocation').every(5, 'minutes').cancelOn('userFinishedBeingStill'));
    on('userStartedBeingStill', run('acquirePhoneGeolocation').every(5, 'minutes').cancelOn('userFinishedBeingStill'));

    on('userFinishedBeingStill', run('acquirePhoneGeolocation').every(1, 'minutes').cancelOn('userStartedBeingStill'));

    on('geolocationAcquired', run('filterGeolocationByAoIProximity'));
    on('geolocationCloseToAoIAcquired', run('writeRecords'));

    on(
      'geolocationAcquired',
      run('checkAreaOfInterestProximity', {
        nearbyRange: 100,
        offset: 15,
      })
    );

    on('movedCloseToAreaOfInterest', run('writeRecords'));
    on('movedInsideAreaOfInterest', run('writeRecords'));
    on('movedOutsideAreaOfInterest', run('writeRecords'));
    on('movedAwayFromAreaOfInterest', run('writeRecords'));

    on(
      'movedCloseToAreaOfInterest',
      run('acquireMultiplePhoneGeolocation', { maxInterval: 10000 })
        .every(1, 'minutes')
        .cancelOn('movedAwayFromAreaOfInterest')
    );

    on(
      'movedInsideAreaOfInterest',
      run('acquireMultiplePhoneGeolocation', { maxInterval: 10000 })
        .every(1, 'minutes')
        .cancelOn('movedAwayFromAreaOfInterest')
    );

    on(
      'movedInsideAreaOfInterest',
      run('acquireMultiplePhoneWifiScan', { maxInterval: 25000 })
        .every(1, 'minutes')
        .cancelOn('movedAwayFromAreaOfInterest')
    );
    on('wifiScanAcquired', run('writeRecords'));

    on(
      'movedInsideAreaOfInterest',
      run('acquireMultiplePhoneBleScan', { maxInterval: 10000 })
        .every(1, 'minutes')
        .cancelOn('movedAwayFromAreaOfInterest')
    );
    on('bleScanAcquired', run('writeRecords'));

    on(
      'movedInsideAreaOfInterest',
      run('sendNotification', {
        title: 'May I ask you some questions?',
        body: 'This will allow me know better what you feel',
        tapAction: {
          type: TapActionType.DELIVER_QUESTIONS,
          id: 'qs1',
          metadata: {
            fakeParam: true,
            fakeParam2: 'Some fake param',
          },
        },
      })
        .every(1, 'minutes')
        .cancelOn('movedOutsideAreaOfInterest')
    );

    on('questionnaireAnswersAcquired', run('trackEvent'));
    on('questionnaireAnswersAcquired', run('writeRecords'));

    on(
      'movedOutsideAreaOfInterest',
      run('sendNotification', {
        title: 'New content available',
        body: 'This information may be valuable for you',
        tapAction: {
          type: TapActionType.OPEN_CONTENT,
          id: 'rtc1',
        },
      })
    );

    on('notificationTapped', run('trackEvent'));
    on('notificationCleared', run('trackEvent'));

    on('startEvent', run('startDetectingPhoneAccelerometerChanges').every(1, 'minutes').cancelOn('stopEvent'));
    on('startEvent', run('startDetectingPhoneGyroscopeChanges').every(1, 'minutes').cancelOn('stopEvent'));

    on('accelerometerSamplesAcquired', run('writeRecords'));
    on('accelerometerSamplesAcquired', run('trackEvent'));
    on('accelerometerSamplesAcquired', run('stopDetectingPhoneAccelerometerChanges'));
    on('gyroscopeSamplesAcquired', run('writeRecords'));
    on('gyroscopeSamplesAcquired', run('trackEvent'));
    on('gyroscopeSamplesAcquired', run('stopDetectingPhoneGyroscopeChanges'));

    on('startEvent', run('startDetectingWatchAccelerometerChanges').every(1, 'minutes').cancelOn('stopEvent'));
    on('startEvent', run('startDetectingWatchHeartRateChanges').every(1, 'minutes').cancelOn('stopEvent'));
    on('startEvent', run('startDetectingWatchGeolocationChanges').every(1, 'minutes').cancelOn('stopEvent'));

    on('watchAccelerometerSamplesAcquired', run('writeRecords'));
    on('watchAccelerometerSamplesAcquired', run('trackEvent'));
    on('watchAccelerometerSamplesAcquired', run('stopDetectingWatchAccelerometerChanges'));
    on('watchHeartRateSamplesAcquired', run('writeRecords'));
    on('watchHeartRateSamplesAcquired', run('trackEvent'));
    on('watchHeartRateSamplesAcquired', run('stopDetectingWatchHeartRateChanges'));
    on('watchGeolocationSamplesAcquired', run('writeRecords'));
    on('watchGeolocationSamplesAcquired', run('trackEvent'));
    on('watchGeolocationSamplesAcquired', run('stopDetectingWatchGeolocationChanges'));

    on(
      'startEvent',
      run('sendPlainMessageToWatch', {
        plainMessage: {
          message: 'I do not expect a response :)!',
        },
      }).now()
    );
    on(
      'startEvent',
      run('sendPlainMessageToWatchAndAwaitResponse', {
        plainMessage: {
          message: 'PING!',
        },
        timeout: 5000,
      })
        .every(1, 'minutes')
        .cancelOn('stopEvent')
    );

    on('plainMessageSent', run('writeRecords'));
    on('plainMessageSent', run('trackEvent'));
    on('plainMessageSentAndResponseReceived', run('writeRecords'));
    on('plainMessageSentAndResponseReceived', run('trackEvent'));
    on('plainMessageReceived', run('writeRecords'));
    on('plainMessageReceived', run('trackEvent'));
  }
}

export const demoTaskGraph = new DemoTaskGraph();
