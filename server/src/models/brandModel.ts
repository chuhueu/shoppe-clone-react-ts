import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Brand", BrandSchema);
