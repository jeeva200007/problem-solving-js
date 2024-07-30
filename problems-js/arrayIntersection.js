// check the two arrays of common elements

function arrayIntersect(arr1, arr2) {
  const interArr = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !interArr.includes(arr1[i])) {
      interArr.push(arr1[i]);
    }
  }
  return interArr;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr2 = [1, 2, 3, 7];

// console.log(arrayIntersect(arr1, arr2));

// my own method

function arrIntertSect(arr1, arr2) {
  const combinedArr = [...arr1, ...arr2];
  const elements = [];

  for (let i = 0; i < combinedArr.length; i++) {
    if (
      combinedArr.indexOf(combinedArr[i]) !==
      combinedArr.lastIndexOf(combinedArr[i])
    ) {
      elements.push(combinedArr[i]);
    }
  }
  return Array.from(new Set(elements));
}

console.log(arrIntertSect(arr1, arr2));
