import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  fullName: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  street: { type: String, required: true },
  town: { type: String, required: true },
  district: { type: String, required: true },
  province: { type: String, required: true },
  //isMain: { type: Boolean, required: true, default: false },
});

module.exports = mongoose.model("Address", AddressSchema);
