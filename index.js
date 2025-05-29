const http = require("http");
const requestListener = require("./requestListener");

const httpServer = http.createServer(requestListener);

httpServer.listen(5000, "localhost", () => {
  console.log('Server is listening port 5000,host "localhost"');
});
