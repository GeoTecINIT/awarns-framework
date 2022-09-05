import { Watch } from '../watch';
import { setBoolean, getBoolean, setString, getString, flush } from '@nativescript/core/application-settings';
import { Node } from 'nativescript-wearos-sensors/node';

const WATCH_FEATURES_ENABLED = 'WATCH_FEATURES_ENABLED_KEY';
const CURRENT_WATCH = 'CURRENT_WATCH_KEY';

export const featuresNotEnabledError = new Error('Watch features are not enabled!');
export const noWatchSelectedError = new Error('There is no watch selected for use!');

export function setWatchFeaturesState(enabled: boolean): void {
  setBoolean(WATCH_FEATURES_ENABLED, enabled);
  flush();
}

export function areWatchFeaturesEnabled(): boolean {
  return getBoolean(WATCH_FEATURES_ENABLED, true);
}

export function useWatch(watch: Watch): void {
  const stringifiedWatch = `${watch.id}#${watch.name}#${JSON.stringify(watch.capabilities)}`;
  setString(CURRENT_WATCH, stringifiedWatch);
  flush();
}

export function getWatchInUse(): Watch {
  const stringifiedWatch = getString(CURRENT_WATCH);
  if (!stringifiedWatch) {
    throw noWatchSelectedError;
  }

  const watchProperties = stringifiedWatch.split('#');
  return new Node(watchProperties[0], watchProperties[1], JSON.parse(watchProperties[2]));
}
