import mongoose from "mongoose";

const BrandSchema = new mongoose.Schema(
  {
    brandName: { type: String, required: true },
    image: {
      type: String,
      default:
        "https://apsec.iafor.org/wp-content/uploads/sites/37/2017/02/IAFOR-Blank-Avatar-Image.jpg",
    },
    content: [
      { type: mongoose.Schema.Types.ObjectId, default: [], ref: "Product" },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Brand", BrandSchema);
