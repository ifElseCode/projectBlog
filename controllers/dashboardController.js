const User = require("../models/User");
const Blog = require("../models/blog");

const dashboard_get = (req, res) => {
  res.render("dashboard/index.ejs", { layout: "./layouts/dashboard-layout"});
}

const dashboard_user_roles_get = async (req, res) => {
  try {
    const users = await User.find();
    res.render("dashboard/user-roles.ejs", { layout: "./layouts/dashboard-layout", users: users });
  }
  catch (err) {
    res.status(400);
    console.log(err);
  }
}

const dashboard_user_roles_delete = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then(result => res.json({ redirect: "/dashboard/user-roles" } ))
    .catch(err => console.log(err));
}

const dashboard_blog_posts_get = async (req, res) => {
  const months = ["January", "Februar", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  try {
    const blogs = await Blog.find();
    res.render("dashboard/blog-posts.ejs", { layout: "./layouts/dashboard-layout", blogs, months } );
  }
  catch (err) {
    console.log(err);
  }
}

const dashboard_blog_posts_create_get = (req, res) => {
  res.render("dashboard/blog-posts-create.ejs", { layout: "./layouts/dashboard-layout" });
}

const dashboard_blog_posts_create_post = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
  }
  catch(err) {
    console.log(err);
  }
}

module.exports = {
  dashboard_get,
  dashboard_user_roles_get,
  dashboard_user_roles_delete,
  dashboard_blog_posts_get,
  dashboard_blog_posts_create_get,
  dashboard_blog_posts_create_post
}