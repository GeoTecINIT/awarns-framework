import { TaskConfig } from 'nativescript-task-dispatcher/tasks';

export interface TracerConfig extends TaskConfig {
  sensitiveData?: boolean;
}
