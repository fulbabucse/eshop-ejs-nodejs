// Dependencies
const path = require("path");
const express = require("express");
const app = express();

// Import Routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Default Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Controller
const errorController = require("./controllers/404Controller");

// Engine
app.set("view engine", "ejs");
app.set("views", "views");

// Routes Middleware
app.use("/admin", adminRoutes);
app.use(shopRoutes);

// Not Found
app.use(errorController.get404Error);

// Listen to server
app.listen(3000, () => {
  console.log("Node js server running on port 3000");
});
