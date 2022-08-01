# @awarns/phone-sensors
[![npm (scoped)](https://img.shields.io/npm/v/@awarns/phone-sensors)](https://www.npmjs.com/package/@awarns/phone-sensors)
[![npm](https://img.shields.io/npm/dm/@awarns/phone-sensors)](https://www.npmjs.com/package/@awarns/phone-sensors)

This module allows to collect data from the IMU sensors (i.e., accelerometer and gyroscope) and the magnetometer embedded
in the mobile device. 

This plugin acts as a wrapper on top of the [`BackgroundSensors`](https://github.com/GeoTecINIT/BackgroundSensors) Android library,
which enables the data collection even when the application is in the background or the device is idle. This module
offers tasks for starting and stopping the data collection process.

Install the plugin using the following command line instruction:

```bash
ns plugin add @awarns/phone-sensors
```

## Usage

After installing this plugin, you'll have access to two task groups to start and stop the data collection process.
The collected data from the sensors, will be a [TriAxial](#triaxial) record, described below.

### Tasks 

| Task name                                                                                                                 | Description                                                                                                                                                          |
|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`startDetectingPhone{prefix}{sensor}TriAxialChanges`](#start-data-collection-for-a-sensor-with-a-specific-configuration) | Allows to start the data collection for a `sensor` with a specific configuration (see below). The `prefix` can be used to distinguish among different configurations |
| [`stopDetectingPhone{sensor}TriAxialChanges`](#stop-data-collection-for-a-sensor)                                         | The complement to the previous task. Allows to stop collecting data from `sensor`.                                                                                   |

#### Start data collection for a sensor with a specific configuration
To register these tasks for their use, you just need to import them and call their generator functions inside your application's task list:

```typescript
import { Task } from '@awarns/core/tasks';
import {
  startDetectingSensorChangesTask,
  PhoneSensor,
  SensorDelay,
} from '@awarns/phone-sensors';

export const demoTasks: Array<Task> = [
  startDetectingSensorChangesTask(PhoneSensor.ACCELEROMETER, { sensorDelay: SensorDelay.NORMAL, batchSize: 50 }),
  // startDetectingPhoneAccelerometerChanges
  
  startDetectingSensorChangesTask(PhoneSensor.ACCELEROMETER, { sensorDelay: SensorDelay.FASTEST, batchSize: 50 }, 'Fast'),
  // startDetectingPhoneFastAccelerometerChanges

  startDetectingSensorChangesTask(PhoneSensor.GYROSCOPE, { sensorDelay: SensorDelay.NORMAL, batchSize: 50 }),
  // startDetectingPhoneGyroscopeChanges

  startDetectingSensorChangesTask(PhoneSensor.MAGNETOMETER, { sensorDelay: SensorDelay.NORMAL, batchSize: 50 }),
  // startDetectingPhoneMagnetometerChanges

];
```

> **Warning**: the data collection for a `PhoneSensor` can only be started once, if `startDetectingPhoneFastAccelerometerChanges` is
> executed after `startDetectingPhoneAccelerometerChanges` and while the collection is in progress, `startDetectingPhoneFastAccelerometerChanges`
> will be ignored. Therefore, if you want to dynamically change the collection's configuration while the collection is in progress, 
>  you will have to stop the collection to start it again with the new desired configuration. 

Task generator parameters:

| Parameter name          | Type                    | Description                                        |
|-------------------------|-------------------------|----------------------------------------------------|
| `sensor`                | `PhoneSensor`           | Sensor to collect data from. See below.            |
| `providerConfiguration` | `ProviderConfiguration` | Collection's configuration of the task. See below. |

- PhoneSensor

| Value           | Description                                  |
|-----------------|----------------------------------------------|
| `ACCELEROMETER` | Represents the phone's accelerometer sensor. |
| `GYROSCOPE`     | Represents the phone's gyroscope sensor.     |
| `MAGNETOMETER`  | Represents the phone's magnetometer sensor.  |

- ProviderConfiguration

| Property      | Type                                   | Description                                                                                                                                           |
|---------------|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| `sensorDelay` | <code>SensorDelay &vert; number</code> | Indicates the time between two consecutive samples. It can be a `SensorDelay` (i.e., `UI`, `NORMAL`, `GAME` or `FASTEST`) or a value in milliseconds. |
| `batchSize`   | `number`                               | Indicates the amount of samples to be delivered in each record.                                                                                       |

> **Note**: the `sensorDelay` is taken as a suggestion by the Android OS. Samples could be delivered at a smaller or higher rate.

Task output events:

> These tasks don't produce significant events after they complete their execution aside from the regular `{task-name}Finished` events.
>
> However, once the start task has finished running, relevant events will be emitted by the internal listeners while the data collection is active. These are listed below.

- [`accelerometerSamplesAcquired`](#events)
- [`gyroscopeSamplesAcquired`](#events)
- [`magnetometerSamplesAcquired`](#events)

> Example usage in the application task graph:
> ```ts
> on('startEvent', run('startDetectingPhoneAccelerometerChanges'));
> on('startEvent', run('startDetectingPhoneGyroscopeChanges'));
> on('startEvent', run('startDetectingPhoneMagnetometerChanges'));
> 
> on('accelerometerSamplesAcquired', run('writeRecords'));
> on('gyroscopeSamplesAcquired', run('writeRecords'));
> on('magnetometerSamplesAcquired', run('writeRecords'));
>```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

#### Stop data collection for a sensor
To register these tasks for their use, you just need to import them and call their generator functions inside your application's task list:

```typescript
import { Task } from '@awarns/core/tasks';
import {
  stopDetectingSensorChangesTask,
  PhoneSensor,
} from '@awarns/phone-sensors';

export const demoTasks: Array<Task> = [
  stopDetectingSensorChangesTask(PhoneSensor.ACCELEROMETER), // stopDetectingPhoneAccelerometerChanges
  stopDetectingSensorChangesTask(PhoneSensor.GYROSCOPE),     // stopDetectingPhoneGyroscopeChanges
  stopDetectingSensorChangesTask(PhoneSensor.MAGNETOMETER),  // stopDetectingPhoneMagnetometerChanges
];
```

> **Note**: a stop task of a specific `PhoneSensor` can be used to stop the collection started by any start task
> for that `PhoneSensor` no matter the specific configuration.

Task generator parameters:

> These task generators take no parameters

Task output events:

> These tasks don't produce significant events after they complete their execution aside from the regular `{task-name}Finished` events.
> 
> Example usage in the application task graph:
> ```ts
> on('startEvent', run('startDetectingPhoneAccelerometerChanges').every(1, 'minute'));
> on('startEvent', run('startDetectingPhoneGyroscopeChanges').every(1, 'minute'));
> on('startEvent', run('startDetectingPhoneMagnetometerChanges').every(1, 'minute'));
> 
> on('accelerometerSamplesAcquired', run('stopDetectingPhoneAccelerometerChanges'));
> on('gyroscopeSamplesAcquired', run('stopDetectingPhoneGyroscopeChanges'));
> on('magnetometerSamplesAcquired', run('stopDetectingPhoneMagnetometerChanges'));
>```
> **Note**: it makes no sense to use these tasks without using before their complement tasks to start the data collection.

### Events

| Name                           | Payload                 | Description                                                                                  |
|--------------------------------|-------------------------|----------------------------------------------------------------------------------------------|
| `accelerometerSamplesAcquired` | [`TriAxial`](#triaxial) | Contains a list of samples with the `x`, `y`, and `z` components of an accelerometer sensor. |
| `gyroscopeSamplesAcquired`     | [`TriAxial`](#triaxial) | Contains a list of samples with the `x`, `y`, and `z` components of an gyroscope sensor.     |
| `magnetometerSamplesAcquired`  | [`TriAxial`](#triaxial) | Contains a list of samples with the `x`, `y`, and `z` components of an magnetometer sensor.  |

### Records

#### TriAxial

| Property    | Type                                  | Description                                                                                            |
|-------------|---------------------------------------|--------------------------------------------------------------------------------------------------------|
| `id`        | `string`                              | Record's unique id.                                                                                    |
| `type`      | `string`                              | Always `tri-axial`.                                                                                    |
| `change`    | `Change`                              | Always `NONE`.                                                                                         |
| `timestamp` | `Date`                                | The local time when the data was collected. It is equal to the time of the first sample in the record. |
| `sensor`    | `PhoneSensor`                         | Sensor which the samples are from.                                                                     |
| `samples`   | [`TriAxialSample[]`](#triaxialsample) | List with the collected samples.                                                                       |

##### `TriAxialSample`

| Property     | Type     | Description                                   |
|--------------|----------|-----------------------------------------------|
| `x`          | `number` | Component `x` of the sensor.                  |
| `y`          | `number` | Component `y` of the sensor.                  |
| `z`          | `number` | Component `z` of the sensor.                  |
| `detectedAt` | `Date`   | The local time when the sample was collected. |


## License

Apache License Version 2.0
