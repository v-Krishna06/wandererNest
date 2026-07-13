const express = require("express")
const router = express.Router({ mergeParams: true });
const ExpressError = require("../utils/ExpressError")
const Listing = require("../models/listing.js")

const Review = require("../models/review.js")
const wrapAsync = require("../utils/wrapAsync")
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js")

const reviewController = require("../controllers/review.js")



//review
router.post("/",isLoggedIn,validateReview ,wrapAsync(reviewController.createReview))

//del r
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview))
module.exports=router;