import { Request, Response } from "express";
import { ObjectId } from "mongoose";
const asyncHandler = require("express-async-handler");
const ProductType = require("../../models/product/productTypeModel");
const Brand = require("../../models/product/brandModel");
const Product = require("../../models/product/productModel");

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

interface brandDocModel {
  productType: ObjectId;
}

//GET BY BRAND
const getProductTypeByBrand = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const brandId = req.params.id;

      const brandDoc: Array<brandDocModel> = await Product.find(
        { brand: brandId },
        "productType -_id"
      );

      const brandDocArray: any = [];
      brandDoc.map((item) => {
        brandDocArray.push(item.productType);
      });

      const data = await ProductType.aggregate([
        {
          $match: {
            _id: {
              $in: Array.from(brandDocArray),
            },
          },
        },
      ]);

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: `${error}` });
    }
  }
);

export {
  createProductType,
  getProductType,
  getProductTypeById,
  getProductTypeByBrand,
};
