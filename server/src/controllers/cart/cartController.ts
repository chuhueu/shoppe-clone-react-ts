import { Request, Response } from "express";
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Cart = require("../../models/cart/cartModel");
const CartItem = require("../../models/cart/cartItemModel");
interface IUserReq extends Request {
  user?: any;
}
//CREATE
const createCart = asyncHandler(async (req: IUserReq, res: Response) => {
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
    const get = await Cart.find();
    res.status(200).json(get);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET FIND ID
const getCartById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getById = await Cart.findById(req.params.id);
    res.status(200).json(getById);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    add cartItems to cart
//@router  POST /api/cart/:id/add
//@access  User
/*const addToCart = asyncHandler(async (req: Request, res: Response) => {
  const { product, brand, name, image, price, discount } = req.body;

  const cart = await Cart.findById(req.params.id);

  if (cart) {
    const cartItem = { product, brand, name, image, price, discount };

    cart.cartItems.push(cartItem);

    await cart.save();
    res.status(201).json(cart);
  } else {
    res.status(500);
    throw new Error("Thêm vào giỏ hàng thất bại");
  }

  // const newItemCart = new CartItem({
  //   cart,
  //   product,
  //   brand,
  //   name,
  //   image,
  //   price,
  //   discount,
  // });
  // try {
  //   const data = await newItemCart.save();
  //   res.status(200).json(data);
  // } catch (error) {
  //   res.status(500).json(error);
  // }
});*/

const addToCart = asyncHandler(async (req: Request, res: Response) => {
  const newCartItem = new CartItem(req.body);
  try {
    const sendCartItem = await newCartItem.save();
    res.status(200).json(sendCartItem);
  } catch (error) {
    res.status(500).json("Thêm vào giỏ hàng thất bại" + error);
  }
});

// GET CART ITEM BY CARTID
const getCartItems = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getCartItem = await CartItem.find({
      cart: mongoose.Types.ObjectId(req.params.id),
    });
    res.status(200).json(getCartItem);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    Remove cart item
//@router  DELETE /api/cart/:id/delete/:iditem
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
  getCartById,
  updateCart,
  addToCart,
  getCartItems,
  removeCartItem,
};
