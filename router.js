const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.end("home sahifadasiz");
});

router.get("/menu", function (req, res) {
  res.end("Menu sahifadasiz");
});

router.get("/community", function (req, res) {
  res.end("Jamiyat sahifadasiz");
});

module.exports = router;
