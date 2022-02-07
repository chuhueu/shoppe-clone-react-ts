const mongoose = require("mongoose");
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
    const get = await Review.find().distinct("user");
    const getUser = await User.find({ _id: { $in: get } });
    //select user from review
    // const get = await Review.find(
    //   {},
    //   { user: 1, _id: 0 },
    //   { product: req.params.id }
    // );
    // console.log(get);

    // let user = [];
    // for (let i = 0; i < get.length; i++) {
    //   user.push(get[i].user.toString());
    // }
    //const getUser = await User.find({ _id: { $in: user } });
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
//COUNT REVIEW
const countReview = asyncHandler(async (req: Request, res: Response) => {
  try {
    const countReview = await Review.countDocuments({ product: req.params.id });
    const countReviewHasImageOrVideo = await Review.find(
      { product: req.params.id },
      { video: 1, image: 1, _id: 0 }
    );
    let count = 0;
    countReviewHasImageOrVideo.forEach((item: any) => {
      if (item.image || item.video) {
        count++;
      }
    });
    const star5 = await Review.countDocuments({
      product: req.params.id,
      rating: 5,
    });
    const star4 = await Review.countDocuments({
      product: req.params.id,
      rating: 4,
    });
    const star3 = await Review.countDocuments({
      product: req.params.id,
      rating: 3,
    });
    const star2 = await Review.countDocuments({
      product: req.params.id,
      rating: 2,
    });
    const star1 = await Review.countDocuments({
      product: req.params.id,
      rating: 1,
    });
    const rateAvg = await Review.aggregate([
      {
        $match: { product: mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $group: {
          _id: "$product",
          rateAvg: { $avg: "$rating" },
        },
      },
    ]);
    //console.log(rateAvg[0].rateAvg);

    res.status(200).json({
      review: countReview,
      star5: star5,
      star4: star4,
      star3: star3,
      star2: star2,
      star1: star1,
      reviewHasImageOrVideo: count,
      rateAvg: rateAvg[0].rateAvg,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});
//FILTER REVIEW BY STAR
const filterByStar = asyncHandler(async (req: Request, res: Response) => {
  try {
    const filter = await Review.find({
      product: req.params.id,
      rating: req.query.rating,
    });
    res.status(200).json(filter);
  } catch (error) {
    res.status(500).json(error);
  }
});
const filterByImageOrVideo = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const checkExistImageOrVideo = await Review.find({
        product: req.params.id,
        $or: [{ image: { $exists: true } }, { video: { $exists: true } }],
      });
      res.status(200).json(checkExistImageOrVideo);
    } catch (error) {
      res.status(500).json(error);
    }
  }
);
export {
  postComment,
  updateComment,
  getComment,
  deleteComment,
  getUserCommented,
  countReview,
  filterByStar,
  filterByImageOrVideo,
};
