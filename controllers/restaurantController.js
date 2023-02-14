// const assert = require("assert");
// const Definer = require("../lib/mistake");
// const Member = require("../models/Member");
// const Product = require("../models/Product");

// let restaurantController = module.exports;

// restaurantController.home = (req, res) => {
//   try {
//     console.log("GET: cont/home");
//     res.render("home-page");
//   } catch (error) {
//     console.log(`ERROR, cont/home, ${err.message}`);
//     res.json({ state: "fail", message: err.message });
//   }
// };

// restaurantController.getMyRestaurantProducts = async (req, res) => {
//   try {
//     console.log("GET: cont/getMyRestaurantProducts");

//     const product = new Product();
//     const data = await product.getAllProductsDataResto(res.locals.member);
//     res.render("restaurant-menu", { restaurant_data: data });
//   } catch (err) {
//     console.log(`ERROR, cont/getMyRestaurantProducts, ${err.message}`);
//     res.redirect("/resto");
//   }
// };

// restaurantController.getSignupMyRestaurant = async (req, res) => {
//   try {
//     console.log("GET: cont/getSignupMyRestaurant");
//     res.render("signup");
//   } catch (err) {
//     console.log(`ERROR, cont/getSignupMyRestaurant, ${err.message}`);
//     res.json({ state: "fail", message: err.message });
//   }
// };

// restaurantController.signupProcess = async (req, res) => {
//   try {
//     console.log("POST: cont/signupProcess");

//     assert(req.file, Definer.general_err3);

//     let new_member = req.body;
//     new_member.mb_type = "RESTAURANT";
//     new_member.mb_image = req.file.path;

//     const member = new Member();
//     const result = await member.signupData(new_member);

//     assert(result, Definer.general_err1);

//     req.session.member = result;
//     res.redirect("/resto/products/menu");

//     //SESSION
//   } catch (err) {
//     console.log(`ERROR, cont/signupProcess, ${err.message}`);
//     res.json({ state: "fail", message: err.message });
//   }
// };

// restaurantController.getLoginMyRestaurant = async (req, res) => {
//   try {
//     console.log("GET: cont/getLoginMyRestaurant");
//     res.render("login-page");
//   } catch (err) {
//     console.log(`ERROR, cont/getLoginMyRestaurant, ${err.message}`);
//     res.json({ state: "fail", message: err.message });
//   }
// };

// restaurantController.loginProcess = async (req, res) => {
//   try {
//     console.log("POST: cont/loginProgress");

//     const data = req.body,
//       member = new Member(),
//       result = await member.loginData(data);
//     console.log(result);

//     req.session.member = result;
//     req.session.save(function () {
//       result.mb_type === "ADMIN"
//         ? res.redirect("/resto/all-restaurant")
//         : res.redirect("/resto/products/menu");
//     });
//     console.log(req.session);
//   } catch (err) {
//     console.log(`ERROR, cont/loginProcess, ${err.message}`);
//     res.json({ state: "fail", message: err.message });
//   }
// };

// restaurantController.logout = (req, res) => {
//   try {
//     console.log("GET cont.logout");
//     req.session.destroy(function () {
//       res.redirect("/resto");
//     });
//   } catch (err) {
//     console.log(`ERROR, cont/logout, ${err.message}`);
//     res.json({ state: "fail", message: err.message });
//   }
// };

// // restaurantController.validateAuthRestaurant = (req, res, next) => {
// //   if (req.session?.member?.mb_type === "RESTAURANT") {
// //     req.member = req.session.member;
// //     next();
// //   } else
// //     res.json({
// //       state: "fail",
// //       message: "only authenticated members with restaurant type",
// //     });
// // };

// restaurantController.validateAuthRestaurant = (req, res, next) => {
//   if (req.session?.member?.mb_type === "RESTAURANT") {
//     req.member = req.session.member;
//     console.log("req.member:::", req.member);
//     next();
//   } else {
//     res.json({
//       state: "fail",
//       message: "Only authentificated members with restaurant type",
//     });
//   }
// };

// restaurantController.checkSessions = (req, res) => {
//   if (req.session?.member) {
//     res.json({ state: "succeed", data: req.session.member });
//   } else {
//     res.json({ state: "fail", message: "You are not authenticated" });
//   }
// };

const Definer = require("../lib/mistake");
const Member = require("../models/Member");
const Product = require("../models/Product");
const assert = require("assert");
// const Restaurant = require("../models/Restaurant");

let restaurantController = module.exports;

// restaurantController.getRestaurants = async (req, res) => {
//   try {
//     console.log("GET: cont/getRestaurants");
//     const data = req.query,
//       restaurant = new Restaurant(),
//       result = await restaurant.getRestaurantsData(req.member, data);
//     res.json({ state: "success", data: result });
//   } catch (err) {
//     console.log(`ERROR: cont/getRestaurants`, err);
//     res.json({ state: "fail", message: err.message });
//   }
// };

