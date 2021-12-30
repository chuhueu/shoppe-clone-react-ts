import {
  createProduct,
  getProduct,
  getProductById,
  deleteProduct,
} from "../controllers/productController";
import { verify } from "../middleware/tokenMiddleware";
const {
  checkUser,
  checkSeller,
  checkAdmin,
} = require("../middleware/authMiddleware");
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(verify, checkSeller, createProduct).get(getProduct);
//GET BY ID AND DELETE
router
  .route("/:id")
  .get(getProductById)
  .delete(verify, checkSeller, deleteProduct);

module.exports = router;
