import { Observable } from '@nativescript/core';
import { Task } from 'nativescript-task-dispatcher/tasks';
import { TaskGraph } from 'nativescript-task-dispatcher/tasks/graph';
import { taskDispatcher, ConfigParams as TDConfigParams } from 'nativescript-task-dispatcher';
import { builtInTasks } from './internal/tasks';
import { EventData } from 'nativescript-task-dispatcher/events';
import { RecordsStore, syncedRecordsStore } from './internal/persistence/stores/timeseries';
import { enableLogging, setLoggerCreator } from './internal/utils/logger';

export class CoreCommon extends Observable {
  public async init(appTasks: Array<Task>, appTaskGraph: TaskGraph, pluginLoaders: Array<PluginLoader> = [], config: ConfigParams = {}): Promise<void> {
    CoreCommon.configure(config);
    const tasksInUse = [...builtInTasks, ...appTasks];
    await taskDispatcher.init(tasksInUse, appTaskGraph, config);
    for (const pluginLoader of pluginLoaders) {
      await pluginLoader(tasksInUse);
    }
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

  private static async syncStores() {
    await syncedRecordsStore.sync();
  }

  private static async clearOldData() {
    await syncedRecordsStore.clearOld();
  }

  private static configure(config: ConfigParams) {
    if (config.customLogger) {
      setLoggerCreator(config.customLogger);
    }
    if (config.enableLogging || config.customLogger) {
      enableLogging();
    }
    if (config.externalRecordsStore) {
      syncedRecordsStore.setExternalStore(config.externalRecordsStore);
    }
    if (config.oldRecordsMaxAgeHours) {
      syncedRecordsStore.setClearOldThreshold(config.oldRecordsMaxAgeHours);
    }
  }
}

export type PluginLoader = (tasksInUse?: Array<Task>) => Promise<void> | void;

export interface ConfigParams extends TDConfigParams {
  externalRecordsStore?: RecordsStore;
  oldRecordsMaxAgeHours?: number;
}
