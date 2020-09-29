const express = require("express");
const dashboardRouter = express.Router();
const dashboardController = require("../controllers/dashboardController");

dashboardRouter.get("/", dashboardController.dashboard_get);
dashboardRouter.get("/user-roles", dashboardController.dashboard_user_roles_get);
dashboardRouter.delete("/user-roles/:id", dashboardController.dashboard_user_roles_delete);
dashboardRouter.patch("/user-roles/admin/:id", dashboardController.dashboard_user_roles_admin_patch);
dashboardRouter.patch("/user-roles/author/:id", dashboardController.dashboard_user_roles_author_patch);
dashboardRouter.get("/blog-posts", dashboardController.dashboard_blog_posts_get);
dashboardRouter.get("/blog-posts/create", dashboardController.dashboard_blog_posts_create_get);
dashboardRouter.post("/blog-posts/create", dashboardController.dashboard_blog_posts_create_post);

module.exports = dashboardRouter;