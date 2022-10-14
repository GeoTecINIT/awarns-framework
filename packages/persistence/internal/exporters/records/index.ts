import { Folder } from '@nativescript/core';
import { Exporter, ExportFormats } from '../index';
import { CSVRecordsExporter } from './csv';
import { JSONRecordsExporter } from './json';

export function createRecordsExporter(
  folder: Folder,
  format: ExportFormats = 'csv',
  fileName?: string,
  recordType?: string
): Exporter {
  switch (format) {
    case 'csv':
      return new CSVRecordsExporter(folder, fileName, recordType);
    case 'json':
      return new JSONRecordsExporter(folder, fileName, recordType);
  }
}

export * from '../index';
