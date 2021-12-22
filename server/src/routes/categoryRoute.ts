import {
  createCategory,
  getCategory,
  getCategoryById,
} from "../controllers/categoryController";
const router = require("express").Router();

//CREATE
router.post("/", createCategory);
//GET ALL
router.get("/", getCategory);
//GET BY ID
router.get("/:id", getCategoryById);

module.exports = router;
