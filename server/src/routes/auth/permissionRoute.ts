import {
  createPermission,
  getPermission,
  getPermissionById,
  deletePermission,
} from "../../controllers/auth/permissionController";
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(createPermission).get(getPermission);

//GET BY ID AND DELETE
router.route("/:id").get(getPermissionById).delete(deletePermission);

module.exports = router;
