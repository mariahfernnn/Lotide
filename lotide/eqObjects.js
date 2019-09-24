/*

Task: Implement the definition  for function eqObjects

It will:
1. Take in two objects
2. And returns a true or false, based on a perfect match

*/

const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁, Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎, Assertion Failed: ${actual} !== ${expected}`);
  }
};


// Returns true if BOTH objects have identical keys with identical values
// Otherwise returns false!
const eqObjects = function (object1, object2) {
  let x = Object.keys(object1);
  let y = Object.keys(object2);

  if (x.length !== y.length) {
    return false;
  }

  for (let a of x) {  // values of object1
    // for (let b of y) {  // values of object2
    // Michael Fich (mentor) - Don't have to loop through both objects; 
    // Just take a value from object1 x[a] and see if it exists in object2 y[a]!
      if (x[a] !== y[a]) {
        return false;
      }
      if (Array.isArray(object1[a]) && Array.isArray(object2[a])) { 
        // If BOTH objects' keys' values = arrays
        if (!eqArrays(object1[a], object2[a])) {                    
          // Using eqArrays = Check if a value in object1 array object1[a] exists in object2 array object2[a]
          // If it doesn't, return false!
          return false;
        }

      }
    // }
  }
  return true;
}


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false


assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
