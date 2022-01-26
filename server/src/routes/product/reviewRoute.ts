const router = require("express").Router();
import {
  postComment,
  updateComment,
  getComment,
  deleteComment,
  getUserCommented,
} from "../../controllers/product/reviewController";

// //POST COMMENT
// router.route("/comment").post(postComment);
router.route("/comment/user/:id").get(getUserCommented);
router
  .route("/comment/:id")
  .post(postComment)
  .put(updateComment)
  .get(getComment)
  .delete(deleteComment);

module.exports = router;
