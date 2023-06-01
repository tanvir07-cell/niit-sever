const calculateTotalBillAfterDiscount = (amnt, discountPerc) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (discountPerc <= 0) {
        return reject("Invalid discount!");
      }
      resolve(amnt - amnt * discountPerc);
    }, 1 * 1000);
  });
};

const validateBillAmount = (billAmount) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (billAmount <= 0) {
        return reject("Invalid bill amount!");
      }
      resolve(billAmount);
    });
  });
};

const billAmnt = process.argv[2];
const discount = process.argv[3];

validateBillAmount(billAmnt)
  .then((amount) => {
    // validateBillAmount er bill ti pass kore dibo abar calculateTotalBillAfterDiscount e. ekei promise chaining bole:
    return calculateTotalBillAfterDiscount(amount, discount);
  })
  .then((result) =>
    console.log(`After applying ${discount} the price is : ${result}`)
  )
  .catch((err) => console.log(err));
