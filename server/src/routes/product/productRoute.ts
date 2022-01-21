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

//CREATE AND GET
router.route("/").post(verify, checkSeller, createProduct).get(getProduct);

//GET BY ID AND DELETE
router
  .route("/:id")
  .get(getProductById)
  .delete(verify, checkSeller, deleteProduct);

//Search product by name
router.route("/search/:name").get(searchProductByName);

//List product by brand
router.route("/brand/:id").get(getProductsByBrand);

module.exports = router;
