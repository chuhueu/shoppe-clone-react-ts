import mongoose from "mongoose";
const bcrypt = require("bcryptjs");
const findOrCreate = require("mongoose-findorcreate");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String },
    phone: { type: String },
    googleID: { type: String },
    facebookID: { type: String },
    appleID: { type: String },
    avatar: {
      type: String,
      default:
        "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg",
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Role",
    },
  },
  { timestamps: true }
);

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.plugin(findOrCreate);

module.exports = mongoose.model("User", UserSchema);
