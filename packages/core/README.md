# @awarns/core
![npm (scoped)](https://img.shields.io/npm/v/@awarns/core)
![npm](https://img.shields.io/npm/dm/@awarns/core)

>**This is the only plugin required for the other plugins to work.** 

This plugin comes as a wrapper on top of the [NativeScript Task Dispatcher](https://github.com/GeoTecINIT/nativescript-task-dispatcher) (NTD), extending it with utilities which ease the development of context-aware applications in several ways:
- A common model to represent entities which represent changes over time, the [Record](internal/entities/record.ts) class. This is meant to be extended and used to encapsulate the information produced by the built-in framework tasks and the developer-defined tasks created using the framework.
- Tools to develop your own data providers, either obtaining internal or external data.
- Predefined tasks to make use of your providers. These offer a unified data acquisition process for all the built-in or custom components that can make use of them.
- Reexports everything offered by the NTD, through a single interface.
- Utilities to facilitate logging, testing, creating unique identifiers, working with strings or serializing dates.

In essence, the main goal of this plugin is to give access to the task model defined by the NTD. And extends it with primitives for the development of data providers and data-providing tasks. It also offers a base model (Record) to be extended by any entity produced or consumed by built-in or custom framework tasks. Here, by extending the Record model, time-consuming tasks, like persistence, become greatly simplified.

Installing the core package only requires one command line instruction:

```bash
ns plugin add @awarns/core
```

## Usage

The core package can be directly used from your application (or plugins) in many circumstances: 
- When you want to create your own class (which extends the Record model) for its persistence.
- When you want to develop your own data provider.
- When you want to incorporate your providers to a workflow using the built-in tasks.
- When you want to use the underlying NTD plugin.
- In more advanced use cases, when you want to use the built-in utilities.

### Extending the [Record](internal/entities/record.ts) class

The Record class is central to the AwarNS framework. Extending it in your entities means that they will speak the framework's common language regarding data sharing. This will greatly simplify certain operations like, for example, persistence, data exporting, etc.

This class is ideal for representing things that change over time. Each children Record class must hold its type, which is a string. This string uniquely identifies each record entity type, required later on, for example, to persist and query each type of entity individually. Records must hold a timestamp too, indicating when they were generated. And optionally they can state a change, which can be: a start, an end or nothing (no change).

The best way to see how the Record class can be extended is through some already existing examples in the framework:

<details>

<summary>Geolocation</summary>

The [Geolocation](../geolocation/internal/geolocation.ts) record:
```ts
import { Record } from '@awarns/core/entities';

import { GeolocationLike as GL, Geolocation as NativeGeolocation } from 'nativescript-context-apis/geolocation';
export type GeolocationLike = GL;

export const GeolocationType = 'geolocation';

export class Geolocation extends Record {
  constructor(
    public latitude: number,
    public longitude: number,
    public altitude: number,
    public horizontalAccuracy: number,
    public verticalAccuracy: number,
    public speed: number,
    public direction: number,
    capturedAt: Date
  ) {
    super(GeolocationType, capturedAt);
  }

  distance(to: Geolocation | GeolocationLike) {
    return new NativeGeolocation(this).distance(to);
  }
}
```

</details>

<details>

<summary>Geofencing</summary>

The [AoIProximityChange](../geofencing/internal/entities/aoi.ts) record:
```ts
import { Change, Record } from '@awarns/core/entities';
import { GeofencingProximity } from './proximity';

export const AoIProximityChangeType = 'aoi-proximity-change';

export class AoIProximityChange extends Record {
  constructor(
    public aoi: AreaOfInterest,
    public proximity: GeofencingProximity,
    change: Change,
    timestamp = new Date()
  ) {
    super(AoIProximityChangeType, timestamp, change);
  }
}

export interface AreaOfInterest {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  radius: number;
  category?: string;
  level?: number;
}
```

</details>

<details>

<summary>Human activity</summary>

The [HumanActivityChange](../human-activity/internal/human-activity-change.ts) record:
```ts
import { Record, Change } from '@awarns/core/entities';
import { HumanActivity } from 'nativescript-context-apis/activity-recognition';

export const HumanActivityChangeType = 'human-activity';

export class HumanActivityChange extends Record {
  constructor(public activity: HumanActivity, change: Change, detectedAt: Date, public confidence?: number) {
    super(HumanActivityChangeType, detectedAt, change);
  }
}

export { HumanActivity } from 'nativescript-context-apis/activity-recognition';
```

</details>

<details>

<summary>Notifications</summary>

You can even create record hierarchies like:

The [NotificationTap](../notifications/internal/entities/reactions/notification-tap.ts) record:
```ts
import { NotificationEventBaseRecord } from './notification-event-base-record';
import { TapAction } from '../notification';

export const NotificationTapType = 'notification-tap';

export class NotificationTapRecord extends NotificationEventBaseRecord {
  constructor(notificationId: number, tapAction: TapAction, timestamp?: Date) {
    super(NotificationTapType, notificationId, tapAction, timestamp);
  }
}
```

The [NotificationDiscard](../notifications/internal/entities/reactions/notification-discard.ts) record:
```ts
import { NotificationEventBaseRecord } from './notification-event-base-record';
import { TapAction } from '../notification';

export const NotificationDiscardType = 'notification-discard';

export class NotificationDiscardRecord extends NotificationEventBaseRecord {
  constructor(notificationId: number, tapAction: TapAction, timestamp?: Date) {
    super(NotificationDiscardType, notificationId, tapAction, timestamp);
  }
}
```

And the common base of the two, the [NotificationEventBaseRecord](../notifications/internal/entities/reactions/notification-event-base-record.ts):
```ts
import { Change, Record } from '@awarns/core/entities';
import { TapAction } from '../notification';

export abstract class NotificationEventBaseRecord extends Record {
  protected constructor(
    public name: string,
    public notificationId: number,
    public tapAction: TapAction,
    timestamp: Date = new Date()
  ) {
    super(name, timestamp, Change.NONE);
  }
}
```

More examples inside this package are the [QuestionnaireAnswers](../notifications/internal/entities/answers/questionnaire-answers.ts), the [UserFeedback](../notifications/internal/entities/answers/feedback.ts), the [UserConfirmation](../notifications/internal/entities/answers/confirmation.ts) or the [UserReadContent](../notifications/internal/entities/answers/content-read.ts) records. 

</details>

Similarly, additional examples exist in the Wi-Fi ([WifiScan](../wifi/internal/scan.ts)), the BLE ([BleScan](../ble/internal/scan.ts)) and the battery ([BatteryLevel](../battery/internal/battery-level.ts)) packages. And in the framework README too (see [Detailed usage and extension](../../README.md#detailed-usage-and-extension) section).

### Developing your own data providers

// TODO

### Using your data providers with the built-in tasks

// TODO

### Using the exposed [NativeScript Task Dispatcher](https://github.com/GeoTecINIT/nativescript-task-dispatcher) API

// TODO

### A brief note on logging and the rest of the utilities

// TODO

## License

Apache License Version 2.0
