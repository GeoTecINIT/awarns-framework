import { Folder } from '@nativescript/core';
import { Exporter, ExportFormats } from '../index';
import { CSVTracesExporter } from './csv-exporter';
import { JSONTracesExporter } from './json-exporter';

export function createTracesExporter(folder: Folder, format: ExportFormats = 'csv', fileName?: string): Exporter {
  switch (format) {
    case 'csv':
      return new CSVTracesExporter(folder, fileName);
    case 'json':
      return new JSONTracesExporter(folder, fileName);
  }
}

export * from '../index';
