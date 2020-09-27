const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv/config");

const handleErrors = (err) => {
  let errors = { username: "", email: "", password: "" };
  if (err.message === "Incorrect email") {
    errors.email = "That email address is not registered"
  }
  if (err.message === "Incorrect password") {
    errors.password = "That password is incorrect";
  }
  if (err.code === 11000) {
    errors.email = "That email already exists";
    return errors;
  }
  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
}

const maxAge = 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
}

const signup_get = (req, res) => res.render("auth/signup");

const signup_post = async (req, res) => {
  const {username, email, password} = req.body;
  try {
    const user = await User.create({ username, email, password });
    const token = createToken(user);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id, username: user.username });
  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const login_get = (req, res) => res.render("auth/login");

const login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

};

module.exports = {
  signup_get,
  signup_post,
  login_get,
  login_post
}