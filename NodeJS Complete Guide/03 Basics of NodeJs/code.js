// Goal:
// 1. Listen on port 8080
// 2. Response to Home page
// 3. Take the request
// 4. Write file

const http = require("http");

const server = http.createServer(function (req, res) {
  console.log(req.url, req.method);
  const url = req.url;

  if (url === "/") {
    res.write(
      '<html><head></head><body><form action="/message" method="POST"><input type="text" name="message0002"><button>Submit</button></form></body></html>'
    );
  }

  console.log(req);
});

server.listen(8080);
