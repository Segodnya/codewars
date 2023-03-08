function findIncorrectValue(tree) {
  let tmp = [];
  for (let i = 0; i < (tree.length - 1) / 2; i++) {
    tmp.push([i, tree[i], tree[2 * i + 1], tree[2 * i + 2]]);
  }

  let mistakes = [];
  tmp.reverse().forEach((element) => {
    if (element[2] + element[3] !== element[1]) {
      mistakes.push(element);
    }
  });

  if (mistakes.length === 1 && mistakes[0][0] !== 0) {
    return [mistakes[0][0] * 2 + 2, mistakes[0][1] - mistakes[0][2]];
  } else {
    return [mistakes[0][0], mistakes[0][2] + mistakes[0][3]];
  }
}

console.log(findIncorrectValue([28, 13, 14, 6, 7, 5, 9])); // [0, 27]
console.log(findIncorrectValue([27, 14, 14, 6, 7, 5, 9])); // [1, 13]
console.log(findIncorrectValue([29, 13, 16, 5, 8, 9, 1])); // [6, 7]
console.log(findIncorrectValue([27, 13, 15, 6, 7, 5, 9])); // [2, 14]
console.log(findIncorrectValue([5, 2, 3, 1, 2, 2, 1])); // [4, 1]
console.log(
  findIncorrectValue([19, 9, 10, 5, 5, 4, 6, 2, 2, 1, 4, 1, 3, 2, 4])
); // 3, 4
