// data fetching or data er sathe operation related kono kaaj ei file ei hobe:
// Third party kono website or database theke data get korte hole fetch use kortam but eikhane users.json theke data fetch korte hobe tai file system use korete hobe:

const fs = require("fs/promises");

const getUsers = async () => {
  try {
    // gives a json object:
    const data = await fs.readFile("./users.json", "utf-8");
    // now convert this json object to the normal js object:
    const result = JSON.parse(data);
    return result;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  getUsers,
};
