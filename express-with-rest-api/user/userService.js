// amar app er business logic gula ei userService e thakbe:

const { getUsers } = require("./userDAO");

const getUserServices = async () => {
  const result = await getUsers();
  return result;
};

module.exports = { getUserServices };
