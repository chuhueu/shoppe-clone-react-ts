import {
  createAddress,
  getAddress,
  getAddressById,
  deleteAddress,
  updateAddress,
  getAddressByUserId,
  getOneAddressByUserId,
} from "../../controllers/auth/addressController";
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(createAddress).get(getAddress);

//GET BY ID AND DELETE
router
  .route("/:id")
  .get(getAddressByUserId)
  .put(updateAddress)
  .delete(deleteAddress);

//GET ONE ADDRESS
router.route("/one/:id").get(getOneAddressByUserId);
module.exports = router;
