const express = require("express");
const blogRouter = express.Router();
const blogController = require("../controllers/blogController");

blogRouter.get("/", blogController.blogs_get);
blogRouter.get("/:id", blogController.blog_get);
blogRouter.post("/liked", blogController.blog_like);

module.exports = blogRouter;