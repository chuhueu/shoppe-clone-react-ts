import {
  createBrand,
  getBrand,
  getBrandById,
} from "../controllers/brandController";
const router = require("express").Router();

//CREATE
router.post("/", createBrand);
//GET ALL
router.get("/", getBrand);
//GET BY ID
router.get("/:id", getBrandById);

module.exports = router;
