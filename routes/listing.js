const express = require("express");
const router = express.Router();
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js"); 

//listings
//Index Route
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}));

//New Route
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
});

//Create Route
router.post("/", isLoggedIn, validateListing, wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "Listing created successfully!");
    res.redirect("/listings");
}));

//Show Route
router.get("/:id", wrapAsync(async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews").populate("owner");
    if(!listing){
        req.flash("error", "Listing you are looking for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs", {listing});
}));

//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error", "Listing you are looking for does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs", {listing});
}));

//Update Route
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(async (req, res) => {
    if(!req.body.listing){
        throw new ExpressError(400, "Please send valid data for listing!");
    }
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing}, {runValidators: true, new: true});
    req.flash("success", "Listing updated successfully!");
    res.redirect(`/listings/${id}`);
}));

//Delete Route
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success", "Listing deleted successfully!");
    console.log(deletedListing);
    res.redirect("/listings");
}));

module.exports = router;