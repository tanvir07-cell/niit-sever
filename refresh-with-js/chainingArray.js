// 12000 theke boro item gula filter koro
// then uppercase koro
// then koyti item stock ase ta ber koro:
const products = [
  ["samsung phone", 12000],
  ["samsung phone", 14000],
  ["samsung phone", 14000],
  ["samsung phone", 14000],
  ["xiomi", 14500],
  ["iphone", 44500],
];
let stock = 1;

const filteredProducts = products
  .filter((product) => product[1] > 12000)
  .map((product) => [product[0].toUpperCase(), product[1]])
  .reduce((acc, cur) => {
    // stockItem return an array because we return the reduce function array in the second parameter;
    let stockItems = acc.find((stock) => stock[0] === cur[0]);

    if (!stockItems) {
      acc.push([cur[0], 1]);
    } else {
      stockItems = stockItems[1]++;
    }
    return acc;
  }, []);

console.log(filteredProducts);
