const products = [
  { name: "samsung phone", price: 12000 },
  { name: "samsung phone", price: 13000 },
  { name: "xiomi", price: 14000 },
  { name: "iphone", price: 45500 },
  { name: "iphone", price: 45500 },
  { name: "iphone", price: 45500 },
];
let count = 0;

const filteredProducts = products
  .filter((prod) => prod.price > 12000)
  .map((prod) => {
    return {
      ...prod,
      id: count++,
      name: prod.name.toUpperCase(),
    };
  })
  .reduce((acc, cur) => {
    // Here stockItem return an object:
    let stockItem = acc.find((stock) => stock.name === cur.name);
    if (!stockItem) {
      acc.push({ ...cur, stock: 1 });
    } else {
      stockItem = stockItem.stock++;
    }

    return acc;
  }, []);
console.log(filteredProducts);
