# @awarns/tracing
![npm (scoped)](https://img.shields.io/npm/v/@awarns/tracing)
![npm](https://img.shields.io/npm/dm/@awarns/tracing)

Background execution flows can become quite complex when using the AwarNS Framework, which is not necessarily a bad thing. This module aids at debugging such workflows, thanks to a set of decorators and tasks which allow to keep track of task executions and the raise of certain events. The recorded traces can later be queried and exported to a local file. Optionally, it is possible to automatically store the recorded traces in an external data store (e.g., a backend). 

Install the plugin using the following command line instruction:

```bash
ns plugin add @awarns/tracing
```

## Usage

After installing and configuring this plugin, you'll be granted with two interaction mechanisms to work with it:

1. **The plugin API**. Through it, you'll be able to "decorate" existing tasks, to keep track of their execution. Then, you can query the recorded execution traces and export them using the most common information exchange formats.
2. **Tasks to track the raise of certain events**. Sometimes, the execution of a task itself is not interesting, but just one (or more) of the events it produces. Alternatively, the event generator might not be a task, but some UI code emitting an event in a very specific situation. If the rise of these events is relevant to your application, you can keep track of them using these tasks. 

### Setup

This plugin requires you to register its loader during the framework initialization, like this:

```ts
// ... platform imports
import { awarns } from '@awarns/core';
import { demoTasks } from '../tasks';
import { demoTaskGraph } from '../graph';
import { registerTracingPlugin } from '@awarns/tracing';

import { externalTracesStore } from './external-store';

awarns
  .init(
    demoTasks,
    demoTaskGraph,
    [
      registerTracingPlugin({
        externalTracesStore: externalTracesStore,
        oldTracesMaxAgeHours: 7 * 24 // 1 week
      }),
    ]
  )
  // ... handle initialization promise
```

Plugin loader config parameter options:

| Property               | Type                                   | Description                                                                                                                                                                             |
|------------------------|----------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `externalTracesStore`  | [`TracesStore`](#tracesstore-external) | (Optional) Inject an adapter to an external traces store and enable automatic upload of the recorded traces. The table below describes the methods that this adapter needs to implement |
| `oldTracesMaxAgeHours` | `number`                               | (Optional) Tell the plugin to regularly cleanup old local traces. By default, all traces are kept                                                                                       |

#### TracesStore (external)

| Method                 | Return type     | Description                                                                                                                   |
|------------------------|-----------------|-------------------------------------------------------------------------------------------------------------------------------|
| `insert(trace: Trace)` | `Promise<void>` | Persist the given trace. Throw an error if something goes wrong. The write will be retried during the next app initialization |

Due to that, for now, this plugin only supports one-way synchronization, the rest of the methods are meant for future use and don't need to be implemented at the moment. You can throw unimplemented errors inside them, so that you can more easily recognize when they start being used in future versions.

### API

The API of this plugin can be classified in 3 groups: task decorator, traces' storage and data exporters.

#### Task decorator

##### makeTraceable

In the task decorator group, there is the `makeTraceable` function, which allows to decorate one or more tasks to keep track of their execution, with the following parameters (see full example usage [here](../../tools/demo/tasks.ts)):

| Parameter      | Type                            | Description                                                                                                                 |
|----------------|---------------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| `tasksToTrace` | `Array<Task>`                   | An array including all the tasks that will be decorated to keep track of their execution                                    |
| `config`       | [`TracerConfig`](#tracerconfig) | (Optional) Allows to adjust some configuration options of the tracer. See [TracerConfig](#tracerconfig) properties for more |

The `makeTraceable` function returns an array of decorated tasks.

##### TracerConfig

| Property               | Type      | Description                                                                                                                      |
|------------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------|
| `outputsSensitiveData` | `boolean` | Indicates the tracer that the tasks being tracked outputs sensitive information that should not be recorded. Defaults to `false` |

#### Traces storage

##### tracesStore

In the traces' storage group, there is the `tracesStore` singleton object, with the following methods:

| Method                                               | Return type                       | Description                                                                                                                                                                  |
|------------------------------------------------------|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `insert(record: Record)`                             | `Promise<void>`                   | Persist the given trace. On success, if provided during plugin initialization, it will try to automatically write the new trace to the external store                        |
| `getAll(reverseOrder?: boolean, limitSize?: number)` | [`Promise<Array<Trace>>`](#trace) | Allows to retrieve the current latest (by default) or first traces, optionally limiting the resulting list in size                                                           |
| `list(size?: number)`                                | [`Observable<Trace>`](#trace)     | Allows to observe the "n" most recent traces, where "n" is determined by the value given to the size parameter. By default, size is `100`                                    |
| `clear()`                                            | `Promise<void>`                   | Allows to clear all the stored traces from the local database. **Note:** to only remove old traces, configure the `oldTracesMaxAgeHours` option during plugin initialization |
| `changes` _(property)_                               | `Observable<Array<string>>`       | Listen to this observable property to know when a trace has been created. It propagates updates on the ids of the traces that have been recently stored                      |

##### Trace

| Property    | Type          | Description                                                                                                                                                                                                                                                                                                                                     |
|-------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`        | `string`      | The unique id of the trace                                                                                                                                                                                                                                                                                                                      |
| `chainId`   | `string`      | The id of the chain that the trace belongs to. A chain is a succession of event rises and task executions, which originate from the same starting event                                                                                                                                                                                         |
| `type`      | `TraceType`   | Can either be `task` or `event` depending on what originated the trace                                                                                                                                                                                                                                                                          |
| `name`      | `string`      | The name of the task or the event that originated the trace                                                                                                                                                                                                                                                                                     |
| `result`    | `TraceResult` | Can either be `OK` or `error`. This value is always `OK` for event traces, since, if something goes wrong, the event won't rise at all                                                                                                                                                                                                          |
| `timestamp` | `Date`        | The date and time when the trace was originated                                                                                                                                                                                                                                                                                                 |
| `content`   | `object`      | Task traces and event traces follow a different structure in their content property. Event traces will contain here the payload of the event, unless it has been declared that the event contains sensitive data, in which case, it will hold an empty (`{}`) object. The content of task traces has a fixed structure, which can be seen below |

##### Trace content (Task)

| Property    | Type          | Description                                                                                                                                                                    |
|-------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `emitted`   | `string`      | The name of the event emitted by the task                                                                                                                                      |
| `outcome`   | `string`      | The payload included in the event emitted by the task. If `outputsSensitiveData` is set to `true` in the tracer config, this property will hold an empty object (`{}`) instead |
| `message`   | `string`      | If an error was thrown during the execution of the task, its stack trace will appear here                                                                                      |
| `took`      | `number`      | The task execution time, in milliseconds                                                                                                                                       |

#### Export data

#### createRecordsExporter

In the final group, the data exporters group, there is the `createTracesExporter()` function, with the following parameters:

| Parameter  | Type                   | Description                                                                                                                                                               |
|------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `folder`   | `Folder`               | System folder object. Use [NativeScript FileSystem API](https://v7.docs.nativescript.org/ns-framework-modules/file-system) to define where the exports file will be saved |
| `format`   | `'csv' &vert; 'json' ` | Select the information exchange format to use. Defaults to `csv`                                                                                                          |
| `fileName` | `string`               | (Optional) Specify the file name to use for the exports file (without extension). Defaults to current date and time                                                       |

The `createRecordsExporter()` returns an `Exporter` object with the following API:

#### Exporter

| Method     | Return type                              | Description                                                                                                                                       |
|------------|------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| `export()` | [`Promise<ExportResult>`](#exportresult) | Tell the exporter to export the traces, and save them inside to the configured exports file. Returns an [`ExportResult`](#exportresult) once done |

#### ExportResult

| Property      | Return type | Description                                      |
|---------------|-------------|--------------------------------------------------|
| `exportCount` | `number`    | The amount of traces that have been exported     |
| `fileName`    | `string`    | The name of the exports file that has been saved |

### Tasks

#### Track regular events

> **Task name**: `trackEvent`
>
> **Description**: Generates an event trace containing the information regarding the event that invoked its execution
>
> **Execution requirements:** None

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { trackEventTask } from '@awarns/tracing';

export const demoTasks: Array<Task> = [
  trackEventTask(),
];
```

Task generator parameters:

> The task generator takes no parameters.

Task event output:

> This task doesn't produce significant events after it completes its execution, aside from the regular `{task-name}Finished` event: `trackEventFinished`.

> Example usage in the application task graph:
> ```ts
> on('startEvent', run('trackEvent')); // Include some payload data in your start event, to see how it becomes recorded too
> ```

#### Track events containing sensitive information

> **Task name**: `trackSensitiveEvent`
>
> **Description**: Generates an event trace containing the information regarding the event that invoked its execution. The payload of the event will be ignored, since it is considered to contain sensitive information
>
> **Execution requirements:** None

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { trackSensitiveEventTask } from '@awarns/tracing';

export const demoTasks: Array<Task> = [
  trackSensitiveEventTask(),
];
```

Task generator parameters:

> The task generator takes no parameters.

Task event output:

> This task doesn't produce significant events after it completes its execution, aside from the regular `{task-name}Finished` event: `trackSensitiveEventFinished`.

> Example usage in the application task graph:
> ```ts
> on('startEvent', run('trackSensitiveEvent')); // Include some payload data in your start event, to see how it does not appear in the event trace
> ```

## License

Apache License Version 2.0


