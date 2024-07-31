// print a to z or A to Z by using loop

function printAlphabets() {
  for (let i = 97; i <= 122; i++) {
    smallLetter = String.fromCharCode(i);
    // console.log(smallLetter);
  }
  for (let i = 65; i <= 90; i++) {
    capitalLetter = String.fromCharCode(i);
    // console.log(capitalLetter);
  }
  return "";
}

console.log(printAlphabets());
