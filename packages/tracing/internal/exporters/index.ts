import { Folder } from '@nativescript/core';
import { Exporter as E, ExportResult as ER, ExportFormats } from '@awarns/core/internal/persistence/file/exporters';
export type Exporter = E;
export type ExportResult = ER;

import { CSVTracesExporter } from './csv';
import { JSONTracesExporter } from './json';

export function createTracesExporter(folder: Folder, format: ExportFormats = 'csv', fileName?: string): Exporter {
  switch (format) {
    case 'csv':
      return new CSVTracesExporter(folder, fileName);
    case 'json':
      return new JSONTracesExporter(folder, fileName);
  }
}

export { ExportFormats };
