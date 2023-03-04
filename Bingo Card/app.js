function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// [min, max, length]
const ranges = { B: [1, 15, 5], I: [16, 30, 5], N: [31, 45, 4], G: [46, 60, 5], O: [61, 75, 5] };

function getCard() {
  let result = [];
  for (const key in ranges) {
    if (Object.hasOwnProperty.call(ranges, key)) {
      const element = ranges[key];
      let numbers = new Set();
      do {
        numbers.add(key + randomInteger(element[0], element[1]));
      } while (numbers.size < element[2]);

      numbers.forEach((element) => {
        result.push(element);
      });
    }
  }
  return result;
}

console.log(getCard());
