import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Brand",
    },
    name: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { typw: Number },
    quantity: { type: Number, required: true, default: 1 },
  },
  { timestamps: true }
);

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    cartItems: { CartItemSchema },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);
const CartItem = mongoose.model("CartItem", CartItemSchema);
export { Cart, CartItem };
