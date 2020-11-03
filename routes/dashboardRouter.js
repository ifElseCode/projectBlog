const express = require("express");
const dashboardRouter = express.Router();
const dashboardController = require("../controllers/dashboardController");

dashboardRouter.get("/", dashboardController.dashboard_get);
dashboardRouter.get("/users", dashboardController.dashboard_users_get);
dashboardRouter.delete("/users/:id", dashboardController.dashboard_users_delete);
dashboardRouter.patch("/users/admin/:id", dashboardController.dashboard_users_admin_patch);
dashboardRouter.patch("/users/author/:id", dashboardController.dashboard_users_author_patch);
dashboardRouter.get("/blogs", dashboardController.dashboard_blogs_get);
dashboardRouter.get("/blogs/create", dashboardController.dashboard_blogs_create_get);
dashboardRouter.post("/blogs/create", dashboardController.dashboard_blogs_create_post); 
dashboardRouter.delete("/blogs/:id", dashboardController.dashboard_blogs_delete);
dashboardRouter.patch("/blogs/:id", dashboardController.dashboard_blogs_patch);

module.exports = dashboardRouter;