import { Request, Response } from "express";
const router = require("express").Router();
const passport = require("passport");

interface GetUserAuthInfoReq extends Request {
  user: Object;
  logout: any;
}

router.get("/login/success", async (req: GetUserAuthInfoReq, res: Response) => {
  if (req.user) {
    res.status(200).json({
      user: req.user,
      success: true,
      message: "Đăng nhập thành công",
      //   cookies: req.cookies,
    });
  }
});

router.get("/login/failed", (req: Request, res: Response) => {
  res.status(401).json({
    success: false,
    message: "Đăng nhập thất bại",
  });
});

router.get("/logout", (req: GetUserAuthInfoReq, res: Response) => {
  req.logout();
  res.redirect(process.env.CLIENT_URL!);
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
  })
);

module.exports = router;
