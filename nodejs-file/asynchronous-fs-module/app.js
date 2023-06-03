// we uses the promise that's why we don't need the callback to handle fs module's returning result:
const fs = require("fs").promises;

// readFile:
const loadFile = async () => {
  try {
    const jsonStringData = await fs.readFile("data.json", "utf-8");
    const parseJsonData = JSON.parse(jsonStringData);
    console.log(parseJsonData);
  } catch (err) {
    console.log(err);
  }
};

loadFile();
