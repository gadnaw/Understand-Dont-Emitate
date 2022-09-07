const express = require("express");

const app = express();
//START HERE FOR MIDDLEWARE

// app.use([path,] callback [, callback...])
//
//IF we dont use next(), we need to organize the middleware top-down format. the "/" is last to be called"
//
//
////////////////////////////////
//Body Parser Middleware
// npm install --save body-parser
/////
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());

//
//

app.use("/", (req, res, next) => {
  console.log("This always run");
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST" ><input type="text" name="title"><button type="submit">Submit</button></form>'
  );
});

//POST Method
app.post("/product", (req, res) => {
  console.log(req.body); //this is posible because of body-parser
  res.location("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Hello from Express</h1>");
});

//END HERE FOR MIDDLEWARE
app.listen(8080);
