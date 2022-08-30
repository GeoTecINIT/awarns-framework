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

  it('emits the watchGeolocationAcquired event when receives a geolocation record', () => {
    const samples = createFakeSamples(SensorType.LOCATION);
    const sensorRecords = {
      deviceId: '',
      type: SensorType.LOCATION,
      samples: samples.slice(0, 1),
    };
    const expectedRecord = buildGeolocation(samples[0]);
    const { id, ...expectedProperties } = expectedRecord;

    receiver.onReceive(sensorRecords);
    expect(eventEmitter).toHaveBeenCalledWith('watchGeolocationAcquired', jasmine.objectContaining(expectedProperties));
  });

  it('emits the multipleWatchGeolocationAcquired event when receives geolocation records', () => {
    const samples = createFakeSamples(SensorType.LOCATION);
    const sensorRecords = {
      deviceId: '',
      type: SensorType.LOCATION,
      samples,
    };
    const expectedRecords = samples.map((sample) => buildGeolocation(sample));
    const expectedProperties = expectedRecords.map((record) => {
      const { id, ...properties } = record;
      return jasmine.objectContaining(properties);
    });

    receiver.onReceive(sensorRecords);
    expect(eventEmitter).toHaveBeenCalledWith(
      'multipleWatchGeolocationAcquired',
      jasmine.arrayContaining(expectedProperties)
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
          timestamp: Date.now(),
          x: 0,
          y: 0,
          z: 0,
        },
        {
          timestamp: Date.now(),
          x: 1,
          y: 2,
          z: 3,
        },
      ];
    case SensorType.HEART_RATE:
      return [
        {
          timestamp: Date.now(),
          value: 74,
        },
        {
          timestamp: Date.now(),
          value: 75,
        },
      ];
    case SensorType.LOCATION:
      return [
        {
          timestamp: Date.now(),
          latitude: 53,
          longitude: 53,
          altitude: 53,
          horizontalAccuracy: 10,
          verticalAccuracy: 10,
          speed: 1000,
          direction: 30,
        },
        {
          timestamp: Date.now(),
          latitude: 54,
          longitude: 54,
          altitude: 54,
          horizontalAccuracy: 20,
          verticalAccuracy: 20,
          speed: 500,
          direction: 230,
        },
      ];
  }
}

function buildGeolocation(sample): Geolocation {
  return new Geolocation(
    sample.latitude,
    sample.longitude,
    sample.altitude,
    sample.horizontalAccuracy,
    sample.verticalAccuracy,
    sample.speed,
    sample.direction,
    new Date(sample.timestamp)
  );
}
