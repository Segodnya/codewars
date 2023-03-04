function correctPolishLetters(string) {
  const DIACRITICS = {
    ą: "a",
    ć: "c",
    ę: "e",
    ł: "l",
    ń: "n",
    ó: "o",
    ś: "s",
    ź: "z",
    ż: "z",
  };

  for (const char of string) {
    if (Object.keys(DIACRITICS).includes(char)) {
      string = string.replace(char, DIACRITICS[char]);
    }
  }
  return string;
}

correctPolishLetters("Jędrzej Błądziński");
