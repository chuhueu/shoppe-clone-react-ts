import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        orderItems: [
            {
                name: { type: String, required: true },
                quantity: { type: Number, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "Product",
                },
            },
        ],
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
        isDelivered: {
            type: Boolean,
            required: true,
            default: false,
        },
        deliveredAt: { type: Date },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
