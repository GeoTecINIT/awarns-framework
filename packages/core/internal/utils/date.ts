export function toTimestampWithTimezoneOffset(date: Date) {
  return {
    value: date.getTime(),
    offset: date.getTimezoneOffset(),
  };
}

export function jsonDateReplacer(key: string, value: unknown) {
  if (this[key] instanceof Date) {
    return toTimestampWithTimezoneOffset(this[key]);
  }

  if (typeof value === 'string' && isDateString(this[key])) {
    return toTimestampWithTimezoneOffset(new Date(this[key]));
  }

  return value;
}

const dateISOStringValidator = new RegExp('^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}.\\d{3}Z$');

function isDateString(value: string): boolean {
  return dateISOStringValidator.test(value);
}
