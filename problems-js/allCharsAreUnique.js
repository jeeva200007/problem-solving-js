// find all characters are unique for example a and A are unique chars

function areAllCharsAreUnique(str) {
  const charCount = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char]) {
      return false;
    }
    charCount[char] = true;
  }
  return true;
}
let str = "Programming";
// console.log(areAllCharsAreUnique(str));

/* 
str --> HelLo = true
str --> programming = false
*/

// By using set method

function areAllCharsAreUniqueBySet(str) {
  const charSet = new Set();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charSet[char]) {
      return false;
    }
    charSet[char] = true;
  }
  return true;
}

console.log(areAllCharsAreUniqueBySet(str));
