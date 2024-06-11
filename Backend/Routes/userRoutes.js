const express = require("express");
// const upload = require("../Config/Multer.js");
const userController = require("../Controller/User.Controller.js");
const router = express.Router();

router.post("/signUp", userController.signUp);
router.post("/signIn", userController.signIn);
router.get("/profile", userController.getUserProfile);
router.get("/", userController.getUsers);
router.post("/refreshToken", userController.refreshToken);

module.exports = router;
