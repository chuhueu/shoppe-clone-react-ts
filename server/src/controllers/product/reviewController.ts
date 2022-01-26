import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Review = require("../../models/product/reviewModel");
const User = require("../../models/auth/userModel");

//POST COMMENT
const postComment = asyncHandler(async (req: Request, res: Response) => {
  const newComment = new Review(req.body);
  try {
    const postComment = await newComment.save();
    res.status(200).json(postComment);
  } catch (error) {
    res.status(500).json(error);
  }
});
//UPDATE COMMENT
const updateComment = asyncHandler(async (req: Request, res: Response) => {
  try {
    const update = await Review.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL COMMENT OF PRODUCT
const getComment = asyncHandler(async (req: Request, res: Response) => {
  try {
    const get = await Review.find({ product: req.params.id });
    res.status(200).json(get);
  } catch (error) {
    res.status(500).json(error);
  }
});
const getUserCommented = asyncHandler(async (req: Request, res: Response) => {
  try {
    //const get = await Review.find().distinct("user");
    //select user from review
    const get = await Review.find(
      {},
      { user: 1, _id: 0 },
      { product: req.params.id }
    );
    //console.log(get);

    let user = [];
    for (let i = 0; i < get.length; i++) {
      user.push(get[i].user.toString());
    }

    // const getUser = await User.find({ _id: { $in: get } });
    const getUser = await User.find({ _id: { $in: user } });
    //console.log(getUser);
    res.status(200).json(getUser);
  } catch (error) {
    res.status(500).json(error);
  }
});
//DELETE COMMENT
const deleteComment = asyncHandler(async (req: Request, res: Response) => {
  try {
    await Review.findByIdAndDelete(req.params.id);
    res.status(200).json("The comment has been deleted...!");
  } catch (error) {
    res.status(500).json(error);
  }
});
export {
  postComment,
  updateComment,
  getComment,
  deleteComment,
  getUserCommented,
};
