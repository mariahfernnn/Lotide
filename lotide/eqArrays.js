const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁, Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎, Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; i++) {
      if (arr1[i][0] === arr2[j][0] && arr1[i][1] === arr2[j][1] && arr1[i][2] === arr2[j][2]) {
        return true;
      }
    }
    return false;
  }
}

assertEqual(eqArrays([1, 2, 3,], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3,], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"],  ["1", "2", 3]), false);
