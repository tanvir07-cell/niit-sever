const { getAllBooks, addBooks, getABook, deleteAbook } = require("./app");

// get all books line by line:
getAllBooks();

// add books:
addBooks("alo tumi keno eka", "Tanvir Rifat");

// get a specific book:
getABook("akash-batash");

// delete A specific book:

deleteAbook("akash-batash");

getAllBooks();

console.log(
  "ami porei print hobo karon app.js e use korse synchronous fs module"
);
