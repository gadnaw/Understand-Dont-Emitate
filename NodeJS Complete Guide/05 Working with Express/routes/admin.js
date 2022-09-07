const path = require("path");

const express = require("express");

//pluggable express app for routes
const Router = express.Router();

//NOTE: they have all the same that has "/add-product"

//GET Method
Router.get("/add-product", (req, res, next) => {
  //path core module
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

//POST Method
Router.post("/add-product", (req, res) => {
  console.log(req.body); //this is posible because of body-parser
  res.redirect("/");
});

module.exports = Router;
