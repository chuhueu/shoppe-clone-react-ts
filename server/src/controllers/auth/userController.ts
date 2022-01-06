import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const generateToken = require("../../utils/generateToken");
const User = require("../../models/auth/userModel");

interface IUserReq extends Request {
  user?: any;
}

//@desc    get user profile
//@router  GET /api/user/profile
//@access  User
const getUserProfile = asyncHandler(async (req: IUserReq, res: Response) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      roleId: user.roleId,
    });
  } else {
    res.status(404);
    throw new Error("Không tìm thấy người dùng");
  }
});

//@desc    update user profile
//@router  PUT /api/user/profile
//@access  User
const updateUserProfile = asyncHandler(async (req: IUserReq, res: Response) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.avatar = req.body.avatar || user.avatar;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updateUser = await user.save();

    res.json({
      username: updateUser.username,
      email: updateUser.email,
      avatar: updateUser.avatar,
      token: generateToken(updateUser._id),
    });
  } else {
    res.status(404);
    throw new Error("Không tìm thấy người dùng");
  }
});

//@desc    get all user
//@router  GET /api/user
//@access  Admin
const getUsers = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getUsers = await User.find({});
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});

//@desc    get user by Id
//@router  GET /api/user/:id
//@access  Admin
const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id).select("-password");

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("Không tìm thấy người dùng");
  }
});

//@desc    update user
//@router  PUT /api/user/:id
//@access  Admin
const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.avatar = req.body.avatar || user.avatar;
    user.roleId = req.body.roleId || user.roleId;

    const updateUser = await user.save();

    res.json({
      _id: updateUser._id,
      username: updateUser.username,
      email: updateUser.email,
      avatar: updateUser.avatar,
      roleId: updateUser.roleId,
    });
  } else {
    res.status(404);
    throw new Error("Không tìm thấy người dùng");
  }
});

//@desc    delete user
//@router  DELETE /api/user/:id
//@access  Admin
const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const user = await User.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "Đã xóa tài khoản" });
  } else {
    res.status(404);
    throw new Error("Không tìm thấy người dùng");
  }
});

export {
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
};
