import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    username: { type: String, required: true },
    avatar: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
    image: { type: String },
    video: { type: String },
    // image: { type: Array },
    // video: { type: Array },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", ReviewSchema);
