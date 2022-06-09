# @AwarNS Framework

[![Build Status](https://dev.azure.com/GeoTecINIT/nativescript-plugins/_apis/build/status/GeoTecINIT.awarns-framework?branchName=main)](https://dev.azure.com/GeoTecINIT/nativescript-plugins/_build/latest?definitionId=5&branchName=main)

The AwarNS Framework (reads like Awareness *[əˈwernəs]* Framework), is a [NativeScript](https://nativescript.org/)-based application development framework created to simplify the development of mobile applications that need to react to the changes in the context of the phone, even when the app is not running. 

Unlike other similar frameworks, this has been developed with background execution in mind. No matter if the app is not open when the change occurs, if there is a listener for the change, a reaction to the change can be implemented and executed in the form of a developer-defined task. This means, the framework is completely background-first.

This is possible thanks to the well-tested [NativeScript Task Dispatcher](https://github.com/GeoTecINIT/nativescript-task-dispatcher) (NTD), which this framework uses at its [core](packages/core/README.md). Indeed, this framework takes the task definition and execution model offered by the NTD and extends it with primitives to ease the development of context-aware plugins and applications. Due to that the NTD only supports the Android platform for now, this framework shares this same limitation (**iOS is not supported**).

AwarNS sits as a modular layer on top of the NTD. This means that it is possible to build applications with just the minimum number of dependencies required by each application use case. Individual modules are available as a separate NPM packages. The modules can be classified in 4 categories, depending on their purpose: common, sense, analyze and act. The following figure depicts how the 4 categories are related:

![AwarNS Framework modules categories](img/overall-structure.png)

## Framework modules

The following tables lists the modules that come with the framework, grouped by the 4 categories: common, sense, analyze and act. However, the possibilities of the framework are not limited to the modules listed here. It is perfectly fine to develop internal (domain-specific) plugins to extend what is offered by the framework in any of these categories (see [Detailed usage and extension](#detailed-usage-and-extension)). Similarly, contributions of new, general-purpose, plugins are welcome (see [Contributing](#contributing)).

### Common

| Module                                        | Summary                                                                                                                                                                                                                                                                                          | Latest release                                                | Downloads                                             |
|-----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|-------------------------------------------------------|
| [@awarns/core](packages/core/README.md)       | **Always install this plugin.** This will enable your app to configure and use the rest of the plugins. It is required to develop your own features on top of the framework. [[docs](packages/core/README.md)]                                                                                   | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/core)    | ![npm](https://img.shields.io/npm/dm/@awarns/core)    |
| [@awarns/tracing](packages/tracing/README.md) | **(Optional plugin)** We suggest you to install and configure this plugin if your background execution workflow is not trivial (more than a couple of tasks). It facilitates some degree of debugging and profiling while the app is running in production. [[docs](packages/tracing/README.md)] | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/tracing) | ![npm](https://img.shields.io/npm/dm/@awarns/tracing) |

### Sense

| Module                                                      | Summary                                                                                                                                                                                                                                    | Latest release                                                       | Downloads                                                    |
|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|--------------------------------------------------------------|
| [@awarns/battery](packages/battery/README.md)               | Install this plugin if you want to obtain the remaining battery level of the device on a regular basis. [[docs](packages/battery/README.md)]                                                                                               | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/battery)        | ![npm](https://img.shields.io/npm/dm/@awarns/battery)        |
| [@awarns/geolocation](packages/geolocation/README.md)       | Install this plugin if you want to access to the location of the phone, even in background, on a regular basis. [[docs](packages/geolocation/README.md)]                                                                                   | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/geolocation)    | ![npm](https://img.shields.io/npm/dm/@awarns/geolocation)    |
| [@awarns/wifi](packages/wifi/README.md)                     | Install this plugin if you want to scan for nearby Wi-Fi access points (APs) on a regular basis, even in background. [[docs](packages/wifi/README.md)]                                                                                     | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/wifi)           | ![npm](https://img.shields.io/npm/dm/@awarns/wifi)           |
| [@awarns/ble](packages/ble/README.md)                       | Install this plugin if you want to perform regular scans for nearby Bluetooth Low Energy devices, even if the app is not actively running (in background). [[docs](packages/ble/README.md)]                                                | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/ble)            | ![npm](https://img.shields.io/npm/dm/@awarns/ble)            |
| [@awarns/human-activity](packages/human-activity/README.md) | Install and configure this plugin if your app can benefit from listening to updates in the activity being performed by the user (or object) carrying the phone (including background updates). [[docs](packages/human-activity/README.md)] | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/human-activity) | ![npm](https://img.shields.io/npm/dm/@awarns/human-activity) |

### Analyze

| Module                                                      | Summary                                                                                                                                                                   | Latest release                                                       | Downloads                                                    |
|-------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|--------------------------------------------------------------|
| [@awarns/geofencing](packages/geofencing/README.md)         | Install and configure this plugin if your app requires to be notified of changes in the position relative to an area of interest. [[docs](packages/geofencing/README.md)] | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/geofencing)     | ![npm](https://img.shields.io/npm/dm/@awarns/geofencing)     |

### Act

| Module                                                      | Description                                                                                                                                                                                                                                                                                                              | Latest release                                                       | Downloads                                                    |
|-------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|--------------------------------------------------------------|
| [@awarns/persistence](packages/persistence/README.md)       | Install and configure this plugin if you want to locally store and remotely synchronize the information resulting of an observation or an analysis conducted by the framework. This can be used to develop your own stateful tasks and plugins in the context of the framework. [[docs](packages/persistence/README.md)] | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/persistence)    | ![npm](https://img.shields.io/npm/dm/@awarns/persistence)    |
| [@awarns/notifications](packages/notifications/README.md)   | Install and configure this plugin if you want to notify the user about some event detected by the framework or your own developed tasks. This contains also some basic constructs to collect information from the user, ingest it and act upon it. [[docs](packages/notifications/README.md)]                            | ![npm (scoped)](https://img.shields.io/npm/v/@awarns/notifications)  | ![npm](https://img.shields.io/npm/dm/@awarns/notifications)  |

## Prerequisites

This framework shares the same limitations as the Nativescript Task Dispatcher (NTD) regarding minimum requirements. Check the [NTD readme](https://github.com/GeoTecINIT/nativescript-task-dispatcher#prerequisites) for specific details. 

## Quickstart

Here we'll show how to configure the framework to detect as soon as possible when a phone enters inside an area which is interesting for our application. To do so, we'll make a wise use of the available resources by only requesting location updates while the phone is in movement. For the application to provide feedback to the one using the phone, we'll send notifications in three different situations: when the phone has moved to the surroundings of the area of interest, when it is inside, and when it has left. In addition, we'll locally store these events to keep track of them over time. We'll implement this without coding none of the features in use. Just by wiring everything together, by means of the framework.  

### Install

Create a new NativeScript project with the UI framework of your choice. If this is the first time using NativeScript, we suggest you to follow [the framework docs](https://docs.nativescript.org/) first.

Once your project has been set up, install the following plugins:
```bash
ns add @awarns/core
ns add @awarns/human-activity
ns add @awarns/geolocation
ns add @awarns/geofencing
ns add @awarns/notifications
ns add @awarns/persistence
```

>**Why do we need all these plugins?** The AwarNS Framework is made of modules, so we have to tell our package manager which modules to install. This will include just the dependencies that your app needs, limiting its size to what it is strictly necessary. Concretely, here is the purpose of each one of these plugins for this demo:
>- **@awarns/core:** Needed to register the rest of the plugins in the framework and coordinate their usage.
>- **@awarns/human-activity:** Needed to detect when the phone is still or in movement. We'll use it to conditionally start and stop the detection of the phone location, hence saving battery meanwhile the phone is resting somewhere.
>- **@awarns/geolocation:** The core of our app. This will bring us access to the location of the phone upon request.
>- **@awarns/geofencing:** The "smart" component of our app. Will inspect each one of the collected locations and will report if they represent a change in the relative proximity to our area of interest.
>- **@awarns/notifications:** The "feedback" component of our app. This will allow us to notify the users of our app about events which might be of their interest.
>- **@awarns/persistence:** The "archive" component of our app. This will allow us to track the visits of our user to the area of interest over time.

### Configure

First, we'll need to set up our app to properly run in background. This capability is offered by the NativeScript Task Dispatcher (NTD), hence, the setup process is the same for this aspect. Follow the content of the [Android-specific steps](https://github.com/GeoTecINIT/nativescript-task-dispatcher#android-specific-steps) section to get your app ready for running in background. Pay special attention to the instructions regarding [running tasks at shorter intervals than every 15 minutes](https://github.com/GeoTecINIT/nativescript-task-dispatcher#want-to-run-tasks-at-intervals-below-15-minutes-see-here).

Each framework module ensures that the required permissions are declared and includes mechanisms to ask for them when needed. There's nothing else to do in this sense.

### Declaring which features (tasks) of each module will be used

Somewhere in your app sources root create a new TypeScript file. We'll use this file to declare the tasks that the app will use from each one of the installed framework modules. You can call this file `app-tasks.ts` or simply `tasks.ts`:

```ts
// tasks.ts;
import { Task } from "@awarns/core/tasks";
import {
  startDetectingCoarseHumanActivityChangesTask,
  stopDetectingCoarseHumanActivityChangesTask,
} from '@awarns/human-activity';
import { acquirePhoneGeolocationTask } from '@awarns/geolocation';
import { checkAreaOfInterestProximityTask } from '@awarns/geofencing';
import { sendNotificationTask } from '@awarns/notifications';
import { writeRecordsTask } from '@awarns/persistence';

export const appTasks: Array<Task> = [
  // Start: human activity recognition tasks
  startDetectingCoarseHumanActivityChangesTask(),
  stopDetectingCoarseHumanActivityChangesTask(),
  // End: human activity recognition tasks (see human-activity plugin docs to learn about these tasks and more)
  
  // Start: location acquisition tasks
  acquirePhoneGeolocationTask(),
  // End: location acquisition tasks (see geolocation plugin docs to learn about this task and more)
  
  // Start: area of interest proximity detection tasks
  checkAreaOfInterestProximityTask(),
  // End: area of interest proximity detection tasks (see geofencing plugin docs to learn about this task and more)
  
  // Start: user notification tasks
  sendNotificationTask(),
  // End: user notification tasks (see notifications plugin docs to learn about this task and more)
  
  // Start: information persistence tasks
  writeRecordsTask(),
  // End: information persistence tasks (see persistence plugin docs to learn about this task and more)
];
```

### Get the different modules to work together

Now we have declared which framework tasks (features) our application will use. It is time to tell the AwarNS framework how this tasks will coordinate to realize the background execution workflow of our app. We'll do this by wiring everything together using an NTD task graph.

Similarly to what we did before, create a new TypeScript file inside your application sources. There we'll define how our app will react to the different events that will be emitted from the framework tasks and our app itself. You can call this file `app-graph.ts`, `task-graph.ts` or simply `graph.ts`:

```ts
// graph.ts;
import { TaskGraph, EventListenerGenerator, RunnableTaskDescriptor } from '@awarns/core/tasks';

class AppTaskGraph implements TaskGraph {
  async describe(
    on: EventListenerGenerator,
    run: RunnableTaskDescriptor
  ): Promise<void> {
    // We'll emit later a start event from the application UI, once everything has been properly set up
    // This will setup a listener on human activity changes
    on('startEvent', run('startDetectingCoarseHumanActivityChanges'));

    // Once a non-stationary action becomes detected, the location of the phone will be collected every 1 minute
    // The collection of the phone location will stop once the phone becomes still again
    on('userFinishedBeingStill', run('acquirePhoneGeolocation').every(1, 'minutes').cancelOn('userStartedBeingStill'));

    // Each time a geolocation becomes acquired, we'll check how close it is to the known areas of interest (which we'll set up later)
    on(
      'geolocationAcquired',
      run('checkAreaOfInterestProximity', {
        nearbyRange: 200, // We can indicate from how many meters from the border of the area we understand that the phone is close 
        offset: 15, // Also, we can specify an offset to consider in the distance calculation (to mitigate the GPS error)
      })
    );

    // The app will deliver this notification once the phone becomes detected at a distance smaller than the area's radius + nearbyRange
    on(
      'movedCloseToAreaOfInterest',
      run('sendNotification', {
        title: 'You are close',
        body: 'Time to come by?'
      })
    );
    // Similarly, another notification will be delivered right after detecting that the phone is detected inside the area
    on(
      'movedInsideAreaOfInterest',
      run('sendNotification', {
        title: 'Hi 👋',
        body: 'Welcome to the area'
      })
    );
    // And another notification will be sent when the oposite occurs
    on(
      'movedOutsideAreaOfInterest',
      run('sendNotification', {
        title: 'Was nice to see you',
        body: 'Hope you come back soon'
      })
    );
    // All this notifications will do nothing, but they can be customized with certain metadata about actions that the app must perform once tapped (check notifications plugin docs)
    
    // All the framework tasks ouput objects compatible the Record API
    // This allows us to persist them right after they are observed, with just a single line
    on('movedCloseToAreaOfInterest', run('writeRecords'));
    on('movedInsideAreaOfInterest', run('writeRecords'));
    on('movedOutsideAreaOfInterest', run('writeRecords'));
    on('movedAwayFromAreaOfInterest', run('writeRecords'));
    
    // We could do the same with the activity changed event we declared before
    // on('userActivityChanged', run('writeRecords'));
    // And also with the geolocation, but we should be careful not to violate the privacy of our users...
    // on('geolocationAcquired', run('writeRecords'));

    // To finalize, we can prevent our workflow from running by no longer listening to human activity changes
    // Then, if the geolocation data collection task is not scheduled by the time the stop event rises, this means, the phone is idle, we are done
    on('stopEvent', run('stopDetectingCoarseHumanActivityChanges'));
    // However, it would be more robust if we create a task to be invoked when both, the stopEvent and the userStartedBeingStill events are triggered
    // We could instead use the output (event) of this task to cancel the geolocation data collection, ensuring that it stops no matter the state of the phone by the time the stop event gets emitted
  }
}

export const appTaskGraph = new AppTaskGraph();
```

> [Follow this](https://github.com/GeoTecINIT/nativescript-task-dispatcher#quick-start) link if you want to learn more about the different possibilities and configurations which can be declared through an NTD task graph.

### Finish the setup

The last thing we have to do before telling our app how to execute the workflow we have just defined, is to register the framework at application startup, with the tasks we are going to use, the task graph (workflow) and the plugins which need startup initialization.

To do so, we'll edit the application entrypoint file (`app.ts` or `main.ts`, for Angular apps) like this:

```ts
// app.ts / main.ts
// TypeScript App:
import { Application } from '@nativescript/core';
// or Angular App:
import { runNativeScriptAngularApp, platformNativeScript } from '@nativescript/angular';
import { AppModule } from "./app/app.module";

// AwarNS Framework imports
// (always between esential imports and app initialization)
import { awarns } from '@awarns/core';
import { appTasks } from './tasks';
import { appTaskGraph } from './graph';
import { registerHumanActivityPlugin } from '@awarns/human-activity';
import { registerNotificationsPlugin } from '@awarns/notifications';
import { registerPersistencePlugin } from '@awarns/persistence';

awarns
  .init(
    appTasks, // The tasks to be used, which we defined before
    appTaskGraph, // The background execution workflow definition
    [
      // Required to register the activity change listeners on app startup
      // Learn more in the human-activity plugin docs
      registerHumanActivityPlugin(),
      // Required to register the notification tap callbacks
      // (Optional) we can indicate the name of the channel to be displayed in Android settings
      // Learn more in the notifications plugin docs
      registerNotificationsPlugin('Proximity alerts'),
      // Required for the local store to synchronize any pending records on app startup
      // (Optional) it is possible to inject an external (remote) store during the register
      // (Optional) it is possible to indicate for how much time the information must be kept locally
      // Learn more in the notifications plugin docs
      registerPersistencePlugin(),
    ],
    {
      // Recommended, to see debug and info messages while developing
      enableLogging: true,
      // Other configuration options are available, check core package docs
    }
  )
  .then(() => console.log('AwarNS framework successfully loaded'))
  .catch((err) => {
    console.error("Could not load AwarNS framework:", err);
  });

// TypeScript App:
Application.run({ moduleName: 'app-root' });
// Angular App:
runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
```

### Start executing the background workflow on demand

Now we have everything connected and once the background workflow starts running, it will be able to do everything even when the application is not actively running on the phone (opened by the user).

However, there's one last step remaining. We have to instruct our app when to start executing the background workflow. This is, when to emit the start event.

Where to place the following code is a matter of personal taste (and application requirements). For a quick test, you can place it inside the main app view / component that you've created, just make sure it becomes executed right after the view has been completely shown. This means, inside onNavigatedTo / ngOnInit (Angular):

```ts
import { awarns } from "@awarns/core";

// ... inside some view initialization function ...

  /* 1. Before setting up the tasks, setup areas of interest */

  // First we query for any existing area of interest
  const aois = await areasOfInterest.getAll();
  
  const newAoIs: Array<AreaOfInterest> = [
    // Update the area of interest with the information of the area of your choice
    {
      id: 'geotec',
      name: 'Geotec',
      latitude: 39.9939082,
      longitude: -0.0739913,
      radius: 40,
    },
    // You can add more than one area of interest
  ];
  
  // Naive check, to see if areas of interest have already been setup
  if (aois.length === newAoIs.length) {
    console.log('Areas already set up!');
    return;
  }
  // Ensure we start from something clean
  await areasOfInterest.deleteAll();
  
  // Insert the new area(s)
  await areasOfInterest.insert(newAoIs);
  console.log('Done setting up areas of interest!');

  /* 2. Then, setup tasks. This way, the geofencing task will already have the areas of interest */
  
  // This checks if all the registered tasks meet their pre-execution conditions:
  // - Permissions are granted
  // - System services are enabled
  const isReady = await awarns.isReady();
  if (!isReady) {
    const tasksNotReady = await awarns.tasksNotReady;
    // This allows to query which task(s), from the ones in use, are not ready
    // You can use this information to, for example, conditionally show different UI elements here showing a rationale to your user about why a certain permission or functionality must be activated
    console.log(`The following tasks are not ready!: ${tasksNotReady}`);
    // This will automatically perform all the actions needed to prepare the tasks that are not ready
    await awarns.prepare();
    // Will throw an error if not all the tasks have been succesfully prepared
  }
  
  /* 3. Finally, once everything else is ready, start the background execution workflow */

  awarns.emitEvent("startEvent");
  // Now the background workflow will start its execution by start detecting human activity changes

// ...
```

At this point you can already compile and install the app you've just created on a real phone. Make sure you grant all the required permissions. Then, you can safely close it and go for a walk. You'll get the scheduled notifications when approaching the specified area of interest.

## Detailed usage and extension

_Extend previous example, counting the number of visits to an area._

For specific usage and extension instructions, please read [core](packages/core/README.md)'s package README file. For specific usage instructions of each one of the plugin modules, please, refer to the corresponding module README file (use the links from the table above).

## Contributing

### Setting up the development environment

What you'll need:
- NodeJS 16+
- NativeScript 8+
- Yarn package manager [installed/enabled](https://yarnpkg.com/getting-started/install)

Upon meeting these requirements, run:

```bash
npm run setup
npm start
```

In general, when in doubt with what to do, just `npm start`.

### How to add a new package to workspace?

```bash
npm run add
```

At the prompt, enter the name of the new package.

- This adds a plugin harness in `packages` with the necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

**Very important**, after generating the new package, do the following:

- Make sure the order of the packages in the [`tsconfig.base.json`](tsconfig.base.json) remains unchanged with respect to its previous state. **Do not place** your plugin in alphabetic order, **place it** right after all its dependencies. This is important, otherwise the demo app won't compile.
- Check the tables from above where the different plugins of the framework are classified in the four categories. Pick a plugin from there which is conceptually similar (feature-wise) to the plugin you want to develop.
- Follow the same internal structure defined by the plugin you've picked.
- If you need to depend on one or more framework plugins update your plugin's `tsconfig.json` file to include the reference(s) to the framework dependencies. Check the `tsconfig.json` file of existing plugins when in doubt. A good example with many dependencies is the geofencing's plugin [tsconfig.json](packages/geofencing/tsconfig.json).
- Move the new entry that the plugin generation tool will have generated in this README to the most apropiate table above.
- Open a PR.

### How to focus on just 1 package to develop in isolation

```
npm start
```

- Choose the focus commands for the package you wish to focus on and hit enter.
- All the demo app's will be updated to isolate that 1 package and for supported IDE's (currently VS Code), the source code will also become isolated in the workspace.

Note: _good to always clean the demo you plan to run after focusing. (You can clean any demo from `npm start` as well)_

### How to publish packages?

```
npm run publish-packages
```

- You will be prompted for the package names to publish. Leaving blank and hitting enter will publish them all.
- You will then be prompted for the version to use. Leaving blank will auto bump the patch version (it also handles prerelease types like alpha, beta, rc, etc. - It even auto tags the corresponding prelease type on npm).
- You will then be given a brief sanity check 🧠😊

## Framework maintainers

<a href="https://github.com/agonper" title="Alberto González Pérez">
  <img src="https://avatars3.githubusercontent.com/u/10727467?s=120" alt="Alberto González Pérez" width="120"/>
</a>
<a href="https://github.com/matey97" title="Miguel Matey Sanz">
  <img src="https://avatars3.githubusercontent.com/u/25453537?s=120" alt="Miguel Matey Sanz" width="120"/>
</a>

## Acknowledgements

The development of this plugin has been possible thanks to the Spanish Government. Concretely, the Spanish Ministry of Education, Culture and Sports (grant references FPU17/03832 and FPU19/05352), and the Spanish Ministry of Science and Innovation's programme: "Programa Estatal de I+D+i Orientada a los Retos de la Sociedad" (references RTI2018-099939-BI-00 and PID2020-120250RB-100) [MCIN/AEI/10.13039/501100011033].

This project is an open-sourced excerpt coming from [SyMptOMS](http://geotec.uji.es/projects/symptoms/) and SyMptOMS-ET projects at [Geotec](http://geotec.uji.es/).
