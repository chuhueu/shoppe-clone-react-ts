import { Request, Response } from "express";
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Cart = require("../../models/cart/cartModel");
const CartItem = require("../../models/cart/cartItemModel");
const User = require("../../models/auth/userModel");

interface IUserReq extends Request {
  user?: any;
}

//@desc    create cart
//@router  POST /api/cart
//@access  User
const createCart = asyncHandler(async (req: Request, res: Response) => {
  const { user } = req.body;

  const newCart = new Cart({ user });
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
    const get = await Cart.find();
    res.status(200).json(get);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    get all cart item
//@router  GET /api/cart/:id
//@access  User
const getCartById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getCart = await CartItem.find({ cart: req.params.id });
    res.status(200).json(getCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    add cartItems to cart
//@router  POST /api/cart/add/:id
//@access  User
const addToCart = asyncHandler(async (req: Request, res: Response) => {
  const { product, brand, name, image, price, discount, quantity } = req.body;

  const newItemCart = new CartItem({
    cart: req.params.id,
    product,
    brand,
    name,
    image,
    price,
    discount,
    quantity,
  });
  try {
    const data = await newItemCart.save();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json("Thêm vào giỏ hàng thất bại" + error);
  }
});

//@desc    Remove cart item
//@router  DELETE /api/cart/delete/:id
//@access  User
const removeCartItem = asyncHandler(async (req: Request, res: Response) => {
  const cartItem = await CartItem.findById(req.params.id);

  if (cartItem) {
    await cartItem.remove();
    res.json({ message: "Xóa 1 sản phẩm trong giỏ hàng thành công" });
  } else {
    res.status(404);
    throw new Error("Không tìm thấy sản phẩm trong giỏ cần xóa");
  }
});

export {
  createCart,
  getCart,
  updateCart,
  getCartById,
  addToCart,
  removeCartItem,
};
