function game(n) {
  return n % 2 === 0 ? [(n / 2) * n] : [n ** 2, 2];
}

console.log(game(5));
