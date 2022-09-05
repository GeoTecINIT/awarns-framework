import { getNodeDiscoverer, Node as N } from 'nativescript-wearos-sensors/node';

export type Watch = N;

export async function getConnectedWatches(): Promise<Watch[]> {
  const nodesDiscovered = await getNodeDiscoverer().getConnectedNodes();
  const watches: Watch[] = [];

  nodesDiscovered.forEach((nodeDiscovered) => {
    if (nodeDiscovered.error) {
      console.log(`Communication failure with watch ${nodeDiscovered.node.name}. Reason: ${nodeDiscovered.error}`);
      return;
    }

    watches.push(nodeDiscovered.node);
  });

  return watches;
}
