import {
  createCart,
  getCart,
  updateCart,
  getCartByUserId,
  getCartItemByCartId,
  getCartItemById,
  addToCart,
  removeCartItem,
} from "../controllers/cart/cartController";
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(createCart).get(getCart);
//ADD TO CART
router.route("/add/:id").post(addToCart);
//DELETE FROM CART
router.route("/delete/:id").delete(removeCartItem);
//GET BY ID AND DELETE
router.route("/:id").get(getCartItemByCartId).put(updateCart);
//GET CART BY USER ID
router.route("/user/:id").get(getCartByUserId);
//GET CART ITEM BY ID
router.route("/cartItem/:id").get(getCartItemById);
module.exports = router;
