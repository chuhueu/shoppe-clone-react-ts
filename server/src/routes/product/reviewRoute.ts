const router = require("express").Router();
import {
  postComment,
  updateComment,
  getComment,
  deleteComment,
  getUserCommented,
  countReview,
  filterByStar,
  filterByImageOrVideo,
} from "../../controllers/product/reviewController";

// //POST COMMENT
router.route("/comment/user/:id").get(getUserCommented);
router.route("/comment/count/:id").get(countReview);
router.route("/filterByStar/:id").get(filterByStar);
router.route("/filterByImageOrVideo/:id").get(filterByImageOrVideo);
router
  .route("/comment/:id")
  .post(postComment)
  .put(updateComment)
  .get(getComment)
  .delete(deleteComment);

module.exports = router;
