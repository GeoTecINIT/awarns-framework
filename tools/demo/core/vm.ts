import { DemoSharedBase } from '../utils';
import { NotificationCallbacks } from '../notifications/callbacks';
import { TracesManager } from '../tracing/manager';

import { alert, AlertOptions, confirm, ConfirmOptions } from '@nativescript/core';

import { setupAreasOfInterest } from '../geofencing/setup';
import { emitStartEvent } from './common';

const SIZE_INCREMENT = 10;

export class DemoSharedCore extends DemoSharedBase {
  notificationCallbacks = new NotificationCallbacks();

  get traces() {
    return this.tracesManager.traces;
  }

  get exportingTraces() {
    return this.tracesManager.exportingTraces;
  }

  private tracesManager = new TracesManager();
  private _size = 0;

  constructor() {
    super();
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
    this.tracesManager
      .exportTraces()
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
        this.tracesManager.clearTraces();
      }
    });
  }

  loadMore() {
    console.log(`Loading more items...`);
    this._size += SIZE_INCREMENT;
    this.tracesManager.fetchMore(this._size);
  }
}
