const removeFromArray = function (array, ...values) {
  for (value of values) {
    array = array.filter((element) => element !== value);
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
