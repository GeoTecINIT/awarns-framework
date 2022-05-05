import { ExportResult, Exporter } from './index';
import { Folder } from '@nativescript/core';

export abstract class AbstractExporter<T> implements Exporter {
  protected readonly fileName: string;

  protected constructor(
    protected readonly folder: Folder,
    fileExtension: string,
    fileName: string = Date.now().toString()
  ) {
    this.fileName = `${fileName}.${fileExtension}`;
  }

  abstract export(): Promise<ExportResult>;

  protected abstract getItemsToExport(): Promise<Array<T>>;
}
