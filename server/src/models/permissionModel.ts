import mongoose from "mongoose";

const PermissionModel = new mongoose.Schema(
  {
    code: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Permission", PermissionModel);
