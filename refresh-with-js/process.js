// command line e likhbo node emnei.js Tanvir(which is process.argv[2]) Rifat(which is process.argv[3])
var firstName = process.argv[2];
var lastName = process.argv[3];
console.log(`Your FullName is ${firstName} ${lastName}`);

// node js ta kon directory te install ache:
console.log("File path is : ", process.argv[0]);

// ei file ti kon directory te ache:
console.log("File name is : ", process.argv[1]);

// return array all of command lines:
console.log(process.argv);
