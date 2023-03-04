// to write a function
// that will print first n elements of the sequence
// with the given constant r and first element a
function geometricSequenceElements(a, r, n) {
  let res = [];
  for (i = 0; i < n; i++) {
    res.push(a * r ** i);
  }
  return res.join(", ");
}
