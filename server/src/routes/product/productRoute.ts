import {
  createProduct,
  getProduct,
  getProductById,
  deleteProduct,
  searchProductByName,
  getProductsByBrand,
  getProductsByFilter,
} from "../../controllers/product/productController";
const verify = require("../../middleware/tokenMiddleware");
const {
  checkUser,
  checkSeller,
  checkAdmin,
} = require("../../middleware/authMiddleware");
const router = require("express").Router();

//Get list product by filter
router.route("/list").get(getProductsByFilter);

//List product by brand
router.route("/brand/:id").get(getProductsByBrand);

//Search product by name
router.route("/search/:name").get(searchProductByName);

//GET BY ID AND DELETE
router
  .route("/:id")
  .get(getProductById)
  .delete(verify, checkSeller, deleteProduct);

//CREATE AND GET
router.route("/").post(verify, checkSeller, createProduct).get(getProduct);

module.exports = router;
