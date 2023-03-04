function switcher(x) {
  const alphabet = " ?!abcdefghijklmnopqrstuvwxyz";
  return x.map((x) => alphabet.charAt(29 - Number(x))).join("");
}

console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8"])); // 'codewars'
