// Dependencies
const express = require("express");

// Create Routes
const router = express.Router();

// Controller
const productsController = require("../controllers/Products");

// Routes
router.get("/", productsController.getProducts);

// Exports
module.exports = router;
