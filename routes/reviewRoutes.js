const express = require("express");
const router = express.Router();
const fs = require('fs');



router.get("/reviews", (req, res) => {
  let reviews = JSON.parse(fs.readFileSync("reviews.txt").toString());
  res.render("home", { reviews: reviews });
});

router.get("/addReview", (req, res) => {
  res.render("addReview");
});

router.post("/addReviewForm", (req, res) => {
  let reviews = JSON.parse(fs.readFileSync("reviews.txt").toString());
  reviews.push(req.body);
  fs.writeFileSync("reviews.txt", JSON.stringify(reviews));
  res.render("home", { reviews: reviews });
});

router.get("/delete/:id", (req, res) => {
  let reviews = JSON.parse(fs.readFileSync("reviews.txt").toString());
  reviews.splice(req.params.id, 1);
  fs.writeFileSync("reviews.txt", JSON.stringify(reviews));
  res.render("home", { reviews: reviews });
});

router.post("/updateReviewForm/:id", (req, res) => {
  let reviews = JSON.parse(fs.readFileSync("reviews.txt").toString());
  const id = req.params.id;
  if (reviews[id]) {
    reviews[id] = { ...reviews[id], ...req.body };
    fs.writeFileSync("reviews.txt", JSON.stringify(reviews));
    res.render("home", { reviews });
  } else {
    res.status(404).send("Review not found");
  }
});

router.get("/update/:id", (req, res) => {
  let reviews = JSON.parse(fs.readFileSync("reviews.txt").toString());
  let review = reviews[req.params.id];
  res.render("updateReview", { review: review, id: req.params.id });
});

module.exports = router;
