import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
});

module.exports = mongoose.model("User", UserSchema);
