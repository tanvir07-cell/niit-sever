const arrayManipulation = {
  getUpperCaseOrLowerCase: (myStringArr, Case) => {
    let newArr = [];
    for (const element of myStringArr) {
      newArr.push(
        Case === "uppercase" ? element.toUpperCase() : element.toLowerCase()
      );
    }
    return newArr;
  },

  getIndex: (myStringArr, element) => {
    return myStringArr.indexOf(element);
  },
};

module.exports = arrayManipulation;
