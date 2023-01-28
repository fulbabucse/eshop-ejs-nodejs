// Dependencies
const express = require("express");

// Create Routes
const router = express.Router();

// Controller
const shopController = require("../controllers/shopController");

// Routes
router.get("/", shopController.getIndex);
router.get("/products", shopController.getProducts);
router.get("/cart", shopController.getCart);
router.get("/checkout", shopController.getCheckout);

// Exports
module.exports = router;
