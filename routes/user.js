const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const User = require("../models/user.js");

router.get("/signup", (req, res) => {
    res.render("../views/users/signup.ejs");
});

router.post("/signup", wrapAsync(async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let newUser = new User({username, email});
        let registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.flash("success", "User registered succesfully!");
        res.redirect("/listings");
    } catch(err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
}));

module.exports = router;