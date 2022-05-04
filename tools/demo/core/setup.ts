import { awarns } from '@awarns/core';
import { demoTasks } from '../tasks';
import { demoTaskGraph } from '../graph';
import { registerHumanActivityPlugin } from '@awarns/human-activity';
import { registerNotificationsPlugin } from '@awarns/notifications';

export function initializePlugin() {
  awarns
    .init(demoTasks, demoTaskGraph, [registerHumanActivityPlugin(), registerNotificationsPlugin('Intervention alerts')], {
      enableLogging: true,
    })
    .then(() => console.log('AwarNS framework successfully loaded'))
    .catch((err) => {
      console.error(`Could not load AwarNS framework: ${err.stack ? err.stack : err}`);
    });
}
