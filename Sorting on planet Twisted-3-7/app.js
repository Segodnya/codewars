function sortTwisted37(array) {
  function change(val) {
    let result = val.toString().split("");
    for (let i = 0; i < result.length; i++) {
      if (result[i] === "3") {
        result[i] = "7";
      } else if (result[i] === "7") {
        result[i] = "3";
      }
    }
    return Number(result.join(""));
  }
  let arr = array.slice().map((a) => change(a));
  arr.sort((a, b) => a - b);
  return arr.map((a) => change(a));
}

let a = [2, 1, 7, 4, 5, 6, 3, 8, 9];
let b = [12, 13, 14];
console.log(sortTwisted37(b));
