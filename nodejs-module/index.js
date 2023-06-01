// This is the commonjs.module import(node.js e alltime common.js ei import kora hoy):

const arrayManipulation = require("./utils");

console.log(
  arrayManipulation.getUpperCaseOrLowerCase(
    ["Tanvir", "rifat", "william", "Sentance"],
    "lowercase"
  )
);

console.log(
  arrayManipulation.getUpperCaseOrLowerCase(
    ["Tanvir", "rifat", "william", "Sentance"],
    "uppercase"
  )
);

console.log(
  arrayManipulation.getIndex(
    ["Tanvir", "rifat", "william", "Sentance"],
    "Sentance"
  )
);
