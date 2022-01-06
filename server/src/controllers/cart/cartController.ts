import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Cart = require("../../models/cart/cartModel");

//CREATE
const createCart = asyncHandler(async (req: Request, res: Response) => {
  const newCart = new Cart(req.body);
  try {
    const sendCart = await newCart.save();
    res.status(200).json(sendCart);
  } catch (error) {
    res.status(500).json(error);
  }
});
//UPDATE
const updateCart = asyncHandler(async (req: Request, res: Response) => {
  try {
    const update = await Cart.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
const getCart = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getCategories = await Cart.find();
    res.status(200).json(getCategories);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET FIND ID
const getCartById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getCart = await Cart.findById(req.params.id);
    res.status(200).json(getCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

export { createCart, getCart, getCartById, updateCart };
