const Listing = require("./models/listing.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema} = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async (req, res, next) => {
    const {id} = req.params;
    let listing = await Listing.findById(id)
    if(!listing.owner._id.equals(res.locals.currUser._id)){
        req.flash("error", "You are not the owner of this lising!");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.validateListing = (req, res, next) => {
    let result = listingSchema.validate(req.body);
    if(result.error){
        let errMsg = result.error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
};