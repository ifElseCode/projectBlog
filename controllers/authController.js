const login_get = (req, res) => res.render("auth/login");
const signup_get = (req, res) => res.render("auth/signup");

module.exports = {
  login_get,
  signup_get
}