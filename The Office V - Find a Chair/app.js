function meeting(x, need) {
  let result = [];
  let freeChairs = [];

  if (need === 0) {
    return "Game On";
  }

  x.forEach((element) => {
    const free = element[1] - element[0].length;
    free > 0 ? freeChairs.push(free) : freeChairs.push(0);
  });

  if (freeChairs.reduce((partialSum, a) => partialSum + a, 0) < need) {
    return "Not enough!";
  }

  freeChairs.forEach((element) => {
    if (need > 0) {
      if (need >= element) {
        result.push(element);
        need = need - element;
      } else {
        result.push(need);
        need = 0;
      }
    }
  });
  return result;
}

/* meeting(
  [
    ["XXX", 3],
    ["XXXXX", 6],
    ["XXXXXX", 9],
  ],
  4
); // [0, 1, 3] */

/* meeting(
  [
    ["XXX", 1],
    ["XXXXXX", 6],
    ["X", 2],
    ["XXXXXX", 8],
    ["X", 3],
    ["XXX", 1],
  ],
  5
); // [0, 0, 1, 2, 2]
 */

meeting(
  [
    ["X", 3],
    ["X", 8],
    ["XXXXX", 1],
  ],
  4
); // [ 2, 2 ]
