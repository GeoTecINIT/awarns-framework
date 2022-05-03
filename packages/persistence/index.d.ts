import { PluginLoader } from '@awarns/core';
import { RecordsStore } from './stores';

export * from './stores';
export * from './exporters';
export * from './tasks';

export interface PersistenceConfig {
  externalRecordsStore?: RecordsStore;
  oldRecordsMaxAgeHours?: number;
}

export function registerPersistencePlugin(config?: PersistenceConfig): PluginLoader;
