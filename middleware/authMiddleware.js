const jwt = require("jsonwebtoken");
require("dotenv/config");

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      console.log(decodedToken.id); //user's ID
      next();
    });
  }
}

module.exports = { requireAuth };