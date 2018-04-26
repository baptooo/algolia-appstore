import * as utils from './utils';

describe('(API) utils', () => {
  describe('isFree', () => {
    it('should return false for 1 USD', () => {
      expect(utils.isFree('1 USD')).toBe(false);
    });

    it('should return false for 0 USD', () => {
      expect(utils.isFree('0 USD')).toBe(true);
    });
  });
});