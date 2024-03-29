# Quickstart

As a matter of an example, here we'll show how to configure the framework to detect, as soon as possible, when a phone enters inside an area which is interesting for our application. To do so, we'll make a wise use of the available resources by only requesting location updates while the phone is in movement. For the application to provide feedback to the one using the phone, we'll send notifications in three different situations: when the phone has moved to the surroundings of the area of interest, when it is inside, and when it has left. In addition, we'll locally store these events to keep track of them over time. We'll implement this without coding none of the features in use. Just by wiring everything together, by means of the framework.

## Install

Create a new NativeScript project with the UI framework of your choice. If this is the first time using NativeScript, we suggest you to follow [the NativeScript docs](https://docs.nativescript.org/) first.

Once your application project has been set up, install the following plugins:
```bash
ns plugin add @awarns/core
ns plugin add @awarns/human-activity
ns plugin add @awarns/geolocation
ns plugin add @awarns/geofencing
ns plugin add @awarns/notifications
ns plugin add @awarns/persistence
```

>**Why do we need all these plugins?**
>
>The AwarNS Framework is made of modules, so we have to tell our package manager which modules to install. This will include just the dependencies that your app needs, limiting its size to what it is strictly necessary. Concretely, here is the purpose of each one of these plugins for this demo:
>- **@awarns/core:** Needed to register the rest of the plugins in the framework and coordinate their usage.
>- **@awarns/human-activity:** Needed to detect when the phone is still or in movement. We'll use it to conditionally start and stop the detection of the phone location, thus saving battery meanwhile the phone is resting somewhere.
>- **@awarns/geolocation:** The core of our app. This will bring us access to the location of the phone upon request.
>- **@awarns/geofencing:** The "smart" component of our app. Will inspect each one of the collected locations and will report if they represent a change in the relative proximity to our area of interest.
>- **@awarns/notifications:** The "feedback" component of our app. This will allow us to notify the users of our app about events which might be of their interest.
>- **@awarns/persistence:** The "archive" component of our app. This will allow us to track the visits of our user to the area of interest over time.

## Configure

First, we'll need to set up our app to properly run in background. This capability is offered by the NativeScript Task Dispatcher (NTD), hence, the setup process is the same for this aspect. Follow the content of the [Android-specific steps](https://github.com/GeoTecINIT/nativescript-task-dispatcher#android-specific-steps) section to get your app ready for running in background. Pay special attention to the instructions regarding [running tasks at shorter intervals than every 15 minutes](https://github.com/GeoTecINIT/nativescript-task-dispatcher#want-to-run-tasks-at-intervals-below-15-minutes-see-here).

Each framework module ensures that the required permissions are declared and includes mechanisms to ask for them when needed. There's nothing else to do in this sense.

## Declaring which features (tasks) will be used

Somewhere in your app sources root create a new TypeScript file. We'll use this file to declare the tasks that the app will use from each one of the installed framework modules. You can name this file as you please, for this example, we'll call it: `tasks.ts`:

```ts
// tasks.ts;
import { Task } from '@awarns/core/tasks';
import {
  startDetectingCoarseHumanActivityChangesTask,
  stopDetectingCoarseHumanActivityChangesTask,
} from '@awarns/human-activity';
import { acquirePhoneGeolocationTask } from '@awarns/geolocation';
import { checkAreaOfInterestProximityTask } from '@awarns/geofencing';
import { sendNotificationTask } from '@awarns/notifications';
import { writeRecordsTask } from '@awarns/persistence';

export const appTasks: Array<Task> = [
  // START: human activity recognition tasks
  startDetectingCoarseHumanActivityChangesTask(),
  stopDetectingCoarseHumanActivityChangesTask(),
  // END: human activity recognition tasks (see human-activity plugin docs to learn about these tasks and more)
  
  // START: location acquisition tasks
  acquirePhoneGeolocationTask(),
  // END: location acquisition tasks (see geolocation plugin docs to learn about this task and more)
  
  // START: area of interest proximity detection tasks
  checkAreaOfInterestProximityTask(),
  // END: area of interest proximity detection tasks (see geofencing plugin docs to learn about this task and more)
  
  // START: user notification tasks
  sendNotificationTask(),
  // END: user notification tasks (see notifications plugin docs to learn about this task and more)
  
  // START: information persistence tasks
  writeRecordsTask(),
  // END: information persistence tasks (see persistence plugin docs to learn about this task and more)
];
```

## Get the different modules to work together

Now we have declared which framework tasks (features) our application will use. It is time to tell the AwarNS framework how these tasks will coordinate to realize the background execution workflow of our app. We'll do this by wiring everything together using an NTD task graph.

Similarly to what we did before, create a new TypeScript file inside your application sources. There, we'll define how our app will react to the different events that will be emitted from the framework tasks and our app itself. You can name this file as you please, for this example, we'll call it: `graph.ts`:

```ts
// graph.ts;
import { TaskGraph, EventListenerGenerator, RunnableTaskDescriptor } from '@awarns/core/tasks';

class AppTaskGraph implements TaskGraph {
  async describe(
    on: EventListenerGenerator,
    run: RunnableTaskDescriptor
  ): Promise<void> {
    // We'll later emit a start event from the application UI, once everything has been properly set up
    // This will setup a listener on human activity changes
    on('startEvent', run('startDetectingCoarseHumanActivityChanges'));

    // Once a non-stationary action becomes detected, the location of the phone will be collected every 1 minute
    // The collection of the phone location will stop once the phone becomes still again
    on('userFinishedBeingStill', run('acquirePhoneGeolocation').every(1, 'minutes').cancelOn('userStartedBeingStill'));

    // Each time a geolocation becomes acquired, we'll check how close it is to the known areas of interest (which we'll set up later)
    on(
      'geolocationAcquired',
      run('checkAreaOfInterestProximity', {
        nearbyRange: 200, // We can indicate from how many meters from the border of the area we understand that the phone is close to it 
        offset: 15, // Also, we can specify an offset (in meters too) to consider in the distance calculation (to mitigate the GPS error)
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
    // Similarly, another notification will be delivered right after detecting that the phone has been detected inside the area
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
    // All these notifications will do nothing, but they can be customized with certain metadata about actions that the app must perform once tapped (check notifications plugin docs)
    
    // All the framework tasks output objects compatible the Record API (see core docs)
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
    // We could instead use the output (event) of this new task to cancel the geolocation data collection, ensuring that it stops no matter the state of the phone by the time the stop event gets emitted
  }
}

export const appTaskGraph = new AppTaskGraph();
```

> [Here](https://github.com/GeoTecINIT/nativescript-task-dispatcher#quick-start) you can learn more about the different possibilities and configurations which can be declared in an NTD task graph.

## Finish the setup

The last thing we have to do before telling our app how to execute the workflow we have just defined, is to register the framework at application startup, with the tasks we are going to use, the task graph (workflow) and the plugins which need startup initialization.

To do so, we'll edit the application entrypoint file (`app.ts` or `main.ts`, for Angular apps) like this:

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
    console.error('Could not load AwarNS framework:', err);
  });

