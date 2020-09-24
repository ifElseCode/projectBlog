const express = require("express");
const dashboardRouter = express.Router();
const dashboardController = require("../controllers/dashboardController");

dashboardRouter.get("/", dashboardController.dashboard_get);
dashboardRouter.get("/user-roles", dashboardController.dashboard_user_roles_get);
dashboardRouter.get("/blog-posts", dashboardController.dashboard_blog_posts_get);

module.exports = dashboardRouter;