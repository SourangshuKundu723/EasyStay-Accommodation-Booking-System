const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const User = require("../models/user.js");
const passport = require("passport");
const { isLoggedIn, saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");

//users
//Signup routes
router.route("/signup")
.get(userController.renderSignUpForm)
.post(wrapAsync(userController.signup));

//Login route
router.route("/login")
.get(userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), userController.login);

router.get("/logout", userController.logout);

router.get("/profile", isLoggedIn, userController.showProfile);

module.exports = router;