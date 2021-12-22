import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    cateName: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
