import mongoose from "mongoose";
const slug = require("mongoose-slug-generator");

const options = {
  separator: "-",
  lang: "en",
  truncate: 120,
};

mongoose.plugin(slug, options);

const BrandSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true },
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
