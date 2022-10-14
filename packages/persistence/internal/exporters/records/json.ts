import { Folder } from '@nativescript/core';

import { JSONExporter } from '../json';
import { Record } from '@awarns/core/entities';
import { RecordsStore, syncedRecordsStore } from '../../stores';
import { firstValueFrom } from 'rxjs';

export class JSONRecordsExporter extends JSONExporter<Record> {
  constructor(
    folder: Folder,
    fileName?: string,
    private recordType?: string,
    private recordsStore: RecordsStore = syncedRecordsStore
  ) {
    super(folder, fileName);
  }

  protected getItemsToExport(): Promise<Array<Record>> {
    if (!this.recordType) return this.recordsStore.getAll();
    return firstValueFrom(this.recordsStore.listBy(this.recordType));
  }
}
