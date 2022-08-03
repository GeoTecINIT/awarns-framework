import { SensorType } from 'nativescript-wearos-sensors/sensors';

export enum WatchSensor {
  ACCELEROMETER = 'watch-accelerometer',
  GYROSCOPE = 'watch-gyroscope',
  MAGNETOMETER = 'watch-magnetometer',
  HEART_RATE = 'watch-heart-rate',
  GEOLOCATION = 'watch-geolocation',
}

export function toSensorType(watchSensor: WatchSensor): SensorType {
  switch (watchSensor) {
    case WatchSensor.ACCELEROMETER:
      return SensorType.ACCELEROMETER;
    case WatchSensor.GYROSCOPE:
      return SensorType.GYROSCOPE;
    case WatchSensor.MAGNETOMETER:
      return SensorType.MAGNETOMETER;
    case WatchSensor.HEART_RATE:
      return SensorType.HEART_RATE;
    case WatchSensor.GEOLOCATION:
      return SensorType.LOCATION;
    default:
      throw new Error(`Unknown sensor: ${watchSensor}`);
  }
}

export function fromSensorType(sensorType: SensorType): WatchSensor {
  switch (sensorType) {
    case SensorType.ACCELEROMETER:
      return WatchSensor.ACCELEROMETER;
    case SensorType.GYROSCOPE:
      return WatchSensor.GYROSCOPE;
    case SensorType.MAGNETOMETER:
      return WatchSensor.MAGNETOMETER;
    case SensorType.HEART_RATE:
      return WatchSensor.HEART_RATE;
    case SensorType.LOCATION:
      return WatchSensor.GEOLOCATION;
    default:
      throw new Error(`Unknown sensor type: ${sensorType}`);
  }
}
