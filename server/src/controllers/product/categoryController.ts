import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const Category = require("../../models/product/categoryModel");

//CREATE
const createCategory = asyncHandler(async (req: Request, res: Response) => {
  const newCategory = new Category(req.body);
  try {
    const sendCategory = await newCategory.save();
    res.status(200).json(sendCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
const getCategory = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getCategories = await Category.find();
    res.status(200).json(getCategories);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET FIND ID
const getCategoryById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getCategory = await Category.findById(req.params.id);
    res.status(200).json(getCategory);
  } catch (error) {
    res.status(500).json(error);
  }
});

export { createCategory, getCategory, getCategoryById };
