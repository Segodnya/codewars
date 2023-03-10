function solve(arr) {
  let result = arr[0];
  arr.forEach((element) => {
    if (!arr.includes(element) || !arr.includes(-element)) {
      result = element;
    }
  });
  return result;
}

console.log(solve([1, -1, 2, -2, 3])); // 3
console.log(solve([-3, 1, 2, 3, -1, -4, -2])); // -4
console.log(solve([1, -1, 2, -2, 3, 3])); // 3
console.log(solve([-110, 110, -38, -38, -62, 62, -38, -38, -38])); // -38
console.log(solve([-9, -105, -9, -9, -9, -9, 105])); // -9
