const express = require("express");
const blogRouter = express.Router();
const blogController = require("../controllers/blogController");

blogRouter.get("/", blogController.blogs_get);
blogRouter.get("/:id", blogController.blog_get);
blogRouter.patch("/like/:id", blogController.blog_like_patch);

module.exports = blogRouter;