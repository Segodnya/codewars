function differenceOfSquares(n) {
  let sum1 = 0;
  let sum2 = 0;
  for (i = 1; i <= n; i++) {
    sum1 += i;
    sum2 += i * i;
  }
  return sum1 * sum1 - sum2;
}

console.log(differenceOfSquares(5)); // 170
console.log(differenceOfSquares(10)); // 2640
console.log(differenceOfSquares(100)); // 25164150
