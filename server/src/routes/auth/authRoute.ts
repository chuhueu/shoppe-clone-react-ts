import {
  loginUser,
  registerUser,
  loginGoogle,
} from "../../controllers/auth/authController";
const router = require("express").Router();

//LOGIN
router.route("/login").post(loginUser);

//REGISTER
router.route("/register").post(registerUser);

//LOGIN GOOGLE
router.route("/google").post(loginGoogle);

module.exports = router;
