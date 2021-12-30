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
const { checkSeller, checkAdmin } = require("../middleware/authMiddleware");

//user
router
  .route("/profile")
  .get(verify, getUserProfile)
  .put(verify, updateUserProfile);

//admin
router.route("/").get(verify, getUsers);

router
  .route("/:id")
  .get(verify, getUserById)
  .put(verify, updateUser)
  .delete(verify, deleteUser);

module.exports = router;
