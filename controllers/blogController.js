const Blog = require("../models/blog");

const blogs_get = async (req, res) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.render("blog/blogs.ejs", { blogs, months });
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