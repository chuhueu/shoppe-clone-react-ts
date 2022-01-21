import mongoose from "mongoose";
const slug = require("mongoose-slug-generator");

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};

mongoose.plugin(slug, options);

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true },
    image: { type: Array, required: true },
    price: { type: Number, required: true },
    sold: { type: Number, required: true, default: 0 },
    inStock: { type: Boolean, required: true, default: false },
    discount: { type: Number },
    desc: { type: String },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    productType: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ProductType",
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Brand",
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    size: { type: Array },
    colour: { type: Array },
    type: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
