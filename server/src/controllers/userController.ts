import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const User = require("../models/userModel");

//@desc    Register a new user
//@router  POST /api/users
//@access  Public
const registerUser = asyncHandler(async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("Tài khoản đã tồn tại");
  }

  const user = await User.create({ username, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      phone: user.phone,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Dữ liệu người dùng không hợp lệ");
  }
});

export { registerUser };
