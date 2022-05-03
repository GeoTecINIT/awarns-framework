import { Folder } from '@nativescript/core';

import { JSONExporter } from '@awarns/persistence/exporters';
import { Trace } from '../entities';
import { TracesStore, syncedTracesStore } from '../stores';

export class JSONTracesExporter extends JSONExporter<Trace> {
  constructor(folder: Folder, fileName?: string, private tracesStore: TracesStore = syncedTracesStore) {
    super(folder, fileName);
  }

  protected getItemsToExport(): Promise<Array<Trace>> {
    return this.tracesStore.getAll();
  }
}
