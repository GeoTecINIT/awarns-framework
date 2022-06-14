# @awarns/human-activity
![npm (scoped)](https://img.shields.io/npm/v/@awarns/human-activity)
![npm](https://img.shields.io/npm/dm/@awarns/human-activity)

This module allows to detect and react to the changes in the activity being performed by the user (or object) carrying the phone: standing still, walking, running, riding a bicycle or being inside a vehicle. Depending on the granularity of the detection mechanism being used it can even detect user stand-ups too.

This plugin acts as a wrapper on top of the [nativescript-context-apis](https://github.com/GeoTecINIT/nativescript-context-apis) plugin (from the same authors), offering human activity change detection tasks. Obtain human activity updates even in background.

Install the plugin using the following command line instruction:

```bash
ns plugin add @awarns/human-activity
```

## Usage

After installing and setting up this plugin, you'll have access to two task groups to start and stop listening human activity updates at different granularity levels. The received updates, will be a [HumanActivityChange](#humanactivitychange) record, described below.

### Setup

This plugin requires you to register its loader during the framework initialization, like this:

```ts
// ... platform imports
import { awarns } from '@awarns/core';
import { demoTasks } from '../tasks';
import { demoTaskGraph } from '../graph';
import { registerHumanActivityPlugin } from '@awarns/human-activity';

awarns
  .init(
    demoTasks,
    demoTaskGraph,
    [
      registerHumanActivityPlugin(),
    ]
  )
  // ... handle initialization promise
```

Plugin loader parameters:

> This plugin loader takes no parameters.

### Tasks

#### Start / stop receiving updates on human activity changes at a coarse level

> **Task name**: `startDetectingCoarseHumanActivityChanges`
>
> **Description**: Allows to start detecting human activity changes at a coarse granularity level. This level of granularity means that activity changes will be reported no sooner than 1 minute after the activity started. In contrast, the detection mechanism will be more robust against in-between activity stops. This means, for example, that if the user is walking and stops for a few seconds, or is inside a vehicle and stops at traffic light, these subtle changes won't be detected at this granularity level.

> **Task name**: `stopDetectingCoarseHumanActivityChanges`
>
> **Description**: The complement to the previous task. Allows to stop receiving coarse activity updates on demand.

To register these tasks for their use, you just need to import them and call their generator functions inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import {
  startDetectingCoarseHumanActivityChangesTask,
  stopDetectingCoarseHumanActivityChangesTask,
} from '@awarns/human-activity';

export const demoTasks: Array<Task> = [
  startDetectingCoarseHumanActivityChangesTask(),
  stopDetectingCoarseHumanActivityChangesTask(),
];
```
Task generator parameters:

> These task generators take no parameters

Task event output:

> These tasks don't produce significant events after they complete their execution aside from the regular `{task-name}Finished` events, which are: `startDetectingCoarseHumanActivityChangesFinished` and `stopDetectingCoarseHumanActivityChangesFinished`. 
> 
> However, once the start task has finished running, relevant events will be emitted by the internal listeners once the corresponding action has been detected. These are listed below.

| Name                          | Payload                                       | Description                                                         |
|-------------------------------|-----------------------------------------------|---------------------------------------------------------------------|
| `userStartedBeingStill`       | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has stopped moving             |
| `userFinishedBeingStill`      | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has started moving             |
| `userStartedWalking`          | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has started to walk            |
| `userFinishedWalking`         | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has stopped walking            |
| `userStartedRunning`          | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has started to run             |
| `userFinishedRunning`         | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has stopped running            |
| `userStartedRidingABicycle`   | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has started riding a bicycle   |
| `userFinishedRidingABicycle`  | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has stopped riding a bicycle   |
| `userStartedBeingInAVehicle`  | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has started being in a vehicle |
| `userFinishedBeingInAVehicle` | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has stopped being in a vehicle |

> Example usage in the application task graph:
> ```ts
> on('startEvent', run('startDetectingCoarseHumanActivityChanges'));
> on('stopEvent', run('stopDetectingCoarseHumanActivityChanges'));
> 
> on('userStartedBeingStill', run('writeRecords'));
> on('userFinishedBeingStill', run('writeRecords'));
> 
> on('userStartedWalking', run('writeRecords'));
> on('userFinishedWalking', run('writeRecords'));
> 
> on('userStartedRunning', run('writeRecords'));
> on('userFinishedRunning', run('writeRecords'));
> 
> on('userStartedRidingABicycle', run('writeRecords'));
> on('userFinishedRidingABicycle', run('writeRecords'));
> 
> on('userStartedBeingInAVehicle', run('writeRecords'));
> on('userFinishedBeingInAVehicle', run('writeRecords'));
>```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

#### Start / stop receiving updates on human activity changes at an intermediate level

> **Task name**: `startDetectingIntermediateHumanActivityChanges`
>
> **Description**: Allows to start detecting human activity changes at an intermediate granularity level. This level of granularity means that activity changes will be reported as soon as they are detected. In contrast, the detection mechanism will be more sensitive to in-between activity stops. This means, for example, that if the user is walking and stops for a few seconds, or is inside a vehicle and stops at traffic light, these subtle changes will be detected as transitions to becoming still. Due to this extra of granularity, this activity detection mechanism is able to detect user stand-up actions (phone tilts abruptly).

> **Task name**: `stopDetectingIntermediateHumanActivityChanges`
>
> **Description**: The complement to the previous task. Allows to stop receiving intermediate activity updates on demand.

To register these tasks for their use, you just need to import them and call their generator functions inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import {
  startDetectingIntermediateHumanActivityChangesTask,
  stopDetectingIntermediateHumanActivityChangesTask,
} from '@awarns/human-activity';

export const demoTasks: Array<Task> = [
  startDetectingIntermediateHumanActivityChangesTask(),
  stopDetectingIntermediateHumanActivityChangesTask(),
];
```
Task generator parameters:

> These task generators take no parameters

Task event output:

> These tasks don't produce significant events after they complete their execution aside from the regular `{task-name}Finished` events, which are: `startDetectingIntermediateHumanActivityChangesFinished` and `stopDetectingIntermediateHumanActivityChangesFinished`.
>
> However, once the start task has finished running, relevant events will be emitted by the internal listeners once the corresponding action has been detected. These are listed below.

| Name                          | Payload                                       | Description                                                         |
|-------------------------------|-----------------------------------------------|---------------------------------------------------------------------|
| `userStartedBeingStill`       | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has stopped moving             |
| `userFinishedBeingStill`      | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has started moving             |
| `userStartedStandingUp`       | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has started standing up        |
| `userFinishedStandingUp`      | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has finished standing up       |
| `userStartedWalking`          | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has started to walk            |
| `userFinishedWalking`         | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has stopped walking            |
| `userStartedRunning`          | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has started to run             |
| `userFinishedRunning`         | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has stopped running            |
| `userStartedRidingABicycle`   | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has started riding a bicycle   |
| `userFinishedRidingABicycle`  | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has stopped riding a bicycle   |
| `userStartedBeingInAVehicle`  | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has started being in a vehicle |
| `userFinishedBeingInAVehicle` | [`HumanActivityChange`](#humanactivitychange) | Indicates that the user of the phone has stopped being in a vehicle |

> Example usage in the application task graph:
> ```ts
> on('startEvent', run('startDetectingCoarseHumanActivityChanges'));
> on('stopEvent', run('stopDetectingCoarseHumanActivityChanges'));
> 
> on('userStartedBeingStill', run('writeRecords'));
> on('userFinishedBeingStill', run('writeRecords'));
> 
> on('userStartedStandingUp', run('writeRecords'));
> on('userFinishedStandingUp', run('writeRecords'));
> 
> on('userStartedWalking', run('writeRecords'));
> on('userFinishedWalking', run('writeRecords'));
> 
> on('userStartedRunning', run('writeRecords'));
> on('userFinishedRunning', run('writeRecords'));
> 
> on('userStartedRidingABicycle', run('writeRecords'));
> on('userFinishedRidingABicycle', run('writeRecords'));
> 
> on('userStartedBeingInAVehicle', run('writeRecords'));
> on('userFinishedBeingInAVehicle', run('writeRecords'));
>```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).



### Records

#### HumanActivityChange

| Property     | Type                                                                           | Description                                                                                                                                                                                                                                |
|--------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`         | `string`                                                                       | Record's unique id                                                                                                                                                                                                                         |
| `type`       | `string`                                                                       | Always `human-activity`                                                                                                                                                                                                                    |
| `change`     | `Change`                                                                       | Can be either `start` or `end`. Indicates if the change reflects the activity starting or finishing                                                                                                                                        |
| `timestamp`  | `Date`                                                                         | The local time when the change was detected                                                                                                                                                                                                |
| `activity`   | [`HumanActivity`](https://github.com/GeoTecINIT/nativescript-context-apis#api) | The activity which was detected. Can be any of the ones supported by the context-apis plugin (see [context-apis API docs](https://github.com/GeoTecINIT/nativescript-context-apis#api) section on human activity, to obtain the full list) |
| `confidence` | `number`                                                                       | Probability value of the detected action reported by the activity detection mechanism. Ranges from 0 to 1. This field will contain an undefined value in records reported by the coarse detection mechanism                                |


## License

Apache License Version 2.0
