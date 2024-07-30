function isPalindrome(str) {
  const formatStr = removeNonAlphaNum(str.toLowerCase());
  const reversedStr = reverseStr(formatStr);
  return formatStr === reversedStr;
}

function removeNonAlphaNum(str) {
  let format = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNum(char)) {
      format += char;
    }
  }
  return format;
}

function isAlphaNum(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Num 0-9
    (code >= 97 && code <= 122) // Lowercase a-z
  );
}

function reverseStr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

// Test the function
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
function isPalindrome(str) {
  const formatStr = removeNonAlphaNum(str.toLowerCase());
  const reversedStr = reverseStr(formatStr);
  return formatStr === reversedStr;
}

function removeNonAlphaNum(str) {
  let format = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNum(char)) {
      format += char;
    }
  }
  return format;
}

function isAlphaNum(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Num 0-9
    (code >= 97 && code <= 122) // Lowercase a-z
  );
}

function reverseStr(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

// Test the function
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
