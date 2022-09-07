// Goal:
// 1. Listen on port 8080

// 2. Response to Home page
// 3. Take the request
// 4. Write file

const http = require("http");
const routes = require("./routes");

const server = http.createServer(routes);

server.listen(8080);
