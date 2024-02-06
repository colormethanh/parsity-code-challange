let largestPair = require("../js/largestPair");


test('returns largest product', () => { 
  expect(largestPair([5, 1, 2, 3, 1, 4])).toBe(6);
  expect(largestPair([9, 5, 10, 2, 24, -1, -48])).toBe(50);

})