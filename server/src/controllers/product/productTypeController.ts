import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const ProductType = require("../../models/product/productTypeModel");

//CREATE
const createProductType = asyncHandler(async (req: Request, res: Response) => {
  const newProductType = new ProductType(req.body);
  try {
    const sendProductType = await newProductType.save();
    res.status(200).json(sendProductType);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
const getProductType = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getCategories = await ProductType.find();
    res.status(200).json(getCategories);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET FIND ID
const getProductTypeById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getProductType = await ProductType.findById(req.params.id);
    res.status(200).json(getProductType);
  } catch (error) {
    res.status(500).json(error);
  }
});

export { createProductType, getProductType, getProductTypeById };
