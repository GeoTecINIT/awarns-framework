import { getConnectedWatches, setWatchFeaturesState, useWatch } from '@awarns/wear-os';

export async function setupWatchToUse(): Promise<void> {
  const watches = await getConnectedWatches();

  if (watches.length === 0) {
    console.log('No WearOS watches connected! Disabling wear-os plugin features...');
    setWatchFeaturesState(false);
    return;
  }

  const watch = watches[0];
  console.log(`Setup wear-os plugin to use ${watch.name} watch!`);
  setWatchFeaturesState(true);
  useWatch(watch);
}
