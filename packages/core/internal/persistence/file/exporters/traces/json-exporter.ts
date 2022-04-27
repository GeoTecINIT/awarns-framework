import { Folder } from '@nativescript/core';

import { JSONExporter } from '../json-exporter';
import { Trace } from '../../../../tasks/tracing';
import { TracesStore, syncedTracesStore } from '../../../stores/timeseries';

export class JSONTracesExporter extends JSONExporter<Trace> {
  constructor(folder: Folder, fileName?: string, private tracesStore: TracesStore = syncedTracesStore) {
    super(folder, fileName);
  }

  protected getItemsToExport(): Promise<Array<Trace>> {
    return this.tracesStore.getAll();
  }
}
