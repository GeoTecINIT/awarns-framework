# @awarns/core
[![npm (scoped)](https://img.shields.io/npm/v/@awarns/core)](https://www.npmjs.com/package/@awarns/core)
[![npm](https://img.shields.io/npm/dm/@awarns/core)](https://www.npmjs.com/package/@awarns/core)

>**This is the only plugin required for the rest of the plugins to work.** 

This plugin comes as a wrapper on top of the [NativeScript Task Dispatcher](https://github.com/GeoTecINIT/nativescript-task-dispatcher) (NTD), extending it with utilities that ease the development of context-aware applications in several ways:
- A common model to represent entities that represent changes over time, the [Record](internal/entities/record.ts) class. This is meant to be extended and used to encapsulate the information produced by the built-in framework tasks and the developer-defined tasks created using the framework.
- Tools to develop your own data providers, either obtaining internal or external data.
- Predefined tasks to make use of your providers. These offer a unified data acquisition process for all the built-in or custom components that can make use of them.
- Reexports everything offered by the NTD, through a single interface.
- Utilities to facilitate logging, testing, creating unique identifiers and serializing data.

In essence, the main goal of this plugin is to give access to the task model defined by the NTD and extend it with primitives for the development of data providers and data-providing tasks. It also offers a base model (Record) to be extended by any entity produced or consumed by built-in or custom framework tasks. Here, by extending the Record model, time-consuming tasks, like persistence, become greatly simplified.

Installing the core package only requires one command line instruction:

```bash
ns plugin add @awarns/core
```

## Usage

You'll need to install and configure the core package the first time you integrate the framework in your app.

Additionally, the core package might be optionally used from your application (or plugins) in other circumstances:
- When you want to create your own class (which extends the Record model) for its persistence.
- When you want to develop your own data provider.
- When you want to incorporate your providers to a workflow using the built-in tasks.
- In more advanced use cases, when you want to use the built-in utilities.

### Basic usage

#### Initialization

For the AwarNS framework to work properly, it must be initialized during the application startup. The code must be executed no matter if the application UI is going to be bootstrapped or not. The place to do this is the `app.ts` file inside the application `src` folder (`main.ts` for Angular apps).  

Framework initialization implies multiple aspects: **(1)** determining which built-in and/or custom tasks will be in use, **(2)** defining how these tasks will be invoked by the results of other tasks or isolated application events, **(3)** registering plugins that need to be initialized at application startup and **(4)** configuring behavioural aspects of the framework. This can be seen in more detail in the following code excerpt adapted from the demo application source code:

```ts
// app.ts / main.ts
// TypeScript App:
import { Application } from '@nativescript/core';
// or Angular App:
import { runNativeScriptAngularApp, platformNativeScript } from '@nativescript/angular';
import { AppModule } from './app/app.module';

// AwarNS Framework imports
// (always between esential imports and app initialization)
import { awarns } from '@awarns/core';
import { demoTasks } from '../tasks'; // An array, containing the lists of tasks that the application will use
import { demoTaskGraph } from '../graph'; // The background workflow definition (task graph instance)
import { registerHumanActivityPlugin } from '@awarns/human-activity';
import { registerNotificationsPlugin } from '@awarns/notifications';
import { registerTracingPlugin } from '@awarns/tracing';
import { registerPersistencePlugin } from '@awarns/persistence';

awarns
  .init(
    demoTasks, // (1)
    demoTaskGraph, // (2)
    [ // (3)
      // See bellow for more information regarding the items that this array can contain
      // See each plugin docs to learn more about their registration-time options
      registerHumanActivityPlugin(),
      registerNotificationsPlugin('Intervention alerts'),
      registerPersistencePlugin(),
      registerTracingPlugin(),
    ],
    { // (4)
      // See bellow for a description of the rest of the options
      enableLogging: true,
    }
  )
  .then(() => console.log('AwarNS framework successfully loaded'))
  .catch((err) => {
    console.error(`Could not load AwarNS framework: ${err.stack ? err.stack : err}`);
  });

// TypeScript App:
Application.run({ moduleName: 'app-root' });
// Angular App:
runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
```

> In **(3)**, along with the built-in plugin registration functions, it is also possible to register custom loaders to run code during the framework initialization phase. You can do this by creating a function which must return another function compatible with the [PluginLoader](common.ts) API. An example implementation of this can be found in this same page (see [Instantiating push-based data provider tasks](#instantiating-push-based-data-provider-tasks)) and in the source of the [human-activity](../human-activity/index.ts), the [notifications](../notifications/index.ts), the [persistence](../persistence/index.ts) and the [tracing](../tracing/index.ts) plugins.
> 
> **Important:** we advise you to register here only short-lived functions, to ensure all the functionalities of the framework are ready before starting executing tasks. If you need to start a long process here, you can do it, but be sure that the main function does not wait for it to finish its execution (for example, using `then/catch` instead of `await`). Not following this recommendation may lead to unexpected and hard-to-debug behaviours.

> In **(4)**, aside from indicating if the logging must be enabled or not, it is also possible to pass by a custom logger implementation to get more control over what is being logged. And also be able to store or send the log traces locally or remotely. More details in: [A brief note on logging and the rest of the utilities](#a-brief-note-on-logging-and-the-rest-of-the-utilities).

#### Managing tasks' readiness and emitting events from UI

In the application UI you can interact with the framework to check if certain tasks are lacking some permissions or system features to be enabled. This can be done using the `awarns` singleton object seen in the previous example, which shares API with the NTD's [`taskDispatcher`](https://github.com/GeoTecINIT/nativescript-task-dispatcher#taskdispatcher---methods) object:

| Name                                        | Return type            | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|---------------------------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `isReady()`                                 | `Promise<boolean>`     | Allows to check (and wait for) framework initialization status. It also iterates over your app's tasks to check if they are ready for their execution, by calling their [`checkIfCanRunMethod()`](https://github.com/GeoTecINIT/nativescript-task-dispatcher#methods-to-override-when-extending-task-class). You should call this method before emitting any external event. The promise is stored internally, it is safe to call this method as many times as needed.                                    |
| `tasksNotReady` _(property)_                | `Promise<Array<Task>>` | Method to be called if isReady() returns false. Here you can check the tasks that did not pass the ready check. Useful in case you want to customize te UI before calling prepare(). For example, to give an explanation to your users of why you are asking their consent                                                                                                                                                                                                                                |
| `prepare()`                                 | `Promise<void>`        | Method to be called if isReady() returns false. If your app has one or more tasks that have reported not to be ready, it will call their [`prepare()`](https://github.com/GeoTecINIT/nativescript-task-dispatcher#methods-to-override-when-extending-task-class) method (e.g. to ask for missing permissions or enable disabled capabilities). **WARNING! This method is only meant to be called while the UI is visible.** Follow this guideline to foster the creation of a consistent task ecosystem.  |
| `emitEvent(name: string, data?: EventData)` | `void`                 | A fire and forget method. Call this method whenever you want to propagate an external event towards the plugin. Dependant tasks will be executed inside a background environment. User can safely navigate to another app, we bootstrap an independent background execution context to ensure it completes its life-cycle (we guarantee a maximum of 3 minutes execution time). Optionally, You can provide an additional key-value data dictionary that will be delivered to the task handling the event |


### Extending the [Record](internal/entities/record.ts) class

The Record class is central to the AwarNS framework. Extending it in your entities, means that they will speak the framework's common language regarding data sharing. This will greatly simplify certain operations like, for example, persistence and data exporting, to name a few.

This class is ideal for representing things that change over time. Each children Record class must hold its type, which is a string. This string uniquely identifies each record entity type, required later on, for example, to persist and query each type of entity individually. Records must hold a timestamp too, indicating when they were generated. Optionally, they can state a change, which can be: a start, an end or nothing (no change).

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

And the common base for the two, the [NotificationEventBaseRecord](../notifications/internal/entities/reactions/notification-event-base-record.ts):
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

Similarly, additional examples exist in the Wi-Fi ([WifiScan](../wifi/internal/scan.ts)), the BLE ([BleScan](../ble/internal/scan.ts)) and the battery ([BatteryLevel](../battery/internal/battery-level.ts)) packages. And in the framework README too (see [Detailed usage and extension](../../TUTORIALS.md#detailed-usage-and-extension) section).

### Developing your own data providers

The most important aspect of a context-awareness framework is to be able to sense the environment. The first step to achieve this is to model what will be sensed. We have advanced towards this before, by extending the Record class. Now, we need a way to define how to sense / acquire these data.

Here it is important to make a distinction. We understand that there are two ways to obtain data: actively and passively. This means, we can manually *pull* the data, or we can subscribe to obtain data *pushes* once the updates become available.

#### Pull data providers

The most common case to obtain data is to ask for it and, sometimes, after a short delay, obtain it. This is the case of, for example, the location of the phone, its battery level, the list of nearby bluetooth devices or Wi-Fi access points. The list is not limited to what the phone can provide. For example, we pull data when we perform a network request (e.g., to obtain the current weather).

To develop data providers like this. We need to be able to code mechanisms to do the following things: (1) know if all the conditions are met to obtain the data (this means, all the permissions have been granted, the specific system capabilities are enabled, etc.), (2) in case not all the conditions are met, what needs to be done to meet them (i.e., ask permission, enable system services, etc.) and (3) determine how the next data update will be obtained. This last thing is needed because pull-based data providers work like iterators. Internally, the framework will ask them for the next value to be obtained, this is, when specified by the background execution workflow of your app.  

With that said, the best way to learn how to implement pull-based data providers is to see some examples already implemented in the framework. When implementing a new data provider, we advise to start using one of the following as a template. Here, they are listed from the simplest to the most complex:

<details>

<summary>Battery</summary>

The [BatteryProvider](../ble/internal/provider.ts):

```ts
import { BatteryLevel, BatteryLevelType } from './battery-level';
import { Application, isAndroid } from '@nativescript/core';
import { PullProvider, ProviderInterruption } from '@awarns/core/providers';

export class BatteryProvider implements PullProvider {
  get provides() {
    return BatteryLevelType;
  }

  constructor(private sdkVersion?: number) {
    if (isAndroid && !this.sdkVersion) {
      this.sdkVersion = android.os.Build.VERSION.SDK_INT;
    }
  }

  next(): [Promise<BatteryLevel>, ProviderInterruption] {
    const value = this.getBatteryPercentage();
    const batteryLevel = BatteryLevel.fromPercentage(value);

    return [Promise.resolve(batteryLevel), () => null];
  }

  checkIfIsReady(): Promise<void> {
    return Promise.resolve();
  }

  prepare(): Promise<void> {
    return Promise.resolve();
  }

  private getBatteryPercentage(): number {
    if (!isAndroid) {
      return -1;
    }
    if (this.sdkVersion >= 21) {
      const batteryManager: android.os.BatteryManager = Application.android.context.getSystemService(
        android.content.Context.BATTERY_SERVICE
      );

      return batteryManager.getIntProperty(android.os.BatteryManager.BATTERY_PROPERTY_CAPACITY);
    }
    const intentFilter = new android.content.IntentFilter(android.content.Intent.ACTION_BATTERY_CHANGED);
    const batteryStatus = Application.android.context.registerReceiver(null, intentFilter);

    const level = batteryStatus ? batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_LEVEL, -1) : -1;
    const scale = batteryStatus ? batteryStatus.getIntExtra(android.os.BatteryManager.EXTRA_SCALE, -1) : -1;

    const batteryPercentage = level / scale;

    return Math.trunc(batteryPercentage * 100);
  }
}
```

</details>

<details>

<summary>Wi-Fi</summary>

The [WifiScanProvider](../wifi/internal/provider.ts):

```ts
import { ProviderInterrupter, ProviderInterruption, PullProvider } from '@awarns/core/providers';
import { WifiScan, WifiScanType } from './scan';
import {
  FingerprintGrouping,
  getWifiScanProvider as getNativeProvider,
  WifiFingerprint,
  WifiScanProvider as NativeProvider,
} from 'nativescript-context-apis/wifi';
import { firstValueFrom, map, of, Subject, takeUntil, timeout } from 'rxjs';

export class WifiScanProvider implements PullProvider {
  get provides(): string {
    return WifiScanType;
  }

  constructor(
    private ensureIsNew: boolean,
    private timeout: number,
    private nativeProvider: () => NativeProvider = getNativeProvider
  ) {}

  async checkIfIsReady(): Promise<void> {
    const isReady = await this.nativeProvider().isReady();
    if (!isReady) {
      throw wifiScanProviderNotReadyErr;
    }
  }

  async prepare(): Promise<void> {
    return this.nativeProvider().prepare();
  }

  next(): [Promise<WifiScan>, ProviderInterruption] {
    const interrupter = new ProviderInterrupter();
    const scanResult = this.obtainWifiScan(interrupter);
    return [scanResult, () => interrupter.interrupt()];
  }

  private obtainWifiScan(interrupter: ProviderInterrupter): Promise<WifiScan> {
    const interrupted$ = new Subject<void>();
    interrupter.interruption = () => {
      interrupted$.next();
      interrupted$.complete();
    };

    return firstValueFrom(
      this.nativeProvider()
        .wifiFingerprintStream({
          ensureAlwaysNew: this.ensureIsNew,
          grouping: FingerprintGrouping.NONE,
          continueOnFailure: false,
        })
        .pipe(
          takeUntil(interrupted$),
          timeout({ each: this.timeout, with: () => of(null) }),
          map((fingerprint) => scanFromFingerprint(fingerprint))
        )
    );
  }
}

function scanFromFingerprint(fingerprint: WifiFingerprint): WifiScan {
  const { seen, isNew, timestamp } = fingerprint;
  return new WifiScan(seen, isNew, timestamp);
}

export const wifiScanProviderNotReadyErr = new Error(
  "Wifi scan provider is not ready. Perhaps permissions haven't been granted, location services have been disabled or wifi is turn off"
);
```

</details>

<details>

<summary>BLE</summary>

The [BleScanProvider](../ble/internal/provider.ts):

```ts
import { ProviderInterrupter, ProviderInterruption, PullProvider } from '@awarns/core/providers';
import { BleScan, BleScanType } from './scan';
import {
  getBleScanProvider as getNativeProvider,
  BleScanProvider as NativeProvider,
  BleScanMode,
  BleScanResult,
} from 'nativescript-context-apis/ble';
import { firstValueFrom, map, Subject, takeUntil, timer, toArray } from 'rxjs';

export class BleScanProvider implements PullProvider {
  get provides(): string {
    return BleScanType;
  }

  constructor(
    private scanTime: number,
    private scanMode: BleScanMode,
    private iBeaconUuids: Array<string>,
    private nativeProvider: () => NativeProvider = getNativeProvider
  ) {}

  async checkIfIsReady(): Promise<void> {
    const isReady = await this.nativeProvider().isReady();
    if (!isReady) {
      throw bleScanProviderNotReadyErr;
    }
  }

  async prepare(): Promise<void> {
    return this.nativeProvider().prepare();
  }

  next(): [Promise<BleScan>, ProviderInterruption] {
    const interrupter = new ProviderInterrupter();
    const scanResult = this.obtainBleScan(interrupter);
    return [scanResult, () => interrupter.interrupt()];
  }

  private obtainBleScan(interrupter: ProviderInterrupter): Promise<BleScan> {
    const interrupted$ = new Subject<void>();
    interrupter.interruption = () => {
      interrupted$.next();
      interrupted$.complete();
    };

    return firstValueFrom(
      this.nativeProvider()
        .bleScanStream({
          reportInterval: 100 /* Lower report intervals don't seem to report anything in background*/,
          scanMode: this.scanMode,
          iBeaconUuids: this.iBeaconUuids,
        })
        .pipe(
          takeUntil(timer(this.scanTime)),
          toArray(),
          map((results) => scanFromResults(results))
        )
    );
  }
}

function scanFromResults(results: Array<BleScanResult>): BleScan {
  if (results.length === 0) {
    throw new Error('No BLE devices were found nearby!');
  }
  return new BleScan(
    results.reduce((prev, curr) => [...prev, ...curr.seen], []),
    results[results.length - 1].timestamp
  );
}

const bleScanProviderNotReadyErr = new Error(
  "BLE scan provider is not ready. Perhaps permissions haven't been granted, location services have been disabled or Bluetooth is turn off"
);
```

</details>

<details>

<summary>Geolocation</summary>

The [GeolocationProvider](../geolocation/internal/provider.ts):

```ts
import { PullProvider, ProviderInterrupter, ProviderInterruption } from '@awarns/core/providers';
import { Geolocation, GeolocationType } from './geolocation';

import {
  GeolocationProvider as NativeProvider,
  Geolocation as NativeGeolocation,
  getGeolocationProvider as getNativeProvider,
} from 'nativescript-context-apis/geolocation';

import { firstValueFrom, from, Observable, of, Subject, throwError, timeout } from 'rxjs';
import { map, mergeMap, take, takeUntil, toArray } from 'rxjs/operators';

export class GeolocationProvider implements PullProvider {
  get provides(): string {
    return GeolocationType;
  }

  constructor(
    private bestOf: number,
    private timeout: number,
    private nativeProvider: () => NativeProvider = getNativeProvider
  ) {}

  async checkIfIsReady(): Promise<void> {
    const isReady = await this.nativeProvider().isReady();
    if (!isReady) {
      throw geolocationProviderNotReadyErr;
    }
  }

  prepare(): Promise<void> {
    return this.nativeProvider().prepare(false, true);
  }

  next(): [Promise<Geolocation>, ProviderInterruption] {
    const interrupter = new ProviderInterrupter();
    const bestLocation = this.obtainBestLocationAmongNext(this.bestOf, interrupter);
    return [bestLocation, () => interrupter.interrupt()];
  }

  private obtainBestLocationAmongNext(amount: number, interrupter: ProviderInterrupter): Promise<Geolocation> {
    const interrupted = new Subject<void>();
    interrupter.interruption = () => {
      interrupted.next();
      interrupted.complete();
    };

    return firstValueFrom(
      this.nativeProvider()
        .locationStream({
          highAccuracy: true,
          stdInterval: 1000,
          minInterval: 100,
          maxAge: 60000,
          saveBattery: false,
        })
        .pipe(
          takeUntil(interrupted),
          take(amount),
          timeout({ each: this.timeout, with: () => of(null) }),
          toArray(),
          map(pickBest),
          mergeMap((location) => this.ensureItGetsAtLeastOne(location)),
          map(toGeolocation)
        )
    );
  }

  private ensureItGetsAtLeastOne(location: NativeGeolocation): Observable<NativeGeolocation> {
    if (!location) {
      return from(
        this.nativeProvider().acquireLocation({
          highAccuracy: true,
          allowBackground: true,
        })
      ).pipe(
        timeout({
          each: this.timeout,
          with: () => throwError(() => new Error('Could not acquire location')),
        })
      );
    }
    return of(location);
  }
}

export const geolocationProviderNotReadyErr = new Error(
  "Geolocation provider is not ready. Perhaps permissions haven't been granted or location services have been disabled"
);

function pickBest(locations: Array<NativeGeolocation>): NativeGeolocation {
  const now = Date.now();
  return locations.reduce(
    (previous, current) =>
      current && (!previous || calculateScore(current, now) > calculateScore(previous, now)) ? current : previous,
    null
  );
}

function calculateScore(location: NativeGeolocation, now: number): number {
  const { horizontalAccuracy, timestamp } = location;
  const timeDiff = (now - timestamp.getTime()) / 1000;

  const limitedAccuracy = Math.min(horizontalAccuracy, 65);
  const limitedTimeDiff = Math.min(Math.max(timeDiff, 0), 60);

  const accuracyScore = 1 - limitedAccuracy / 65;
  const timeDiffScore = 1 - limitedTimeDiff / 60;

  return ((accuracyScore + timeDiffScore) / 2) * 10;
}

function toGeolocation(nativeGeolocation: NativeGeolocation): Geolocation {
  return new Geolocation(
    nativeGeolocation.latitude,
    nativeGeolocation.longitude,
    nativeGeolocation.altitude,
    nativeGeolocation.horizontalAccuracy,
    nativeGeolocation.verticalAccuracy,
    nativeGeolocation.speed,
    nativeGeolocation.direction,
    nativeGeolocation.timestamp
  );
}

```

</details>

#### Push data providers

Sometimes we want to obtain data, but we don't know when that data will come. In those cases we will want to instruct a third party to notify our app regarding data updates. This is the case, for example, of human activity recognition, where updates will come only after the device starts being moved.

The implementation of a push-based data provider has things in common with the pull-based data provider. Both need to know if they'll be able to obtain data and, if not, know what needs to be done to overcome this situation. The key difference is that instead of asking for the next value to be obtained (and wait for it), here we'll need two mechanisms to state that: (1) we are interested in obtaining data updates and (2) we are no longer interested in those updates. Like a subscribe / unsubscribe mechanism, but that persists after application shutdowns and phone reboots.

A complete example implementation of a push-based provider can be seen in the human activity package (the [HumanActivityProvider](../human-activity/internal/provider.ts)):

```ts
import { PushProvider } from '@awarns/core/providers';
import { ActivityRecognizer, getActivityRecognizer, Resolution } from 'nativescript-context-apis/activity-recognition';

import { HumanActivityChangeType } from './human-activity-change';
import { getLogger } from '@awarns/core/utils/logger';
import { getHumanActivityChangeReceiver } from './receiver';

const possibleResolutions: Array<Resolution> = [Resolution.LOW, Resolution.MEDIUM];

export class HumanActivityProvider implements PushProvider {
  get provides() {
    return HumanActivityChangeType;
  }

  static setup() {
    possibleResolutions.forEach((resolution) => {
      getActivityRecognizer(resolution).listenActivityChanges((activityChange) => {
        getLogger('HumanActivityProvider').debug(`Got an activity change!: ${JSON.stringify(activityChange)}`);
        getHumanActivityChangeReceiver().onReceive(activityChange);
      });
    });
  }

  constructor(
    private resolution: Resolution,
    private detectionInterval: number = 0,
    private providerLoader: (resolution: Resolution) => ActivityRecognizer = getActivityRecognizer
  ) {}

  async checkIfIsReady(): Promise<void> {
    if (!this.activityRecognizer().isReady()) {
      throw new HumanActivityRecognizerNotReadyErr(this.resolution);
    }
  }

  async prepare(): Promise<void> {
    await this.activityRecognizer().prepare();
  }

  async startProviding(): Promise<void> {
    await this.activityRecognizer().startRecognizing({
      detectionInterval: this.detectionInterval,
    });
  }

  async stopProviding(): Promise<void> {
    await this.activityRecognizer().stopRecognizing();
  }

  private activityRecognizer(): ActivityRecognizer {
    return this.providerLoader(this.resolution);
  }
}

export class HumanActivityRecognizerNotReadyErr extends Error {
  constructor(resolution: Resolution) {
    super(
      `${resolution} resolution human activity recognizer. Perhaps the required permissions hadn't been granted. Be sure to call prepare() first`
    );
  }
}

export { Resolution } from 'nativescript-context-apis/activity-recognition';
```

### Using your data providers with the built-in tasks

Once we have developed our own data providers, integrating them in the framework, to use them in our background workflows, is quite straight forward.

For this aim, we have created a set of tasks which understand the API of the data providers and are able to obtain data from them in a unified way.

#### Instantiating pull-based data provider tasks

The framework comes with two mechanisms to acquire data from a pull-based data provider: a single data provider and a batch data provider. Both do what their name indicates. The former reads one value from the data provider and immediately emits it, whereas the latter can accumulate multiple values before emitting.

These tasks are always used in the same way, although their behaviour can be configured. As an example, this is how both are used with the GeolocationProvider:

```ts
import { Task, SinglePullProviderTask, BatchPullProviderTask } from '@awarns/core/tasks';
import { GeolocationProvider } from './provider';

const DEFAULT_SINGLE_BEST_OF = 3;
const DEFAULT_SINGLE_TIMEOUT = 10000;

const DEFAULT_BATCH_BEST_OF = 1;
const DEFAULT_BATCH_TIMEOUT = 15000;

export function acquirePhoneGeolocationTask(config: GeolocationTaskConfig = {}): Task {
  return new SinglePullProviderTask(
    new GeolocationProvider(config.bestOf ?? DEFAULT_SINGLE_BEST_OF, config.timeout ?? DEFAULT_SINGLE_TIMEOUT),
    'Phone',
    { foreground: true }
  );
}

export function acquireMultiplePhoneGeolocationTask(config: GeolocationTaskConfig = {}): Task {
  return new BatchPullProviderTask(
    new GeolocationProvider(config.bestOf ?? DEFAULT_BATCH_BEST_OF, config.timeout ?? DEFAULT_BATCH_TIMEOUT),
    'Phone',
    { foreground: true }
  );
}

export interface GeolocationTaskConfig {
  bestOf?: number;
  timeout?: number;
}
```

Both tasks have been carefully crafted to create predictable outputs. Instances of the SinglePullProviderTask will be named: `acquire{prefix?}{record-type}`, where the prefix is the second optional parameter to the task constructor and the record-type is obtained by asking the provider what does it provide. On the other hand, instances of the BatchPullProviderTask will be named: `acquireMultiple{prefix?}{record-type}`, where the placeholders are populated in the same way. The event produced by the two is in both cases the same: `{record-type}Acquired`. The only difference is that the single provider task outputs just one record, whereas the batch provider tasks outputs an array of them.

> **Note**: When implementing tasks which work on top of the result of a data provider, consider that the event can contain a single record or an array of them, depending on if they come from a single or a batch data provider task.

These tasks allow some configuration. During their instantiation time, it is possible to indicate if they are required to run in the foreground or not, as seen above. This is required when collecting sensitive data. The foreground notification can be configured following the [specific NTD instructions](https://github.com/GeoTecINIT/nativescript-task-dispatcher#running-tasks-in-foreground). In addition, while defining a workflow, the batch provider task can be configured to limit the maximum frequency at which new records can be collected, as it can be seen [here](../../tools/demo/graph.ts), by using the `maxInterval` configuration parameter.

> **Note**: One big difference between the single provider task and the batch provider task, is that the latter will not finish until all the available time for running the task has been consumed. This is, if the batch task has been scheduled to run every minute, it will try to collect as many samples as possible during that minute before reporting. Keep this in mind for not to schedule long-lived tasks after a batch data collection, otherwise, they might not run at all. This task is intended for an exhaustive data collection with very little post-processing.

#### Instantiating push-based data provider tasks

Push-based data provider tasks are easier to instantiate, but a bit more difficult to integrate. Unlike the pull-based tasks, the process to set up push-based tasks requires three different steps.

The first thing to do, is to instantiate the provider start and stop tasks. We have examples for that using HumanActivityProviders:

```ts
import { Task, StartPushProviderTask, StopPushProviderTask } from '@awarns/core/tasks';

import { HumanActivityProvider, Resolution } from './provider';

export function startDetectingCoarseHumanActivityChangesTask(): Task {
  return new StartPushProviderTask(new HumanActivityProvider(Resolution.LOW), 'Coarse');
}

export function stopDetectingCoarseHumanActivityChangesTask(): Task {
  return new StopPushProviderTask(new HumanActivityProvider(Resolution.LOW), 'Coarse');
}

export function startDetectingIntermediateHumanActivityChangesTask(): Task {
  return new StartPushProviderTask(new HumanActivityProvider(Resolution.MEDIUM), 'Intermediate');
}

export function stopDetectingIntermediateHumanActivityChangesTask(): Task {
  return new StopPushProviderTask(new HumanActivityProvider(Resolution.MEDIUM), 'Intermediate');
}
```

In a similar way to the SingleProvider and BatchProvider tasks, the naming of the tasks has been standardized. For the start task, the name always follows this pattern: `startDetecting{prefix?}{record-type}Changes`, whereas for the stop task, it is always like this: `stopDetecting{prefix?}{record-type}Changes`.

The key difference with the pull-based tasks is that, additionally, we also need to register a listener to receive the updates from the provider and emit them as framework events. Following with the example of the human activity recognition:

```ts
import { awarns } from '@awarns/core';
import { EventData } from '@awarns/core/events';

import { ActivityChange, HumanActivity, Transition } from 'nativescript-context-apis/activity-recognition';
import { HumanActivityChange } from './human-activity-change';
import { Change } from '@awarns/core/entities';

const DEFAULT_EVENT = 'userActivityChanged';

export class HumanActivityChangeReceiver {
  constructor(private emitEvent: (eventName: string, eventData?: EventData) => void) {}

  onReceive(activityChange: ActivityChange) {
    const { type, timestamp, confidence } = activityChange;
    const change = activityChange.transition === Transition.STARTED ? Change.START : Change.END;
    const record = new HumanActivityChange(type, change, timestamp, confidence);
    this.emitEvent(DEFAULT_EVENT, record);
    this.emitEvent(generateEventNameFromActivityChange(record), record);
  }
}

function generateEventNameFromActivityChange(activityChange: HumanActivityChange) {
  const transition = activityChange.change === Change.START ? 'Started' : 'Finished';
  return `user${transition}${actionFromActivityType(activityChange.activity)}`;
}

function actionFromActivityType(type: HumanActivity) {
  switch (type) {
    case HumanActivity.STILL:
      return 'BeingStill';
    case HumanActivity.TILTING:
      return 'StandingUp';
    case HumanActivity.WALKING:
      return 'Walking';
    case HumanActivity.RUNNING:
      return 'Running';
    case HumanActivity.ON_BICYCLE:
      return 'RidingABicycle';
    case HumanActivity.IN_VEHICLE:
      return 'BeingInAVehicle';
  }
}

let _receiver: HumanActivityChangeReceiver;
export function getHumanActivityChangeReceiver(): HumanActivityChangeReceiver {
  if (!_receiver) {
    _receiver = new HumanActivityChangeReceiver(awarns.emitEvent);
  }
  return _receiver;
}
```

The last thing to do is to register this listener at application startup. The best place to do it is by encapsulating the listener registration inside a function and invoke it at plugin registration time, as seen in the [Basic usage](#basic-usage) section.

This is how this function has been implemented in the human activity recognition plugin:

```ts
import { PluginLoader } from '@awarns/core';
import { Task } from '@awarns/core/tasks';
import { HumanActivityProvider } from './internal/provider';


export function registerHumanActivityPlugin(): PluginLoader {
  return async (_tasksInUse: Array<Task>) => {
    HumanActivityProvider.setup();
    // ...
  };
}
```

### A brief note on logging and the rest of the utilities

In addition to all the aforementioned features, the core package comes with a small set of tools consisting of typical reusable functionality pieces. These are classified in 4 different domains: logging, testing, unique identifiers and data serialization.

#### Logging

The AwarNS framework comes with a built-in console logger. However, it is possible to inject a custom logger during the framework initialization (see [Basic usage - Initialization](#initialization)). 

Custom loggers can be used even for submitting crashes, even in the context of the framework, to a remote server. The following code fragment shows an example with a logger that submits errors to Firebase Crashlytics:
```ts
import {
  Logger,
  AbstractLogger,
} from "@awarns/core/utils/logger";
import { FirebaseManager, firebaseManager } from "../firebase";
import { DevLogger } from "./dev";
import { isAndroid } from "@nativescript/core";

export class ProdLogger extends AbstractLogger {
    constructor(
        tag: string,
        private firebase: FirebaseManager = firebaseManager,
        private auxLogger: Logger = new DevLogger(tag)
    ) {
        super(tag);
    }

    protected logDebug(message: string): void {
        return; // Do not print or send debug messages in production
    }

    protected async logInfo(message: string): Promise<void> {
        const crashlytics = await this.firebase.crashlytics();
        if (crashlytics) {
            crashlytics.log(message);
        } else {
            this.auxLogger.info(message);
        }
    }

    protected async logWarning(message: string): Promise<void> {
        const crashlytics = await this.firebase.crashlytics();
        if (crashlytics) {
            crashlytics.log(message);
        } else {
            this.auxLogger.warn(message);
        }
    }

    protected async logError(message: string): Promise<void> {
        const crashlytics = await this.firebase.crashlytics();
        if (!crashlytics) {
            this.auxLogger.error(message);
            return;
        }
        
        crashlytics.sendCrashLog(new java.lang.Exception(message));
    }
}
```

> **Note**: To implement a custom logger, it is not needed to extend the `AbstractLogger` class. If, for some reason, you're not able to do it, or you want more freedom regarding how the messages are printed, you can always just implement the `Logger` interface. 

Instances of logger clases similar to the one above declare the following public API (same as for the Logger interface):

| Name                    | Return type | Description                                                                                                                                                                                                                                                          |
|-------------------------|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `debug(message: any)`   | `void`      | Allows to display messages that are only useful during the development. Typically you'll want to have two separate loggers, one for development and another one for production. The production logger can simply ignore calls to this method, like it happens above. |
| `info(message: any)`    | `void`      | Allows to display regular information messages which might be useful to see while debugging log traces. This is used by each task's `log()` method.                                                                                                                  |
| `warning(message: any)` | `void`      | Allows to log non-critical errors.                                                                                                                                                                                                                                   |
| `error(message: any)`   | `void`      | Allows to log fatal application failures.                                                                                                                                                                                                                            |

With all the information from this section, if you want to use this optional framework feature, we advise you to implement a function to instantiate one or even different loggers (based on the current environment type) with a scope tag. Then, inject this new function to the framework configuration options object, using the `customLogger(tag: string)` property. 

#### Testing

Inside the `@awarns/core/testing/events` folder, you'll find some functions to facilitate testing your own tasks in isolation from the rest of the framework:

| Name                                                       | Return type          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|------------------------------------------------------------|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `createEvent(name: string, params?: CreateEventParams)`    | `DispatchableEvent`  | Allows to create a new NTD event, useful to invoke the execution of a task. The name of the event is mandatory. For the second optional parameter, see the CreateEventParams object API below.                                                                                                                                                                                                                                                                                                           |
| `emit(dispatchableEvent: DispatchableEvent)`               | `void`               | Emits a newly created event. Typically you won't want to use this one unless you're testing complete background workflows.                                                                                                                                                                                                                                                                                                                                                                               |
| `listenToEventTrigger(eventName: string, eventId: string)` | `Promise<EventData>` | Listens and waits for a type of event (eventName) with a specific id (eventId, obtained from `DispatchableEvent.id`) to be emitted. Returns a promise containing the payload of the received event.                                                                                                                                                                                                                                                                                                      |

This is the shape of the CreateEventParams object:

| Property                                    | Type        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|---------------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `data`                                      | `EventData` | A key-value object containing the payload of the event. If not present it will default to `{}` during the creation of the event.                                                                                                                                                                                                                                                                                                                                                                          |
| `id`                                        | `string`    | A string uniquely identifying this instance of the event (must be unique for each task invoke). Defaults to a new UUID during the creation of the task.                                                                                                                                                                                                                                                                                                                                                   |
| `expirationTimestamp`                       | `number`    | Indicates when the tasks handling this event should finish their execution. Defaults to nothing. If provided, must be a UNIX timestamp.                                                                                                                                                                                                                                                                                                                                                                   |

> For more information on how to use these APIs in your tests, you can see how we have implemented our own tests. Some examples are the [SinglePullProvider Spec](../../apps/demo/src/tests/core/tasks/pull-based/single-provider.spec.ts), the [BatchPullProvider Spec](../../apps/demo/src/tests/core/tasks/pull-based/batch-provider.spec.ts), the [StartPushProvider Spec](../../apps/demo/src/tests/core/tasks/push-based/start-provider.spec.ts) and the [StopPushProvider Spec](../../apps/demo/src/tests/core/tasks/push-based/stop-provider.spec.ts). 

#### Unique identifiers

Sometimes you'll need to create your own universally unique identifiers (UUIDs). Given we extensively use them throughout the framework, we have thought that it could be useful to expose a function to generate them, either for creating new plugins or features on top of the framework.

Inside the `@awarns/core/utils/uuid` folder, you'll find a function with the following signature:

| Name   | Return type | Description                                                                                                                                                                                                                                                                      |
|--------|-------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `uuid` | `string`    | Uses the built-in mechanism in the underlying OS to generate a new UUID. In Android, it uses the [UUID.randomUUID()](https://docs.oracle.com/javase/7/docs/api/java/util/UUID.html#randomUUID()) method which generates an UUID v4. No other external dependencies are involved. |

#### Data serialization

In certain cases, you might need to convert complex object structures to a string, and get back the original object somewhere else. In other cases, you might simply want to convert objects with a mix of properties containing plain objects and class instances.

For these situations, you can use the built-in serialization functions that we extensively use throughout the framework, and that you can find inside the `@awarns/core/utils/serialization` folder:

| Name                                 | Return type | Description                                                                                                                                                                                               |
|--------------------------------------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `serialize(data: any)`               | `string`    | Converts any complex JavaScript object, class instance or array into a string which can be back-recovered. Works with objects containing `Date` properties too.                                           |
| `deserialize(serializeData: string)` | `any`       | The reverse process to calling the serialize method. _Please, note that class instances will be recovered as plain JavaScript objects, loosing their original nature._                                    |
| `flatten(data: any)`                 | `any`       | Identical to chaining a serialize and a deserialize method call. Takes the advantage of the deserialize side-effect of turning class instances into plain objects to normalize complex object structures. |


## License

Apache License Version 2.0
