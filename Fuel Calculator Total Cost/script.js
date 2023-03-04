function fuelPrice(litres, pricePerLitre) {
  // Purchases of 2 or more litres
  // get a discount of 5 cents per litre
  // purchases of 4 or more litres
  // get a discount of 10 cents per litre,
  // and so on every two litres,
  let discount = Math.floor(litres / 2) * 0.05;
  // up to a maximum discount of 25 cents per litre
  // total discount per litre cannot be more than 25 cents
  if (discount > 0.25) {
    discount = 0.25;
  }
  // Return the total cost rounded to 2 decimal places
  let result = litres * pricePerLitre - litres * discount;
  // https://stackoverflow.com/a/12830454/16375377
  return Math.round((result + Number.EPSILON) * 100) / 100;
}

console.log(fuelPrice(5, 1.23)); // 5.65
console.log(fuelPrice(8, 2.5)); // 18.40
console.log(fuelPrice(5, 5.6)); // 27.50
