# @awarns/wear-os
[![npm (scoped)](https://img.shields.io/npm/v/@awarns/wear-os)](https://www.npmjs.com/package/@awarns/wear-os)
[![npm](https://img.shields.io/npm/dm/@awarns/wear-os)](https://www.npmjs.com/package/@awarns/wear-os)

This module allows to collect data from the sensors of an Android WearOS smartwatch,
and enables the communication between both devices (i.e., smartphone and smartwatch).

This plugin acts as a wrapper on top of the [nativescript-wearos-sensors](https://github.com/GeoTecINIT/nativescript-wearos-sensors) plugin,
which enables the communication and the data collection from a paired WearOS smartwatch. In order to use these features, a WearOS smartwatch
must be paired with the smartphone and have installed a counterpart application, developed using the [WearOSSensors](https://github.com/GeoTecINIT/WearOSSensors) WearOS library.

> **Note**: check the requirements of both libraries for more detailed information:
> - [nativescript-wearos-sensors requirements](https://github.com/GeoTecINIT/nativescript-wearos-sensors#requirements)
> - [WearOSSensors requirements](https://github.com/GeoTecINIT/WearOSSensors#requirements)

Install the plugin using the following command line instruction:

```bash
ns plugin add @awarns/wear-os
```

## Usage

### Setup
This plugin requires you to register its loader during the framework initialization, like this:

```ts
// ... platform imports
import { awarns } from '@awarns/core';
import { demoTasks } from '../tasks';
import { demoTaskGraph } from '../graph';
import { registerWearOSPlugin } from '@awarns/wear-os';

awarns
  .init(
    demoTasks,
    demoTaskGraph,
    [
      registerWearOSPlugin(config),
    ]
  )
  // ... handle initialization promise
```

Plugin loader parameter (`WearOSPluginConfig`):

| Parameter                | Type            | Description                                                                                                 |
|--------------------------|-----------------|-------------------------------------------------------------------------------------------------------------|
| `sensors?`               | `WatchSensor[]` | Enable the specified sensors. By default, all sensors are enabled.                                          |
| `disablePlainMessaging?` | `boolean`       | Disable the plain messaging communication mechanism. Default: `false`.                                      |
| `disableWearCommands?`   | `boolean`       | Disable the command mechanism that allows to start the data collection on the watch side. Default: `false`. |

In addition, you also have to specify if you want to use these plugin features and which watch you want to use. This offers to possibility to use or not
these plugin features without modifying the task graph definition. For example, you can disable the features if there isn't a paired watch available. Here is
an example:

```typescript
import { getConnectedWatches, setWatchFeaturesState, useWatch } from '@awarns/wear-os';

export async function setupWatchToUse(): Promise<void> {
  const watches = await getConnectedWatches();

  if (watches.length === 0) {
    console.log('No WearOS watches connected! Disabling wear-os plugin features...');
    setWatchFeaturesState(false);
    return;
  }

  const watch = watches[0];
  console.log(`Setup wear-os plugin to use ${watch.name} watch!`);
  setWatchFeaturesState(true);
  useWatch(watch);
}
```

### Tasks

| Task name                                                                                                       | Description                                                                                                                                                           |
|-----------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`startDetecting{prefix}Watch{sensor}Changes`](#start-data-collection-for-a-sensor-with-specific-configuration) | Allows to start the data collection for a `sensor` with a specific configuration (see below). The `prefix` can be used to distinguish among different configurations. |
| [`stopDetectingWatch{sensor}Changes`](#stop-data-collection-for-a-sensor)                                       | The complement to the previous task. Allows to stop collecting data from `sensor`.                                                                                    |
| [`sendPlainMessageToWatch`](#send-a-message-to-the-paired-watch)                                                | Allows to send a string-base message to the paired smartwatch. An usage example could be to send information for updating the UI.                                     |
| [`sendPlainMessageToWatchAndAwaitResponse`](#send-a-message-to-the-paired-watch-and-wait-for-a-response)        | Allows to send a string-base message to the paired smartwatch and to wait for a response from it.                                                                     |

#### Start data collection for a sensor with specific configuration
To register these tasks for their use, you just need to import them and call their generator functions inside your application's task list:

```typescript
import { Task } from '@awarns/core/tasks';
import {
  startDetectingWatchSensorChangesTask,
  WatchSensor,
  WatchSensorDelay,
} from '@awarns/wear-os';

export const demoTasks: Array<Task> = [
  startDetectingWatchSensorChangesTask(WatchSensor.ACCELEROMETER, { sensorDelay: WatchSensorDelay.NORMAL, batchSize: 50 }),
  // startDetectingWatchAccelerometerChanges

  startDetectingWatchSensorChangesTask(WatchSensor.ACCELEROMETER, { sensorDelay: WatchSensorDelay.FASTEST, batchSize: 50 }, 'Fast'),
  // startDetectingFastWatchAccelerometerChanges

  startDetectingWatchSensorChangesTask(WatchSensor.HEART_RATE, { sensorDelay: WatchSensorDelay.NORMAL, batchSize: 5 }),
  // startDetectingWatchHeartRateChanges

  startDetectingWatchSensorChangesTask(WatchSensor.GEOLOCATION, { sensorDelay: 5000, batchSize: 5 }),
  // startDetectingWatchGeolocationChanges
]
```

> **Warning**: the data collection for a `WatchSensor` can only be started once, if `startDetectingFastWatchAccelerometerChanges` is executed after
> `startDetectingWatchAccelerometerChanges` and while the collection is in progress, `startDetectingFastWatchAccelerometerChanges` will be ignored.
> Therefore, if you want to dynamically change the collection's configuration while the collection is in progress, you will have to stop the collection
> and start it again with the new desired configuration.

Task generator parameters:

| Parameter name          | Type                    | Description                                                                                                                    |
|-------------------------|-------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| `sensor`                | `WatchSensor`           | Sensor to collect data from. See below.                                                                                        |
| `providerConfiguration` | `ProviderConfiguration` | Collection's configuration of the task. See below.                                                                             |
| `prefix` _(Optional)_   | `string`                | Adds the prefix to the name of the task. Useful to create multiple tasks for the same sensor but with multiple configurations. |

- WatchSensor

| Value           | Description                                  |
|-----------------|----------------------------------------------|
| `ACCELEROMETER` | Represents the watch's accelerometer sensor. |
| `GYROSCOPE`     | Represents the watch's gyroscope sensor.     |
| `MAGNETOMETER`  | Represents the watch's magnetometer sensor.  |
| `HEART_RATE`    | Represents the watch's heart rate monitor.   |
| `GEOLOCATION`   | Represents the watch's GPS system.           |

- ProviderConfiguration

| Property      | Type                                        | Description                                                                                                                                                                                                                                                                                                                                        |
|---------------|---------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `sensorDelay` | <code>WatchSensorDelay &vert; number</code> | Indicates the time between two consecutive samples. It can be a `WatchSensorDelay` (i.e., `UI`, `NORMAL`, `GAME` or `FASTEST`) or a value in milliseconds. It is highly recommended to use values in milliseconds (and higher than 1000 ms) with `WatchSensor.GEOLOCATION` due to `WatchSensorDelay` it's oriented for high sampling rate sensors. |
| `batchSize`   | `number`                                    | Indicates the amount of samples to be delivered in each record.                                                                                                                                                                                                                                                                                    |

> **Note**: the `sensorDelay` is taken as a suggestion by the Android OS. Samples could be delivered at a smaller or higher rate.

Task output events:

> These tasks don't produce significant events after they complete their execution aside from the regular `{task-name}Finished` events.
>
> However, once the start task has finished running, relevant events will be emitted by the internal listeners while the data collection is active. These are listed below.

- [`watchAccelerometerSamplesAcquired`](#events)
- [`watchGyroscopeSamplesAcquired`](#events)
- [`watchMagnetometerSamplesAcquired`](#events)
- [`watchHeartRateSamplesAcquired`](#events)
- [`watchGeolocationSamplesAcquired`](#events)

> Example usage in the application task graph:
> ```ts
> on('startEvent', run('startDetectingWatchAccelerometerChanges'));
> on('startEvent', run('startDetectingWatchGyroscopeChanges'));
> on('startEvent', run('startDetectingWatchMagnetometerChanges'));
> on('startEvent', run('startDetectingWatchHeartRateChanges'));
> on('startEvent', run('startDetectingWatchGeolocationChanges'));
> 
> on('watchAccelerometerSamplesAcquired', run('writeRecords'));
> on('watchGyroscopeSamplesAcquired', run('writeRecords'));
> on('watchMagnetometerSamplesAcquired', run('writeRecords'));
> on('watchHeartRateSamplesAcquired', run('writeRecords'));
> on('watchGeolocationSamplesAcquired', run('writeRecords'));
>```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

#### Stop data collection for a sensor
To register these tasks for their use, you just need to import them and call their generator functions inside your application's task list:

```typescript
import { Task } from '@awarns/core/tasks';
import {
  stopDetectingWatchSensorChangesTask,
  WatchSensor,
} from '@awarns/wear-os';

export const demoTasks: Array<Task> = [
  stopDetectingWatchSensorChangesTask(WatchSensor.ACCELEROMETER), // stopDetectingWatchAccelerometerChanges
  stopDetectingWatchSensorChangesTask(WatchSensor.GYROSCOPE),     // stopDetectingWatchGyroscopeChanges
  stopDetectingWatchSensorChangesTask(WatchSensor.MAGNETOMETER),  // stopDetectingWatchMagnetometerChanges
  stopDetectingWatchSensorChangesTask(WatchSensor.HEART_RATE),    // stopDetectingWatchHeartRateChanges
  stopDetectingWatchSensorChangesTask(WatchSensor.GEOLOCATION),   // stopDetectingWatchGeolocationChanges
];
```

> **Note**: a stop task of a specific `WatchSensor` can be used to stop the collection started by any start task
> for that `WatchSensor` no matter the specific configuration.

Task generator parameters:

| Parameter name          | Type                    | Description                              |
|-------------------------|-------------------------|------------------------------------------|
| `sensor`                | `WatchSensor`           | Sensor to stop the data collection from. |

Task output events:

> These tasks don't produce significant events after they complete their execution aside from the regular `{task-name}Finished` events.
>
> Example usage in the application task graph:
> ```ts
> on('startEvent', run('startDetectingWatchAccelerometerChanges').every(1, 'minute'));
> on('startEvent', run('startDetectingWatchGyroscopeChanges').every(1, 'minute'));
> on('startEvent', run('startDetectingWatchMagnetometerChanges').every(1, 'minute'));
> on('startEvent', run('startDetectingWatchHeartRateChanges').every(1, 'minute'));
> on('startEvent', run('startDetectingWatchGeolocationChanges').every(1, 'minute'));
> 
> on('watchAccelerometerSamplesAcquired', run('stopDetectingWatchAccelerometerChanges'));
> on('watchGyroscopeSamplesAcquired', run('stopDetectingWatchGyroscopeChanges'));
> on('watchMagnetometerSamplesAcquired', run('stopDetectingWatchMagnetometerChanges'));
> on('watchHeartRateSamplesAcquired', run('stopDetectingWatchMagnetometerChanges'));
> on('watchGeolocationSamplesAcquired', run('stopDetectingWatchMagnetometerChanges'));
>```
> **Note**: it makes no sense to use these tasks without using before their complementary tasks to start the data collection.

#### Send a message to the paired watch

To register these tasks for their use, you just need to import them and call their generator functions inside your application's task list:

```typescript
import { Task } from '@awarns/core/tasks';
import {
  sendPlainMessageToWatchTask
} from '@awarns/wear-os';

export const demoTasks: Array<Task> = [
  sendPlainMessageToWatchTask() // sendPlainMessageToWatch
];
```

Task generator parameters:

> This task generators take no parameters

Task output events:

- [`plainMessageSent`](#events)

> Example usage in the application task graph:
> ```ts
> on('startEvent', run('sendPlainMessageToWatch', {
>   plainMessage: {                                 
>     message: 'Hi from the smartphone!!'
>   }
> }).every(1, 'minute'));
> 
> on('plainMessageSent', run('writeRecords'));
>```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

#### Send a message to the paired watch and wait for a response

To register these tasks for their use, you just need to import them and call their generator functions inside your application's task list:

```typescript
import { Task } from '@awarns/core/tasks';
import {
  sendPlainMessageToWatchAndAwaitResponseTask
} from '@awarns/wear-os';

export const demoTasks: Array<Task> = [
  sendPlainMessageToWatchAndAwaitResponseTask() // sendPlainMessageToWatchAndAwaitResponse
];
```

Task generator parameters:

> This task generators take no parameters

Task output events:

- [`plainMessageSentAndResponseReceived`](#events)

> Example usage in the application task graph:
> ```ts
> on('startEvent', run('sendPlainMessageToWatchAndAwaitResponse', {
>   plainMessage: {
>     message: 'Tell me something ;)'
>   },
>   timeout: 3000
> }).every(1, 'minute'));
> 
> on('plainMessageSentAndResponseReceived', run('writeRecords'));
>```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

### Send a message from an event's data
You can also invoke these tasks by injecting the message in the event that triggers their execution. This allows to send messages in a more flexible way (i.e., no need to specify 
the message in the task graph).

> Example usage:
>```typescript
>import { awarns } from '@awarns/core';
>import { PlainMessage } from '@awarns/wear-os';
>
>export function sendMessage(message: PlainMessage) {
>  awarns.emitEvent('sendMessage', {
>    data: message
>  });
>}
>```
>
>Then, in the task graph:
>
>```typescript
>on('sendMessage', run('sendPlainMessageToWatch'));
>```

### Receive watch-triggered message
The watch can also send message to the smartphone by its own (i.e., no need to receive a message from the smartphone first to then reply). When those messages are received
by the smartphone, the `plainMessageReceivedEvent` is emitted.

> Example usage in the application task graph:
> ```ts
> on('plainMessageReceived', run('writeRecords'));
> ```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

### Events

| Name                                  | Payload                        | Description                                                                                    |
|---------------------------------------|--------------------------------|------------------------------------------------------------------------------------------------|
| `watchAccelerometerSamplesAcquired`   | [`TriAxial`](#triaxial)        | Contains a list of samples with the `x`, `y`, and `z` values of an accelerometer sensor.       |
| `watchGyroscopeSamplesAcquired`       | [`TriAxial`](#triaxial)        | Contains a list of samples with the `x`, `y`, and `z` values of a gyroscope sensor.            |
| `watchMagnetometerSamplesAcquired`    | [`TriAxial`](#triaxial)        | Contains a list of samples with the `x`, `y`, and `z` values of a magnetometer sensor.         |
| `watchHeartRateSamplesAcquired`       | [`HeartRate`](#heartrate)      | Contains a list with the values of a heart rate sensor.                                        |
| `watchGeolocationSamplesAcquired`     | [`Geolocation`](#geolocation)  | Contains a list of samples with the `latitude`, `longitude`, and `altitude` values of the GPS. |
| `plainMessageSent`                    | [`MessageSent`](#triaxial)     | Contains the content of the message sent to the watch.                                         |
| `plainMessageSentAndResponseReceived` | [`MessageReceived`](#triaxial) | Contains the content of the message sent to the watch and the response from it.                |
| `plainMessageReceived`                | [`MessageReceived`](#triaxial) | Contains the content of a message received from the watch.                                     |

### Records

#### TriAxial

| Property    | Type                                  | Description                                                                                            |
|-------------|---------------------------------------|--------------------------------------------------------------------------------------------------------|
| `id`        | `string`                              | Record's unique id.                                                                                    |
| `type`      | `string`                              | One of the following values: `watch-accelerometer`, `watch-gyroscope`, or `watch-magnetometer`.        |
| `change`    | `Change`                              | Always `NONE`.                                                                                         |
| `timestamp` | `Date`                                | The local time when the data was collected. It is equal to the time of the first sample in the record. |
| `samples`   | [`TriAxialSample[]`](#triaxialsample) | List with the collected samples.                                                                       |

##### `TriAxialSample`

| Property    | Type     | Description                                   |
|-------------|----------|-----------------------------------------------|
| `x`         | `number` | Value `x` of the sensor.                      |
| `y`         | `number` | Value `y` of the sensor.                      |
| `z`         | `number` | Value `z` of the sensor.                      |
| `timestamp` | `Date`   | The local time when the sample was collected. |

#### HeartRate

| Property    | Type                                    | Description                                                                                            |
|-------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------|
| `id`        | `string`                                | Record's unique id.                                                                                    |
| `type`      | `string`                                | Always `watch-heart-rate`.                                                                             |
| `change`    | `Change`                                | Always `NONE`.                                                                                         |
| `timestamp` | `Date`                                  | The local time when the data was collected. It is equal to the time of the first sample in the record. |
| `samples`   | [`HeartRateSample[]`](#heartratesample) | List with the collected samples.                                                                       |

##### `HeartRateSample`

| Property    | Type     | Description                                   |
|-------------|----------|-----------------------------------------------|
| `value`     | `number` | Heart rate value reported by the sensor.      |
| `timestamp` | `Date`   | The local time when the sample was collected. |

#### Geolocation

| Property    | Type                                        | Description                                                                                            |
|-------------|---------------------------------------------|--------------------------------------------------------------------------------------------------------|
| `id`        | `string`                                    | Record's unique id.                                                                                    |
| `type`      | `string`                                    | Always `watch-geolocation`.                                                                            |
| `change`    | `Change`                                    | Always `NONE`.                                                                                         |
| `timestamp` | `Date`                                      | The local time when the data was collected. It is equal to the time of the first sample in the record. |
| `samples`   | [`GeolocationSample[]`](#geolocationsample) | List with the collected samples.                                                                       |

##### `GeolocationSample`

| Property    | Type     | Description                                   |
|-------------|----------|-----------------------------------------------|
| `latitude`  | `number` | Latitude reported by the GPS.                 |
| `longitude` | `number` | Longitude reported by the GPS.                |
| `altitude`  | `number` | Altitude reported by the GPS.                 |
| `timestamp` | `Date`   | The local time when the sample was collected. |

#### MessageSent

| Property    | Type                           | Description                               |
|-------------|--------------------------------|-------------------------------------------|
| `id`        | `string`                       | Record's unique id.                       |
| `type`      | `string`                       | Always `plain-message-sent`.              |
| `change`    | `Change`                       | Always `NONE`.                            |
| `timestamp` | `Date`                         | The local time when the message was sent. |
| `content`   | [`PlaiMessage`](#plainmessage) | Content of the message sent.              |

##### PlainMessage

| Property        | Type           | Description                                                                                                    |
|-----------------|----------------|----------------------------------------------------------------------------------------------------------------|
| `message`       | `string`       | The content of the message.                                                                                    |
| `inResponseTo?` | `PlainMessage` | Can contain a `PlainMessage` to indicate that the current message is a response to the `inResponseTo` message. |


#### MessageReceived

| Property    | Type                                  | Description                               |
|-------------|---------------------------------------|-------------------------------------------|
| `id`        | `string`                              | Record's unique id.                       |
| `type`      | `string`                              | Always `plain-message-received`.          |
| `change`    | `Change`                              | Always `NONE`.                            |
| `timestamp` | `Date`                                | The local time when the message was sent. |
| `content`   | [`ReceivedMessage`](#receivedmessage) | Content of the received message.          |

##### ReceivedMessage

| Property       | Type           | Description                            |
|----------------|----------------|----------------------------------------|
| `senderNodeId` | `string`       | Id of the watch that sent the message. |
| `plainMessage` | `PlainMessage` | Message received.                      |

## License

Apache License Version 2.0
