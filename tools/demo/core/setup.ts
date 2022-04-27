import { awarns } from '@awarns/core';
import { demoTaskGraph } from './graph';

export function initializePlugin() {
  awarns
    .init([], demoTaskGraph, {
      enableLogging: true,
      notificationsChannelName: 'Intervention alerts',
    })
    .then(() => console.log('AwarNS framework successfully loaded'))
    .catch((err) => {
      console.error(`Could not load AwarNS framework: ${err.stack ? err.stack : err}`);
    });
}
