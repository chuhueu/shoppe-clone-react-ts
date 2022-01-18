import {
  createAddress,
  getAddress,
  getDefaultAddressById,
  deleteAddress,
  updateAddress,
  getAddressByUserId,
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

//GET DEFAULT ADDRESS
router.route("/default/:id").get(getDefaultAddressById);
module.exports = router;
