import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    rating: { type: Number },
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
    name: { type: String, required: true, unique: true },
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
    reviews: [ReviewSchema],
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
