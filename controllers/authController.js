const User = require("../models/User");

// Handle Errors
const handleErrors = (err) => {
  console.log(err.message);
}

const signup_get = (req, res) => res.render("auth/signup");

const signup_post = async (req, res) => {
  //creates a user in db
  const {username, email, password} = req.body;
  try {
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  }
  catch (err) {
    handleErrors(err);
    res.status(400).send("ERROR - User not created");
  }
};

const login_get = (req, res) => res.render("auth/login");

const login_post = async (req, res) => {
  //makes request to db and compares req.body with user in db
  res.send("User logged in");
};

module.exports = {
  signup_get,
  signup_post,
  login_get,
  login_post
}