import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    content: [
      { type: mongoose.Schema.Types.ObjectId, default: [], ref: "Product" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
