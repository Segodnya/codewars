// These two objects are preloaded, you need to use them in your code
var firstName = { A: "Alpha", B: "Beta", C: "Cache" };
var surname = { A: "Analogue", B: "Bomb", C: "Catalyst" };

function aliasGen(first, last) {
  const regex = /[A-Za-z]/g;
  if (first.charAt(0).match(regex) && last.charAt(0).match(regex)) {
    return firstName[first.charAt(0).toUpperCase()] + " " + surname[last.charAt(0).toUpperCase()];
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}

aliasGen("first", "last");

// aliasGen("Larry", "Brentwood") === "Logic Bomb";
// aliasGen("123abc", "Petrovic") === "Your name must start with a letter from A - Z.";
