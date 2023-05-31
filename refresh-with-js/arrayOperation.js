// calculate the discounted price:
const products = [
  ["samsung phone", 12000],
  ["samsung phone", 14000],
  ["xiomi", 14500],
  ["iphone", 44500],
];

// const discountedPrices = (discount) => {
//   return products.map((product) => [
//     product[0],
//     product[1] - (product[1] * discount) / 100,
//   ]);
// };

// // map return the new array and map doesn't change the original array:
// console.log("Before Applying the discount : ", products);

// console.log("After discount : ", discountedPrices(10));

// 12000 er beshi jeigular price sigulare filter koro then tar upore 15% discount deo:

const filteredArrayAndAfterDiscount = products
  .filter((product) => product[1] > 12000)
  .map((filterPd) => [filterPd[0], filterPd[1] - (filterPd[1] * 15) / 100]);

console.log(filteredArrayAndAfterDiscount);
