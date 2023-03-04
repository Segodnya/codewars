const removeConsecutiveDuplicates = (s) =>
  s
    .split(" ")
    .filter((x, index, array) => x !== array[index - 1])
    .join(" ");

console.log(removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"));
