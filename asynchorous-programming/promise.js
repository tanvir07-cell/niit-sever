const multiplyBy2 = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num === 4) {
        return resolve(num);
      }
      reject("num is not 4😢");
    }, 1000);
  });
};

multiplyBy2(5)
  .then((res) => console.log("The result is : ", res))
  .catch((err) => console.log(err));

console.log("Ami age print hobo beda");
