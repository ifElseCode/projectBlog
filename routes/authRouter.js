const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.get("/login", authController.login_get);
authRouter.get("/signup", authController.signup_get);

module.exports = authRouter;