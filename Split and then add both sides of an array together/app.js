function action(array) {
  let half = Math.floor(array.length / 2);
  let array1 = array.slice(0, half);
  let array2 = array.slice(half);
  if (array1.length < array2.length) {
    array1.unshift(0);
  }
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i] + array2[i]);
  }
  return result;
}

function splitAndAdd(arr, n) {
  if (arr.length === 1) {
    return arr;
  }
  for (i = 0; i < n; i++) {
    arr = action(arr);
  }
  return arr;
}

console.log(splitAndAdd([1, 2, 3, 4, 5], 2)); //  [5,10]
