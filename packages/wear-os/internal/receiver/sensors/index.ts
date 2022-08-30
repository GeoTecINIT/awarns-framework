import { LocationSensorSample, SensorRecord, SensorSample } from 'nativescript-wearos-sensors/sensors/records';
import { awarns } from '@awarns/core/index';
import { EventData } from '@awarns/core/events';
import { fromSensorType, WatchSensor } from '../../watch-sensor';
import { camelCase } from '@awarns/core/internal/utils/string';
import { TriAxial, TriAxialSample } from '../../entities/sensors/tri-axial';
import { HeartRate, HeartRateSample } from '../../entities/sensors/heart-rate';
import { Geolocation } from '../../entities/sensors/geolocation';
import { Record } from '@awarns/core/entities';

export class WatchSensorsReceiver {
  constructor(private emitEvent: (eventName: string, eventData?: EventData) => void) {}

  onReceive(receivedRecords: SensorRecord<SensorSample>) {
    const watchSensor = fromSensorType(receivedRecords.type);
    const samples = receivedRecords.samples;

    if (samples.length === 0) {
      return;
    }

    if (watchSensor === WatchSensor.GEOLOCATION) {
      const { record, event } =
        samples.length === 1
          ? { record: buildRecord(watchSensor, samples), event: 'watchGeolocationAcquired' }
          : { record: buildRecords(samples), event: 'multipleWatchGeolocationAcquired' };

      this.emitEvent(event, record);
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
    case WatchSensor.GEOLOCATION: {
      const geolocationSample = (samples as LocationSensorSample[])[0];
      return buildGeolocation(geolocationSample);
    }
  }
}

function buildRecords(samples: SensorSample[]): Record[] {
  const geolocationSample = samples as LocationSensorSample[];
  return geolocationSample.map((sample) => buildGeolocation(sample));
}

function buildGeolocation(sample: LocationSensorSample): Geolocation {
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

let _receiver: WatchSensorsReceiver;
export function getWatchSensorsReceiver(): WatchSensorsReceiver {
  if (!_receiver) {
    _receiver = new WatchSensorsReceiver(awarns.emitEvent);
  }
  return _receiver;
}
