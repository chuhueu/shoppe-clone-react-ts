import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

interface IUserReq extends Request {
  user?: any;
}

const protect = asyncHandler(
  async (req: IUserReq, res: Response, next: NextFunction) => {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select("-password");

        next();
      } catch (error) {
        console.log(error);
        res.status(401);
        throw new Error("Tài khoản không được ủy quyền, token bị lỗi!");
      }
    }
    if (!token) {
      res.status(401);
      throw new Error("Tài khoản không được ủy quyền, không có token");
    }
  }
);

export { protect };
