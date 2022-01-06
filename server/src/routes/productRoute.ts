import {
  createProduct,
  getProduct,
  getProductById,
  deleteProduct,
  searchProduct,
} from "../controllers/product/productController";
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

//SEARCH
router.route("/search").get(searchProduct);

module.exports = router;
