import mongoose from "mongoose";

const Product = new mongoose.Schema({
  title: { type: String },
  price: { type: String },
  sold: { type: Number },
});

module.exports = mongoose.model("Product", Product);
