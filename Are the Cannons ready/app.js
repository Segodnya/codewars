const cannonsReady = (gunners) => {
  const result = new Set();
  for (const element in gunners) {
    result.add(gunners[element]);
  }
  if (result.size === 2) {
    return "Shiver me timbers!";
  } else {
    return "Fire!";
  }
};

let a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
console.log(cannonsReady(a));
