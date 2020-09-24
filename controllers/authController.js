const User = require("../models/User");

const signup_get = (req, res) => res.render("auth/signup");

const signup_post = (req, res) => {
  //creates a user in db
  const {username, email, password} = req.body;

  const user = new User({ username, email, password });

  user.save()
      .then(result => res.send(`User ${username} created with email: ${email}.`))
      .catch(err => console.log(err));
};

const login_get = (req, res) => res.render("auth/login");

const login_post = (req, res) => {
  //makes request to db and compares req.body with user in db
  res.send("User logged in");
};

module.exports = {
  signup_get,
  signup_post,
  login_get,
  login_post
}