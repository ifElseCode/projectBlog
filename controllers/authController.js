const User = require("../models/User");
const jwt = require("jsonwebtoken");
require("dotenv/config");
const nodemailer = require("nodemailer");
const ejs = require("ejs");

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
  const { username, email, password } = req.body;
  const secureNumber = () => {
    return Math.floor(Math.random() * 10000);
  }
  const uniqueNumber = secureNumber();
  try {
    const user = await User.create({ username, email, password, uniqueNumber });
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.EMAIL_PASSWORD,
      }
    });
    ejs.renderFile("./views/emails/confirm.ejs", { username, id: user.id, uniqueNumber }, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        transporter.sendMail({
          from: "iecauth@gmail.com",
          to: email,
          subject: `Email Confirmation for ${username}`,
          html: data
        }, (err, info) => {
          if (err) {
            console.log(err);
          } else {
            console.log(info);
          }
        });
      }
    });
    res.status(200).json({ redirect: `/signup/confirm/${email}` });
  }
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

const signup_confirm_get = (req, res) => {
  const email = req.params.id;
  res.render("email-confirm", { email });
}

const signup_uniqueNumber_get = async (req, res) => {
  const uniqueNumber = req.params.uniqueNumber;
  try {
    const user = await User.findOne({ uniqueNumber });
    if (user) {
      User.findByIdAndUpdate(user.id, { verified: true })
        .then(result => {
          const token = createToken(user);
          res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
          res.status(201).redirect("/");
        })
        .catch(err => console.log(err));

    } else {
      res.send("USER NOT FOUND! Aaaaah!");
    }
  }
  catch (err) {
    console.log(err);
  }
}

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

const logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/");
}

module.exports = {
  signup_get,
  signup_post,
  signup_confirm_get,
  signup_uniqueNumber_get,
  login_get,
  login_post,
  logout_get
}
