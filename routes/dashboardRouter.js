const express = require("express");
const dashboardRouter = express.Router();
const dashboardController = require("../controllers/dashboardController");

dashboardRouter.get("/", dashboardController.dashboard_get);
dashboardRouter.get("/user-roles", dashboardController.dashboard_user_roles_get);
dashboardRouter.delete("/user-roles/:id", dashboardController.dashboard_user_roles_delete);
dashboardRouter.get("/blog-posts", dashboardController.dashboard_blog_posts_get);
dashboardRouter.get("/blog-posts/create", dashboardController.dashboard_blog_posts_create_get);
dashboardRouter.post("/blog-posts/create", dashboardController.dashboard_blog_posts_create_post);

module.exports = dashboardRouter;