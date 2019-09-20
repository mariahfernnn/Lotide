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


//this function should return a subset of a given array, removing unwanted elements
const without = function(source, itemsToRemove) {
  let modifiedArray = [];

  for (let x of source) {
    for (let y of itemsToRemove) {
      if (x !== y && typeof(x) === typeof(y)) {
        modifiedArray.push(x);
      }
    }
  }
  return modifiedArray;
}

//console.log(without([1, 2, 3], [3])); 
//console.log(without(["1", "2", "3"], [1, 2, "3"]));

 
assertArraysEqual(without([1, 2, 3], [3]), [1, 2]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without(["hello", "world", "lighthouse"], ["world"]), ["hello", "lighthouse"]);

