let findFrequency = require('../js/findFrequency');

test('returns object with most and least', () => { 

  expect(findFrequency(['a', 'b', 'c', 'a', 'b', 'c', 'a', 'a', 'd'])).toEqual(
    {
      most: 'a',
      least: 'd'
    }
  );

  expect(findFrequency(['apple', 'grape', 'watermelon', 'grape', 'apple', 'cucumber', 'cucumber', 'grape', 'apple', 'apple'])).toEqual(
    {
      most: 'apple',
      least: 'watermelon'
    }
  );

 })