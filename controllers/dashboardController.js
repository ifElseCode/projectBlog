const User = require("../models/User");

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
    .then(result => res.json({ redirect: "/dashboard/user-roles" }))
    .catch(err => console.log(err));
} 

const dashboard_blog_posts_get = (req, res) => {
  res.render("dashboard/blog-posts.ejs", { layout: "./layouts/dashboard-layout"});
}

module.exports = {
  dashboard_get,
  dashboard_user_roles_get,
  dashboard_user_roles_delete,
  dashboard_blog_posts_get
}