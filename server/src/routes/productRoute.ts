import {
  createProduct,
  getProduct,
  getProductById,
} from "../controllers/productController";
const router = require("express").Router();

//CREATE
router.post("/", createProduct);
//GET ALL
router.get("/", getProduct);
//GET BY ID
router.get("/:id", getProductById);

module.exports = router;
