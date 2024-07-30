function nonRepeatingChars(str) {
  const charCount = {};

  if (!charCount) return 0;

  for (const chars of str) {
    charCount[chars] = (charCount[chars] || 0) + 1;
  }
  const nonRepeat = [];
  for (const char in charCount) {
    if (charCount[char] === 1) {
      nonRepeat.push(char);
    }
  }

  return nonRepeat;
}

let str = "";

console.log(nonRepeatingChars(str));
