import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Role = require("../models/roleModel");

//CREATE
const createRole = asyncHandler(async (req: Request, res: Response) => {
  const newRole = new Role(req.body);
  try {
    const create = await newRole.save();
    res.status(200).json(create);
  } catch (error) {
    res.status(500).json(error);
  }
});

//PUT
const updateRole = asyncHandler(async (req: Request, res: Response) => {
  try {
    const update = await Role.findByIdAndUpdate(
      req.params?.id,
      { $set: req.body },
      { new: true }
    );
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET
const getRole = asyncHandler(async (req: Request, res: Response) => {
  try {
    const get = await Role.find();
    res.status(200).json(get);
  } catch (error) {
    res.status(500).json(error);
  }
});
export { getRole, createRole, updateRole };
