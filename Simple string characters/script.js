function solve(s) {
  const uppers = /[A-Z]/g,
    lowers = /[a-z]/g,
    numbers = /[0-9]/g,
    res = [];

  let uppersCount = !s.match(uppers) ? 0 : s.match(uppers).length;
  let lowersCount = !s.match(lowers) ? 0 : s.match(lowers).length;
  let numbersCount = !s.match(numbers) ? 0 : s.match(numbers).length;
  let specialsCount = s.length - (uppersCount + lowersCount + numbersCount);

  res.push(uppersCount, lowersCount, numbersCount, specialsCount);

  return res;
}

solve("*'&ABCDabcde12345");
