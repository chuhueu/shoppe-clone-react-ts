import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const router = require("express").Router();
const Brand = require("../../models/product/brandModel");

//CREATE
const createBrand = asyncHandler(async (req: Request, res: Response) => {
  const newBrand = new Brand(req.body);
  try {
    const sendBrand = await newBrand.save();
    res.status(200).json(sendBrand);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
const getBrand = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getBrands = await Brand.find();
    res.status(200).json(getBrands);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET FIND ID
const getBrandById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getBrand = await Brand.findById(req.params.id);
    res.status(200).json(getBrand);
  } catch (error) {
    res.status(500).json(error);
  }
});

export { createBrand, getBrand, getBrandById };
