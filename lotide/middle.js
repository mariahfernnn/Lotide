const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😁😁😁, Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎, Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(array) {
  let output = [];
  if (array.length <= 2) {
    output;
  } else if (array.length % 2 !== 0) {
    let halfIndex = Math.floor(array.length / 2);
    output.push(array[halfIndex]);
  } else if (array.length % 2 === 0) {
    let upperIndex = array.length / 2;
    let lowerIndex = upperIndex - 1;
    output.push(array[lowerIndex]);
    output.push(array[upperIndex]);
  }
  return output;


  // if (array.length <= 2) {
  //   return [];
  // } else if (array.length % 2 !== 0) {
  //   return [array[Math.floor(array.length / 2)]]
  // } else if (array.length % 2 === 0) {
  //   return array.slice((array.length / 2) - 1, (array.length / 2) + 1)
  // }
}


assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1]), []);