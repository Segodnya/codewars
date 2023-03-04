function gcdi(a, b) {
  if (b == 0) return a;
  return Math.abs(gcdi(b, a % b));
}
function lcmu(a, b) {
  return Math.abs((a / gcdi(a, b)) * b);
}
function som(a, b) {
  return a + b;
}
function maxi(a, b) {
  return Math.max(a, b);
}
function mini(a, b) {
  return Math.min(a, b);
}
function operArray(fct, arr, init) {
  let result = [];
  arr.forEach((element) => {
    init = fct(init, element);
    result.push(init);
  });
  return result;
}

let a = [18, 69, -90, -78, 65, 40];
console.log(operArray(som, a, 0));
