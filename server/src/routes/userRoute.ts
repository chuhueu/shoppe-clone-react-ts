const router = require("express").Router();
import {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController";
import { protect } from "../middleware/authMiddleware";

//user
router
  .router("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

//admin
router.route("/").get(protect, getUsers);

router
  .route("/:id")
  .get(protect, getUserById)
  .put(protect, updateUser)
  .delete(protect, deleteUser);

module.exports = router;
