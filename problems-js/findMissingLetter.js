// unicode method

//  find  missing letters in the array

function findTwoMissingLetters(arr) {
  let start = arr[0].charCodeAt(0);
  let missingLetters = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0);

    while (current - start > 1) {
      start++;
      missingLetters.push(String.fromCharCode(start));
    }
    start = current;
  }
  return missingLetters.toString();
}

console.log(findTwoMissingLetters(arr));
