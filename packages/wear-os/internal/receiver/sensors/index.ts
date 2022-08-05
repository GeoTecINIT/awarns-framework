import {
  HeartRateSensorSample,
  LocationSensorSample,
  SensorRecord,
  SensorSample,
  TriAxialSensorSample,
} from 'nativescript-wearos-sensors/sensors/records';
import { awarns } from '@awarns/core/index';
import { EventData } from '@awarns/core/events';
import { fromSensorType, WatchSensor } from '../../watch-sensor';
import { camelCase } from '@awarns/core/internal/utils/string';
import { TriAxial } from '../../entities/sensors/tri-axial';
import { HeartRate } from '../../entities/sensors/heart-rate';
import { Geolocation } from '../../entities/sensors/geolocation';
import { Record } from '@awarns/core/entities';

export class WatchSensorsReceiver {
  constructor(private emitEvent: (eventName: string, eventData?: EventData) => void) {}

  onReceive(receivedRecords: SensorRecord<any>) {
    const watchSensor = fromSensorType(receivedRecords.type);
    const samples = receivedRecords.samples;

    if (samples.length === 0) {
      return;
    }

    const record = buildRecord(watchSensor, samples);
    console.log(`${camelCase(watchSensor)}SamplesAcquired`);
    this.emitEvent(`${camelCase(watchSensor)}SamplesAcquired`, record);
  }
}

function buildRecord(watchSensor: WatchSensor, samples: SensorSample[]): Record {
  const firstSampleDate = new Date(samples[0].timestamp);
  switch (watchSensor) {
    case WatchSensor.ACCELEROMETER:
    case WatchSensor.GYROSCOPE:
    case WatchSensor.MAGNETOMETER:
      const triAxialSamples = samples as TriAxialSensorSample[];
      return new TriAxial(
        watchSensor,
        triAxialSamples.map((sample) => {
          return {
            x: sample.x,
            y: sample.y,
            z: sample.z,
            timestamp: new Date(sample.timestamp),
          };
        }),
        firstSampleDate
      );
    case WatchSensor.HEART_RATE:
      const heartRateSamples = samples as HeartRateSensorSample[];
      return new HeartRate(
        heartRateSamples.map((sample) => {
          return {
            value: sample.value,
            timestamp: new Date(sample.timestamp),
          };
        }),
        firstSampleDate
      );
    case WatchSensor.GEOLOCATION:
      const geolocationSamples = samples as LocationSensorSample[];
      return new Geolocation(
        geolocationSamples.map((sample) => {
          return {
            latitude: sample.latitude,
            longitude: sample.longitude,
            altitude: sample.altitude,
            timestamp: new Date(sample.timestamp),
          };
        }),
        firstSampleDate
      );
  }
}

let _receiver: WatchSensorsReceiver;
export function getWatchSensorsReceiver(): WatchSensorsReceiver {
  if (!_receiver) {
    _receiver = new WatchSensorsReceiver(awarns.emitEvent);
  }
  return _receiver;
}
