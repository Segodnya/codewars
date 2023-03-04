function capitalize(s, arr) {
  let resultString = "";
  for (let index = 0; index < s.length; index++) {
    const element = s.charAt(index);
    if (arr.indexOf(index) !== -1) {
      resultString += element.toUpperCase();
    } else {
      resultString += element;
    }
  }
  return resultString;
}
