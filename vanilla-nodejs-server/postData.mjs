export const postData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      req.on("data", (chunk) => {
        // json object format e chunk chunk stream(vag vag) kore data nibe
        body += chunk.toString();
      });
      req.on("end", () => {
        resolve(body);
      });
    } catch (err) {
      reject(err);
    }
  });
};
