const addition = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        return resolve(a + b);
      }
      reject("Both a and b is not a number");
    }, 1000);
  });
};

const multiplyBy2 = (fromAddition) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (fromAddition === 6) {
        return resolve(fromAddition * 2);
      }
      reject("from the value of addition is not a number of 6");
    }, 1000);
  });
};

const getAddition = async (num1, num2) => {
  try {
    const sum = await addition(num1, num2);
    const result = await multiplyBy2(sum);
    console.log("After sum then multiplyBy2 is :", result);
  } catch (err) {
    console.log(err);
  }
};

const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

getAddition(num1, num2);
