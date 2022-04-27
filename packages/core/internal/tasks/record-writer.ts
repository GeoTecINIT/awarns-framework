import { Task, TaskParams } from 'nativescript-task-dispatcher/tasks';
import { DispatchableEvent } from 'nativescript-task-dispatcher/events';

import { Record } from '../providers';
import { syncedRecordsStore } from '../persistence/stores/timeseries';

export class RecordWriterTask extends Task {
  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<void> {
    const data = invocationEvent.data;

    if (!data) {
      throw new Error('RecordWriterTask was called without data to record');
    }

    if (Array.isArray(data)) {
      for (const record of data as Array<Record>) {
        await this.storeRecord(record);
      }
    } else {
      await this.storeRecord(data as Record);
    }
  }

  private async storeRecord(record: Record): Promise<void> {
    await syncedRecordsStore.insert(record);
    this.log(`A new record has been logged: ${JSON.stringify(record)}`);
  }
}
