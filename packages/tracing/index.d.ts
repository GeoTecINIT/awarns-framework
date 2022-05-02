import { PluginLoader } from '@awarns/core';
import { TracesStore } from './stores';

export * from './entities';
export * from './tasks';
export * from './stores';
export * from './exporters';

export interface TracingConfig {
  externalTracesStore?: TracesStore;
  oldTracesMaxAgeHours?: number;
}

export function registerTracingPlugin(config?: TracingConfig): PluginLoader;
