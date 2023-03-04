function isTriangleNumber(number) {
  let acc = 0,
    step = 0;
  while (acc < number) {
    step += 1;
    acc = acc + step;
  }
  if (acc === number) {
    return true;
  } else {
    return false;
  }
}

console.log(isTriangleNumber(0));
console.log(isTriangleNumber(1));
console.log(isTriangleNumber(3));
console.log(isTriangleNumber(6));
console.log(isTriangleNumber(7));
console.log(isTriangleNumber(10));
