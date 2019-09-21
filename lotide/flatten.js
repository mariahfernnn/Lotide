const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
  }
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`😁😁😁, Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎, Assertion Failed: ${actual} !== ${expected}`);
  }
};

//this function will take in an array of arrays
//and return a "flattened" version of the array
//use Array.isArray() method to check if each element within the array is an array or not
const flatten = function (arrayOfArrays) {
  let singleArray = [];

  for (let x of arrayOfArrays) {
    if (Array.isArray(x)) {

      for (let y = 0; y < x.length; y++) {
        singleArray.push(x[y]);
      }
    } else {
      singleArray.push(x);
    }
  }
  return singleArray;
}

//console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); //Expected output => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten(["Paris", "London", ["Athens", "Mykonos"], "Rome", ["Madrid"]]), ["Paris", "London", "Athens", "Mykonos", "Rome", "Madrid"]);
assertArraysEqual(flatten([["Brownie"], "Barbie", ["Jordan", "Yoyo"], "Bruno"]), ["Brownie", "Barbie", "Jordan", "Yoyo", "Bruno"]);

