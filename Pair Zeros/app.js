function pairZeros(arr) {
  let result = [];
  let gate = true;
  arr.forEach((element) => {
    if (!!gate || element !== 0) {
      result.push(element);
    }
    if (element === 0) {
      gate = !gate;
    }
  });
  return result;
}

console.log(pairZeros([1, 0, 1, 0, 2, 0, 0, 3, 0])); // [1,0,1,2,0,3,0]
