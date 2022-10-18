import { Folder } from '@nativescript/core';

import { JSONExporter } from '../json';
import { Record } from '@awarns/core/entities';
import { RecordsStore, syncedRecordsStore } from '../../stores';

export class JSONRecordsExporter extends JSONExporter<Record> {
  constructor(
    folder: Folder,
    fileName?: string,
    private recordTypes?: string[],
    private recordsStore: RecordsStore = syncedRecordsStore
  ) {
    super(folder, fileName);
  }

  protected async getItemsToExport(): Promise<Array<Record>> {
    const allRecords = await this.recordsStore.getAll();
    if (!this.recordTypes) return allRecords;
    return allRecords.filter((record) => this.recordTypes.includes(record.type));
  }
}
