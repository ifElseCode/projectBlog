const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/authController");

authRouter.get("/signup", authController.signup_get);
authRouter.post("/signup", authController.signup_post);
authRouter.get("/signup/confirm/:id", authController.signup_confirm_get);
authRouter.get("/signup/:uniqueNumber", authController.signup_uniqueNumber_get);
authRouter.get("/login", authController.login_get);
authRouter.post("/login", authController.login_post);
authRouter.get("/logout", authController.logout_get);

module.exports = authRouter;