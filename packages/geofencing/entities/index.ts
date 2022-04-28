export * from '../internal/entities/aoi';
export { AoIProximityChange, GeofencingProximity } from '../internal/entities';

import { AreasOfInterestStore as AOIS, areasOfInterestStoreDB as areasOfInterest } from '../internal/persistence';
export type AreasOfInterest = AOIS;
export { areasOfInterest };
