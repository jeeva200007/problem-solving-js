function missingNum(num) {
  if (num.length === 0) return 1;
  const n = num.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let i = 0; i < num.length; i++) {
    actualSum += num[i];
  }

  /* 
const actualSum = arr.reduce((sum,num) => sum + num, 0)
*/
  return expectedSum - actualSum;
}

let num = [1, 2, 3, 4, 6, 7, 8, 9];

console.log(missingNum(num));
