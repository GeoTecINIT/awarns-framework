# @awarns/ble
![npm (scoped)](https://img.shields.io/npm/v/@awarns/ble)
![npm](https://img.shields.io/npm/dm/@awarns/ble)

This module includes tasks to obtain information regarding nearby Bluetooth Low Energy (BLE) devices. This is useful to assess the existence of concrete devices nearby. Also, to build custom indoor localization and positioning systems based on BLE. Supports the iBeacon standard.

This plugin acts as a wrapper on top of the [nativescript-context-apis](https://github.com/GeoTecINIT/nativescript-context-apis) plugin (from the same authors), offering BLE scanning tasks. Scan for nearby BLE devices even in background.

Install the plugin using the following command line instruction:

```bash
ns plugin add @awarns/ble
```
## Usage

After installing and setting up this plugin, you'll have access to two different tasks to scan for Bluetooth Low Energy (BLE) devices seen nearby. The result, will be a [BleScan](#blescan) record, described below.

### Tasks

| Task name                                                    | Description                                                                                                                                                                                                                                                |
|--------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`acquirePhoneBleScan`](#acquire-a-single-ble-scan)          | Allows to perform single BLE scans for a given amount of time                                                                                                                                                                                              |
| [`acquireMultiplePhoneBleScan`](#acquire-ble-scans-in-batch) | Allows to repeatedly perform BLE scans. The duration of each scan can be controlled. Scans will happen for as long as there is execution time remaining (3 minutes max. or shortly before the next time-scheduled task execution, whatever occurs earlier) |

> **Note**: All the tasks require **fine location permission, bluetooth scanning permission, active location services and active bluetooth adapter** for their execution. Each task will automatically request what is missing during framework's initialization

#### Acquire a single BLE scan

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { acquirePhoneBleScanTask, BleScanMode } from '@awarns/ble';

export const demoTasks: Array<Task> = [
    acquirePhoneBleScanTask(
      /* optional */ { scanTime: 5000, scanMode: BleScanMode.BALANCED, iBeaconUuids: [] }
    ),
];
```
Task generator parameters:

| Name           | Type                                                                         | Description                                                                                                                                                    |
|----------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `scanTime`     | `number`                                                                     | The amount of time (in milliseconds) to be spent scanning. Defaults to `5000` (5s)                                                                             |
| `scanMode`     | [`BleScanMode`](https://github.com/GeoTecINIT/nativescript-context-apis#api) | The BLE scan mode to use, see [context-apis docs API](https://github.com/GeoTecINIT/nativescript-context-apis#api) section on BLE. Defaults to `balanced` mode |
| `iBeaconUuids` | `Array<String>`                                                              | Filters the scan results to only show devices broadcasting one of the given iBeacon UUID(s)                                                                    |

Task event output:

| Name              | Payload               | Description                                            |
|-------------------|-----------------------|--------------------------------------------------------|
| `bleScanAcquired` | [`BleScan`](#blescan) | Indicates that a new BLE scan result has been acquired |

> Example usage in the application task graph:
> ```ts
> on(
>   'startEvent',
>   run('acquirePhoneBleScan')
>     .every(1, 'minutes')
>     .cancelOn('stopEvent')
> );
> 
> on('bleScanAcquired', run('writeRecords'));
>```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

#### Acquire BLE scans in batch

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { acquireMultiplePhoneBleScanTask, BleScanMode } from '@awarns/ble';

export const demoTasks: Array<Task> = [
    acquireMultiplePhoneBleScanTask(
      /* optional */ { scanTime: 5000, scanMode: BleScanMode.BALANCED, iBeaconUuids: [] }
    ),
];
```
Task generator parameters:

| Name           | Type                                                                         | Description                                                                                                                                                    |
|----------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `scanTime`     | `number`                                                                     | The amount of time (in milliseconds) to be spent scanning. Defaults to `5000` (5s)                                                                             |
| `scanMode`     | [`BleScanMode`](https://github.com/GeoTecINIT/nativescript-context-apis#api) | The BLE scan mode to use, see [context-apis docs API](https://github.com/GeoTecINIT/nativescript-context-apis#api) section on BLE. Defaults to `balanced` mode |
| `iBeaconUuids` | `Array<String>`                                                              | Filters the scan results to only show devices broadcasting one of the given iBeacon UUID(s)                                                                    |

Task event output:

| Name              | Payload                      | Description                                                        |
|-------------------|------------------------------|--------------------------------------------------------------------|
| `bleScanAcquired` | [`Array<BleScan>`](#blescan) | Indicates that one or more new BLE scan results have been acquired |

> Example usage in the application task graph:
> ```ts
> on(
>   'startEvent',
>   run('acquireMultiplePhoneBleScan', { maxInterval: 10000 /* (Optional) Maximun interval between scans, unlimited by default */ })
>     .every(1, 'minutes')
>     .cancelOn('stopEvent')
> );
> 
> on('bleScanAcquired', run('writeRecords'));
>```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

### Records

#### BleScan

| Property    | Type                                                                                  | Description                                                                                                                                                                                                                 |
|-------------|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`        | `string`                                                                              | Record's unique id                                                                                                                                                                                                          |
| `type`      | `string`                                                                              | Always `ble-scan`                                                                                                                                                                                                           |
| `change`    | `Change`                                                                              | Always `none`. Scan results are returned as a whole. Intermediate results are not reported                                                                                                                                  |
| `timestamp` | `Date`                                                                                | The local time when the scan was completed                                                                                                                                                                                  |
| `seen`      | [`Array<BleDeviceInfo>`](https://github.com/GeoTecINIT/nativescript-context-apis#api) | The devices seen during the scan. The list can be empty. For details on the properties of the BleDeviceInfo object, see [context-apis API docs](https://github.com/GeoTecINIT/nativescript-context-apis#api) section on BLE |


## License

Apache License Version 2.0
