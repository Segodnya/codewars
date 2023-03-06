function span(arr, predicate) {
  let result = [[], []];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      result[0].push(arr[i]);
    } else {
      result[1] = arr.slice(i);
      return result;
    }
  }
  return result;
}
