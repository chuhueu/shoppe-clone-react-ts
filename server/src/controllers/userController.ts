import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const User = require("../models/userModel");

//@desc    get all user
//@router  GET /api/user
//@access  Public
const getUser = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getUsers = await User.find();
    res.status(200).json(getUsers);
  } catch (error) {
    res.status(500).json(error);
  }
});
export { getUser };
