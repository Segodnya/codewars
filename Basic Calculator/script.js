function calculate(num1, operation, num2) {
  const OPERATORS = ["+", "-", "*", "/"];
  if (OPERATORS.includes(operation)) {
    switch (operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return null;
        }
    }
  } else {
    return null;
  }
}

console.log(calculate(3.2, "/", 8));
