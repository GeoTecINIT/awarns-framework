import { Observable } from '@nativescript/core';
import { Task } from 'nativescript-task-dispatcher/tasks';
import { TaskGraph } from 'nativescript-task-dispatcher/tasks/graph';
import { taskDispatcher, ConfigParams as TDConfigParams } from 'nativescript-task-dispatcher';
import { builtInTasks } from './internal/tasks';
import { contextApis } from 'nativescript-context-apis';
import { EventData } from 'nativescript-task-dispatcher/events';
import { HumanActivityProvider } from './internal/providers/activity-recognition/provider';
import { RecordsStore, syncedRecordsStore, syncedTracesStore } from './internal/persistence/stores/timeseries';
import { enableLogging, setLoggerCreator } from './internal/utils/logger';
import { notificationsManager } from './internal/notifications/manager';
import { TracesStore } from './storage/traces';

export class CoreCommon extends Observable {
  public async init(appTasks: Array<Task>, appTaskGraph: TaskGraph, config: ConfigParams = {}): Promise<void> {
    CoreCommon.configure(config);
    await taskDispatcher.init([...builtInTasks, ...appTasks], appTaskGraph, config);
    CoreCommon.initializeListeners();
    await contextApis.init();
    await CoreCommon.syncStores();
    await CoreCommon.clearOldData();
  }

  public isReady(): Promise<boolean> {
    return taskDispatcher.isReady();
  }

  public get tasksNotReady$(): Promise<Array<Task>> {
    return taskDispatcher.tasksNotReady;
  }

  public prepare(): Promise<void> {
    return taskDispatcher.prepare();
  }

  public emitEvent(eventName: string, eventData: EventData = {}): void {
    taskDispatcher.emitEvent(eventName, eventData);
  }

  private static initializeListeners() {
    HumanActivityProvider.setup();
  }

  private static async syncStores() {
    await syncedRecordsStore.sync();
    await syncedTracesStore.sync();
  }

  private static async clearOldData() {
    await syncedRecordsStore.clearOld();
    await syncedTracesStore.clearOld();
  }

  private static configure(config: ConfigParams) {
    if (config.customLogger) {
      setLoggerCreator(config.customLogger);
    }
    if (config.enableLogging || config.customLogger) {
      enableLogging();
    }
    if (config.notificationsChannelName) {
      notificationsManager.setChannelName(config.notificationsChannelName);
    }
    if (config.externalRecordsStore) {
      syncedRecordsStore.setExternalStore(config.externalRecordsStore);
    }
    if (config.externalTracesStore) {
      syncedTracesStore.setExternalStore(config.externalTracesStore);
    }
    if (config.oldRecordsMaxAgeHours) {
      syncedRecordsStore.setClearOldThreshold(config.oldRecordsMaxAgeHours);
    }
    if (config.oldTracesMaxAgeHours) {
      syncedTracesStore.setClearOldThreshold(config.oldTracesMaxAgeHours);
    }
  }
}

export interface ConfigParams extends TDConfigParams {
  notificationsChannelName?: string;
  externalRecordsStore?: RecordsStore;
  oldRecordsMaxAgeHours?: number;
  externalTracesStore?: TracesStore;
  oldTracesMaxAgeHours?: number;
}
