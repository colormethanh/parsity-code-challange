
let removeParenth = function (str){

  let output = [];
  
  let opened = false;

  str.split('').forEach(element => {
    if (element === "("){opened = true};

    if(!opened){output.push(element)};

    if(element === ")"){opened = false};
  });

  return output.join('')
}

module.exports = removeParenth;


