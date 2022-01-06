import {
  createBrand,
  getBrand,
  getBrandById,
} from "../controllers/product/brandController";
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(createBrand).get(getBrand);
//GET BY ID AND DELETE
router.route("/:id").get(getBrandById);

module.exports = router;
