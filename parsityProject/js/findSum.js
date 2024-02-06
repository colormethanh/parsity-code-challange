

let findSum = function(array){
  
  //
  /// Solution using a for Loop
  //
  let ttl = 0;
  for(let i = 0; i < array.length; i++){
    ttl += array[i];
  }


  //
  /// Solution using reduce
  //
  // let ttl = array.reduce((accumulated, current) => { return accumulated + current }, 0)

  return ttl
}


module.exports = findSum;