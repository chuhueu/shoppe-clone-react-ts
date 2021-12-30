import {
  createProduct,
  getProduct,
  getProductById,
  deleteProduct,
} from "../controllers/productController";
import { verify } from "../middleware/tokenMiddleware";
const {
  checkSeller,
  checkUser,
  checkAdmin,
} = require("../middleware/authMiddleware");
const router = require("express").Router();

//CREATE AND GET
router
  .route("/")
  .post(verify, checkSeller, createProduct)
  .get(checkUser, getProduct);

//GET BY ID AND DELETE
router.route("/:id").get(getProductById).delete(deleteProduct);

module.exports = router;
