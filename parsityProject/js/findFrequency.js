
let findFrequency = function (array){

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
}

module.exports = findFrequency;



