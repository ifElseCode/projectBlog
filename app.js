const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require("mongoose");
require("dotenv/config");
const cookieParser = require("cookie-parser");
const authMiddleware = require("./middleware/authMiddleware");
const Blog = require("./models/blog");
const morgan = require('morgan')
const expressLayouts = require("express-ejs-layouts");
const aboutRouter = require("./routes/aboutRouter");
const blogRouter = require("./routes/blogRouter");
const authRouter = require("./routes/authRouter");
const dashboardRouter = require("./routes/dashboardRouter");

// Middleware
app.use(morgan('dev'))
app.use(expressLayouts);
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// View Engines
app.set("view engine", "ejs");
app.set("layout", "layouts/main-layout");

// Connect to Database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(result => {
    console.log("Connected to Database");
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
  })
  .catch(err => console.log(err));

// Routes
app.get("*", authMiddleware.checkUser);

// HOME
app.get("/", async (req, res) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.render("home", { blogs, months });
  }
  catch (err) {
    console.log(err);
  }
});

// AUTHENTICATION
app.use(authRouter);

// ABOUT
app.use("/about", aboutRouter);

// BLOGS
app.use("/blogs", blogRouter);

// CONTACT
app.get("/contact", (req, res) => res.render("contact"));

// DASHBOARD
app.use("/dashboard", dashboardRouter);


// 404 error
// app.use((req, res) => res.render("404"));