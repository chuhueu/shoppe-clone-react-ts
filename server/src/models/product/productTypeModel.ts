import mongoose from "mongoose";
const slug = require("mongoose-slug-generator");

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};

mongoose.plugin(slug, options);

const ProductTypeSchema = new mongoose.Schema(
  {
    productType: { type: String, required: true },
    slug: { type: String, slug: "productType", unique: true },
    content: [
      { type: mongoose.Schema.Types.ObjectId, default: [], ref: "Product" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("ProductType", ProductTypeSchema);
