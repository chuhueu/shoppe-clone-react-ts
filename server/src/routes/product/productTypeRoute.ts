import {
  createProductType,
  getProductType,
  getProductTypeByBrand,
  getProductTypeById,
} from "../../controllers/product/productTypeController";
const router = require("express").Router();

//GET BY BRAND
router.route("/brand/:id").get(getProductTypeByBrand);
//GET BY ID AND DELETE
router.route("/:id").get(getProductTypeById);

//CREATE AND GET
router.route("/").post(createProductType).get(getProductType);

module.exports = router;
