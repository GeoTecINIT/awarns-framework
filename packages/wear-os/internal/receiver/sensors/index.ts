import { SensorRecord, SensorSample } from 'nativescript-wearos-sensors/sensors/records';
import { awarns } from '@awarns/core/index';
import { EventData } from '@awarns/core/events';
import { fromSensorType, WatchSensor } from '../../watch-sensor';
import { camelCase } from '@awarns/core/internal/utils/string';
import { TriAxial, TriAxialSample } from '../../entities/sensors/tri-axial';
import { HeartRate, HeartRateSample } from '../../entities/sensors/heart-rate';
import { Geolocation, GeolocationSample } from '../../entities/sensors/geolocation';
import { Record } from '@awarns/core/entities';

export class WatchSensorsReceiver {
  constructor(private emitEvent: (eventName: string, eventData?: EventData) => void) {}

  onReceive(receivedRecords: SensorRecord<SensorSample>) {
    const watchSensor = fromSensorType(receivedRecords.type);
    const samples = receivedRecords.samples;

    if (samples.length === 0) {
      return;
    }

    const record = buildRecord(watchSensor, samples);
    this.emitEvent(`${camelCase(watchSensor)}SamplesAcquired`, record);
  }
}

function buildRecord(watchSensor: WatchSensor, samples: SensorSample[]): Record {
  const firstSampleDate = new Date(samples[0].timestamp);
  switch (watchSensor) {
    case WatchSensor.ACCELEROMETER:
    case WatchSensor.GYROSCOPE:
    case WatchSensor.MAGNETOMETER:
      return new TriAxial(watchSensor, samples as TriAxialSample[], firstSampleDate);
    case WatchSensor.HEART_RATE:
      return new HeartRate(samples as HeartRateSample[], firstSampleDate);
    case WatchSensor.GEOLOCATION:
      return new Geolocation(samples as GeolocationSample[], firstSampleDate);
  }
}

let _receiver: WatchSensorsReceiver;
export function getWatchSensorsReceiver(): WatchSensorsReceiver {
  if (!_receiver) {
    _receiver = new WatchSensorsReceiver(awarns.emitEvent);
  }
  return _receiver;
}
