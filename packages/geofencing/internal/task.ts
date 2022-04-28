import { TraceableTask, TracerConfig, TaskOutcome, TaskParams } from '@awarns/core/tasks';
import { DispatchableEvent } from '@awarns/core/events';
import { AreasOfInterestStore, areasOfInterestStoreDB, GeofencingStateStore, geofencingStateStoreDB, NearbyArea } from './persistence';
import { GeofencingChecker, GeofencingResult } from './checker';
import { Geolocation } from '@awarns/core/entities/geolocation';
import { AoIProximityChange, AreaOfInterest, GeofencingProximity } from './entities';
import { Change } from '@awarns/core/entities';

const DEFAULT_NEARBY_RANGE = 100;
const DEFAULT_OFFSET = 0;

const MOVED_CLOSE = 'movedCloseToAreaOfInterest';
const MOVED_INSIDE = 'movedInsideAreaOfInterest';
const MOVED_OUTSIDE = 'movedOutsideAreaOfInterest';
const MOVED_AWAY = 'movedAwayFromAreaOfInterest';

export class GeofencingTask extends TraceableTask {
  constructor(name: string, taskConfig: TracerConfig = {}, private state: GeofencingStateStore = geofencingStateStoreDB, private checker = new GeofencingChecker(), private aois: AreasOfInterestStore = areasOfInterestStoreDB) {
    super(name, {
      ...taskConfig,
      outputEventNames: [`${name}Finished`, MOVED_CLOSE, MOVED_INSIDE, MOVED_OUTSIDE, MOVED_AWAY],
    });
  }

  protected async onTracedRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<TaskOutcome> {
    const nearbyAreas = await this.queryNearbyAreasWith(invocationEvent, taskParams);

    if (nearbyAreas.length === 0) {
      return this.handleNoNearbyAreasLeft();
    }

    return this.handleNearbyAreas(nearbyAreas);
  }

  private queryNearbyAreasWith(invocationEvent: DispatchableEvent, taskParams: TaskParams): Promise<Array<GeofencingResult>> {
    const nearbyRange = taskParams.nearbyRange ? taskParams.nearbyRange : DEFAULT_NEARBY_RANGE;
    const offset = taskParams.offset ? taskParams.offset : DEFAULT_OFFSET;
    const evtData = invocationEvent.data;

    if (Array.isArray(evtData)) {
      return this.checker.findNearbyTrajectory(evtData as Array<Geolocation>, nearbyRange, offset);
    }
    return this.checker.findNearby(evtData as Geolocation, nearbyRange, offset);
  }

  private async handleNoNearbyAreasLeft(): Promise<TaskOutcome> {
    const knownNearbyAreas = await this.state.getKnownNearbyAreas();
    if (knownNearbyAreas.length === 0) {
      return { eventName: this.outputEventNames[0] };
    }
    const knownInsideAreas = filterInside(knownNearbyAreas);
    const knownCloseAreas = filterNearby(knownNearbyAreas);

    if (knownInsideAreas.length === 0) {
      await this.updateProximityState(knownCloseAreas, GeofencingProximity.OUTSIDE);
      const aois = await this.getRelatedAoIs(knownCloseAreas);
      const result = this.buildAoIProximityChanges(aois, GeofencingProximity.NEARBY, Change.END);
      return { eventName: MOVED_AWAY, result };
    }

    // First, notify the transition to moved outside, so in the invocation it can
    // jointly notify (along with the areas know to be nearby) as "moved away".
    await this.updateProximityState(knownInsideAreas, GeofencingProximity.NEARBY);
    const aois = await this.getRelatedAoIs(knownInsideAreas);
    const result = this.buildAoIProximityChanges(aois, GeofencingProximity.INSIDE, Change.END);
    return { eventName: MOVED_OUTSIDE, result };
  }

