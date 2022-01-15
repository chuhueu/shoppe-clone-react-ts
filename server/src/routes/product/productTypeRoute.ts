import {
  createProductType,
  getProductType,
  getProductTypeById,
} from "../../controllers/product/productTypeController";
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(createProductType).get(getProductType);
//GET BY ID AND DELETE
router.route("/:id").get(getProductTypeById);

module.exports = router;
