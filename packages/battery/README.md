# @awarns/battery
![npm (scoped)](https://img.shields.io/npm/v/@awarns/battery)
![npm](https://img.shields.io/npm/dm/@awarns/battery)

This framework module includes a task that allows to access phone's battery level on demand.

Install the plugin using the following command line instruction.

```bash
ns plugin add @awarns/battery
```

## Usage

After installing and setting up this plugin, you'll have access to a task to acquire the current phone's battery level and the battery level record that it will output on demand.

### Acquire battery level task

> **Task name**: `acquirePhoneBatteryLevel`

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { acquireBatteryLevel } from '@awarns/battery';

export const demoTasks: Array<Task> = [
  // ... other tasks
  acquireBatteryLevel(),
  // ...
];
```
> The task generator takes no arguments. 

Task event output:

| Name                   | Payload                                                             | Description                                                            |
|------------------------|---------------------------------------------------------------------|------------------------------------------------------------------------|
| `batteryLevelAcquired` | [`BatteryLevel`](#battery-level-record-codeinternalbattery-levelts) | Indicates that a new battery level snapshot (record) has been acquired |

### Battery level record ([code](internal/battery-level.ts))


| Property    | Type     | Description                                                |
|-------------|----------|------------------------------------------------------------|
| `id`        | `string` | Record unique id                                           |
| `type`      | `string` | It is always `battery-level`                               |
| `change`    | `Change` | It is always `none`. Never starts or ends, always exists   |
| `timestamp` | `Date`   | The time when the battery level was acquired               |
| `value`     | `number` | The battery level. Always an integer. Ranges from 0 to 100 |


## License

Apache License Version 2.0
