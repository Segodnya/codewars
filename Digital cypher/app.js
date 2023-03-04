function encode(str, n) {
  const codes = [];
  const numbers = Array.from(String(n), Number);
  const result = [];
  for (let index = 0; index < str.length; index++) {
    const element = str.charCodeAt(index) - 96;
    codes.push(element);
  }
  for (let index = 0; index < codes.length; index++) {
    const element = codes[index] + numbers[index % numbers.length];
    result.push(element);
  }
  return result;
}

console.log(encode("scout", 1939)); // [ 20, 12, 18, 30, 21]
