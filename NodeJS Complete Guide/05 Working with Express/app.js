const path = require("path");

const express = require("express");

const app = express();

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

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
// const { request } = require("express");
app.use(bodyParser.urlencoded({ extended: false }));

//NOTE: this is how to add public static assets
app.use(express.static(path.join(__dirname, "public")));

//Note: be careful with the order if you use "app.use"
/** @param "/admin" --> instead of /admin/add-product
 * "/admin" is common path
 */
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//404 Error
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
//

//END HERE FOR MIDDLEWARE
app.listen(8080);
