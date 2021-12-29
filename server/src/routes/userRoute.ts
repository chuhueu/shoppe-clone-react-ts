const router = require("express").Router();
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController";
import { verify } from "../middleware/tokenMiddleware";

//admin
router.route("/").get(verify, getUsers);

//user
router
  .route("/profile")
  .get(verify, getUserProfile)
  .put(verify, updateUserProfile);

//admin
router
  .route("/:id")
  .get(verify, getUserById)
  .put(verify, updateUser)
  .delete(verify, deleteUser);

module.exports = router;
