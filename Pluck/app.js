function pluck(objs, name) {
  return objs.map((x) => x[name]);
}

console.log(pluck([{ a: 1 }, { a: 2 }], "a")); // [1,2]
