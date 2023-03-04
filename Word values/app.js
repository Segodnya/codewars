function wordValue(a) {
  const result = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabetPosition = (text) => text.split("").map((x) => alphabet.indexOf(x) + 1);
  const arrays = a.map((x) => alphabetPosition(x));
  arrays.forEach((array) => {
    result.push(
      array.reduce((accumulator, a) => {
        return accumulator + a;
      }, 0)
    );
  });
  return result.map((x, i) => x * (i + 1));
}

console.log(wordValue(["codewars", "abc", "xyz"])); // [88,12,225]
