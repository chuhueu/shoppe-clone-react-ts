const router = require("express").Router();
import {
  postComment,
  updateComment,
  getComment,
  deleteComment,
} from "../../controllers/product/reviewController";

//POST COMMENT
router.route("/comment").post(postComment);

//UPDATE COMMENT
router
  .route("/comment/:id")
  .post(postComment)
  .put(updateComment)
  .get(getComment)
  .delete(deleteComment);

module.exports = router;
