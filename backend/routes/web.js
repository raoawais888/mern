
const router = require("express").Router();
const AuthController = require("../Controllers/AuthController.js");
const upload = require("../config/Multer.js")

router.post("/register",AuthController.register);
router.post("/login",AuthController.login);


module.exports = router;