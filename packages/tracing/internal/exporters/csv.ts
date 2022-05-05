import { Folder } from '@nativescript/core';

import { CSVExporter } from '@awarns/persistence/exporters';
import { Trace } from '../entities';
import { TracesStore, syncedTracesStore } from '../stores';
import { toTimestampWithTimezoneOffset, jsonDateReplacer } from '@awarns/core/utils/date';

export class CSVTracesExporter extends CSVExporter<Trace> {
  constructor(folder: Folder, fileName?: string, private tracesStore: TracesStore = syncedTracesStore) {
    super(folder, fileName);
  }

  protected getItemsToExport(): Promise<Array<Trace>> {
    return this.tracesStore.getAll();
  }

  protected formatHeaders(): Array<string> {
    return ['timestamp', 'timezoneOffset', 'chainId', 'type', 'name', 'result', 'content'];
  }

  protected formatRow(trace: Trace): Array<number | string | boolean> {
    const { timestamp, chainId, type, name, result, content } = trace;
    const { value, offset } = toTimestampWithTimezoneOffset(timestamp);
    return [value, offset, chainId, type, name, result, JSON.stringify(content, jsonDateReplacer)];
  }
}
