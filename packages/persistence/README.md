# @awarns/persistence
![npm (scoped)](https://img.shields.io/npm/v/@awarns/persistence)
![npm](https://img.shields.io/npm/dm/@awarns/persistence)

This module defines tasks to persist the output of other tasks (namely, entities extending the base Record model). Concretely, it includes:
- A local, document-based store for entities meeting the [Record](../core/README.md#extending-the-record-class) interface.
- Optional one-way data synchronization of the local records store to any external store (e.g., a remote backend). 
- The possibility to query and observe updates on the records stored locally. 
- Ready-to-use data exporters to dump the stored records to JSON and CSV files.
- A generic data store class to define entity-specific persistence stores, for data models that don't meet the [Record](../core/README.md#extending-the-record-class) specification.

This plugin has been built as a wrapper of Triniwiz's [NativeScript Couchbase](https://github.com/triniwiz/nativescript-plugins/tree/master/packages/nativescript-couchbase) plugin, adapted to work with the records and the task model of the AwarNS Framework.

Install the plugin using the following command line instruction:

```bash
ns plugin add @awarns/persistence
```

## Usage

After installing and configuring this plugin, you'll be granted with two interaction mechanisms to work with it:

1. **The plugin API**. Through it, you'll be able to manage the stored records, query them and export them using the most common information exchange formats.
2. **A task to write Record interface-compliant entities**, which allows to persist one or more records locally (with optional one-way server synchronization), to later query and/or export them.

### Setup

This plugin requires you to register its loader during the framework initialization, like this:

```ts
// ... platform imports
import { awarns } from '@awarns/core';
import { demoTasks } from '../tasks';
import { demoTaskGraph } from '../graph';
import { registerPersistencePlugin } from '@awarns/persistence';

import { externalRecordsStore } from './external-store';

awarns
  .init(
    demoTasks,
    demoTaskGraph,
    [
      registerPersistencePlugin({
        externalRecordsStore: externalRecordsStore,
        oldRecordsMaxAgeHours: 7 * 24 // 1 week
      }),
    ]
  )
  // ... handle initialization promise
```

Plugin loader config parameter options:

| Property                | Type                                     | Description                                                                                                                                                                                     |
|-------------------------|------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `externalRecordsStore`  | [`RecordsStore`](#recordsstore-external) | (Optional) Inject an adapter to an external records store and enable one-way synchronization of the stored records. The table below describes the methods that this adapter needs to implement  |
| `oldRecordsMaxAgeHours` | `number`                                 | (Optional) Tell the plugin to regularly cleanup old local records. By default, all records are kept                                                                                             |

#### RecordsStore (external)

| Method                   | Return type     | Description                                                                                                                    |
|--------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------------------|
| `insert(record: Record)` | `Promise<void>` | Persist the given record. Throw an error if something goes wrong. The write will be retried during the next app initialization |

Due to that, for now, this plugin only supports one-way synchronization, the rest of the methods are meant for future use and don't need to be implemented at the moment. You can throw unimplemented errors inside them, so that you can more easily recognize when they start being used in future versions.

### API

The API of this plugin can be classified in 3 groups: records' storage, data exporters and custom data stores.

#### Records storage

##### recordsStore

In the records' storage group, there is the `recordsStore` singleton object, with the following methods:

| Method                                                                                                  | Return type                 | Description                                                                                                                                                                                                                                                                                                                         |
|---------------------------------------------------------------------------------------------------------|-----------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `insert(record: Record)`                                                                                | `Promise<void>`             | Persist the given record. On success, if provided during plugin initialization, it will try to automatically synchronize the new record to the external store                                                                                                                                                                       |
| `getAll(reverseOrder?: boolean, limitSize?: number)`                                                    | `Promise<Array<Record>>`    | Allows to retrieve the current latest (by default) or first records, optionally limiting the resulting list in size                                                                                                                                                                                                                 |
| `list(size?: number)`                                                                                   | `Observable<Record>`        | Allows to observe the "n" most recent records, where "n" is determined by the value given to the size parameter. By default, size is `100`                                                                                                                                                                                          |
| <code>listBy(recordType: string, order: 'asc' &vert; 'desc', conditions?: Array<FetchCondition>)</code> | `Observable<Array<Record>>` | Allows to observe all the records of a given type. The sorting of the records can be controlled using the order parameter. The default order is last records come first (`desc`). It is possible to filter the resulting records by one or more [FetchConditions](#fetchcondition)                                                  |
| `listLast(recordType: string, conditions?: Array<FetchCondition>)`                                      | `Observable<Record>`        | Allows to obtain updates on the last record of a given type. It is possible to filter the resulting records by one or more [FetchConditions](#fetchcondition)                                                                                                                                                                       |
| `listLastGroupedBy(recordType: string, groupByProperty: string, conditions?: Array<FetchCondition>)`    | `Observable<Array<Record>>` | Allows to obtain updates on the latest records of a given type, grouped by the unique values of a certain property. Property grouping allows nested property paths using the dot (`.`) character, e.g., `property.nestedProperty`. It is possible to filter the resulting records by one or more [FetchConditions](#fetchcondition) |
| `clear()`                                                                                               | `Promise<void>`             | Allows to clear all the stored records from the local database. **Use with care!** To only remove old records, configure the `oldRecordsMaxAgeHours` option during plugin initialization                                                                                                                                            |
| `changes` _(property)_                                                                                  | `Observable<Array<string>>` | Listen to this observable property to know when a record has been created. It propagates updates on the ids of the records that have been recently stored                                                                                                                                                                           |

> **Note**: It is recommended to install [RxJS](https://rxjs.dev/), to operate with the methods that return an `Observable`.

##### FetchCondition

| Property     | Type      | Description                                                                                                                                                        |
|--------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `property`   | `string`  | The path to the property where the condition will be applied. Works with nested property paths too, using the dot (`.`) character, e.g., `property.nestedProperty` |
| `comparison` | `'='`     | The comparison operation to apply over the property values. At the moment, only property equality (`=`) is supported                                               |
| `value`      | `unknown` | The value to use in the comparison. At the moment, comparing complex objects is not supported                                                                      |

#### Data exporters

##### createRecordsExporter

In the data exporters group, there is the `createRecordsExporter()` function, with the following parameters:

| Parameter  | Type                             | Description                                                                                                                                                               |
|------------|----------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `folder`   | `Folder`                         | System folder object. Use [NativeScript FileSystem API](https://v7.docs.nativescript.org/ns-framework-modules/file-system) to define where the exports file will be saved |
| `format`   | <code>'csv' &vert; 'json'</code> | Select the information exchange format to use. Defaults to `csv`                                                                                                          |
| `fileName` | `string`                         | (Optional) Specify the file name to use for the exports file (without extension). Defaults to current date and time                                                       |

The `createRecordsExporter()` returns an [`Exporter`](#exporter) object.

##### Exporter

| Method     | Return type                              | Description                                                                                                                                        |
|------------|------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `export()` | [`Promise<ExportResult>`](#exportresult) | Tell the exporter to export the records, and save them inside to the configured exports file. Returns an [`ExportResult`](#exportresult) once done |

##### ExportResult

| Property      | Return type | Description                                      |
|---------------|-------------|--------------------------------------------------|
| `exportCount` | `number`    | The amount of records that have been exported    |
| `fileName`    | `string`    | The name of the exports file that has been saved |

#### Custom data stores

##### AwarnsStore

In the final group, the custom data stores, the core entity is the generic AwarnsStore class. Each AwarnStore has the following methods (replace the `T` with the concrete entity type being stored):

| Method                                                                                              | Return type              | Description                                                                                                                                                                                                                     |
|-----------------------------------------------------------------------------------------------------|--------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `AwarnsStore(docType: string, serialize: (entity: T) => unknown, deserialize: (doc: unknown) => T)` | `AwarnsStore`            | Creates a new AwarnsStore instance. Takes as parameters: a string to uniquely identify the type of the entity being stored, an entity serialization function and an entity deserialization function                             |
| `create(entity: T, id?: string)`                                                                    | `Promise<string>`        | Inserts a new entity into the store. Optionally, an id can be provided. When not provided, an UUID will be generated. On success, returns the id of the newly stored entity                                                     |
| `insert(entities: Array<T>, id?: string)`                                                           | `Promise<Array<string>>` | Bulk-inserts multiple entities into the store. On success, returns an array with the id of the newly stored entities (the order is kept)                                                                                        |
| `get(id: string)`                                                                                   | `Promise<T>`             | Searches for an entity using the given id                                                                                                                                                                                       |
| `fetch(q?: Query)`                                                                                  | `Promise<Array<T>>`      | Grants access to the more advanced underlying query interface. Provides the same API as the underlying [Couchbase Lite DB](https://triniwiz.github.io/nativescript-plugins/api-reference/couchbase.html#query) `query()` method |
| `update(id: string, props: unknown)`                                                                | `Promise<void>`          | Updates an existing entity with the given id, using the provided properties. Only overrides the values of the given properties                                                                                                  |
| `delete(id: string)`                                                                                | `Promise<void>`          | Deletes an existing entity with the given id                                                                                                                                                                                    |
| `clear()`                                                                                           | `Promise<void>`          | Clears all the entities stored in this concrete AwarnsStore. This is, all the entities that share the same `docType` value. To clear all the records from all the stores see the `clearAwarnsDB()` function next                |

##### clearAwarnsDB

Inside the same group, there exists the `clearAwarnsDB()` function. Use this function to clear **_EVERYTHING_** persisted by this plugin. This is, the local records' database and any custom store created using an AwarnsStore instance. This function returns a Promise to inform about when the process has finished.

### Tasks

| Task name                          | Description                                                                                                                                                                                                                                                                                              |
|------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [`writeRecords`](#persist-records) | Persists, inside the local records' database, one or more records contained in the invocation event's payload. If specified at plugin initialization time, it will also try to remotely synchronize the newly stored records. If the process fails, it will be retried during the next application start |


#### Persist records

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { writeRecordsTask } from '@awarns/persistence';

export const demoTasks: Array<Task> = [
  writeRecordsTask(),
];
```

Task generator parameters:

> The task generator takes no parameters.

Task event output:

- `writeRecordsFinished` _(default, no content)_

> Example usage in the application task graph:
> 
> _This task is not meant to be used alone, check the docs of any other framework plugin of your choice to see how this task can be used with others. Some examples exist in the [battery](../battery/README.md), [human activity](../human-activity/README.md) and [geolocation](../geolocation/README.md) packages, to name a few_

## License

Apache License Version 2.0

