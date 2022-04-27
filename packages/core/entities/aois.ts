export * from '../internal/tasks/geofencing/aoi';

export { GeofencingProximity } from '../internal/tasks/geofencing/geofencing-state';

import { AreasOfInterestStore as AOIS, areasOfInterestStoreDB as areasOfInterest } from '../internal/persistence/stores/geofencing/aois';
export type AreasOfInterest = AOIS;
export { areasOfInterest };
