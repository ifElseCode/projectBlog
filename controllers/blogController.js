const Blog = require("../models/blog");

const blogs_get = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.render("blog/blogs.ejs", {blogs});
  }
  catch (err) {
    console.log(err);
  }
}

const blogs_single_get = async (req, res) => {
    try {
      const blogs = await Blog.findById(id);
      res.render("blog/blog.ejs", {blogs});
    }
    catch (err) {
      console.log(err);
    }
}


module.exports = {
  blogs_get,
  blogs_single_get
}