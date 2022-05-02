import { DemoSharedBase } from '../utils';
import { NotificationCallbacks } from '../notifications/callbacks';

import { alert, AlertOptions, confirm, ConfirmOptions, knownFolders } from '@nativescript/core';

import { Subject, Subscription } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';

import { Trace, TracesStore, tracesStore } from '@awarns/core/storage/traces';

import { ExportResult, createTracesExporter } from '@awarns/core/storage/exporters';

import { setupAreasOfInterest } from '../geofencing/setup';
import { emitStartEvent } from './common';

const SIZE_INCREMENT = 10;

const EXPORT_FOLDER = knownFolders.documents().getFolder('Record logs');

export class DemoSharedCore extends DemoSharedBase {
  notificationCallbacks = new NotificationCallbacks();

  get traces() {
    return this._traces;
  }

  get exportingTraces() {
    return this._exportingTraces;
  }

  private _traces = [];
  private _size = 0;

  private _exportingTraces = false;

  private _fetchOrders: Subject<number>;
  private _subscription: Subscription;

  constructor(private store: TracesStore = tracesStore) {
    super();
    this.subscribeToDatabaseChanges();
    this.loadMore();
  }

  setupDemo() {
    setupAreasOfInterest()
      .then(() => emitStartEvent())
      .then(() => {
        console.log('Start event emitted!');
      })
      .catch((err) => {
        console.error(`Could not emit start event: ${err.stack ? err.stack : JSON.stringify(err)}`);
      });
  }

  handleExportTap() {
    this.exportTraces()
      .then((result) => {
        const alertOptions: AlertOptions = {
          message: `Event log exported (${result.exportCount} exported)`,
          okButtonText: 'OK',
        };
        return alert(alertOptions);
      })
      .catch((err) => {
        console.error(`Could not export records: ${err.stack ? err.stack : JSON.stringify(err)}`);
      });
  }

  handleClearTap() {
    const confirmOptions: ConfirmOptions = {
      title: 'Clear tracked events',
      message: 'Are you sure you want to clear all your tracked events?',
      okButtonText: 'Yes',
      cancelButtonText: 'No',
    };
    confirm(confirmOptions).then((confirmed) => {
      if (confirmed) {
        this.clearTraces();
      }
    });
  }

  loadMore() {
    console.log(`Loading more items...`);
    this._size += SIZE_INCREMENT;
    this._fetchOrders.next(this._size);
  }

  private exportTraces(): Promise<ExportResult> {
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

  private clearTraces() {
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
