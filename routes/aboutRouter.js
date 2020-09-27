const express = require("express");
const aboutRouter = express.Router();
const aboutController = require("../controllers/aboutController");
const { requireAuth } = require("../middleware/authMiddleware");

aboutRouter.get("/", requireAuth, aboutController.about_get);

module.exports = aboutRouter;