/* 
 * Choose one depending on your application type: 
 */
 
// TypeScript App
Application.run({ moduleName: 'app-root' });
// Angular App
runNativeScriptAngularApp({
  appModuleBootstrap: () => platformNativeScript().bootstrapModule(AppModule),
});
```

## Start executing the background workflow on demand

Now we have everything connected and once the background workflow starts running, it will be able to do everything, even when the application is not actively running on the phone (opened by the user).

However, there's one last step remaining. We have to indicate our app which is/are our areas of interest and, also, indicate when to start executing the background workflow. This is, when to emit the start event.

Where to place the following code is a matter of personal taste (and application requirements). For a quick test, you can place it inside the main app view / component that you've created. Just make sure it becomes executed only after the view has been completely shown, because it will require the UI to be completely initialized. This means, inside onNavigatedTo / ngOnInit (Angular):

```ts
import { awarns } from '@awarns/core';

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
    const tasksNotReady = await awarns.tasksNotReady$;
    // This allows to query which task(s), from the ones in use, are not ready
    // You can use this information to, for example, conditionally show different UI elements here, showing a rationale to your users about why certain permission or functionality must be activated
    console.log(`The following tasks are not ready!: ${tasksNotReady}`);
    // This will automatically perform all the actions needed to prepare the tasks that are not yet ready
    await awarns.prepare();
    // Will throw an error if not all the tasks have been succesfully prepared
  }
  
  /* 3. Finally, once everything else is ready, start the background execution workflow */

  awarns.emitEvent('startEvent');
  // Now the background workflow will start its execution by starting detecting human activity changes

