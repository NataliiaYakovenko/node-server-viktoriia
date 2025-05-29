const { readFile } = require("fs/promises");
const http = require("http");

const httpServer = http.createServer((request, response) => {
  console.log(request.url);
  console.log(request.method);

  readFile("./index.html", { encoding: "utf-8" })
    .then((data) => {
      response.statusCode = 200;
      response.setHeader("ContentType", "playn/text");
      response.end(data);
    })
    .catch((error) => {
      response.statusCode = 500;
      response.setHeader("ContentType", "playn/text");
      response.end("file had not read");
    });

  // response.end('result')
});

httpServer.listen(5000, "localhost", () => {
  console.log('Server is listening port 5000,host "localhost"');
});
