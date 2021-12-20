import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
    {
        rateStar: { type: Number },
        comment: { type: String },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
    },
    {
        timestamps: true,
    }
);

const ProductSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        name: { type: String, required: true, unique: true },
        image: { type: Array, required: true },
        sold: { type: Number, required: true, default: 0 },
        inStock: { type: Boolean, required: true, default: false },
        discount: { type: Number },
        desc: { type: String },
        category: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Category",
        },
        brand: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Brand",
        },
        reviews: [ReviewSchema],
        numReviews: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
