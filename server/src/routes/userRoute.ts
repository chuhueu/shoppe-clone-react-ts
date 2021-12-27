import { getUser } from "../controllers/userController";
const router = require("express").Router();

//GET
router.route("/").get(getUser);

module.exports = router;
