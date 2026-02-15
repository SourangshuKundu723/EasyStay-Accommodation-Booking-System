const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

main().then((res) => {
    console.log("connection successful");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Wanderlust");
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

app.use(session({
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: true
}));

app.get("/", (req, res) => {
    res.send("root is working");
});

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

app.use((req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

//Custom Error Handler
app.use((err, req, res, next) => {
    let {status=500, message="Something went wrong!"} = err;
    res.status(status).render("error.ejs", {message});
});

app.listen(8080, () => {
    console.log("app is listening to port 8080");
});