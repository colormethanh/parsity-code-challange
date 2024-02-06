let scoreScrabble = require("../js/scoreScrabble");



test('returns the correct number of points', () => { 
  
  
  expect(scoreScrabble('hello')).toBe(8);
  expect(scoreScrabble('quiet')).toBe(14);
  expect(scoreScrabble('flybys')).toBe(17);


})


