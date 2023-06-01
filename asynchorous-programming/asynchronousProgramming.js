const chalk = require("chalk");
function calCulateBillAfterDiscountPercentage(error, amnt, disPerc) {
  const chalkError = chalk.bold.red;

  //   by default 1st argument e error thake kono ekti function e:
  if (error) {
    return console.log(chalkError("Error Occured"));
  }
  setTimeout(() => {
    console.log(amnt - amnt * disPerc);
  });
}

function validateBillAmnt(amnt) {
  if (amnt <= 0) {
    console.log("Invalid bill amount");
  } else {
    console.log("Valid bill amount");
  }
}

calCulateBillAfterDiscountPercentage("error", 12000, 0.25);
validateBillAmnt(0);
