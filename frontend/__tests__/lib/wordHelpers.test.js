import { pluralize } from '../../lib/wordHelpers';

const word = 'item';
const pluralTest = [0, 2, 10, 9999];

describe('pluralize', () => {
  it('it adds the s character if count is 0 or greater than 1', () => {
    pluralTest.forEach(test => {
      expect(pluralize(word, test));
    });
  });

  it('does not change the word if count is 1', () => {
    expect(pluralize(word, 1)).toBe(word);
  });

  it('does not change the word if the count is invalid', () => {
    expect(pluralize(word, -999)).toBe(word);
  });
});
