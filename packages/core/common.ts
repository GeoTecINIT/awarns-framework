import { Observable } from '@nativescript/core';
import { Task } from 'nativescript-task-dispatcher/tasks';
import { TaskGraph } from 'nativescript-task-dispatcher/tasks/graph';
import { taskDispatcher, ConfigParams } from 'nativescript-task-dispatcher';
import { EventData } from 'nativescript-task-dispatcher/events';
import { enableLogging, setLoggerCreator } from './internal/utils/logger';

export class CoreCommon extends Observable {
  public async init(
    appTasks: Array<Task>,
    appTaskGraph: TaskGraph,
    pluginLoaders: Array<PluginLoader> = [],
    config: ConfigParams = {}
  ): Promise<void> {
    CoreCommon.configure(config);
    await taskDispatcher.init(appTasks, appTaskGraph, config);
    for (const pluginLoader of pluginLoaders) {
      await pluginLoader(appTasks);
    }
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

  private static configure(config: ConfigParams) {
    if (config.customLogger) {
      setLoggerCreator(config.customLogger);
    }
    if (config.enableLogging || config.customLogger) {
      enableLogging();
    }
  }
}

export type PluginLoader = (tasksInUse?: Array<Task>) => Promise<void> | void;
