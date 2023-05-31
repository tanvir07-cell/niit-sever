// using es5 classes to create an object:
function Person(name, age, skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}

// creating and method and it's the method of Person class no other object directly has not his method. Any other object access this object through it's __prot__ property:
Person.prototype.isWalking = function (name) {
  return `${name} is walking`;
};
const rifat = new Person("Tanvir Rifat", 22, ["c", "c++", "js"]);

// console.log(rifat.__proto__);
console.log(rifat.isWalking("Tanvir Rifat"));
