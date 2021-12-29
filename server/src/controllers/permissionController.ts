import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Permission = require("../models/permissionModel");

//CREATE
const createPermission = asyncHandler(async (req: Request, res: Response) => {
  const newPermission = new Permission(req.body);
  try {
    const sendPermission = await newPermission.save();
    res.status(200).json(sendPermission);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
const getPermission = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getPermissions = await Permission.find();
    res.status(200).json(getPermissions);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET FIND ID
const getPermissionById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getPermission = await Permission.findById(req.params.id);
    res.status(200).json(getPermission);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
const deletePermission = asyncHandler(async (req: Request, res: Response) => {
  try {
    const deletePermission = await Permission.findByIdAndDelete(req.params.id);
    res.status(200).json(deletePermission);
  } catch (error) {
    res.status(500).json(error);
  }
});

export { createPermission, getPermission, getPermissionById, deletePermission };
