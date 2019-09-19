/*

Task: Create our own version of map

Our map function will take two arguments:
1. An array to map
2. A callback function
3. Return a new array based on the results of the callback function

*/

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

// const words = ["ground", "control", "to", "major", "tom"];

// change the code to take in two argumenta

const map = function(array, callback) {
  /*
  console.log('array: ', array);
  console.log('callback: ', callback);
  */

  const results = [];
  for (let item of array) { // loop through the each value in the array
    /*
    console.log('item BEFORE: ' , item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    */
    
    results.push((item[0]));

  }
  return results;
}

// const results1 = map(words, word => word[0]); // expected output is a new array with the first index of each word in the words array
// console.log(results1);

assertArraysEqual(map(["ground", "control", "to", "major", "tom"]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(["Toronto", "London", "Athens", "Manila", "Muscat"]), ["T", "L", "A", "M", "M"]);
assertArraysEqual(map(["Gracie", "caitlyn", "Joana", "edith", "Julie"]), ["G", "c", "J", "e", "J"]);

