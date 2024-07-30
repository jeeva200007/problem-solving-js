//  remove duplicate elements from the array

function remoDup(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return console.log(uniqueArr.sort());
}

let arr = [1, 2, 2, 3, 3, 3, 4, 4, 5, 7, 6, "hello", "hello", "abc"];
// remoDup(arr);

// using Set method

function removeDup(arr) {
  const set = [...new Set(arr)].sort();
  return console.log(set);
}

// removeDup(arr);

// using filter method

function removeDuplicates(arr) {
  const filteredArr = arr.filter((v, i) => arr.indexOf(v) === i).sort();
  return console.log(filteredArr);
}

removeDuplicates(arr);
