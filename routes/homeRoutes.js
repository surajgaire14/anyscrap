const express = require("express");
const scrapController = require("../controllers/scrapController");

const router = express.Router();

router
  .route("/all-ecommerce")
  .post(
    scrapController.scrapAmazon,
    scrapController.scrapEbay,
    scrapController.scrapSnapdeal,
  );

  router.route("/all-news").get(
    scrapController.bbcScrap,
    scrapController.onlineKhabarScrap,
    scrapController.newsScrap
  );

// router
//   .route("/daraz")
//   .get(
//     scrapController.scrapDaraz,
//   );

module.exports = router;
