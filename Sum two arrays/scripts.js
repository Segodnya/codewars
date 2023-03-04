function addArrays(array1, array2) {
  let arrayToNumber1 = parseInt(array1.join("")) || 0;
  let arrayToNumber2 = parseInt(array2.join("")) || 0;
  let sum = Math.abs(arrayToNumber1 + arrayToNumber2);
  let sign = arrayToNumber1 + arrayToNumber2 < 0 ? -1 : 1;

  let result = String(sum)
    .split("")
    .map((x) => Number(x));

  result[0] *= sign;
  if (array1.length === 0 && array2.length === 0) {
    return [];
  } else {
    return result;
  }
}

console.log(addArrays([6, 7], [6, 7])); // [ 1, 3, 4 ]
console.log(addArrays([3, 2, 9], [1, 2])); // [3, 4, 1]
console.log(addArrays([4, 7, 3], [1, 2, 3])); // [5, 9, 6]
console.log(addArrays([1], [5, 7, 6])); // [5, 7, 7]
console.log(addArrays([3, 2, 6, 6], [-7, 2, 2, 8])); // [-3, 9, 6, 2]
console.log(addArrays([-2, 8], [9, 5])); // [ 6, 7 ]
