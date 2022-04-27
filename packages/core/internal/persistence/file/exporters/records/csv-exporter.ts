import { Folder } from '@nativescript/core';

import { CSVExporter } from '../csv-exporter';
import { Record } from '../../../../providers';
import { RecordsStore, syncedRecordsStore } from '../../../stores/timeseries';
import { toTimestampWithTimezoneOffset, jsonDateReplacer } from '../../../../utils/date';

export class CSVRecordsExporter extends CSVExporter<Record> {
  constructor(folder: Folder, fileName?: string, private recordsStore: RecordsStore = syncedRecordsStore) {
    super(folder, fileName);
  }

  protected getItemsToExport(): Promise<Array<Record>> {
    return this.recordsStore.getAll();
  }

  protected formatHeaders(): Array<string> {
    return ['timestamp', 'timezoneOffset', 'type', 'change', 'extra_properties'];
  }

  protected formatRow(record: Record): Array<number | string | boolean> {
    const { timestamp, type, change, ...extraProperties } = record;
    const { value, offset } = toTimestampWithTimezoneOffset(timestamp);
    return [value, offset, type, change, JSON.stringify(extraProperties, jsonDateReplacer)];
  }
}
