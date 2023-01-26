const path = require("path");
const express = require("express");
const app = express();

// Import Routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Helpers
const rootDir = require("./helpers/path");

// Default Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

// Routes Middleware
app.use("/admin", adminRoutes.routers);
app.use(shopRoutes);

app.use("/", (req, res, next) => {
  res.status(404).render("404", { pageTitle: "404 Page not fount" });
});

app.listen(3000, () => {
  console.log("Node js server running on port 3000");
});
