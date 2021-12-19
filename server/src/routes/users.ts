import { Request, Response } from "express";
const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register", async (req: Request, res: Response) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const user = await User.findOne({ email: req.body.email });
    user && res.status(400).json("Email already exist");
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("wrong password or username");
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET
router.get("/", async (req: Request, res: Response) => {
  try {
    const getUser = await User.find();
    res.status(200).json(getUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
