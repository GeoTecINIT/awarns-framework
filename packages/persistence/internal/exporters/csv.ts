import { Folder } from '@nativescript/core';
import { AbstractExporter } from './abstract';
import { ExportResult } from './index';

const SEPARATOR = ',';

export abstract class CSVExporter<T> extends AbstractExporter<T> {
  private textToWrite = '';

  protected constructor(folder: Folder, fileName?: string) {
    super(folder, 'csv', fileName);
  }

  async export(): Promise<ExportResult> {
    const items = await this.getItemsToExport();
    this.writeHeaders();
    for (const item of items) {
      this.writeRow(item);
    }
    await this.flush();
    return {
      exportCount: items.length,
      fileName: this.fileName,
    };
  }

  private writeHeaders() {
    const headers = this.formatHeaders();
    this.writeLine(headers.join(SEPARATOR));
  }

  protected abstract formatHeaders(): Array<string>;

  private writeRow(item: T) {
    const unprocessedRow = this.formatRow(item);
    const row = unprocessedRow.map((element) => (typeof element === 'string' ? formatString(element) : element));
    this.writeLine(row.join(SEPARATOR));
  }

  protected abstract formatRow(item: T): Array<number | string | boolean>;

  private writeLine(line: string) {
    if (this.textToWrite === '') {
      this.textToWrite = line;
    } else {
      this.textToWrite += `\n${line}`;
    }
  }

  private async flush() {
    const file = this.folder.getFile(this.fileName);
    await file.writeText(this.textToWrite);
    this.textToWrite = '';
  }
}

function formatString(str: string) {
  return `"${str.split('"').join('""')}"`;
}
