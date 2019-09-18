const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😁😁😁, Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👎👎👎, Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  console.log(str);
  const total = {};
  let modifiedStr = str.replace(/\s+/g, '');
  console.log(modifiedStr);

  for (x = 0; x < modifiedStr.length; x++) {
    if (!total [modifiedStr[x]]) {
      total [modifiedStr[x]] = 1;
    } else {
      total [modifiedStr[x]]++;
    }
  }
  return total;
}

console.log(countLetters("lighthouse in the house"));
