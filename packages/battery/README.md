# @awarns/battery
[![npm (scoped)](https://img.shields.io/npm/v/@awarns/battery)](https://www.npmjs.com/package/@awarns/battery)
[![npm](https://img.shields.io/npm/dm/@awarns/battery)](https://www.npmjs.com/package/@awarns/battery)

This framework module includes a task that allows to access phone's battery level on demand.

Install the plugin using the following command line instruction:

```bash
ns plugin add @awarns/battery
```

## Usage

After installing and setting up this plugin, you'll have access to a task that allows to acquire the current phone's battery level and the [BatteryLevel](#batterylevel) record that it will output on demand.

### Tasks

| Task name                                                   | Description                            |
|-------------------------------------------------------------|----------------------------------------|
| [`acquirePhoneBatteryLevel`](#acquire-phones-battery-level) | Acquires phone's current battery level |

#### Acquire phone's battery level

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { acquireBatteryLevelTask } from '@awarns/battery';

export const demoTasks: Array<Task> = [
  // ... other tasks
  acquireBatteryLevelTask(),
  // ...
];
```

Task generator parameters:

> The task generator takes no parameters. 

Task output events:

- [`batteryLevelAcquired`](#events)

> Example usage in the application task graph:
> ```ts
> on('startEvent', run('acquirePhoneBatteryLevel')
>   .every(1, 'minutes')
>   .cancelOn('stopEvent'));
> 
> on('batteryLevelAcquired', run('writeRecords'))
> ```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

### Events

| Name                   | Payload                         | Description                                                            |
|------------------------|---------------------------------|------------------------------------------------------------------------|
| `batteryLevelAcquired` | [`BatteryLevel`](#batterylevel) | Indicates that a new battery level snapshot (record) has been acquired |


### Records

#### BatteryLevel

| Property    | Type     | Description                                                |
|-------------|----------|------------------------------------------------------------|
| `id`        | `string` | Record's unique id                                         |
| `type`      | `string` | Always `battery-level`                                     |
| `change`    | `Change` | Always `none`. Never starts or ends, always exists         |
| `timestamp` | `Date`   | The local time when the battery level was acquired         |
| `value`     | `number` | The battery level. Always an integer. Ranges from 0 to 100 |


## License

Apache License Version 2.0
