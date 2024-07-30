// 1. find the maximum num in the array

function findMax(arr) {
  let targetEle = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > targetEle) {
      targetEle = arr[i];
    }
  }

  return console.log(targetEle);
}

let arr = [1, 56, 78, 3, 8, 95, 90, 100];

findMax(arr);

// 2. second and third max element in the arr

function secMax(arr) {
  let largest = arr[0];
  let second = arr[0];
  let third = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > second && arr[i] < largest) {
      second = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < second && arr[i] < largest) {
      third = arr[i];
    }
  }
  return console.log(largest, second, third);
}

secMax(arr);

//3. smallest num in the arr

function smallestNum(arr) {
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return console.log(smallest);
}

smallestNum(arr);
