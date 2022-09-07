const express = require("express");

//pluggable express app for routes
const Router = express.Router();

//NOTE: they have all the same that has "/add-product"

//GET Method
Router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/admin/add-product" method="POST" ><input type="text" name="title"><button type="submit">Submit</button></form>'
  );
});

//POST Method
Router.post("/add-product", (req, res) => {
  console.log(req.body); //this is posible because of body-parser
  res.redirect("/");
});

module.exports = Router;
