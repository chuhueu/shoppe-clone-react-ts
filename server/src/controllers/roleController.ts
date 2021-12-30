import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Role = require("../models/roleModel");

//CREATE
const createRole = asyncHandler(async (req: Request, res: Response) => {
  const newRole = new Role(req.body);
  try {
    const sendRole = await newRole.save();
    res.status(200).json(sendRole);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET ALL
const getRole = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getRoles = await Role.find();
    res.status(200).json(getRoles);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET FIND ID
const getRoleById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getRole = await Role.findById(req.params.id);
    res.status(200).json(getRole);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
const deleteRole = asyncHandler(async (req: Request, res: Response) => {
  try {
    const deleteRole = await Role.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteRole);
  } catch (error) {
    res.status(500).json(error);
  }
});

export { createRole, getRole, getRoleById, deleteRole };
