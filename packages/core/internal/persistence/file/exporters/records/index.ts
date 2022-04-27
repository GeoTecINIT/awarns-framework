import { Folder } from '@nativescript/core';
import { Exporter, ExportFormats } from '../index';
import { CSVRecordsExporter } from './csv-exporter';
import { JSONRecordsExporter } from './json-exporter';

export function createRecordsExporter(folder: Folder, format: ExportFormats = 'csv', fileName?: string): Exporter {
  switch (format) {
    case 'csv':
      return new CSVRecordsExporter(folder, fileName);
    case 'json':
      return new JSONRecordsExporter(folder, fileName);
  }
}

export * from '../index';
