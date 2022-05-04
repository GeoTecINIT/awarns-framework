import { awarns } from '@awarns/core';

export async function emitStartEvent() {
  const isReady = await awarns.isReady();
  if (!isReady) {
    const tasksNotReady = await awarns.tasksNotReady$;
    console.log(
      `The following tasks are not ready!: ${JSON.stringify(
        tasksNotReady.map((task) => task.name)
      )}. Going to prepare them...`
    );
    await awarns.prepare();
  }
  awarns.emitEvent('startEvent');
}
