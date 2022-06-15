# @awarns/geofencing
![npm (scoped)](https://img.shields.io/npm/v/@awarns/geofencing)
![npm](https://img.shields.io/npm/dm/@awarns/geofencing)

This module allows to perform basic geofencing analysis based on the locations obtained by the tasks declared in the [@awarns/geolocation](../geolocation/README.md) package. It is also compatible with any other custom entity matching the [`GeolocationLike`](https://github.com/GeoTecINIT/nativescript-context-apis/blob/6368f3fc480ea476c7dd39279cf4eea3d4410786/src/internal/geolocation/geolocation.ts#L36-L45) interface (for example, an entity produced by a custom indoor positioning system). 

The geofencing mechanism inside this package allows to detect multiple degrees of nearness towards the registered areas of interest.

Install the plugin using the following command line instruction:

```bash
ns plugin add @awarns/geofencing
```

## Usage

After installing and configuring this plugin, you'll be granted with two interaction mechanisms to work with it: 

1. **The plugin API**. Through it, you'll be able to configure and update the areas of interest which are relevant to your application. 
2. **The geofencing task**, which allows to detect if one or more locations which have just been acquired are close to one or more registered areas of interest. When a change in the proximity is detected, this task emits an [AoIProximityChange](#aoiproximitychange) record, described below.

### API

#### areasOfInterest

The `areasOfInterest` singleton object is the main plugin entrypoint. Through it, you can set up and manage areas of interest. This is the complete API:

| Method                                | Return type                         | Description                                                                                                                                                                        |
|---------------------------------------|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `insert(aois: Array<AreaOfInterest>)` | `Promise<void>`                     | Inserts the given list of areas of interest into the local database. More details on the [AreaOfInterest](#areaofinterest) interface right after this table                        |
| `getById(id: string)`                 | `Promise<AreaOfInterest>`           | Allows to retrieve a stored area of interest by its id                                                                                                                             |
| `getAll()`                            | `Promise<Array<AreaOfInterest>>`    | Allows to retrieve all the stored areas of interest at once                                                                                                                        |
| `list()`                              | `Observable<Array<AreaOfInterest>>` | Allows to observe changes in all the stored areas of interest. It is recommended to install the [´RxJS´](https://rxjs.dev/) package too, to operate with the output of this method |
| `deleteAll()`                         | `Promise<void>`                     | Allows to clear all the stored areas of interest at once                                                                                                                           |

#### AreaOfInterest

| Property    | Type     | Description                                                                           |
|-------------|----------|---------------------------------------------------------------------------------------|
| `id`        | `string` | The unique identifier of the area                                                     |
| `name`      | `string` | A display name for the area                                                           |
| `longitude` | `number` | The longitude of the center of the area                                               |
| `latitude`  | `number` | The latitude of the center of the area                                                |
| `radius`    | `number` | The radius of the area, from its center's longitude and latitude                      |
| `category`  | `string` | (Optional) Free text field, can be used to classify the area in an arbitrary category |
| `level`     | `number` | (Optional) Can be used to rank areas                                                  |

### Tasks

#### Check area of interest proximity

> **Task name**: `checkAreaOfInterestProximity`
>
> **Description**: Given one or more locations included in the payload of the event invoking the task, this task checks their proximity towards a set of registered areas of interest
>
> **Execution requirements:** None

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { checkAreaOfInterestProximityTask } from '@awarns/geofencing';

export const demoTasks: Array<Task> = [
    checkAreaOfInterestProximityTask(),
];

```

Task generator parameters:

> The task generator takes no parameters.

Task event output:

| Name                                   | Payload                                            | Description                                                                                                                                                                                                                                               |
|----------------------------------------|----------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `movedCloseToAreaOfInterest`           | [`Array<AoIProximityChange>`](#aoiproximitychange) | Detected that one or more of the given locations represent an approximation towards the surroundings of one or more registered areas of interest. The approximation radius can be configured in the application workflow. See an example below this table |
| `movedInsideAreaOfInterest`            | [`Array<AoIProximityChange>`](#aoiproximitychange) | Detected that one or more of the given locations have just fallen between the center of one or more registered areas and their radii                                                                                                                      |
| `movedOutsideAreaOfInterest`           | [`Array<AoIProximityChange>`](#aoiproximitychange) | Detected that one or more of the given locations have just fallen outside one or more area radii, but are still within their approximation radii. This event won't fire while there's still a location that falls inside an area                          |
| `movedAwayFromAreaOfInterest`          | [`Array<AoIProximityChange>`](#aoiproximitychange) | Detected that one or more of the given locations have just fallen completely outside one or more area approximation radii. This event won't fire while there's still a location that falls inside the approximation radius of an area                     |
| `checkAreaOfInterestProximityFinished` | None                                               | The task finished analyzing the given location(s) and no proximity change was detected                                                                                                                                                                    |

> Example usage in the application task graph:
> ```ts
> on(
>   'startEvent',
>   run('acquirePhoneGeolocation')
>     .every(1, 'minutes')
>     .cancelOn('stopEvent')
> );
> 
> on(
>   'geolocationAcquired',
>   run('checkAreaOfInterestProximity', {
>     nearbyRange: 100, // Area approximation radius, in meters (defaults to 100)
>     offset: 15, // Optional distance calculation offset, in meters. Can help mitigating location error (defaults to 0)
>   })
> );
>
> on('movedCloseToAreaOfInterest', run('writeRecords'));
> on('movedInsideAreaOfInterest', run('writeRecords'));
> on('movedOutsideAreaOfInterest', run('writeRecords'));
> on('movedAwayFromAreaOfInterest', run('writeRecords'));
> ```
> **Note**: To use the `acquirePhoneGeolocation` and `writeRecords` tasks, the geolocation and persistence packages must be installed and configured. See [geolocation package](../geolocation/README.md) and [persistence package](../persistence/README.md) docs.

### Records

#### AoIProximityChange

| Property    | Type                                          | Description                                                                                                                                                                                    |
|-------------|-----------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`        | `string`                                      | Record's unique id                                                                                                                                                                             |
| `type`      | `string`                                      | Always `aoi-proximity-change`                                                                                                                                                                  |
| `change`    | `Change`                                      | Can be either `start` or `end`. The former indicates a transition to the proximity indicated by the the record, whereas the later indicates no longer being in the reported level of proximity |
| `timestamp` | `Date`                                        | The local time when the proximity change was detected                                                                                                                                          |
| `aoi`       | [`AreaOfInterest`](#areaofinterest)           | The area of interest towards which the proximity change has been detected                                                                                                                      |
| `proximity` | [`GeofencingProximity`](#geofencingproximity) | Indicates the relative proximity towards the area. Look at the change property to identify if the change is towards the proximity or contrary to it. See all the proximity options below       |

#### GeofencingProximity

| Option      | Description                                                                                                                                        |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `INSIDE`    | One or more locations fall within the center and the radius of an area                                                                             |
| `NEARBY`    | One or more locations fall outside the center and the radius of an area, but they fall within its approximation radius                             |
| `OUTSIDE`   | One or more locations fall completely outside an area and its approximation radius. This option will never be used in an AoIProximityChange record |

## License

Apache License Version 2.0
