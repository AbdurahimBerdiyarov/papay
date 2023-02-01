const express = require("express");
const router_bssr = express.Router();
const restaurantController = require("./controllers/restaurantController");
const productController = require("./controllers/productController");
<<<<<<< HEAD
const uploader_product = require("./utils/upload-multer")("products");
=======
const { uploadProductImage } = require("./utils/upload-multer");
>>>>>>> 11d295e2d0b095b516788aa6cfd5b5079b7e20da

/****************************
 *        BSSR EJS           *
 *****************************/

router_bssr
  .get("/signup", restaurantController.getSignupMyRestaurant)
  .post("/signup", restaurantController.signupProcess);

router_bssr
  .get("/login", restaurantController.getLoginMyRestaurant)
  .post("/login", restaurantController.loginProcess);

router_bssr.get("/logout", restaurantController.logout);
router_bssr.get("/check-me", restaurantController.checkSessions);

router_bssr.get("/products/menu", restaurantController.getMyRestaurantData);
router_bssr.post(
  "/products/create",
  restaurantController.validateAuthRestaurant,
<<<<<<< HEAD
  uploader_product.array("product_images", 5),
=======
  uploadProductImage.single("product_image"),
>>>>>>> 11d295e2d0b095b516788aa6cfd5b5079b7e20da
  productController.addNewProduct
);
router_bssr.post("/products/edit/:id", productController.updateChosenProduct);

module.exports = router_bssr;
