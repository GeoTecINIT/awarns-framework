import { AreaOfInterest, areasOfInterest } from '@awarns/geofencing';

export async function setupAreasOfInterest() {
  console.log('Setting up areas of interest...');
  const aois = await areasOfInterest.getAll();

  const newAoIs: Array<AreaOfInterest> = [
    {
      id: 'uminho-1',
      name: 'DSI',
      latitude: 41.453299426593915,
      longitude: -8.289187252521515,
      radius: 100,
    },
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
