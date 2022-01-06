import {
  createCart,
  getCart,
  updateCart,
  getCartById,
} from "../controllers/cart/cartController";
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(createCart).get(getCart);
//GET BY ID AND DELETE
router.route("/:id").get(getCartById).put(updateCart);

module.exports = router;
