import { awarns } from '@awarns/core';
import { demoTasks } from '../tasks';
import { demoTaskGraph } from '../graph';
import { registerHumanActivityPlugin } from '@awarns/human-activity';
import { registerNotificationsPlugin } from '@awarns/notifications';
import { registerTracingPlugin } from '@awarns/tracing';
import { registerPersistencePlugin } from '@awarns/persistence';
import { registerWearOSPlugin } from '@awarns/wear-os';

export function initializePlugin() {
  awarns
    .init(
      demoTasks,
      demoTaskGraph,
      [
        registerHumanActivityPlugin(),
        registerNotificationsPlugin('Intervention alerts'),
        registerPersistencePlugin(),
        registerTracingPlugin(),
        registerWearOSPlugin(),
      ],
      {
        enableLogging: true,
      }
    )
    .then(() => console.log('AwarNS framework successfully loaded'))
    .catch((err) => {
      console.error(`Could not load AwarNS framework: ${err.stack ? err.stack : err}`);
    });
}
