import { AreaOfInterest, areasOfInterest } from '@awarns/core/entities/aois';
import { awarns } from '@awarns/core';

export async function setupAreasOfInterest() {
  console.log('Setting up areas of interest...');
  const aois = await areasOfInterest.getAll();

  const newAoIs: Array<AreaOfInterest> = [
    // Add your areas of interest here
  ];
  if (aois.length === newAoIs.length) {
    console.log('Areas already set up!');
    return;
  }
  await areasOfInterest.deleteAll();

  console.log(`Going to store ${newAoIs.length} new areas of interest`);
  await areasOfInterest.insert(newAoIs);
  console.log('Done setting up areas of interest!');
}

export async function emitStartEvent() {
  const isReady = await awarns.isReady();
  if (!isReady) {
    const tasksNotReady = await awarns.tasksNotReady$;
    console.log(`The following tasks are not ready!: ${JSON.stringify(tasksNotReady.map((task) => task.name))}. Going to prepare them...`);
    await awarns.prepare();
  }
  awarns.emitEvent('startEvent');
}
