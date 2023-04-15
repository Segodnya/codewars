function fortune(f0, p, c0, n, i) {
  p = p / 100;
  i = i / 100;
  let f = f0;
  for (let year = 1; year <= n; year++) {
    if (f < 0) {
      return false;
    }
    f = Math.floor(f + f * p - c0 * Math.pow(1 + i, year - 1));
  }
  return true;
}

// console.log(fortune(100000, 1, 9185, 12, 1));
// console.log(fortune(100000000, 5, 1000000, 50, 1));
// console.log(fortune(100000000, 1.5, 10000000, 50, 1));
// console.log(fortune(10000, 0, 10000, 2, 0));
console.log(fortune((f0 = 7723807), (p = 7), (c0 = 515579), (n = 15), (i = 8)));
