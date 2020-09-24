const dashboard_get = (req, res) => {
  res.render("dashboard/index.ejs", { layout: "./layouts/dashboard-layout"});
}

const dashboard_user_roles_get = (req, res) => {
  res.render("dashboard/user-roles.ejs", { layout: "./layouts/dashboard-layout"});
}

const dashboard_blog_posts_get = (req, res) => {
  res.render("dashboard/blog-posts.ejs", { layout: "./layouts/dashboard-layout"});
}

module.exports = {
  dashboard_get,
  dashboard_user_roles_get,
  dashboard_blog_posts_get
}