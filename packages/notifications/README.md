# @awarns/notifications
![npm (scoped)](https://img.shields.io/npm/v/@awarns/notifications)
![npm](https://img.shields.io/npm/dm/@awarns/notifications)

This module allows to deliver notifications to the user when an event occurs. It also defines some primitives (in form of framework records) to hold possible reactions and interactions of the user with the notification.

This plugin acts as a wrapper of EddyVerbruggen's [NativeScript Local Notifications](https://github.com/NativeScript/plugins/tree/main/packages/local-notifications) plugin, adapted to work with the AwarNS Framework task model.

Install the plugin using the following command line instruction:

```bash
ns plugin add @awarns/notifications
```

## Usage

After installing and configuring this plugin, you'll be granted with two interaction mechanisms to work with it:

1. **The plugin API**. Through it, you'll be able to manage the notifications which have been delivered and the possible reactions to them.
2. **The notification delivery tasks**, which allow to locally display notifications to your users using system's services. Users can tap or discard the notifications. The plugin comes with specific records for direct reactions: the [NotificationTap](#records) and the [NotificationDiscard](#records). It also comes with definitions of [records](#records) for more specific notification tap actions.

### Setup

This plugin requires you to register its loader during the framework initialization, like this:

```ts
// ... platform imports
import { awarns } from '@awarns/core';
import { demoTasks } from '../tasks';
import { demoTaskGraph } from '../graph';
import { registerNotificationsPlugin } from '@awarns/notifications';

awarns
  .init(
    demoTasks,
    demoTaskGraph,
    [
      registerNotificationsPlugin('App notifications'),
    ]
  )
  // ... handle initialization promise
```

Plugin loader parameters:

| Parameter                  | Type     | Description                                                                                                                                                            |
|----------------------------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `notificationsChannelName` | `String` | Required by the OS. The channel name to be used for the notifications delivered using the framework, so the user can adjust their priority through the system settings |

### API

#### notificationsManager

The `notificationsManager` singleton object allows to manage reactions to notifications. It offers the following actions:

| Method                                                  | Return type     | Description                                                                                                                                                                                                                                                   |
|---------------------------------------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `onNotificationTap(callback: NotificationCallback)`     | `Promise<void>` | Sets a callback in your UI to handle notification taps from the system's tray. If the tap arrives before the callback has been set up, for example, when the app is not running, the tap is cached and will be delivered right after registering the callback |
| `onNotificationDiscard(callback: NotificationCallback)` | `Promise<void>` | Sets a callback to receive updates on notifications being discarded from the system's tray                                                                                                                                                                    |
| `markAsSeen(id: number)`                                | `Promise<void>` | Indicate to the plugin that a notification has been handled / read. It will be removed from the list of pending notifications                                                                                                                                 |


#### notifications

The `notifications` singleton object allows to access the notifications that have been delivered but not yet handled / read. It offers the following actions:

| Method            | Return type                         | Description                                                                                                                                                                                                                                       |
|-------------------|-------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `list()`          | `Observable<Array<Notification>>`   | Allows to observe changes in all the unread notifications. More details on the [Notification](#notification) interface, right after this table. It is recommended to install [RxJS](https://rxjs.dev/), to operate with the output of this method |
| `get(id: string)` | `Promise<Notification>`             | Allows to retrieve a stored notification by its id                                                                                                                                                                                                |

#### Notification

| Property    | Type                      | Description                                                                        |
|-------------|---------------------------|------------------------------------------------------------------------------------|
| `id`        | `number`                  | The unique identifier of the notification                                          |
| `title`     | `string`                  | The content of notification heading line                                           |
| `body`      | `string`                  | (Optional) The notification content                                                |
| `timestamp` | `Date`                    | The moment when the notification was delivered                                     |
| `tapAction` | [`TapAction`](#tapaction) | (Optional) Additional metadata, to know how to handle the notification when tapped |

#### TapAction

| Property   | Type                                            | Description                                                                                                                           |
|------------|-------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
| `type`     | [`TapActionType &vert; string`](#tapactiontype) | The type of action to conduct after the notification tap. See table below, to see some examples                                       |
| `id`       | `string`                                        | The specific id of the action inside its type                                                                                         |
| `metadata` | `object`                                        | Automatically populated. Contains the payload (data) of the event that triggered the execution of the task that sent the notification |

#### TapActionType

| Option              | Description                                                                                                                                                                |
|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `OPEN_APP`          | Default action, when none is specified. It just opens the app. The notification tap callback does not get invoked when this action type is provided                        |
| `OPEN_CONTENT`      | Can be used to indicate that the app must display some content for the user to see it. Check out the related [UserReadContent](#records) record type                       |
| `DELIVER_QUESTIONS` | Can be used to indicate that the app must deliver some questions for the user to answer. Check out the related [QuestionnaireAnswers](#records) record type                |
| `ASK_FEEDBACK`      | Can be used to indicate that the app must deliver some quick feedback for the user to answer (single question). Check out the related [UserFeedback](#records) record type |
| `ASK_CONFIRMATION`  | Can be used to indicate that the app must deliver some yes/no confirmation question for the user to answer. Check out the related [UserConfirmation](#records) record type |

### Tasks

#### Send a notification

> **Task name**: `sendNotification`
>
> **Description**: Sends a notification with the given information
>
> **Execution requirements:** None

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { sendNotificationTask } from '@awarns/notifications';

export const demoTasks: Array<Task> = [
  sendNotificationTask(),
];

```

Task generator parameters:

> The task generator takes no parameters.

Task output events:

> This task doesn't produce significant events after it completes its execution, aside from the regular `{task-name}Finished` event: `sendNotificationFinished`.
>
> However, once it has finished running, relevant events will be emitted by the internal listeners. These are listed below.

- [`notificationTapped`](#events)
- [`notificationDiscarded`](#events)

> Example usage in the application task graph:
> ```ts
> on(
>   'startEvent',
>   run('sendNotification', {
>     title: 'New content available', // All notifications must contain a title
>     body: 'This information may be valuable for you', // The body of the notification can be provided through here 
>                                                       // or inside the payload (data) of the event trigger, inside a 
>                                                       // property called body
>     tapAction: { // (Optional) If not provided, defaults to OPEN_APP
>       type: TapActionType.OPEN_CONTENT, // See the rest of the options in the TapActionType enum
>       id: 'content-1', // For the app to distingish what content must be displayed after tapping the notification
>     },
>   })
> );
>
> on('notificationTapped', run('writeRecords'));
> on('notificationCleared', run('writeRecords'));
> ```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

#### Send a random notification among a set of options

> **Task name**: `sendRandomNotification`
>
> **Description**: Sends a random notification among a given set
>
> **Execution requirements:** None

To register this task for its use, you just need to import it and call its generator function inside your application's task list:

```ts
import { Task } from '@awarns/core/tasks';
import { sendRandomNotificationTask } from '@awarns/notifications';

export const demoTasks: Array<Task> = [
  sendRandomNotificationTask(),
];

```

Task generator parameters:

> The task generator takes no parameters.

Task output events:

> This task doesn't produce significant events after it completes its execution, aside from the regular `{task-name}Finished` event: `sendNotificationFinished`.
>
> However, once it has finished running, relevant events will be emitted by the internal listeners. These are listed below.

- [`notificationTapped`](#events)
- [`notificationDiscarded`](#events)

> Example usage in the application task graph:
> ```ts
> on(
>   'startEvent',
>   run('sendRandomNotification', {
>     options: [
>       {
>         title: 'Would you like to rate the app?', // All notifications must contain a title
>         // But the body is optional
>       },
>       {
>         title: 'Do you like the app so far?',
>         body: 'Your feedback can make us better', // Unlike the sendNotification task, 
>                                                   // the notification body can only be set through here
>       },
>       {
>         title: 'Your opinion is very valuable',
>         tapAction: { // (Optional) Including a tap action inside one of the options will override the default one (see below)
>           type: TapActionType.ASK_FEEDBACK,
>           id: 'special-feedback',
>         },
>       },
>     ],
>     defaultTapAction: { // (Optional) Common tap action for all the notification options that don't declare one
>           type: TapActionType.ASK_FEEDBACK,
>           id: 'regular-feedback',
>      },
>   })
> );
>
> on('notificationTapped', run('writeRecords'));
> on('notificationCleared', run('writeRecords'));
> ```
> **Note**: To use the `writeRecords` task, the persistence package must be installed and configured. See [persistence package docs](../persistence/README.md).

### Events

| Name                    | Payload                               | Description                                                                                                                                                     |
|-------------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `notificationTapped`    | [NotificationTapRecord](#records)     | Emitted once a notification has been tapped by the user via the system's tray. This event is only emitted if a notification tap callback has been set up        |
| `notificationDiscarded` | [NotificationDiscardRecord](#records) | Emitted once a notification has been discarded by the user via the system's tray. This event is only emitted if a notification discard callback has been set up |


### Records

This plugin includes records which can be classified into two categories: user reactions and user interactions.

<details>

<summary>User reactions</summary>

User reactions include the `NotificationTapRecord` and the `NotificationDiscardRecord`.

#### NotificationTapRecord

| Property         | Type                      | Description                                                          |
|------------------|---------------------------|----------------------------------------------------------------------|
| `id`             | `string`                  | Record's unique id                                                   |
| `type`           | `string`                  | Always `notification-tap`                                            |
| `change`         | `Change`                  | Always `none`. Notification tap's starts and ends cannot be detected |
| `timestamp`      | `Date`                    | The local time when the notification was tapped                      |
| `notificationId` | `number`                  | The id of the notification that has been tapped                      |
| `tapAction`      | [`TapAction`](#tapaction) | The tap action of the notification that has been tapped              |

#### NotificationDiscardRecord

| Property         | Type                      | Description                                                              |
|------------------|---------------------------|--------------------------------------------------------------------------|
| `id`             | `string`                  | Record's unique id                                                       |
| `type`           | `string`                  | Always `notification-discard`                                            |
| `change`         | `Change`                  | Always `none`. Notification discard's starts and ends cannot be detected |
| `timestamp`      | `Date`                    | The local time when the notification was discarded                       |
| `notificationId` | `number`                  | The id of the notification that has been discarded                       |
| `tapAction`      | [`TapAction`](#tapaction) | The tap action of the notification that has been discarded               |

</details>

<details>

<summary>User interactions</summary>

User interactions include the `UserReadContent`, `QuestionnaireAnswers`, `UserFeedback` and `UserConfirmation` records.

#### UserReadContent

This record is meant to be manually created (and optionally emitted, using `awarns.emit()`), after users close a content shown when handling an `OPEN_CONTENT` tap action.

| Property         | Type      | Description                                                                                                                                  |
|------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `id`             | `string`  | Record's unique id                                                                                                                           |
| `type`           | `string`  | Always `user-content-read`                                                                                                                   |
| `change`         | `Change`  | Always `none`. This record is meant to be used after the user finishes seeing a content. The start is reflected by the NotificationTapRecord |
| `timestamp`      | `Date`    | The local time when the content was closed                                                                                                   |
| `contentId`      | `string`  | The id of the content seen by the user                                                                                                       |
| `completelyRead` | `boolean` | Allows to indicate if the user has seen the content to its full extension. Defaults to `false`                                               |
| `notificationId` | `number`  | (Optional) The id of the notification that lead to this content being displayed                                                              |

#### QuestionnaireAnswers

This record is meant to be manually created (and optionally emitted, using `awarns.emit()`), after users submit a set of questions delivered when handling a `DELIVER_QUESTIONS` tap action.

| Property          | Type                        | Description                                                                                                                                                               |
|-------------------|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`              | `string`                    | Record's unique id                                                                                                                                                        |
| `type`            | `string`                    | Always `questionnaire-answers`                                                                                                                                            |
| `change`          | `Change`                    | Always `none`. This record is meant to be used after the user finishes answering the delivered questions. The start is reflected by the NotificationTapRecord             |
| `timestamp`       | `Date`                      | The local time when the questions were answered                                                                                                                           |
| `questionnaireId` | `string`                    | The id of the questionnaire answered by the user                                                                                                                          |
| `answers`         | `Array<QuestionnaireAnswer` | Includes each of the user's answers to the questions that have been delivered. The table bellow describes each one of the properties of the QuestionnaireAnswer interface |
| `notificationId`  | `number`                    | (Optional) The id of the notification that lead to this questionnaire being delivered                                                                                     |

##### QuestionnaireAnswer

| Property               | Type                                  | Description                                                                     |
|------------------------|---------------------------------------|---------------------------------------------------------------------------------|
| `title`                | `string`                              | The title of the question                                                       |
| `answer`               | `number &vert; string &vert; boolean` | The answer provided by the user                                                 |
| `millisecondsToAnswer` | `number`                              | (Optional) The amount of milliseconds that took the user to answer the question |

#### UserFeedback

This record is meant to be manually created (and optionally emitted, using `awarns.emit()`), after users submit some feedback they've been asked for when handling an `ASK_FEEDBACK` tap action.

| Property         | Type                                                | Description                                                                                                                         |
|------------------|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `id`             | `string`                                            | Record's unique id                                                                                                                  |
| `type`           | `string`                                            | Always `user-feedback`                                                                                                              |
| `change`         | `Change`                                            | Always `none`. This record is meant to be used after the user submits feedback. The start is reflected by the NotificationTapRecord |
| `timestamp`      | `Date`                                              | The local time when the feedback was submitted                                                                                      |
| `feedbackId`     | `string`                                            | The id of the feedback form submitted by the user                                                                                   |
| `question`       | `string`                                            | The matter the user has been asked for                                                                                              |
| `feedback`       | `string`                                            | The answer submitted by the user                                                                                                    |
| `notificationId` | `number`                                            | (Optional) The id of the notification that lead to this feedback being asked                                                        |

#### UserConfirmation

This record is meant to be manually created (and optionally emitted, using `awarns.emit()`), after users confirm or reject a statement presented when handling an `ASK_CONFIRMATION` tap action.

| Property         | Type      | Description                                                                                                                                        |
|------------------|-----------|----------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`             | `string`  | Record's unique id                                                                                                                                 |
| `type`           | `string`  | Always `user-confirmation`                                                                                                                         |
| `change`         | `Change`  | Always `none`. This record is meant to be used after the user confirms or rejects a statement. The start is reflected by the NotificationTapRecord |
| `timestamp`      | `Date`    | The local time when the statement was confirmed or rejected                                                                                        |
| `confirmationId` | `string`  | The id of the confirmation form answered by the user                                                                                               |
| `question`       | `string`  | The confirmation the user has been asked for                                                                                                       |
| `confirmed`      | `boolean` | Indicates if the user has confirmed the statement or not                                                                                           |
| `notificationId` | `number`  | (Optional) The id of the notification that lead to this confirmation being requested                                                               |


</details>

## License

Apache License Version 2.0
