function permuteAPalindrome(input) {
  const charDict = new Object();
  for (const char of input) {
    charDict[char] ? (charDict[char] += 1) : (charDict[char] = 1);
  }
  const checkList = Object.values(charDict).map((x) => x % 2);
  const countLettersUnpaired = checkList.filter((v) => v === 1).length;
  if (countLettersUnpaired < 2) {
    return true;
  } else {
    return false;
  }
}

permuteAPalindrome("madam");
