import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        status: { type: Boolean, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Payment", PaymentSchema);
