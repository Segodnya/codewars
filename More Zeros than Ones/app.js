function moreZeros(s) {
  const array = s.split("");
  const bset = new Set(array.map((x) => x.charCodeAt(0).toString(2)));
  for (const item of bset) {
    if (item.match(/1/g).length >= item.length / 2) {
      bset.delete(item);
    }
  }
  const result = Array.from(bset);
  return result.map((elem) => String.fromCharCode(parseInt(elem, 2)));
}

console.log(moreZeros("abcdeabcde"));

console.log("1".charCodeAt(0).toString(2));
console.log("2".charCodeAt(0).toString(2));

console.log("4".charCodeAt(0).toString(2));

console.log("8".charCodeAt(0).toString(2));
