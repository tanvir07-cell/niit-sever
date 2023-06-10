// This is the custom error class:
// and the built in error class is throw new Error("")

class AgeError extends Error {
  constructor(msg) {
    super(msg);
    // error er name ta ki hobe: ei khane hobe AgeError karon et holo amar class er name:
    this.name = this.constructor.name;
    this.message = msg;
  }
}

module.exports = AgeError;
