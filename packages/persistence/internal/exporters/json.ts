import { Folder } from '@nativescript/core';
import { AbstractExporter } from './abstract';
import { ExportResult } from './index';
import { jsonDateReplacer } from '@awarns/core/utils/date';

export abstract class JSONExporter<T> extends AbstractExporter<T> {
  protected constructor(folder: Folder, fileName?: string) {
    super(folder, 'json', fileName);
  }

  async export(): Promise<ExportResult> {
    const items = await this.getItemsToExport();
    const file = this.folder.getFile(this.fileName);
    await file.writeText(JSON.stringify(items, jsonDateReplacer));

    return {
      exportCount: items.length,
      fileName: this.fileName,
    };
  }
}
