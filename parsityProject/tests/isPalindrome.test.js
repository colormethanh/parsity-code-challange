let isPalindrome = require('../js/isPalindrome');

test('correctly checks if string is palindrome', () => { 
  
  expect(isPalindrome('canal')).toBe(false);
  expect(isPalindrome('BaskEtBall')).toBe(false);
  expect(isPalindrome('Ana')).toBe(true);
  expect(isPalindrome('RoTaTor')).toBe(true);

})