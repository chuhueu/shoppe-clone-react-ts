import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Role = require("../models/roleModel");

//CHECK USER
const checkUser = async (req: Request, res: Response, next: NextFunction) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    let userToken = req.headers.authorization.split(" ")[1];
    let decode = jwt.decode(userToken);
    let userInfo = await User.findById(decode._id);
    if (userInfo) {
      const roleInfo = await Role.findById(userInfo.roleId);
      if (roleInfo) {
        if (roleInfo.roleName === "user") {
          await next();
        } else {
          return res.status(401).json("Bạn không có quyền xem dữ liệu này");
        }
      } else {
        return res.status(401).json("Không tìm thấy role tương ứng");
      }
    } else {
      return res.status(401).json("Không tìm thấy user");
    }
  } else {
    return res.status(401).json("không tìm thấy Authorization");
  }
};

//CHECK SELLER
const checkSeller = async (req: Request, res: Response, next: NextFunction) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    let userToken = req.headers.authorization.split(" ")[1];
    let decode = jwt.decode(userToken);
    let userInfo = await User.findById(decode._id);
    if (userInfo) {
      const roleInfo = await Role.findById(userInfo.roleId);
      if (roleInfo) {
        if (roleInfo.roleName === "seller") {
          await next();
        } else {
          return res.status(401).json("Bạn không có quyền thực hiện");
        }
      } else {
        return res.status(401).json("Không tìm thấy role tương ứng");
      }
    } else {
      return res.status(401).json("Không tìm thấy user");
    }
  } else {
    return res.status(401).json("không tìm thấy Authorization");
  }
};
const checkAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

module.exports = { checkUser, checkSeller, checkAdmin };