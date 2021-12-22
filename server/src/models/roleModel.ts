import mongoose from "mongoose";

const RoleModel = new mongoose.Schema(
  {
    roleName: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Role", RoleModel);
