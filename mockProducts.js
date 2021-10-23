const products = [];

const colors = ["lacivert", "sarı", "siyah", "beyaz"];
const productBrands = [
  "Samsung",
  "Nokia",
  "Apple",
  "LG",
  "Huawei",
  "Xiaomi",
  "General Mobile",
];
const productPriceRange = [8500, 15000];
const productDiscountRange = [1, 100];
const productAddTimeRange = [1477780621, 1634984597];
const productQuantityRange = [1, 25];

module.exports = generateRandomProducts = () => {
  for (let i = 0; i < 37; i++) {
    products.push({
      id: i + 1,
      name: "",
      brand: productBrands[Math.floor(Math.random() * productBrands.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      price:
        Math.floor(Math.random() * productPriceRange[1]) + productPriceRange[0],
      discountRate:
        Math.floor(Math.random() * productDiscountRange[1]) +
        productDiscountRange[0],
      addedTime:
        Math.floor(Math.random() * productAddTimeRange[1]) +
        productAddTimeRange[0],
      quantity:
        Math.floor(Math.random() * productQuantityRange[1]) +
        productQuantityRange[0],
    });
  }
  return products;
};

