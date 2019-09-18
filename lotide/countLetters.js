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
  let modifedStr = str.replace(/\s+/g, '');
  console.log(modifedStr);

  for (x = 0; x < modifedStr.length; x++) {
    if (!total [modifedStr[x]]) {
      total [modifedStr[x]] = 1;
    } else {
      total [modifedStr[x]]++;
    }
  }
  return total;
}

console.log(countLetters("lighthouse in the house"));
