const User = require("../models/User");
const Blog = require("../models/blog");

const dashboard_get = (req, res) => res.render("dashboard/index", { layout: "./layouts/dashboard-layout" });

const dashboard_users_get = async (req, res) => {
  try {
    const users = await User.find();
    res.render("dashboard/users", { layout: "./layouts/dashboard-layout", users: users });
  }
  catch (err) {
    res.status(400);
    console.log(err);
  }
}

const dashboard_users_delete = (req, res) => {
  const id = req.params.id;
  User.findByIdAndDelete(id)
    .then(result => res.json({ redirect: "/dashboard/users" } ))
    .catch(err => console.log(err));
}

const dashboard_users_admin_patch = (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, { role: { admin: true } })
    .then(result => res.json({ redirect: "/dashboard/users" }))
    .catch(err => console.log(err)); 
}

const dashboard_users_author_patch = (req, res) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, { role: { author: true } })
    .then(result => res.json({ redirect: "/dashboard/users" }))
    .catch(err => console.log(err));
}

const dashboard_blogs_get = async (req, res) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.render("dashboard/blogs.ejs", { layout: "./layouts/dashboard-layout", blogs, months } );
  }
  catch (err) {
    console.log(err);
  }
}

const dashboard_blogs_create_get = (req, res) => res.render("dashboard/blogs-create", { layout: "./layouts/dashboard-layout" });

const dashboard_blogs_create_post = async (req, res) => {
  try {
    await Blog.create(req.body);
  }
  catch(err) {
    console.log(err);
  }
}

const dashboard_blogs_delete = async (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(result => res.json())
    .catch(err => console.log(err));  
}

const dashboard_blogs_patch = async (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndUpdate(id)
    .then(result => res.json({ redirect: "/dashboard/edit-blog" }))
    .catch(err => console.log(err));  
}

module.exports = {
  dashboard_get,
  dashboard_users_get,
  dashboard_users_delete,
  dashboard_users_admin_patch,
  dashboard_users_author_patch,
  dashboard_blogs_get,
  dashboard_blogs_create_get,
  dashboard_blogs_create_post,
  dashboard_blogs_delete,
  dashboard_blogs_patch
}