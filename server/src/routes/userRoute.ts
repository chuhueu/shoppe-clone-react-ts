import { Request, Response } from "express";
import { registerUser } from "../controllers/userController";
const router = require("express").Router();
const User = require("../models/userModel");

//REGISTER
router.post("/register", registerUser);

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
