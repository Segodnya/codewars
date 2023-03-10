var fizzBuzzCustom = function (
  stringOne = "Fizz",
  stringTwo = "Buzz",
  numOne = 3,
  numTwo = 5
) {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    let tmp = "";
    if (i % numOne === 0) {
      tmp += stringOne;
    }
    if (i % numTwo === 0) {
      tmp += stringTwo;
    }
    if (!!tmp) {
      result.push(tmp);
    } else {
      result.push(i);
    }
  }
  return result;
};

console.log(fizzBuzzCustom("Hey", "There"));
