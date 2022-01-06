import {
  createCategory,
  getCategory,
  getCategoryById,
} from "../controllers/product/categoryController";
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(createCategory).get(getCategory);
//GET BY ID AND DELETE
router.route("/:id").get(getCategoryById);

module.exports = router;