  private async handleNearbyAreas(nearbyAreas: Array<GeofencingResult>): Promise<TaskOutcome> {
    const insideAreas = filterInside(nearbyAreas);
    const closeAreas = filterNearby(nearbyAreas);

    if (insideAreas.length === 0) {
      const [changedFromInsideAreas, changedFromOutsideAreas] = await this.splitChangedFromNearby(closeAreas);

      if (changedFromInsideAreas.length === 0 && changedFromOutsideAreas.length === 0) {
        // Nothing changed, report nothing
        return { eventName: this.outputEventNames[0] };
      }

      if (changedFromInsideAreas.length === 0) {
        const aois = changedFromOutsideAreas.map((area) => area.aoi);
        await this.updateProximityState(aois, GeofencingProximity.NEARBY);
        const result = this.buildAoIProximityChanges(aois, GeofencingProximity.NEARBY, Change.START);
        return { eventName: MOVED_CLOSE, result };
      }

      // A transition from inside to outside has priority over an away to nearby transition
      const aois = changedFromInsideAreas.map((area) => area.aoi);
      await this.updateProximityState(aois, GeofencingProximity.NEARBY);
      const result = this.buildAoIProximityChanges(aois, GeofencingProximity.INSIDE, Change.END);
      return { eventName: MOVED_OUTSIDE, result };
    }

    const changedAreas = await this.filterChangedToInside(insideAreas);
    const aois = changedAreas.map((area) => area.aoi);
    await this.updateProximityState(aois, GeofencingProximity.INSIDE);

    if (changedAreas.length === 0) {
      // Do not disturb with other changes while inside
      return { eventName: this.outputEventNames[0] };
    }
    const result = this.buildAoIProximityChanges(aois, GeofencingProximity.INSIDE, Change.START);
    return { eventName: MOVED_INSIDE, result };
  }

  private async updateProximityState(identifiables: Array<Identifiable>, newProximity: GeofencingProximity): Promise<void> {
    await Promise.all(identifiables.map((identifiable) => this.state.updateProximity(identifiable.id, newProximity)));
  }

  private async getRelatedAoIs(areas: Array<NearbyArea>): Promise<Array<AreaOfInterest>> {
    const ids = areas.map((area) => area.id);
    const aois = await this.aois.getAll();
    return aois.filter((aoi) => ids.indexOf(aoi.id) !== -1);
  }

  private async splitChangedFromNearby(checkResults: Array<GeofencingResult>): Promise<[Array<GeofencingResult>, Array<GeofencingResult>]> {
    const changedFromInsideAreas: Array<GeofencingResult> = [];
    const changedFromOutsideAreas: Array<GeofencingResult> = [];
    for (const result of checkResults) {
      const proximity = await this.state.getProximity(result.aoi.id);
      if (proximity === GeofencingProximity.INSIDE) {
        changedFromInsideAreas.push(result);
      }
      if (proximity === GeofencingProximity.OUTSIDE) {
        changedFromOutsideAreas.push(result);
      }
    }
    return [changedFromInsideAreas, changedFromOutsideAreas];
  }

  private async filterChangedToInside(checkResults: Array<GeofencingResult>): Promise<Array<GeofencingResult>> {
    const changedOnes: Array<GeofencingResult> = [];
    for (const result of checkResults) {
      const proximity = await this.state.getProximity(result.aoi.id);
      if (proximity !== GeofencingProximity.INSIDE) {
        changedOnes.push(result);
      }
    }
    return changedOnes;
  }

  private buildAoIProximityChanges(aois: Array<AreaOfInterest>, proximity: GeofencingProximity, change: Change): Array<AoIProximityChange> {
    return aois.map((aoi) => new AoIProximityChange(aoi, proximity, change));
  }
}

function filterInside<T extends Approachable>(approachables: Array<T>): Array<T> {
  return filterByProximity(approachables, GeofencingProximity.INSIDE);
}

function filterNearby<T extends Approachable>(approachables: Array<T>): Array<T> {
  return filterByProximity(approachables, GeofencingProximity.NEARBY);
}

function filterByProximity<T extends Approachable>(approachables: Array<T>, proximity: GeofencingProximity): Array<T> {
  return approachables.filter((approachable) => approachable.proximity === proximity);
}

interface Identifiable {
  id: string;
}

interface Approachable {
  proximity: GeofencingProximity;
}
