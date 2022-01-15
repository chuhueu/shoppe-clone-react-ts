import { Request, Response } from "express";
const asyncHandler = require("express-async-handler");
const Address = require("../../models/auth/addressModel");

//CREATE
const createAddress = asyncHandler(async (req: Request, res: Response) => {
  const newAddress = new Address(req.body);
  try {
    const sendAddress = await newAddress.save();
    res.status(200).json(sendAddress);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ALL
const getAddress = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getAddress = await Address.find();
    res.status(200).json(getAddress);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET FIND ID
const getAddressById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getAddress = await Address.findById(req.params.id);
    res.status(200).json(getAddress);
  } catch (error) {
    res.status(500).json(error);
  }
});
//GET ADDRESS USER
const getAddressByUserId = asyncHandler(async (req: Request, res: Response) => {
  try {
    const getAddress = await Address.find({ user: req.params.id });
    res.status(200).json(getAddress);
  } catch (error) {
    res.status(500).json(error);
  }
});
//UPDATE
const updateAddress = asyncHandler(async (req: Request, res: Response) => {
  try {
    const update = await Address.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json(error);
  }
});

//DELETE
const deleteAddress = asyncHandler(async (req: Request, res: Response) => {
  try {
    const deleteAddress = await Address.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteAddress);
  } catch (error) {
    res.status(500).json(error);
  }
});

export {
  createAddress,
  getAddress,
  getAddressById,
  deleteAddress,
  updateAddress,
  getAddressByUserId,
};
