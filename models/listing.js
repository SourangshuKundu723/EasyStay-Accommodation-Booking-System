const mongoose = require("mongoose");
const Review = require("./review.js");

const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        type: String,
        default: "https://drive.google.com/file/d/1JoTmlTNnQ4GFaXNfg0WeC9rUIxe0zqBD/view?usp=sharing",
        set: (v) => v === "" ? "https://drive.google.com/file/d/1JoTmlTNnQ4GFaXNfg0WeC9rUIxe0zqBD/view?usp=sharing" : v
    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    country: {
        type: String
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Review"
    }]
});

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing){
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;