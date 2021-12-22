import { loginUser, registerUser } from "../controllers/userController";
const router = require("express").Router();
const User = require("../models/userModel");

//LOGIN
router.route("/login").post(loginUser);

//REGISTER
router.route("/register").post(registerUser);

module.exports = router;
