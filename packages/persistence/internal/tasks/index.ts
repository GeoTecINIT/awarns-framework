import { Task } from '@awarns/core/tasks';
import { RecordWriterTask } from './record-writer';

export function writeRecordsTask(): Task {
  return new RecordWriterTask('writeRecords');
}
