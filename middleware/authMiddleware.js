const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv/config");

// requireAuth could be used to protext routes if we need
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      next();
    });
  }
}

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  }
  else {
    res.locals.user = null;
    next();
  }
}

module.exports = {
  requireAuth,
  checkUser
};