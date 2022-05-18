export interface FetchCondition {
  property: string;
  comparison: '=';
  value: unknown;
}

export function meetsConditions(record: unknown, conditions: Array<FetchCondition>): boolean {
  for (const condition of conditions) {
    const propertyValue = getPropertyValue(record, condition.property);
    if (propertyValue === undefined) {
      return false;
    }
    switch (condition.comparison) {
      case '=':
        if (propertyValue !== condition.value) {
          return false;
        } else {
          continue;
        }
      default:
        throw new Error(`Unknown condition comparison: ${condition.comparison}`);
    }
  }

  return true;
}

export function getPropertyValue(object: unknown, path: string) {
  if (object === undefined) return undefined;
  const segments = path.split('.');
  let property = object;
  for (const segment of segments) {
    property = property[segment];
    if (property === undefined) return undefined;
  }

  return property;
}
