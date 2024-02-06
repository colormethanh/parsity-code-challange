let removeParenth = require("../js/removeParenth");



test('removes parentheses and anything inside', () => { 
  
  expect(removeParenth('ido(not)liketocode')).toBe('idoliketocode');
  

})



