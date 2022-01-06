import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    payment: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Payment",
    },
    shippingAddress: {
      type: String,
      required: true,
    },
    shippingPrice: { type: Number },
    totalPrice: { type: Number },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
