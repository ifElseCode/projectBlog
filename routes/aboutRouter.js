const express = require("express");
const aboutRouter = express.Router();
const aboutController = require("../controllers/aboutController");

aboutRouter.get("/", aboutController.about_get);

module.exports = aboutRouter;