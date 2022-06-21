# @awarns/geolocation
![npm (scoped)](https://img.shields.io/npm/v/@awarns/geolocation)
![npm](https://img.shields.io/npm/dm/@awarns/geolocation)

This module includes tasks to regularly obtain the location of the phone.

This plugin acts as a wrapper on top of the [nativescript-context-apis](https://github.com/GeoTecINIT/nativescript-context-apis) plugin (from the same authors), offering GNSS location acquisition tasks. Acquire phone's location, on demand, even in background.

Install the plugin using the following command line instruction:

```bash
ns plugin add @awarns/geolocation
```

## Usage

After installing and setting up this plugin, you'll have access to two different tasks to acquire the location of the phone. The result, will be a [Geolocation](#geolocation) record, described below.

### Tasks

| Task name                                                             | Description                                                                                                                                                                                                                                                                                                                  |
|-----------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`acquirePhoneGeolocation`](#acquire-a-single-gnss-location)          | Allows to acquire the most accurate location available, obtained from the phone, among a few, on demand. The amount of locations to be collected and decide on is configurable                                                                                                                                               |
| [`acquireMultiplePhoneGeolocation`](#acquire-gnss-locations-in-batch) | Allows to repeatedly acquire phone locations. Similarly to the single acquisition task, each reported value can be chosen among a few acquired values. Scans will happen for as long as there is execution time remaining (3 minutes max. or shortly before the next time-scheduled task execution, whatever occurs earlier) |

> **Note**: All the tasks require **fine location permission and active location services** for their execution. Each task will automatically request what is missing during framework's initialization

#### Acquire a single GNSS location

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { acquirePhoneGeolocationTask } from '@awarns/geolocation';

export const demoTasks: Array<Task> = [
      acquirePhoneGeolocationTask(/* optional */ { bestOf: 3, timeout: 10000 }),
];
```
Task generator parameters:

| Name           | Type            | Description                                                                                                                                                                          |
|----------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `bestOf`       | `number`        | The number of locations to be collected, to pick the one that is the most accurate. The more locations being requested, the more the task will take to run. The default value is `3` |
| `timeout`      | `number`        | Limit the maximum time to be spent collecting locations, in milliseconds. The default value is `10000` (10s).                                                                        |

Task output events:

- [`geolocationAcquired`](#events)

> Example usage in the application task graph:
> ```ts
> on(
>   'startEvent',
>   run('acquirePhoneGeolocation')
>     .every(1, 'minutes')
>     .cancelOn('stopEvent')
> );
> 
> on('geolocationAcquired', run('writeRecords'));
>```
> **Note**: To use the `writeRecords`, task the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

#### Acquire GNSS locations in batch

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { acquireMultiplePhoneGeolocationTask } from '@awarns/geolocation';

export const demoTasks: Array<Task> = [
  acquireMultiplePhoneGeolocationTask(/* optional */ { bestOf: 1, timeout: 15000 }),
];
```
Task generator parameters:

| Name           | Type            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|----------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `bestOf`       | `number`        | The number of locations to be collected for each final record being reported, to pick the one that is the most accurate from a subset. The more locations being requested, the lower total amount of locations being reported. This means, in the hypothetical case where there's time to collect 6 locations, with a `bestOf` value of 1, the 6 locations will be reported, whereas with a `bestOf` value of 3, in the same situation, only 2 locations will be reported, being these 2 the most accurate among the 2 subsets of 3 locations. The default value is `1` (each location being collected ends being reported) |
| `timeout`      | `number`        | Limit the maximum time to be spent collecting each location, in milliseconds. The default value is `15000` (15s).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

Task output events:

- [`geolocationAcquired`](#events)

> Example usage in the application task graph:
> ```ts
> on(
>   'startEvent',
>   run('acquireMultiplePhoneGeolocation', { maxInterval: 10000 /* (Optional) Maximun interval between location acquisitions (this includes the time it takes to obtain all the locations in a reporting subset, if bestOf > 1), unlimited by default */ })
>     .every(1, 'minutes')
>     .cancelOn('stopEvent')
> );
> 
> on('geolocationAcquired', run('writeRecords'));
>```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

### Events

| Name                  | Payload                                                             | Description                                                      |
|-----------------------|---------------------------------------------------------------------|------------------------------------------------------------------|
| `geolocationAcquired` | [<code>Geolocation &vert; Array\<Geolocation></code>](#geolocation) | Indicates that one or more new GNSS locations have been acquired |


### Records

#### Geolocation

| Property             | Type     | Description                                                                                                                                                                                                           |
|----------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                 | `string` | Record's unique id                                                                                                                                                                                                    |
| `type`               | `string` | Always `geolocation`                                                                                                                                                                                                  |
| `change`             | `Change` | Always `none`. Locations never start or end, they represent spatio-temporal snapshots of where the phone was at a given time. To detect when the phone started and ended being in a place, use the geofencing package |
| `timestamp`          | `Date`   | The local time when the location was acquired                                                                                                                                                                         |
| `latitude`           | `number` | The latitude of where the phone is located at                                                                                                                                                                         |
| `longitude`          | `number` | The longitude of where the phone is located at                                                                                                                                                                        |
| `altitude`           | `number` | The altitude of where the phone is located at                                                                                                                                                                         |
| `verticalAccuracy`   | `number` | The estimated error in the latitude                                                                                                                                                                                   |
| `horizontalAccuracy` | `number` | The estimated error in the longitude                                                                                                                                                                                  |
| `speed`              | `number` | The estimated speed of the phone by the time the location was acquired                                                                                                                                                |
| `direction`          | `number` | The estimated direction of the phone by the time the location was acquired                                                                                                                                            |

## License

Apache License Version 2.0
