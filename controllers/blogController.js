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

// Not working yet. Working on it.
const blog_get = async (req, res) => {
  const id = req.params.id;
    try {
      const blogs = await Blog.findById(id);
      res.render("blog/blog/:id", {blogs, id});
    }
    catch (err) {
      console.log(err);
    }
}


module.exports = {
  blogs_get,
  blog_get
}