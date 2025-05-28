const http = require("http");

const httpServer = http.createServer((request,response) => {
  console.log(request.url)
  console.log(request.method)

  response.statusCode =200
  response.setHeader('ContentType','playn/text')
  response.end('result')
});

httpServer.listen(5000, "localhost", () => {
  console.log('Server is listening port 5000,host "localhost"');
});
