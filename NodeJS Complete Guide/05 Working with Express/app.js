const http = require("http");

const express = require("express");

const app = express();
//START HERE FOR MIDDLEWARE

//.use middleware
/** @param next Allows the request to continue to the next middleware in the line */
app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});

//no next, use res.send()
app.use((req, res, next) => {
  console.log("in another middleware");
  res.send("<h1>Hello from Express</h1>");
});

//END HERE FOR MIDDLEWARE
// const server = http.createServer(app);
// server.listen(8080);

//shorthand for 2 line code above
app.listen(8080);
