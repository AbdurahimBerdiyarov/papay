console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const router = require("./router.js");

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2 Session code

// 3 Views
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
// app.use("/resto", router_bssr);   //ananaviy
app.use("/", router); //React

module.exports = app;
