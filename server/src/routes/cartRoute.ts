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
router.route("/add/:id").post(addToCart);
//DELETE FROM CART
router.route("/delete/:id").delete(removeCartItem);
//GET BY ID AND DELETE
router.route("/:id").get(getCartById).put(updateCart);

module.exports = router;
