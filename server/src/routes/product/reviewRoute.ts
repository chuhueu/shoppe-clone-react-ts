import {
  postComment,
  updateComment,
  getComment,
  deleteComment,
} from "../../controllers/product/reviewController";

const router = require("express").Router();

//POST COMMENT
router.route("/comment").post(postComment);

//UPDATE COMMENT
router
  .route("/comment/:id")
  .put(updateComment)
  .get(getComment)
  .delete(deleteComment);

module.exports = router;
