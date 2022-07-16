const comparer = require('../comparer.js');

describe("is with string", function() {
    it("two equals lines", function() {
      const a = 'equal line';
      const b = 'equal line'
      const expectedResult = true;

      const actualResult = comparer.is(a, b);

      expect(expectedResult).toBe(actualResult);
    });
    it("two different lines", function() {
      const a = 'first line';
      const b = 'second line'
      const expectedResult = false;

      const actualResult = comparer.is(a, b);

      expect(expectedResult).toBe(actualResult);
    });
  });

  describe("is with numbers", function() {
    it("two equals number", function() {
      const a = 1;
      const b = 1
      const expectedResult = true;

      const actualResult = comparer.is(a, b);

      expect(expectedResult).toBe(actualResult);
    });
    it("two different number", function() {
      const a = 1;
      const b = -1
      const expectedResult = false;

      const actualResult = comparer.is(a, b);

      expect(expectedResult).toBe(actualResult);
    });
  });

  describe("is with many numbers", function() {
    it("three equals numbers", function() {
      const a = 1;
      const b = 1;
      const c = 1;
      const expectedResult = true;

      const actualResult = comparer.is(a, b, c);

      expect(expectedResult).toBe(actualResult);
    });
    it("three different numbers", function() {
      const a = 1;
      const b = 2;
      const c = 3;
      const expectedResult = false;

      const actualResult = comparer.is(a, b, c);

      expect(expectedResult).toBe(actualResult);
    });
  });