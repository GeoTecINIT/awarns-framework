# @awarns/wifi
[![npm (scoped)](https://img.shields.io/npm/v/@awarns/wifi)](https://www.npmjs.com/package/@awarns/wifi)
[![npm](https://img.shields.io/npm/dm/@awarns/wifi)](https://www.npmjs.com/package/@awarns/wifi)

This module includes tasks to obtain information regarding nearby Wi-Fi access points (APs). This is useful to assess the existence of concrete access points nearby. Also, to build custom indoor localization and positioning systems based on Wi-Fi.

This plugin acts as a wrapper on top of the [nativescript-context-apis](https://github.com/GeoTecINIT/nativescript-context-apis) plugin (from the same authors), offering Wi-Fi scanning tasks. Scan for nearby Wi-Fi APs even in background.

Install the plugin using the following command line instruction:

```bash
ns plugin add @awarns/wifi
```
## Usage

After installing and setting up this plugin, you'll have access to two different tasks to scan for Wi-Fi APs seen nearby. The result, will be a [WifiScan](#wifiscan) record, described below.

### Tasks

| Task name                                                       | Description                                                                                                                                                                                                     |
|-----------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`acquirePhoneWifiScan`](#acquire-a-single-wi-fi-scan)          | Allows to perform a single Wi-Fi scan for a given amount of time                                                                                                                                                |
| [`acquireMultiplePhoneWifiScan`](#acquire-wi-fi-scans-in-batch) | Allows to repeatedly perform Wi-Fi scans. Scans will happen for as long as there is execution time remaining (3 minutes max. or shortly before the next time-scheduled task execution, whatever occurs earlier) |

> **Note**: All the tasks require **fine location permission and active Wi-Fi radio** for their execution. Each task will automatically request what is missing during framework's initialization

#### Acquire a single Wi-Fi scan

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { acquirePhoneWifiScanTask } from '@awarns/wifi';

export const demoTasks: Array<Task> = [
    acquirePhoneWifiScanTask(/* optional */ { ensureIsNew: true, timeout: 15000 }),
];
```
Task generator parameters:

| Name           | Type            | Description                                                                                                                                                                                                                                                                                |
|----------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ensureIsNew`  | `boolean`       | Make sure that the resulting Wi-Fi scan is up-to-date. A value of `true` ensures [Android Wi-Fi scanning restrictions](https://developer.android.com/guide/topics/connectivity/wifi-scan#wifi-scan-throttling) are met, thus the reported value is always new. The default value is `true` |
| `timeout`      | `number`        | The maximum time, in milliseconds, to be spent scanning for nearby Wi-Fi APs. The default value is `15000` (15s)                                                                                                                                                                           |

Task output events:

- [`wifiScanAcquired`](#events)

> Example usage in the application task graph:
> ```ts
> on(
>   'startEvent',
>   run('acquirePhoneWifiScan')
>     .every(1, 'minutes')
>     .cancelOn('stopEvent')
> );
> 
> on('wifiScanAcquired', run('writeRecords'));
>```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

#### Acquire Wi-Fi scans in batch

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { acquireMultiplePhoneWifiScanTask } from '@awarns/wifi';

export const demoTasks: Array<Task> = [
  acquireMultiplePhoneWifiScanTask(/* optional */ { ensureIsNew: true, timeout: 15000 }),
];
```
Task generator parameters:

| Name          | Type      | Description                                                                                                                                                                                                                                                                                    |
|---------------|-----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `ensureIsNew` | `boolean` | Make sure that the resulting Wi-Fi scans are up-to-date. A value of `true` ensures [Android Wi-Fi scanning restrictions](https://developer.android.com/guide/topics/connectivity/wifi-scan#wifi-scan-throttling) are met, thus the reported values are always new. The default value is `true` |
| `timeout`     | `number`  | The maximum time to be spent performing each individual Wi-Fi scan. The default value is `15000` (15s)                                                                                                                                                                                         |

Task output events:

- [`wifiScanAcquired`](#events)

> Example usage in the application task graph:
> ```ts
> on(
>   'startEvent',
>   run('acquireMultiplePhoneWifiScan', { 
>      maxInterval: 25000 
>      /* 
>         (Optional, mandatory if ensureIsNew=true) Maximun interval between scans, unlimited by default. 
>         
>         If ensureIsNew=true, the value must ensure that a maximum of 2 scans are being collectd every minute. 
>         
>         For example, here the task will be executed every 1 minute, which means it will have ~55s to run. 
>         With 25s between scans we meet the OS restrictions and have enought time to collect 2 Wi-Fi fingerprints. 
>      */ 
>   })
>     .every(1, 'minutes')
>     .cancelOn('stopEvent')
> );
> 
> on('wifiScanAcquired', run('writeRecords'));
>```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

### Events

| Name               | Payload                                                    | Description                                                          |
|--------------------|------------------------------------------------------------|----------------------------------------------------------------------|
| `wifiScanAcquired` | [<code>WifiScan &vert; Array\<WifiScan></code>](#wifiscan) | Indicates that one or more new Wi-Fi scan results have been acquired |

### Records

#### WifiScan

| Property    | Type                                                                               | Description                                                                                                                                                                                                                  |
|-------------|------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`        | `string`                                                                           | Record's unique id                                                                                                                                                                                                           |
| `type`      | `string`                                                                           | Always `wifi-scan`                                                                                                                                                                                                           |
| `change`    | `Change`                                                                           | Always `none`. Scan results are returned as a whole. Intermediate results are not reported                                                                                                                                   |
| `timestamp` | `Date`                                                                             | The local time when the scan was completed                                                                                                                                                                                   |
| `isNew`     | `boolean`                                                                          | Indicates if the results of the scan are cached. This can only be `false` when using `ensureIsNew=false` option during the scans                                                                                             |
| `seen`      | [`Array<WifiApInfo>`](https://github.com/GeoTecINIT/nativescript-context-apis#api) | The Wi-Fi APs seen during the scan. The list can be empty. For details on the properties of the WifiApInfo object, see [context-apis API docs](https://github.com/GeoTecINIT/nativescript-context-apis#api) section on Wi-Fi |


## License

Apache License Version 2.0
