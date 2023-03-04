function autocorrect(input) {
  console.log(input);
  // \s[yY]ou+\s
  const re = /\b[yY]ou+\b|\b[u]\b/;
  while (input.match(re)) {
    input = input.replace(re, "your sister");
  }
  return input;
}

// console.log(autocorrect("welcome u"));
// console.log(autocorrect("I miss you!"));
// console.log(autocorrect("I want to film the bayou with you and put it on youtube"));
console.log(autocorrect("You u youville utube you youyouyou uuu raiyou united youuuu u you"));
console.log(autocorrect(" you "));