// ...
```

At this point we can already compile and install the app we've just created on a real phone. While using it, make sure you grant all the required permissions. Then, you can safely close it and go for a walk. You'll get the scheduled notifications when approaching the specified area of interest.

# Detailed usage and extension

**To follow this guide you'll need to follow the [Quickstart](#quickstart) first.**

For most of the use cases, just using the tasks and features provided by the framework won't be enough. Every application has its own business logic when navigating through its UI. Background execution workflows should not be an exception to this. That's why the AwarNS Framework, thanks to the NTD, allows you to create and register your own developer-defined tasks for when the ones that come with the framework are not enough.

Here we'll extend the example previously introduced in the [Quickstart](#quickstart). However, the possibilities of task definition are not limited to what we'll show here. For more examples on how to define tasks, please check the [NTD docs](https://github.com/GeoTecINIT/nativescript-task-dispatcher#task-see-code).

## Offering "smarter" background experiences using state

Right now, our simple app just displays some basic notifications when our users approach, enter or leave our area of interest. Of course, this is useful in the short term, to show, for example, some relevant content to them when they visit our area. However, it could be even better if we could reward our users for visiting us several times. In this example, we are going to extend our app to deliver a special notification when a user visits us for 5 times.

To do this, first we'll need a way to keep the state of the visit counters for each different areas of interest. We'll use the persistence plugin for this aim. Then, create a new TypeScript file, which we'll call `visit-counters.ts`

```ts
// visit-couters.ts
import { AwarnsStore } from '@awarns/persistence';

// (Optional) Declare the interface that your persistence component will have
export interface VisitCountersStore {
  increase(id: string): Promise<void>;
  get(id: string): Promise<number>;
  reset(id: string): Promise<void>;
  clear(): Promise<void>;
}

// Required to distinguish different entity types inside the framework store
const DOC_TYPE = 'visit-counter';

class VisitCountersStoreDB implements VisitCountersStore {
  private readonly store: AwarnsStore<VisitCounter>;

  constructor() {
    // Creating a new store requires:
    // - The type that the store will work with
    // - A string to uniquely identify the entities being managed
    // - A function to transform (serialize) entities into DB documents
    // - A function to reverse the transform (deserialize) DB documents back into entities
    this.store = new AwarnsStore<VisitCounter>(DOC_TYPE, docFrom, nearbyAreaFrom);
  }

  async increase(id: string): Promise<void> {
    const doc = await this.store.get(id);
    if (!doc) {
      const counter = { id, visits: 1 };
      await this.store.create(counter, id);
      return;
    }
    await this.store.update(id, { visits: doc.visits + 1 });
  }

  async get(id: string): Promise<number> {
    const counter = await this.store.get(id);
    if (!counter) {
      return 0;
    }
    return counter.visits;
  }
  
  async reset(id: string): Promise<void> {
    await this.store.delete(id);
  }

  async clear(): Promise<void> {
    await this.store.clear();
  }
}

// Typically you'll want to have a external entity representation
interface VisitCounter {
  id: string;
  visits: number;
}

// And an internal representation (DB document)
type VisitCounterDoc = VisitCounter;
// In this case the two are identical, but sometimes you might want to: 
// - Change the type of certain properties (for example, Dates, into UNIX timestamp numbers)
// - Collapse multiple properties into a single JSON string

// The serialize function
function docFrom(counter: VisitCounter): VisitCounterDoc {
  return { ...counter };
}

// The deserialize function
function visitCounterFrom(doc: VisitCounterDoc): VisitCounter {
  return { ...doc };
}

export const visitCountersStoreDB = new VisitCountersStoreDB();

```

Optionally, we could create an extended framework record to represent the visit record. By doing this, we could persist this record at any time and keep track of how the visits evolve over time. We can do this by creating a new TypeScript file called: `accumulated-visit.ts`:

```ts
// accumulated-visit.ts
import { Change, Record } from '@awarns/core/entities';

export const AccumulatedAoIVisitType = 'accumulated-aoi-visit';

export class AccumulatedAoIVisit extends Record {
  constructor(
    public aoi: AreaOfInterest,
    public visitNumber: number,
    timestamp = new Date()
  ) {
    super(AccumulatedAoIVisitType, timestamp, Change.NONE);
  }
}
```

Now that we have a way to keep track of the visit counters for each of our areas, we need to define a way to update these counters each time an area is visited. To do so, we will define a custom developer-defined task by using the core package. For this aim, we'll create a new file, which we will call: `counter-increaser.ts`:

```ts
// counter-increaser.ts
import {
    DispatchableEvent,
    Task,
    TaskOutcome,
    TaskParams,
} from '@awarns/core/tasks';
import { VisitCountersStore } from './visit-counters';
import { AccumulatedAoIVisit } from './visit-counter';


