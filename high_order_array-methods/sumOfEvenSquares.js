function sumOfEvenSquares(num) {
  const evenSquare = num
    .filter((nums) => nums % 2 === 0)
    .map((nums) => nums * 2)
    .reduce((total, val) => total + val, 0);

  return evenSquare;
}

let num = [1, 2, 3, 4, 5, 6];
console.log(sumOfEvenSquares(num));
