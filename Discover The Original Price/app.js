function discoverOriginalPrice(discountedPrice, salePercentage) {
  let originalPrice = discountedPrice / ((100 - salePercentage) / 100);
  return Math.round((originalPrice + Number.EPSILON) * 100) / 100;
}

console.log(discoverOriginalPrice(75, 25)); // 100
console.log(discoverOriginalPrice(75.75, 25)); // 101
