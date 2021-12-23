import {
  loginUser,
  registerUser,
  getUser,
} from "../controllers/userController";
const router = require("express").Router();
const User = require("../models/userModel");

//LOGIN
router.route("/login").post(loginUser);

//REGISTER
router.route("/register").post(registerUser);

//GET
router.route("/").get(getUser);

module.exports = router;
