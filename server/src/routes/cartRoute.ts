import {
  createCart,
  getCart,
  updateCart,
  getCartById,
  addToCart,
  removeCartItem,
} from "../controllers/cart/cartController";
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(createCart).get(getCart);
//ADD TO CART
router.route("/:id/add").post(addToCart);
//DELETE FROM CART
router.route("/:id/delete").delete(removeCartItem);
//GET BY ID AND DELETE
router.route("/:id").get(getCartById).put(updateCart);

module.exports = router;
