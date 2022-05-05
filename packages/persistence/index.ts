import { PluginLoader } from '@awarns/core';
import { syncedRecordsStore } from './internal/stores';
import { RecordsStore } from './stores';
import { getLogger } from '@awarns/core/utils/logger';

export * from './stores';
export * from './exporters';
export * from './tasks';

export interface PersistenceConfig {
  externalRecordsStore?: RecordsStore;
  oldRecordsMaxAgeHours?: number;
}

export function registerPersistencePlugin(config: PersistenceConfig = {}): PluginLoader {
  return () => {
    if (config.externalRecordsStore) {
      syncedRecordsStore.setExternalStore(config.externalRecordsStore);
    }
    if (config.oldRecordsMaxAgeHours !== undefined) {
      syncedRecordsStore.setClearOldThreshold(config.oldRecordsMaxAgeHours);
    }

    const detachedDBMaintenance = async () => {
      await syncedRecordsStore.sync();
      await syncedRecordsStore.clearOld();
    };
    detachedDBMaintenance().catch((err) => {
      getLogger('PersistencePlugin').error(`Could not complete DB maintenance. Reason: ${err.stack ?? err}`);
    });
  };
}
