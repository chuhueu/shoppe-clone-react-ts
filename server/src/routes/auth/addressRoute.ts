import {
  createAddress,
  getAddress,
  getAddressById,
  deleteAddress,
  updateAddress,
  getAddressByUserId,
} from "../../controllers/auth/addressController";
import { verify } from "../../middleware/tokenMiddleware";
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(verify, createAddress).get(verify, getAddress);

//GET BY ID AND DELETE
router
  .route("/:id")
  .get(verify, getAddressByUserId)
  .put(verify, updateAddress)
  .delete(verify, deleteAddress);

module.exports = router;
