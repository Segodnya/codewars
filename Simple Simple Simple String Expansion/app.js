function stringExpansion(s) {
  let result = "";
  // -1 for cases with strings starting with letters
  let currentRepeat = -1;
  for (let i = 0; i < s.length; i++) {
    if (!!Number(s[i]) || s[i] === "0") {
      if (!!Number(s[i + 1])) {
        currentRepeat = Number(s[i + 1]);
      } else if (s[i] === "0") {
        currentRepeat = 0;
      } else {
        currentRepeat = Number(s[i]);
      }
    } else {
      if (currentRepeat === -1) {
        result += s[i];
      } else {
        result += s[i].repeat(currentRepeat);
      }
    }
  }
  return result;
}

console.log(stringExpansion("53abc267")); // 'aaabbbccc'
console.log(stringExpansion("A4g1b4d")); // Aggggbdddd
console.log(stringExpansion("0d4n8d2b")); // nnnnddddddddbb
console.log(stringExpansion("5M0L8P1")); // MMMMMPPPPPPPP