// restaurantController.getChosenRestaurant = async (req, res) => {
//   try {
//     console.log("GET: cont/getChosenRestaurant");
//     const id = req.params.id,
//       restaurant = new Restaurant(),
//       result = await restaurant.getChosenRestaurantData(req.member, id);

//     res.json({ state: "success", data: result });
//   } catch (err) {
//     console.log(`ERROR: cont/getChosenRestaurant`, err);
//     res.json({ state: "fail", message: err.message });
//   }
// };

/**********************************
 *       BSSR RELATED METHODS     *
 **********************************/

restaurantController.home = (req, res) => {
  try {
    console.log("GET: cont/home");
    res.render("home-page");
  } catch (err) {
    console.log(`ERROR: cont/home`, err);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.getMyRestaurantProducts = async (req, res) => {
  try {
    console.log("GET: cont/getMyResturantData");
    const product = new Product();
    const data = await product.getAllProductsDataResto(res.locals.member);
    res.render("restaurant-menu", { restaurant_data: data });
  } catch (err) {
    console.log(`ERROR: cont/getMyResturantData`, err);
    res.redirect("/resto");
  }
};

restaurantController.getSignupMyRestaurant = async (req, res) => {
  try {
    console.log("GET: cont/getSignupMyResturant");
    res.render("signup");
  } catch (err) {
    console.log(`ERROR: cont/getSignupMyResturant`, err);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.signupProcess = async (req, res) => {
  try {
    console.log("POST: cont/signupProcess");
    assert(req.file, Definer.general_err3);

    let new_member = req.body;
    new_member.mb_type = "RESTAURANT";
    new_member.mb_image = req.file.path;

    const member = new Member();
    const result = await member.signupData(new_member);
    assert(req.file, Definer.general_err1);

    req.session.member = result;
    res.redirect("/resto/products/menu");
  } catch (err) {
    console.log(`ERROR: cont/signup`, err.message);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.getLoginMyRestaurant = async (req, res) => {
  try {
    console.log("GET: cont/getLoginMyResturant");
    res.render("login-page");
  } catch (err) {
    console.log(`ERROR: cont/getLoginMyResturant`, err);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.loginProcess = async (req, res) => {
  try {
    console.log("POST: cont/login");
    const data = req.body,
      member = new Member(),
      result = await member.loginData(data);

    req.session.member = result;
    req.session.save(function () {
      result.mb_type === "ADMIN"
        ? res.redirect("/resto/all-restaurant")
        : res.redirect("/resto/products/menu");
    });
  } catch (err) {
    console.log(`ERROR: cont/login`, err.message);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.logout = async (req, res) => {
  try {
    console.log("GET cont/logout");
    req.session.destroy(function () {
      res.redirect("/resto");
    });
  } catch (err) {
    console.log(`ERROR, cont/logout, ${err.message}`);
    res.json({ state: "fail", message: err.message });
  }
};

restaurantController.validateAuthRestaurant = (req, res, next) => {
  if (req.session?.member?.mb_type === "RESTAURANT") {
    req.member = req.session.member;
    next();
  } else
    res.json({
      state: "fail",
      message: "only authenticated members with RESTAURANT type",
    });
};

restaurantController.checkSessions = (req, res) => {
  if (req.session?.member) {
    res.json({ state: "success", data: req.session.member });
  } else {
    res.json({ state: "fail", message: "You are not authenticated" });
  }
};

// restaurantController.getAllRestaurants = async (req, res) => {
//   try {
//     console.log("GET: cont/getAllRestaurants");

//     const restaurant = new Restaurant();
//     const restaurants_data = await restaurant.getAllRestaurantData();
//     res.render("all-restaurants", { restaurants_data: restaurants_data });
//   } catch (err) {
//     console.log(`ERROR, cont/getAllRestaurants, ${err.message}`);
//     res.json({ state: "fail", message: err.message });
//   }
// };

// restaurantController.updateRestaurantByAdmin = async (req, res) => {
//   try {
//     console.log("GET cont/updateRestaurantByAdmin");
//     const restaurant = new Restaurant();
//     const result = await restaurant.updateRestaurantByAdminData(req.body);
//     await res.json({ state: "success", data: result });
//   } catch (err) {
//     console.log(`ERROR, cont/updateRestaurantByAdmin, ${err.message}`);
//     res.json({ state: "fail", message: err.message });
//   }
// };

// restaurantController.validateAdmin = (req, res, next) => {
//   if (req.session?.member?.mb_type === "ADMIN") {
//     req.member = req.session.member;
//     next();
//   } else {
//     const html = `<script>
//                     alert("Admin page: Permission denied");
//                     window.location("/resto");
//                   </script>`;
//     res.end(html);
//   }
// };
