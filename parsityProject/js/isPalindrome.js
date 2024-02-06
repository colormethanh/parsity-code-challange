

let isPalindrome = function(str) {

  let strArr = str.split("");
  let ctBackward = strArr.length - 1;

  for(let i = 0; i < strArr.length; i++){

    let forwardPos = strArr[i].toLowerCase();
    let backwardPos = strArr[ctBackward - i].toLowerCase();

    if (forwardPos !== backwardPos){
      return false
    }
  }


  return true
}


module.exports = isPalindrome;

