// Dependencies
const express = require("express");

// Create Router
const router = express.Router();

// Controller
const productController = require("../controllers/ProductsController");

// Routes
router.get("/add-product", productController.getAddProduct);
router.post("/add-product", productController.postAddProduct);

// Exports
module.exports = router;
