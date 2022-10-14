import { awarns } from '@awarns/core';
import { demoTasks } from '../tasks';
import { demoTaskGraph } from '../graph';
import { registerHumanActivityPlugin } from '@awarns/human-activity';
import { registerNotificationsPlugin } from '@awarns/notifications';
import { registerTracingPlugin } from '@awarns/tracing';
import { registerPersistencePlugin } from '@awarns/persistence';
import { allSensors, registerWearOSPlugin } from '@awarns/wear-os';
import { registerPhoneSensorsPlugin } from '@awarns/phone-sensors';

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
        registerPhoneSensorsPlugin(false),
        registerWearOSPlugin({
          sensors: allSensors,
          enablePlainMessaging: true,
          enableWearCommands: true,
        }),
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
