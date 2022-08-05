import { EventData } from '@awarns/core/events';
import { WatchSensorsReceiver } from '@awarns/wear-os/internal/receiver/sensors';
import { SensorType } from 'nativescript-wearos-sensors/sensors';
import { WatchSensor } from '@awarns/wear-os/internal/watch-sensor';
import { TriAxial } from '@awarns/wear-os/internal/entities/sensors/tri-axial';
import { HeartRate } from '@awarns/wear-os/internal/entities/sensors/heart-rate';
import { Geolocation } from '@awarns/wear-os/internal/entities/sensors/geolocation';
import { SensorRecord } from 'nativescript-wearos-sensors/sensors/records';

describe('Watch sensors receiver', () => {
  let eventEmitter: (eventName: string, eventData?: EventData) => void;
  let receiver: WatchSensorsReceiver;

  beforeEach(() => {
    eventEmitter = jasmine.createSpy();
    receiver = new WatchSensorsReceiver(eventEmitter);
  });

  it('does nothing when receives an empty list of native records', () => {
    receiver.onReceive(createFakeSensorRecords(SensorType.ACCELEROMETER, true));
    expect(eventEmitter).not.toHaveBeenCalled();
  });

  it('emits the watchAccelerometerSamplesAcquired event when receives accelerometer records', () => {
    const sensorRecords = createFakeSensorRecords(SensorType.ACCELEROMETER);
    const expectedRecord = new TriAxial(
      WatchSensor.ACCELEROMETER,
      sensorRecords.samples,
      new Date(sensorRecords.samples[0].timestamp)
    );
    const { id, ...expectedProperties } = expectedRecord;

    receiver.onReceive(sensorRecords);
    expect(eventEmitter).toHaveBeenCalledWith(
      'watchAccelerometerSamplesAcquired',
      jasmine.objectContaining(expectedProperties)
    );
  });

  it('emits the watchHeartRateSamplesAcquired event when receives heart rate records', () => {
    const sensorRecords = createFakeSensorRecords(SensorType.HEART_RATE);
    const expectedRecord = new HeartRate(sensorRecords.samples, new Date(sensorRecords.samples[0].timestamp));
    const { id, ...expectedProperties } = expectedRecord;

    receiver.onReceive(sensorRecords);
    expect(eventEmitter).toHaveBeenCalledWith(
      'watchHeartRateSamplesAcquired',
      jasmine.objectContaining(expectedProperties)
    );
  });

  it('emits the watchGeolocationSamplesAcquired event when receives geolocation records', () => {
    const sensorRecords = createFakeSensorRecords(SensorType.LOCATION);
    const expectedRecord = new Geolocation(sensorRecords.samples, new Date(sensorRecords.samples[0].timestamp));
    const { id, ...expectedProperties } = expectedRecord;

    receiver.onReceive(sensorRecords);
    expect(eventEmitter).toHaveBeenCalledWith(
      'watchGeolocationSamplesAcquired',
      jasmine.objectContaining(expectedProperties)
    );
  });
});

function createFakeSensorRecords(sensorType: SensorType, empty = false): SensorRecord<any> {
  return {
    deviceId: '',
    type: sensorType,
    samples: !empty ? createFakeSamples(sensorType) : [],
  };
}

function createFakeSamples(sensorType: SensorType) {
  switch (sensorType) {
    case SensorType.ACCELEROMETER:
      return [
        {
          timestamp: new Date(),
          x: 0,
          y: 0,
          z: 0,
        },
        {
          timestamp: new Date(),
          x: 1,
          y: 2,
          z: 3,
        },
      ];
    case SensorType.HEART_RATE:
      return [
        {
          timestamp: new Date(),
          value: 74,
        },
        {
          timestamp: new Date(),
          value: 75,
        },
      ];
    case SensorType.LOCATION:
      return [
        {
          timestamp: new Date(),
          latitude: 53,
          longitude: 53,
          altitude: 53,
        },
        {
          timestamp: new Date(),
          latitude: 54,
          longitude: 54,
          altitude: 54,
        },
      ];
  }
}
