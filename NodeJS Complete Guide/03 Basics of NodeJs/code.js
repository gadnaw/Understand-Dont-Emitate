// Goal:
// 1. Listen on port 8080

// 2. Response to Home page
// 3. Take the request
// 4. Write file

const { log } = require("console");
const http = require("http");

const server = http.createServer(function (req, res) {
  const url = req.url;

  if (url === "/") {
    res.write(
      '<html><head></head><body><form action="/message" method="POST"><input type="text" name="message0002"><button>Submit</button></form></body></html>'
    );
    res.end();
  }

  const method = req.method;
  const fs = require("fs");
  if (url === "/message" && method === "POST") {
    const body = [];
    // sample streem and buffer
    req.on("data", function (chunk) {
      body.push(chunk);
    });
    req.on("end", function () {
      //Buffer is Built-in
      console.log(Buffer.chunk);
      const parseBody = Buffer.concat(body).toString();
      const message = parseBody.split("=")[1];

      //Asynchronous write to file
      fs.writeFile("message.txt", message, (err) => {
        if (!err) {
          res.statusCode = 302;
          res.setHeader("Location", "/");
        }

        return res.end();
      });
    });

    //Using fs to write message to file

    console.log(req.url, req.method);
  }
});

server.listen(8080);
