import { Folder } from '@nativescript/core';

import { JSONExporter } from '../json-exporter';
import { Record } from '../../../../providers';
import { RecordsStore, syncedRecordsStore } from '../../../stores/timeseries';

export class JSONRecordsExporter extends JSONExporter<Record> {
  constructor(folder: Folder, fileName?: string, private recordsStore: RecordsStore = syncedRecordsStore) {
    super(folder, fileName);
  }

  protected getItemsToExport(): Promise<Array<Record>> {
    return this.recordsStore.getAll();
  }
}
