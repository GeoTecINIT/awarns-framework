import { Task, TaskConfig, TaskOutcome, TaskParams } from '@awarns/core/tasks';
import { DispatchableEvent } from '@awarns/core/events';
import { GeofencingChecker } from './checker';
import { Geolocation } from '@awarns/geolocation';
import { GeofencingProximity } from './entities';

const DEFAULT_NEARBY_RANGE = 100;
const DEFAULT_OFFSET = 0;
const DEFAULT_INCLUDE_NEARBY = false;

const GEOLOCATION_CLOSE_TO_AOI = 'geolocationCloseToAoIAcquired';

export class GeofencingBasedFilterTask extends Task {
  constructor(name: string, taskConfig: TaskConfig = {}, private checker = new GeofencingChecker()) {
    super(name, {
      ...taskConfig,
      outputEventNames: [`${name}Finished`, GEOLOCATION_CLOSE_TO_AOI],
    });
  }

  protected async onRun(taskParams: TaskParams, invocationEvent: DispatchableEvent): Promise<TaskOutcome> {
    const nearbyRange = taskParams.nearbyRange ?? DEFAULT_NEARBY_RANGE;
    const offset = taskParams.offset ?? DEFAULT_OFFSET;
    const includeNearby = taskParams.includeNearby ?? DEFAULT_INCLUDE_NEARBY;
    const evtData = invocationEvent.data;

    if (!Array.isArray(evtData)) {
      const isClose = await this.checkIfLocationIsCloseToAnArea(evtData as Geolocation, {
        nearbyRange,
        offset,
        includeNearby,
      });

      return isClose
        ? { eventName: GEOLOCATION_CLOSE_TO_AOI, result: evtData }
        : { eventName: this.outputEventNames[0] };
    }

    const acquiredLocations = evtData as Array<Geolocation>;
    const filteredLocations = [];
    for (const location of acquiredLocations) {
      const isClose = await this.checkIfLocationIsCloseToAnArea(location, { nearbyRange, offset, includeNearby });

      if (isClose) {
        filteredLocations.push(location);
      }
    }

    return filteredLocations.length > 0
      ? { eventName: GEOLOCATION_CLOSE_TO_AOI, result: filteredLocations }
      : { eventName: this.outputEventNames[0] };
  }

  private async checkIfLocationIsCloseToAnArea(
    geolocation: Geolocation,
    { nearbyRange, offset, includeNearby }: CheckOptions
  ): Promise<boolean> {
    const results = await this.checker.findNearby(geolocation, nearbyRange, offset);
    for (const result of results) {
      if (result.proximity === GeofencingProximity.INSIDE) {
        return true;
      }
      if (result.proximity === GeofencingProximity.NEARBY && includeNearby) {
        return true;
      }
    }
    return false;
  }
}

interface CheckOptions {
  nearbyRange: number;
  offset: number;
  includeNearby: boolean;
}
