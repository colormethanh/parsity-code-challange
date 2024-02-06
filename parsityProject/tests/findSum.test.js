let findSum = require('../js/findSum')


test('returns correct total', () => { 

  expect(findSum([2,4,6])).toBe(12);
  expect(findSum([0,0,0,0,0,0,0,0])).toBe(0);
  expect(findSum([1])).toBe(1);
  expect(findSum([-1,1])).toBe(0);
   
});

