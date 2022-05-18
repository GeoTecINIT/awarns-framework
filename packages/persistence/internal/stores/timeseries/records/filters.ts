export interface FetchCondition {
  property: string;
  comparison: '=';
  value: unknown;
}

export function meetsConditions(record: any, conditions: Array<FetchCondition>): boolean {
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

function getPropertyValue(object: any, path: string) {
  const segments = path.split('.');
  let property = object;
  for (const segment of segments) {
    property = property[segment];
  }

  return property;
}
