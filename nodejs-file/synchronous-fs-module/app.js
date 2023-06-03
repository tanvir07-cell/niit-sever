const fs = require("fs");
// reading file with synchronous way:

const loadBooks = () => {
  // "utf-8" dile return korbe json object
  // ar jodi "utf-8" na likhi tahole return korbe ekti buffer:
  const jsonBooks = fs.readFileSync("data.json", "utf-8");
  // convert json object to normal object:
  const books = JSON.parse(jsonBooks);
  return books;
};

// Then add books in the data.json file:
const addBooks = (title, author) => {
  // load the books:
  const books = loadBooks();
  // Then check the books already exist in the data.json:
  const duplicateBooks = books.filter((book) => book.title === title);
  if (duplicateBooks.length === 0) {
    books.push({ title: title, author: author });
    console.log(
      `${title} and ${author} successfully added to the data.json file`
    );
  } else {
    console.log("books title or author already exist in the data.json file");
  }
  // then write books in the data.json file using saveBooks():
  saveBooks(books);
};

const saveBooks = (books) => {
  // then convert the normal object to json object:
  const jsonBooks = JSON.stringify(books);
  // then write this data:
  fs.writeFileSync("data.json", jsonBooks);
};

//  get all data line by line:
const getAllBooks = () => {
  const books = loadBooks();
  books.forEach((book) => console.log(book));
};

// get a specific book:
const getABook = (title) => {
  const books = loadBooks();
  const getBook = books.find((book) => book.title === title);
  if (getBook) {
    console.log(
      `${title} book is retrieved successfully title:${getBook.title}, author:${getBook.author}`
    );
  } else {
    console.log(`OOPS! ${title} book is not here`);
  }
};

// delete a book:
const deleteAbook = (title) => {
  const books = loadBooks();
  const filteredBooks = books.filter((book) => book.title !== title);

  if (filteredBooks.length > 0) {
    console.log(`${title} book is successfully deleted!`);
  }
  const deleteBook = filteredBooks.find((book) => book.title === title);

  if (!deleteBook) {
    console.log(`OOPS! this book is not here that's why not delete this`);
  }

  // then save it to the data.json file:
  saveBooks(filteredBooks);
};

// all funcionality inside the addBooks function that's why i import this as a module:
module.exports = { addBooks, getAllBooks, getABook, deleteAbook };
