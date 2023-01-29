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
router.post("/cart", shopController.postCart);
router.get("/checkout", shopController.getCheckout);
router.get("/orders", shopController.getOrders);
router.get("/products/:id", shopController.getProduct);

// Exports
module.exports = router;
