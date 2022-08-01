import BaseSensor = es.uji.geotec.backgroundsensors.sensor.BaseSensor;

export enum PhoneSensor {
  ACCELEROMETER = 'ACCELEROMETER',
  GYROSCOPE = 'GYROSCOPE',
  MAGNETOMETER = 'MAGNETOMETER',
}

export function fromNativeSensor(sensor: BaseSensor): PhoneSensor {
  switch (sensor) {
    case BaseSensor.ACCELEROMETER:
      return PhoneSensor.ACCELEROMETER;
    case BaseSensor.GYROSCOPE:
      return PhoneSensor.GYROSCOPE;
    case BaseSensor.MAGNETOMETER:
      return PhoneSensor.MAGNETOMETER;
    default:
      throw new Error(`Unknown native sensor: ${sensor}`);
  }
}

export function toNativeSensor(sensor: PhoneSensor): BaseSensor {
  switch (sensor) {
    case PhoneSensor.ACCELEROMETER:
      return BaseSensor.ACCELEROMETER;
    case PhoneSensor.GYROSCOPE:
      return BaseSensor.GYROSCOPE;
    case PhoneSensor.MAGNETOMETER:
      return BaseSensor.MAGNETOMETER;
    default:
      throw new Error(`Unknown sensor: ${sensor}`);
  }
}
