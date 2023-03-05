const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController");

/****************************
 *        REST API           *
 *****************************/

// memberga dahldor routerlar

router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);
router.get("/check-me", memberController.checkMyAuthentication);

// boshqa routerlarr
router.get("/menu", function (req, res) {
  res.end("Menu sahifadasiz");
});

router.get("/community", function (req, res) {
  res.end("Jamiyat sahifadasiz");
});

module.exports = router;
