const blog = require("../models/blog");

const blogs_get = (req, res) => res.render("blog/blogs");

const blogs_single_get = (req, res) => {
    res.render("blog/clicked.ejs");
}


module.exports = {
  blogs_get,
  blogs_single_get
}