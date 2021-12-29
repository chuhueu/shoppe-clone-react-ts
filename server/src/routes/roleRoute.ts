import {
  createRole,
  getRole,
  getRoleById,
  deleteRole,
} from "../controllers/roleController";
const router = require("express").Router();

//CREATE AND GET
router.route("/").post(createRole).get(getRole);
//GET BY ID AND DELETE
router.route("/").get(getRoleById).delete(deleteRole);

module.exports = router;
