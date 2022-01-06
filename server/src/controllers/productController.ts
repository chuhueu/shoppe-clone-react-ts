import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

//CREATE
const createProduct = asyncHandler(async (req: Request, res: Response) => {
  const newProduct = new Product(req.body);
  try {
    const sendProduct = await newProduct.save();
    res.status(200).json(sendProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
const getProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getProducts = await Product.find();
    res.status(200).json(getProducts);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET FIND ID
const getProductById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getProduct = await Product.findById(req.params.id);
    res.status(200).json(getProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});
//SEARCH
const searchProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const searchFiled = req.query.name;
    const search = await Product.find({
      name: { $regex: searchFiled, $options: "$i" },
    });
    res.status(200).json(search);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

export {
  createProduct,
  getProduct,
  getProductById,
  deleteProduct,
  searchProduct,
};
