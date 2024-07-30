// count vowels aeiou

function countvowels(str) {
  const formatStr = str.toLowerCase();
  let count = 0;

  for (let i = 0; i < formatStr.length; i++) {
    const char = formatStr[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return console.log(count);
}

countvowels("this is a wonderful video");
