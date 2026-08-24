const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer");
const upload = multer({ dest: "uploads/"});

const listingController = require("../controllers/listings.js");

//listings
//Index route & create route
router.route("/")
.get(wrapAsync(listingController.index))
.post(
    // isLoggedIn, validateListing, wrapAsync(listingController.createListing)
    upload.single("listing[image]"),
    (req, res) => {
        res.send(req.file);
    }
);

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

//Show route, update route & delete route
router.route("/:id")
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.updateListing))
.delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;