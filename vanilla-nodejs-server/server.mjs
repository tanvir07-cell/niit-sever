import { createServer } from "http";
import { users } from "./users.mjs";
import { postData } from "./postData.mjs";

const PORT = process.env.PORT || 5000;

const server = createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(`<h1>This is the simply server</h1>`);
  }

  if (req.method === "GET" && req.url === "/api/v1/users") {
    // server theke ami kon doroner data pete chai. ei jaygay ami response hishebe application/json type er data pabo:
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(users));
  }

  if (req.method === "POST" && req.url === "/api/v1/users") {
    try {
      // body return a json object

      const body = await postData(req);
      //   now add to the body to the users array:
      users.push(JSON.parse(body));
      res.writeHead(201, { "content-type": "application/json" });
      res.end(body);
    } catch (err) {
      res.end(err.message);
    }
  }

  if (req.method === "DELETE" && req.url.match(/\/api\/v1\/users\/([0-9])/)) {
    // get the id from the url:
    const id = req.url.split("/")[4];
    // now find the specific user:
    const user = users.find((user) => user.id === parseInt(id));

    if (!user) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          status: false,
          message: "User is not here",
        })
      );
    } else {
      // if user exist then remove it from the users array:
      const index = users.indexOf(user);
      //   remove the user from the users array:
      users.splice(index, 1);

      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          isDeleted: true,
          message: `${user.name} deleted successfully`,
        })
      );
    }
  }

  if (req.method === "GET" && req.url.match(/\/api\/v1\/users\/([0-9])/)) {
    const id = req.url.split("/")[4];
    // now find the specific user:
    const user = users.find((user) => user.id === parseInt(id));

    if (!user) {
      res.writeHead(404, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          status: false,
          message: "User is not found so that's why not get",
        })
      );
    } else {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          status: true,
          message: `${user.name} retrieved successfully`,
        })
      );
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port : ${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.log(`Server is already listening on port : ${PORT}`);
  }
});
