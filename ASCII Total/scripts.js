function uniTotal(string) {
  // total up dem unicodes!
  let result = 0;
  for (let i = 0; i < string.length; i++) {
    result += Number(string.charCodeAt(i));
  }
  return result;
}

console.log(uniTotal("aaa"));
