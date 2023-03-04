function computeDepth(x) {
  let mySet = new Set();
  let n = 0;
  while (mySet.size < 10) {
    n++;
    let myArray = String(x * n).split("");
    myArray.forEach((element) => {
      mySet.add(element);
    });
  }

  return n;
}

console.log(computeDepth(42));
