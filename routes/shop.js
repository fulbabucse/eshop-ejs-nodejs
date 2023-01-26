const path = require("path");
const express = require("express");

const router = express.Router();

const rootDir = require("../helpers/path");
const adminData = require("./admin");

router.get("/", (req, res) => {
  res.render("shop", { products: adminData.products, pageTitle: "Shop" });
});

module.exports = router;
