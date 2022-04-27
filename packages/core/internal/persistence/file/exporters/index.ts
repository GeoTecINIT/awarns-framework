export interface Exporter {
  export(): Promise<ExportResult>;
}

export interface ExportResult {
  exportCount: number;
  fileName: string;
}

export type ExportFormats = 'csv' | 'json';
