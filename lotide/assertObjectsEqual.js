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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected) === true) {
    console.log(`😁😁😁, Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`👎👎👎, Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


const obj1 = { a: '1', b: '2'};
const obj2 = { b: '2', a: '1'};

const obj3 = { a: '3', b: '4', c: '1'};
const obj4 = { a: '4', b: '2'};

assertObjectsEqual(obj1, obj2); 
assertObjectsEqual(obj3, obj4);