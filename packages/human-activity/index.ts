import { PluginLoader } from '@awarns/core';
import { Task } from '@awarns/core/tasks';
import { HumanActivityProvider } from './internal/provider';
import { contextApis } from 'nativescript-context-apis';

export * from './entities';
export * from './tasks';

export function registerHumanActivityPlugin(): PluginLoader {
  return async (_tasksInUse: Array<Task>) => {
    // TODO: Use tasks to conditionally initialize listeners
    HumanActivityProvider.setup();
    await contextApis.init();
  };
}
