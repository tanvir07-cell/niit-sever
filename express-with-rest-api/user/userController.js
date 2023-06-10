// eikhane callback function gula thakbe and eita service layer ke call korbe:

const { getUserServices } = require("./userService");

const getUserControllers = async () => {
  const result = await getUserServices();
  return result;
};

module.exports = { getUserControllers };
