function outed(meet, boss) {
  let acc = 0;
  let count = 0;
  for (const key in meet) {
    if (Object.hasOwnProperty.call(meet, key)) {
      count++;
      key === boss ? (acc += 2 * meet[key]) : (acc += meet[key]);
    }
  }
  const result = acc / count;
  if (result > 5) {
    return "Nice Work Champ!";
  } else {
    return "Get Out Now!";
  }
}

console.log(outed({ tim: 0, jim: 2, randy: 0, sandy: 7, andy: 0, katie: 5, laura: 1, saajid: 2, alex: 3, john: 2, mr: 0 }, "laura")); // "Get Out Now!"
console.log(outed({ tim: 0, jim: 1, randy: 7, sandy: 9, andy: 9, katie: 6, laura: 4, saajid: 2, alex: 7, john: 8, mr: 9 }, "sandy"));
