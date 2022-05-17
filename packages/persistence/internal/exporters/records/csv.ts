import { Folder } from '@nativescript/core';

import { CSVExporter } from '../csv';
import { Record } from '@awarns/core/entities';
import { RecordsStore, syncedRecordsStore } from '../../stores';
import { toTimestampWithTimezoneOffset, jsonDateReplacer } from '@awarns/core/utils/date';

export class CSVRecordsExporter extends CSVExporter<Record> {
  constructor(folder: Folder, fileName?: string, private recordsStore: RecordsStore = syncedRecordsStore) {
    super(folder, fileName);
  }

  protected getItemsToExport(): Promise<Array<Record>> {
    return this.recordsStore.getAll();
  }

  protected formatHeaders(): Array<string> {
    return ['id', 'timestamp', 'timezoneOffset', 'type', 'change', 'extra_properties'];
  }

  protected formatRow(record: Record): Array<number | string | boolean> {
    const { id, timestamp, type, change, ...extraProperties } = record;
    const { value, offset } = toTimestampWithTimezoneOffset(timestamp);
    return [id, value, offset, type, change, JSON.stringify(extraProperties, jsonDateReplacer)];
  }
}
