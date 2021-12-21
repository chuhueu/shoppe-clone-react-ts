import { Request, Response } from "express";
const router = require("express").Router();
const Category = require("../models/categoryModel");

//CREATE
router.post("/", async (req: Request, res: Response) => {
  const newCategory = new Category(req.body);
  try {
    const sendCategory = await newCategory.save();
    res.status(200).json(sendCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
router.get("/", async (req: Request, res: Response) => {
  try {
    const getCategories = await Category.find();
    res.status(200).json(getCategories);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET FIND ID
router.get("/find/:id", async (req: Request, res: Response) => {
  try {
    const getCategory = await Category.findById(req.params.id);
    res.status(200).json(getCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
