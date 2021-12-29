import {
  createCategory,
  getCategory,
  getCategoryById,
} from "../controllers/categoryController";
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(createCategory).get(getCategory);
//GET BY ID AND DELETE
router.route("/").get(getCategoryById);

module.exports = router;
