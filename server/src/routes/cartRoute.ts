import {
  createCart,
  getCart,
  updateCart,
  getCartByUserId,
  getCartById,
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
router.route("/:id").get(getCartById).put(updateCart);
//GET CART BY USER ID
router.route("/user/:id").get(getCartByUserId);

module.exports = router;
