import mongoose from "mongoose";

const ProductTypeSchema = new mongoose.Schema(
  {
    productType: { type: String, required: true },
    content: [
      { type: mongoose.Schema.Types.ObjectId, default: [], ref: "Product" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductType", ProductTypeSchema);
