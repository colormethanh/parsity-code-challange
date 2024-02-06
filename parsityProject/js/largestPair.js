

let largestPair = function(array){

  let output = 0;

  for(let i = 1; i < array.length; i++){
    let product = array[i] * array[i - 1];
    output = product > output ? product : output; 
  }

  return output
}


module.exports = largestPair
