import { Folder } from '@nativescript/core';
import { Exporter, ExportFormats } from '../index';
import { CSVRecordsExporter } from './csv';
import { JSONRecordsExporter } from './json';

export interface RecordsExporterOptions {
  fileName?: string;
  recordTypes?: string[];
}

export function createRecordsExporter(
  folder: Folder,
  format: ExportFormats = 'csv',
  options?: RecordsExporterOptions
): Exporter {
  switch (format) {
    case 'csv':
      return new CSVRecordsExporter(folder, options.fileName, options.recordTypes);
    case 'json':
      return new JSONRecordsExporter(folder, options.fileName, options.recordTypes);
  }
}

export * from '../index';
