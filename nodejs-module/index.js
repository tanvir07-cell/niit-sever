// // This is the commonjs.module import(node.js e alltime common.js ei import kora hoy):

const { reverseString } = require("./utils");

// const arrayManipulation = require("./utils");

// console.log(
//   arrayManipulation.getUpperCaseOrLowerCase(
//     ["Tanvir", "rifat", "william", "Sentance"],
//     "lowercase"
//   )
// );

// console.log(
//   arrayManipulation.getUpperCaseOrLowerCase(
//     ["Tanvir", "rifat", "william", "Sentance"],
//     "uppercase"
//   )
// );

// console.log(
//   arrayManipulation.getIndex(
//     ["Tanvir", "rifat", "william", "Sentance"],
//     "Sentance"
//   )
// );

// taking a input:
const str = process.argv[2];
console.log(reverseString(str));
