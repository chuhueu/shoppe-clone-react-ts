import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    productType: [
      { type: mongoose.Schema.Types.ObjectId, default: [], ref: "ProductType" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
