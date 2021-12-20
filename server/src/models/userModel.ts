import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phone: { type: String },
        isAdmin: { type: Boolean, required: true, default: false },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
