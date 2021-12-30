import { Request, Response } from "express";
import { loginUser, registerUser } from "../controllers/authController";
const router = require("express").Router();
const passport = require("passport");
const generateToken = require("../utils/generateToken");

interface GetUserAuthInfoReq extends Request {
  user: any;
  logout: any;
}

// router.get("/login/success", async (req: GetUserAuthInfoReq, res: Response) => {
//   if (req.user) {
//     res.status(200).json({
//       user: req.user,
//       success: true,
//       message: "Đăng nhập thành công",
//       //   cookies: req.cookies,
//     });
//   }
// });

// router.get("/login/failed", (req: Request, res: Response) => {
//   res.status(401).json({
//     success: false,
//     message: "Đăng nhập thất bại",
//   });
// });

//LOGIN
router.route("/login").post(loginUser);

//REGISTER
router.route("/register").post(registerUser);

//LOGIN WITH GOOGLE AND FACE
router.get("/getuser", (req: GetUserAuthInfoReq, res: Response) => {
  if (req.user) {
    res.status(201).json({
      _id: req.user._id,
      googleID: req.user.googleID,
      email: req.user.email,
      username: req.user.username,
      avatar: req.user.avatar,
      token: generateToken(req.user._id),
    });
  }
});

router.get("/logout", (req: GetUserAuthInfoReq, res: Response) => {
  if (req.user) {
    req.logout();
    res.send("done");
  }
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
    session: true,
  })
);

router.get(
  "/facebook",
  passport.authenticate("facebook", { scope: ["profile"] })
);

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: process.env.CLIENT_URL,
    failureRedirect: "/login/failed",
    session: true,
  })
);

module.exports = router;
