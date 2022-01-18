import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const generateToken = require("../../utils/generateToken");
const User = require("../../models/auth/userModel");
const { OAuth2Client } = require("google-auth-library");

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
      addressDefault: user.addressDefault,
      roleId: user.roleId,
      role: user.role,
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
      role: user.role,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Dữ liệu người dùng không hợp lệ");
  }
});

//@desc    Login google
//@router  POST /api/auth/google
//@access  Public
const clientGG = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const loginGoogle = asyncHandler(async (req: Request, res: Response) => {
  const { tokenId } = req.body;

  clientGG
    .verifyIdToken({ idToken: tokenId, audience: process.env.GOOGLE_CLIENT_ID })
    .then((response: any) => {
      const { email_verified, email, name, picture } = response.payload;

      if (email_verified) {
        User.findOne({ email }).exec((err: any, user: any) => {
          if (err) {
            res.status(401);
            throw new Error("Có lỗi xảy ra");
          } else {
            if (user) {
              res.json({
                _id: user._id,
                username: user.username,
                email: user.email,
                avatar: user.avatar,
                role: user.role,
                roleId: user.roleId,
                token: generateToken(user._id),
              });
            } else {
              const newUser = new User({
                username: name,
                email,
                avatar: picture,
              });
              newUser.save((err: any, data: any) => {
                if (err) {
                  res.status(401);
                  throw new Error("Có lỗi xảy ra");
                } else {
                  res.json({
                    _id: data._id,
                    username: data.username,
                    email: data.email,
                    avatar: data.avatar,
                    role: data.role,
                    roleId: data.roleId,
                    token: generateToken(data._id),
                  });
                }
              });
            }
          }
        });
      }
    });
});

export { loginUser, registerUser, loginGoogle };
