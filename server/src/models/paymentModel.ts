import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    paymentName: { type: String, required: true },
    paymentStatus: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
