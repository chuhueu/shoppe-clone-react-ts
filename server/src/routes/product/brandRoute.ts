import {
  createBrand,
  getBrand,
  getBrandById,
} from "../../controllers/product/brandController";
const router = require("express").Router();

//GET BY ID AND DELETE
router.route("/:id").get(getBrandById);

//CREATE AND GET
router.route("/").post(createBrand).get(getBrand);

module.exports = router;
