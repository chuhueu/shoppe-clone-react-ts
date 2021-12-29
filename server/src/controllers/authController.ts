import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const User = require("../models/userModel");

//@desc    Login user and get token
//@router  POST /api/user/login
//@access  Public
const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      roleId: user.roleId,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Sai tài khoản hoặc mật khẩu");
  }
});

//@desc    Register a new user
//@router  POST /api/user/register
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
      avatar: user.avatar,
      roleId: user.roleId,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Dữ liệu người dùng không hợp lệ");
  }
});

export { loginUser, registerUser };
