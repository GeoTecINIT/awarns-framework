import { WatchSensor } from '@awarns/wear-os/internal/watch-sensor';
import { SensorType } from 'nativescript-wearos-sensors/sensors';
import { defaultConfig } from '@awarns/phone-sensors/internal/provider';
import { Node } from 'nativescript-wearos-sensors/node';
import { WatchSensorsProvider } from '@awarns/wear-os/internal/provider';
import { CollectorManager, PrepareError } from 'nativescript-wearos-sensors/internal/collection/collector-manager';
import { setWatchFeaturesState, featuresNotEnabledError, noWatchSelectedError } from '@awarns/wear-os/internal/setup';
import { clear } from '@nativescript/core/application-settings';

describe('Watch sensors provider', () => {
  const watchSensor = WatchSensor.ACCELEROMETER;
  const sensorType = SensorType.ACCELEROMETER;
  const configuration = defaultConfig;
  const watch = new Node('test', 'test', [SensorType.ACCELEROMETER]);

  let provider: WatchSensorsProvider;
  let collectorManager: CollectorManager;

  beforeEach(() => {
    setWatchFeaturesState(true);

    provider = new WatchSensorsProvider(watchSensor, configuration);
    collectorManager = createCollectorManagerMock();
    spyOnProperty(provider, 'collectorManager').and.returnValue(collectorManager);
  });

  it('checkIfIsReady throws an error when watch features are disabled', async () => {
    setWatchFeaturesState(false);
    await expectAsync(provider.checkIfIsReady()).toBeRejectedWith(featuresNotEnabledError);
  });

  it('checkIfIsReady throws an error when there is no watch being used', async () => {
    spyOnProperty(provider, 'watch').and.throwError(noWatchSelectedError);
    spyOn(collectorManager, 'isReady').and.resolveTo(false);

    await expectAsync(provider.checkIfIsReady()).toBeRejectedWith(noWatchSelectedError);
    expect(collectorManager.isReady).not.toHaveBeenCalled();
  });

  it('allows to check if a sensor is present in the watch being used', async () => {
    spyOnProperty(provider, 'watch').and.returnValue(watch);
    spyOn(collectorManager, 'isReady').and.resolveTo(true);

    await expectAsync(provider.checkIfIsReady()).toBeResolved();
    expect(collectorManager.isReady).toHaveBeenCalledWith(watch, sensorType);
  });

  it('throws an error when a sensor is not ready in the watch being used', async () => {
    spyOnProperty(provider, 'watch').and.returnValue(watch);
    spyOn(collectorManager, 'isReady').and.resolveTo(false);

    await expectAsync(provider.checkIfIsReady()).toBeRejectedWith(
      new Error(
        `Watch sensor ${watchSensor} is not ready! This sensor might not be available in ${watch.name} or permissions are required!`
      )
    );
    expect(collectorManager.isReady).toHaveBeenCalledWith(watch, sensorType);
  });

  it('prepare throws an error when watch features are disabled', async () => {
    setWatchFeaturesState(false);
    await expectAsync(provider.prepare()).toBeRejectedWith(featuresNotEnabledError);
  });

  it('prepare throws an error when there is no watch being used', async () => {
    spyOnProperty(provider, 'watch').and.throwError(noWatchSelectedError);
    spyOn(collectorManager, 'prepare').and.resolveTo(undefined);

    await expectAsync(provider.prepare()).toBeRejectedWith(noWatchSelectedError);
    expect(collectorManager.prepare).not.toHaveBeenCalled();
  });

  it('allows to prepare a sensor in the watch being used', async () => {
    spyOnProperty(provider, 'watch').and.returnValue(watch);
    spyOn(collectorManager, 'prepare').and.resolveTo(undefined);

    await expectAsync(provider.prepare()).toBeResolved();
    expect(collectorManager.prepare).toHaveBeenCalledWith(watch, sensorType);
  });

  it('throws an error when a sensor in the watch being used could not be prepared', async () => {
    spyOnProperty(provider, 'watch').and.returnValue(watch);
    const prepareErrors = { node: watch, message: 'some error' };
    spyOn(collectorManager, 'prepare').and.resolveTo(prepareErrors);

    await expectAsync(provider.prepare()).toBeRejectedWith(
      new Error(
        `Could not prepare watch sensor ${watchSensor} in ${watch.name} device! Reason: ${JSON.stringify(
          prepareErrors
        )}`
      )
    );
    expect(collectorManager.prepare).toHaveBeenCalledWith(watch, sensorType);
  });

  it('startProviding throws an error when watch features are disabled', async () => {
    setWatchFeaturesState(false);
    await expectAsync(provider.startProviding()).toBeRejectedWith(featuresNotEnabledError);
  });

  it('startProviding throws an error when there is no watch being used', async () => {
    spyOnProperty(provider, 'watch').and.throwError(noWatchSelectedError);
    spyOn(collectorManager, 'startCollecting').and.resolveTo();

    await expectAsync(provider.startProviding()).toBeRejectedWith(noWatchSelectedError);
    expect(collectorManager.startCollecting).not.toHaveBeenCalled();
  });

  it('instructs the collector manager to start the collection for the sensor in the watch being used', async () => {
    spyOnProperty(provider, 'watch').and.returnValue(watch);
    spyOn(collectorManager, 'startCollecting').and.resolveTo();

    await expectAsync(provider.startProviding()).toBeResolved();
    expect(collectorManager.startCollecting).toHaveBeenCalledWith(watch, sensorType, {
      sensorInterval: configuration.sensorDelay,
      batchSize: configuration.batchSize,
    });
  });

  it('stopProviding throws an error when watch features are disabled', async () => {
    setWatchFeaturesState(false);
    await expectAsync(provider.stopProviding()).toBeRejectedWith(featuresNotEnabledError);
  });

  it('stopProviding throws an error when there is no watch being used', async () => {
    spyOnProperty(provider, 'watch').and.throwError(noWatchSelectedError);
    spyOn(collectorManager, 'stopCollecting').and.resolveTo();

    await expectAsync(provider.stopProviding()).toBeRejectedWith(noWatchSelectedError);
    expect(collectorManager.stopCollecting).not.toHaveBeenCalled();
  });

  it('instructs the collector manager to stop the collection for the sensor in the watch being used', async () => {
    spyOnProperty(provider, 'watch').and.returnValue(watch);
    spyOn(collectorManager, 'stopCollecting').and.resolveTo();

    await expectAsync(provider.stopProviding()).toBeResolved();
    expect(collectorManager.stopCollecting).toHaveBeenCalledWith(watch, sensorType);
  });

  afterEach(() => {
    clear();
  });
});

function createCollectorManagerMock(): CollectorManager {
  return {
    addSensorListener(_listener, _filters?): number {
      return 0;
    },
    isReady(_node, _sensor): Promise<boolean> {
      return Promise.resolve(false);
    },
    prepare(_node, _sensor): Promise<PrepareError> {
      return Promise.resolve(undefined);
    },
    removeSensorListener(_listenerId?: number): any {},
    startCollecting(_node, _sensor, _config?): Promise<void> {
      return Promise.resolve(undefined);
    },
    stopCollecting(_node, _sensor): Promise<void> {
      return Promise.resolve(undefined);
    },
  };
}
