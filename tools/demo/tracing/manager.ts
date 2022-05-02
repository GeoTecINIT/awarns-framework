import { createTracesExporter, ExportResult, Trace, tracesStore, TracesStore } from '@awarns/tracing';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';
import { knownFolders, Observable } from '@nativescript/core';

const EXPORT_FOLDER = knownFolders.documents().getFolder('Record logs');

export class TracesManager extends Observable {
  get traces() {
    return this._traces;
  }

  get exportingTraces() {
    return this._exportingTraces;
  }

  private _traces = [];

  private _exportingTraces = false;
  private _fetchOrders: Subject<number>;

  private _subscription: Subscription;

  constructor(private store: TracesStore = tracesStore) {
    super();
    this.subscribeToDatabaseChanges();
  }

  fetchMore(size: number) {
    this._fetchOrders.next(size);
  }

  exportTraces(): Promise<ExportResult> {
    this.toggleExportingTraces(true);
    return createTracesExporter(EXPORT_FOLDER)
      .export()
      .then((result) => {
        this.toggleExportingTraces(false);
        return result;
      })
      .catch((err) => {
        this.toggleExportingTraces(false);
        return err;
      });
  }

  clearTraces() {
    console.warn('Up to clear traces!');
    this.store.clear();
  }

  private subscribeToDatabaseChanges() {
    this._fetchOrders = new Subject<number>();

    const listTraces = (size: number) => this.store.list(size).pipe(map((traces) => traces.map(formatTrace)));

    const stream = this._fetchOrders.pipe(debounceTime(1000), switchMap(listTraces));

    this._subscription = stream.subscribe({
      next: (traces) => {
        this._traces = traces;
        this.notifyPropertyChange('traces', traces);
      },
      error: (err) => console.error(`Error loading traces: ${err}`),
    });
  }

  private toggleExportingTraces(value: boolean) {
    this._exportingTraces = value;
    this.notifyPropertyChange('exportingTraces', value);
  }
}

function formatTrace(trace: Trace) {
  return {
    ...trace,
    timestamp: timestampFormatter(trace.timestamp),
  };
}

function timestampFormatter(t: Date) {
  const day = twoDigits(t.getDate());
  const month = twoDigits(t.getMonth() + 1);
  const year = t.getFullYear();
  const hour = twoDigits(t.getHours());
  const minutes = twoDigits(t.getMinutes());
  const seconds = twoDigits(t.getSeconds());

  return `${day}/${month}/${year} ${hour}:${minutes}:${seconds}`;
}

function twoDigits(num: number): String {
  return `0${num}`.slice(-2);
}