export class VisitCounterIncreaser extends Task {
    constructor(
        name: string,
        private store: ExposuresStore
    ) {
        super(name, {
            outputEventNames: ['visitCounterIncreased'],
        });
    }

    protected async onRun(
        taskParams: TaskParams,
        invocationEvent: DispatchableEvent
    ): Promise<TaskOutcome> {
        const changes = invocationEvent.data as Array<AoIProximityChange>;

        // The user can enter multiple overlapping areas at once
        const aoiIds = changes.map((change) => change.aoi.id);
        
        for (const id of aoiIds) {
          await this.store.increase(id)
        }
        
        const visits = await Promise.all(aoiIds.map((id) => this.store.get(id)));
        
        const accumulatedVisits = [];
        for (let i = 0; i < changes.length; i++) {
          accumulatedVisits.push(new AccumulatedAoIVisit(
            changes[i].aoi,
            visits[i]
          ));
        }
        return {
          eventName: 'visitCounterIncreased', // This is optional, as this task can only produce one type of event 
          result: accumulatedVisits
        };
    }
}
```

To finish developing new features, we will create another task to listen to the `visitCounterIncreased` event and determine if the user should get a notification or not. For that, we'll create our last TypeScript file called: `accumulated-visit-checker.ts`:

```ts
// accumulated-visit-checker.ts
import {
  DispatchableEvent,
  Task,
  TaskOutcome,
  TaskParams,
} from '@awarns/core/tasks';
import { AccumulatedAoIVisit } from './visit-counter';

export class AccumulatedVisitChecker extends Task {
  constructor(
    name: string,
  ) {
    super(name, {
      outputEventNames: [`${name}Finished`, 'userDidSpecialVisit'],
    });
  }

  protected async onRun(
    taskParams: TaskParams,
    invocationEvent: DispatchableEvent
  ): Promise<TaskOutcome> {
    const accumulatedVisits = invocationEvent.data as Array<AccumulatedAoIVisit>;

    const specialVisits = accumulatedVisits.filter((visit) => visit.visitNumber === 5);
    
    // There's at least one accumulated visit with a value of 5
    if (specialVisits.length > 0) {
      return { eventName: 'userDidSpecialVisit', result: specialVisits }
    }
    
    // Otherwise, return default task event (task finished with nothing special to report)
    return { eventName: this.outputEventNames[0] };
  }
}
```

Finally, it is time to update the list of tasks registered by our application, to include the two newly created tasks:

```ts
// tasks.ts;
import { Task } from '@awarns/core/tasks';
// ... previous imports
import { visitCounterStoreDB } from './visit-counters';
import { VisitCounterIncreaser } from './counter-increaser'

export const appTasks: Array<Task> = [
  // ... previous tasks
  
  // START: app-specific tasks
  new VisitCounterIncreaser('increaseVisitCounter', visitCountersStoreDB),
  new AccumulatedVisitChecker('checkForSpecialVisit'),
  // END: app-specific tasks
];
```

And the application background execution workflow:

```ts
// graph.ts;
import { TaskGraph, EventListenerGenerator, RunnableTaskDescriptor } from '@awarns/core/tasks';

class AppTaskGraph implements TaskGraph {
  async describe(
    on: EventListenerGenerator,
    run: RunnableTaskDescriptor
  ): Promise<void> {
    // ... previous workflow definition
    on('movedInsideAreaOfInterest', run('increaseVisitCounter'));
    on('visitCounterIncreased', run('checkForSpecialVisit'));
    on(
      'userDidSpecialVisit',
      run('sendNotification', {
        title: 'Thank you!',
        body: 'We appreciate your visits 🙂'
      })
    );
    
    // Optionally, we could store when the visit counters are increased with just one line
    //on('visitCounterIncreased', run('writeRecords'));
    
    // ... rest of workflow stop events
  }
}

export const appTaskGraph = new AppTaskGraph();
```

And that makes it. With this example, we have seen how it is possible to extend and use many framework features to offer more advanced experiences to our application users.

> **Note**: This example could be greatly simplified, by reducing it to just the persistence mechanism and the definition of one task to do all the work. We have decided to show the extended version for you to see how easy it can be to create decoupled functionalities using the AwarNS Framework. And also the hidden power of extending the Record class.
