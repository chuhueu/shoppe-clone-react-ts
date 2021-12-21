import { Request, Response } from "express";
const router = require("express").Router();
const Product = require("../models/productModel");

//CREATE
router.post("/", async (req: Request, res: Response) => {
  const newProduct = new Product(req.body);
  try {
    const sendProduct = await newProduct.save();
    res.status(200).json(sendProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
router.get("/", async (req: Request, res: Response) => {
  try {
    const getProducts = await Product.find();
    res.status(200).json(getProducts);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET FIND ID
router.get("/find/:id", async (req: Request, res: Response) => {
  try {
    const getProduct = await Product.findById(req.params.id);
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
