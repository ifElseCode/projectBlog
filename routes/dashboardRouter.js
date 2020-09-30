const express = require("express");
const dashboardRouter = express.Router();
const dashboardController = require("../controllers/dashboardController");

dashboardRouter.get("/", dashboardController.dashboard_get);
dashboardRouter.get("/user-roles", dashboardController.dashboard_users_get);
dashboardRouter.delete("/users/:id", dashboardController.dashboard_users_delete);
dashboardRouter.patch("/users/admin/:id", dashboardController.dashboard_users_admin_patch);
dashboardRouter.patch("/users/author/:id", dashboardController.dashboard_users_author_patch);
dashboardRouter.get("/blog-posts", dashboardController.dashboard_blog_posts_get);
dashboardRouter.get("/blog-posts/create", dashboardController.dashboard_blog_posts_create_get);
dashboardRouter.post("/blog-posts/create", dashboardController.dashboard_blog_posts_create_post);

module.exports = dashboardRouter;