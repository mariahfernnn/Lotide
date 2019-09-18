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

const letterPositions = function(sentence) {
  const results = {};

  for (let x = 0; x < sentence.length; x++) {
    if (!results[sentence[x]]) {
      results[sentence[x]] = [];
      results[sentence[x]].push(x);
    } else {
      results[sentence[x]].push(x);
    }
  }
  return results; // all the indices in the string where each character is found
};

assertArraysEqual(letterPositions("hello").e, [1]);
