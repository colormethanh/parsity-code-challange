const findSum = function(array) {
  // your code here - don't forget to return a number!

  let ttl = 0;
  for(let i = 0; i < array.length; i++){
    ttl += array[i];
  }

  return ttl
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!

  let output = {'most': array[0], 'least': array[0]};
  let dict = {};

  // POPULATE DICT
  array.forEach((itm) => {
    dict[itm] = dict[itm] !== undefined ? dict[itm] + 1 : 1;
  });

  // GO THROUGH DICT TO CHECK FOR MOST AND LEAST
  Object.keys(dict).forEach((key) => {
    // UPDATE OUTPUT
    let curMost = output['most'];
    let curLeast = output['least'];

    output['most'] = dict[key] >= dict[curMost] ? key : curMost;
    output['least'] = dict[key] <= dict[curLeast] ? key : curLeast;
  })

  return output;
};

const isPalindrome = function(str) {
  // your code here - don't forget to return a boolean!

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
};

const largestPair = function(array) {
  // your code here - don't forget to return a number!
  let output = 0;

  for(let i = 1; i < array.length; i++){
    let product = array[i] * array[i - 1];

    // update output if product is greater than the prev one
    output = product > output ? product : output; 
  }

  return output
};

const removeParenth = function(str) {
  // your code here - don't forget to return a string!

  let output = [];
  let opened = false;

  str.split('').forEach(element => {
    if (element === "("){opened = true};

    if(!opened){output.push(element)};

    if(element === ")"){opened = false};
  });

  return output.join('')
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
  let ptsDict = {
    'a':1,'b':3,'c':3,'d':2,'e':1,
    'f':4,'g':2,'h':4,'i':1,'j':8,
    'k':5,'l':1,'m':3,'n':1,'o':1,
    'p':3,'q':10,'r':1,'s':1,'t':1,
    'u':1,'v':4,'w':4,'x':8,'y':4,
    'z':10
  }

  let strArr = str.split('');
  
  let ttl = strArr.reduce((accumulated, current) => {return accumulated + ptsDict[current]}, 0);

  return ttl
};