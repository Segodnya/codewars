function nextLetter(s) {
  return s.replace(/([a-zA-Z])[^a-zA-Z]*$/, function (a) {
    var c = a.charCodeAt(0);
    switch (c) {
      case 90:
        return "A";
      case 122:
        return "a";
      default:
        return String.fromCharCode(++c);
    }
  });
}

function changer(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";
  for (i = 0; i < str.length; i++) {
    const letter = nextLetter(str[i]);
    if (vowels.includes(letter.toLowerCase())) {
      result = result + letter.toUpperCase();
    } else {
      result = result + letter.toLowerCase();
    }
  }
  return result;
}

changer("Cat30"); // 'dbU30'
