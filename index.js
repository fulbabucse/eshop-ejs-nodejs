const express = require("express");
const app = express();

// Import Routes
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

// Default Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes Middleware
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.get("/", (req, res) => {
  res.send("<h2>Home Page</h2>");
});

app.use("/", (req, res, next) => {
  res.status(404).send("<h2>Page Not Found</h2>");
});

app.listen(3000, () => {
  console.log("Node js server running on port 3000");
});
