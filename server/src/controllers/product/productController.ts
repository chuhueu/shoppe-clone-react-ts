import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const Product = require("../../models/product/productModel");
const Category = require("../../models/product/categoryModel");
const ProductType = require("../../models/product/productTypeModel");
const Wishlist = require("../../models/product/wishListModel");
const Brand = require("../../models/product/brandModel");
const checkAuth = require("../../helpers/auth");

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

//DELETE
const deleteProduct = asyncHandler(async (req: Request, res: Response) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    Search product by name
//@router  GET /api/product/search/:name
//@access  User
const searchProductByName = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const name = req.params.name;

      const productDoc = await Product.find({
        name: { $regex: new RegExp(name), $options: "is" },
      });

      if (productDoc.length < 0) {
        return res.status(404).json({ message: "No product found" });
      }

      res.status(200).json({ products: productDoc });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
);

//@desc    get list product by filter
//@router  GET /api/product/search/:name
//@access  User
const getProductsByFilter = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      let {
        sortOrder,
        rating,
        max,
        min,
        category,
        type,
        pageNumber: page = 1,
      } = req.body;

      const pageSize = 8;
      const categoryFilter = category ? { category } : {};
      const typeFilter = type ? { type } : {};
      const priceFilter = min && max ? { price: { $gte: min, $lte: max } } : {};
      const ratingFilter = rating
        ? { rating: { $gte: rating } }
        : { rating: { $gte: rating } };

      const basicQuery: any = [
        {
          $lookup: {
            from: "brands",
            localField: "brand",
            foreignField: "_id",
            as: "brands",
          },
        },
        {
          $unwind: {
            path: "$brands",
            preserveNullAndEmptyArrays: true,
          },
        },
        {
          $addFields: {
            "brand.name": "$brands.name",
            "brand._id": "$brands._id",
          },
        },
        {
          $match: {},
        },
        {
          $lookup: {
            from: "reviews",
            localField: "_id",
            foreignField: "product",
            as: "reviews",
          },
        },
        {
          $addFields: {
            totalRatings: { $sum: "$reviews.rating" },
            totalReviews: { $size: "$reviews" },
          },
        },
        {
          $addFields: {
            averageRating: {
              $cond: [
                { $eq: ["$totalReviews", 0] },
                0,
                { $divide: ["$totalRatings", "$totalReviews"] },
              ],
            },
          },
        },
        {
          $match: {
            price: priceFilter.price,
            averageRating: ratingFilter.rating,
          },
        },
        {
          $project: {
            brands: 0,
            reviews: 0,
          },
        },
      ];

      const categoryDoc = await Category.findOne(
        { _id: categoryFilter.category },
        "content -_id"
      );

      if (categoryDoc && categoryFilter !== category) {
        basicQuery.push({
          $match: {
            _id: {
              $in: Array.from(categoryDoc.content),
            },
          },
        });
      }

      const typeDoc = await Category.findOne(
        { _id: typeFilter.type },
        "content -_id"
      );

      if (typeDoc && typeFilter !== type) {
        basicQuery.push({
          $match: {
            _id: {
              $in: Array.from(typeDoc.content),
            },
          },
        });
      }

      const userDoc = await checkAuth(req);
      let products = null;
      let productsCount: any = 0;

      if (userDoc) {
        productsCount = await Product.aggregate(
          [
            {
              $lookup: {
                from: "wishlists",
                let: { product: "$_id" },
                pipeline: [
                  {
                    $match: {
                      $and: [
                        { $expr: { $eq: ["$$product", "$product"] } },
                        { user: new mongoose.Types.ObjectId(userDoc.id) },
                      ],
                    },
                  },
                ],
                as: "isLiked",
              },
            },
            {
              $addFields: {
                isLiked: { $arrayElemAt: ["$isLiked.isLiked", 0] },
              },
            },
          ].concat(basicQuery)
        );
        const paginateQuery: any = [
          { $sort: { sortOrder } },
          { $skip: pageSize * (productsCount.length > 16 ? page - 1 : 0) },
          { $limit: pageSize },
        ];
        products = await Product.aggregate(
          [
            {
              $lookup: {
                from: "wishlists",
                let: { product: "$_id" },
                pipeline: [
                  {
                    $match: {
                      $and: [
                        { $expr: { $eq: ["$$product", "$product"] } },
                        { user: new mongoose.Types.ObjectId(userDoc.id) },
                      ],
                    },
                  },
                ],
                as: "isLiked",
              },
            },
            {
              $addFields: {
                isLiked: { $arrayElemAt: ["$isLiked.isLiked", 0] },
              },
            },
          ]
            .concat(basicQuery)
            .concat(paginateQuery)
        );
      } else {
        productsCount = await Product.aggregate(basicQuery);
        const paginateQuery = [
          { $sort: { sortOrder } },
          { $skip: pageSize * (productsCount.length > 16 ? page - 1 : 0) },
          { $limit: pageSize },
        ];
        products = await Product.aggregate(basicQuery.concat(paginateQuery));
      }

      res.status(200).json({
        products,
        page,
        pages:
          productsCount.length > 0
            ? Math.ceil(productsCount.length / pageSize)
            : 0,
        totalProducts: productsCount.length,
      });
    } catch (error) {
      res.status(400).json({
        error: `${error}`,
      });
    }
  }
);

//@desc    get list product by brand
//@router  GET /api/product/brand/:id
//@access  User
const getProductsByBrand = asyncHandler(async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const brand = await Brand.findOne({ _id: id });

    if (!brand) {
      return res.status(404).json({
        message: `Cannot find brand width with the id: ${id}`,
      });
    }

    const userDoc = await checkAuth(req);

    if (userDoc) {
      const products = await Product.aggregate([
        {
          $match: {
            brand: brand._id,
          },
        },
        {
          $lookup: {
            from: "wishlists",
            let: { product: "$_id" },
            pipeline: [
              {
                $match: {
                  $and: [
                    { $expr: { $eq: ["$$product", "$product"] } },
                    { user: new mongoose.Types.ObjectId(userDoc.id) },
                  ],
                },
              },
            ],
            as: "isLiked",
          },
        },
        {
          $lookup: {
            from: "brands",
            localField: "brand",
            foreignField: "_id",
            as: "brands",
          },
        },
        {
          $addFields: {
            isLiked: { $arrayElemAt: ["$isLiked.isLiked", 0] },
          },
        },
        {
          $unwind: "$brands",
        },
        {
          $addFields: {
            "brand.name": "$brands.name",
            "brand._id": "$brands._id",
          },
        },
        { $project: { brand: 0 } },
      ]);

      res.status(200).json({
        products: products.reverse().slice(0, 16),
        page: 1,
        pages: products.length > 0 ? Math.ceil(products.length / 16) : 0,
        totalProducts: products.length,
      });
    }
  } catch (error) {
    res.status(500).json({ message: `error: ${error}` });
  }
});

export {
  createProduct,
  getProduct,
  getProductById,
  deleteProduct,
  searchProductByName,
  getProductsByFilter,
  getProductsByBrand,
};
