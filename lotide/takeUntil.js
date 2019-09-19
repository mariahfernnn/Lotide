/*

Task: Create our own version of Lodash's takeWhile function

Our takeUntil function will take two parameters:
1. The array to work with
2. The callback (which Lodash calls "predicate")
3. Return a "slice of the array with elements taken from the
    beginning"
4. It should keep going until the callback/predicate
    returns a truthy value

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

const takeUntil = function(array, callback) {

  const results = [];

  for (let x = 0; x < array.length; x++) {  // loops through the values of the given array
    if (callback(array[x])) {
      return results;
    }
    results.push(array[x]);
  }
}

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);  // expected output => [ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // expected output => [ 'I\'ve', 'been', 'to', 'Hollywood' ]
*/


assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);



