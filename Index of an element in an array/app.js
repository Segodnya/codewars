function find(a, e) {
  let r = a.indexOf(e);
  return r >= 0 ? r : "Not found";
}

var array = [2, 3, 5, 7, 11];
console.log(find(array, 7)); // 3
