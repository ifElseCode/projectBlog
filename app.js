const express = require('express');
const app = express();
const PORT = 3000;

const expressLayouts = require("express-ejs-layouts");
const aboutRouter = require("./routes/aboutRouter");
const blogRouter = require("./routes/blogRouter");
const authRouter = require("./routes/authRouter");

app.set("view engine", "ejs");
app.set("layout", "layouts/main-layout");

app.use(expressLayouts);
app.use(express.static("./public"));

// Routes
// HOME
app.get("/", (req, res) => res.render("blog"));

// AUTHENTICATION
app.use(authRouter);

// ABOUT
app.use("/about", aboutRouter);

// BLOGS
app.use("/blogs", blogRouter);

// CONTACT
app.get("/contact", (req, res) => res.render("contact"));

// ADMIN
app.get("/dashboard", (req, res) => res.render("dashboard", { layout: "./layouts/dashboard-layout" }));

// 404 error
app.use((req, res) => res.render("404"));

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));