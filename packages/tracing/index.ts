import { PluginLoader } from '@awarns/core/common';
import { syncedTracesStore } from './internal/stores';
import { TracesStore } from './stores';
import { getLogger } from '@awarns/core/utils/logger';

export * from './entities';
export * from './tasks';
export * from './stores';
export * from './exporters';

export interface TracingConfig {
  externalTracesStore?: TracesStore;
  oldTracesMaxAgeHours?: number;
}

export function registerTracingPlugin(config: TracingConfig = {}): PluginLoader {
  return () => {
    if (config.externalTracesStore) {
      syncedTracesStore.setExternalStore(config.externalTracesStore);
    }
    if (config.oldTracesMaxAgeHours !== undefined) {
      syncedTracesStore.setClearOldThreshold(config.oldTracesMaxAgeHours);
    }

    const detachedDBMaintenance = async () => {
      await syncedTracesStore.sync();
      await syncedTracesStore.clearOld();
    };
    detachedDBMaintenance().catch((err) => {
      getLogger('TracingPlugin').error(`Could not complete DB maintenance. Reason: ${err.stack ?? err}`);
    });
  };
}
