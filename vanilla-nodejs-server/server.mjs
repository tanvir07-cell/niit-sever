// using the es6 module that's why the file name is server.mjs(module javaScript)

import { createServer } from "http";

import chalk from "chalk";
import { users } from "./users.mjs";
const PORT = process.env.PORT || 5000;

const server = createServer((req, res) => {
  if (req.url === "/api/v1/users" && req.method === "GET") {
    // ki type er response chaitesi ta thakbe writeHead e jemon ami chaitese json akare data dibe:
    try {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(users));
    } catch (err) {
      res.end(err.message);
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port : ${PORT} `);
});

// if already server is running in another port then handle the error:
server.on("error", (err) => {
  const chalkError = chalk.bold.red;
  if (err.code === "EADDRINUSE") {
    console.log(chalkError(`Server is already listening on port : ${PORT} ❌`));
  }
});
