import { Request, Response, NextFunction } from "express";
import { UserInfo } from "../types";
const User = require("../models/userModel");
const Role = require("../models/roleModel");

//CHECK USER
const checkUser = async (req: Request, res: Response, next: NextFunction) => {
  let userToken = req.headers.token;
  console.log(userToken);
  let userInfo = await User.findUserByToken(userToken);
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
};

//CHECK SELLER
const checkSeller = async (req: Request, res: Response, next: NextFunction) => {
  let userToken = req.headers.token;
  console.log(userToken);
  let userInfo = await User.findUserByToken(userToken);
  if (userInfo) {
    const roleInfo = await Role.findById(userInfo.roleId);
    if (roleInfo) {
      if (roleInfo.roleName === "seller") {
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
};
const checkAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

module.exports = { checkUser, checkSeller, checkAdmin };
