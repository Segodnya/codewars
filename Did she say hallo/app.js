function validateHello(greetings) {
  return /\b(?:hello|ciao|salut|hallo|hola|ahoj|czesc)\b/.test(greetings.toLowerCase());
}

console.log(validateHello("ahoj")); // true
console.log(validateHello("meh")); // false
