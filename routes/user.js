const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");

router.get("/signup", (req, res) => {
    res.render("../views/users/signup.ejs");
});

module.exports = router;