import { pascalCase, camelCase } from './string';

describe('String utils', () => {
  it('allows to turn a sentence into pascal case', () => {
    const sentence = 'Start_DETECTING human-activity changes';
    const expected = 'StartDetectingHumanActivityChanges';
    const result = pascalCase(sentence);
    expect(result).toEqual(expected);
  });

  it('allows to turn a sentence into camel case', () => {
    const sentence = 'Start_DETECTING human-activity changes';
    const expected = 'startDetectingHumanActivityChanges';
    const result = camelCase(sentence);
    expect(result).toEqual(expected);
  });
});
