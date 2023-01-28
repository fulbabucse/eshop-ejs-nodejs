// Dependencies
const express = require("express");

// Create Router
const router = express.Router();

// Controller
const adminController = require("../controllers/adminController");

// Routes
router.get("/add-product", adminController.getAddProduct);
router.post("/add-product", adminController.postAddProduct);
router.get("/products", adminController.getAdminProducts);
router.get("/edit-product", adminController.getEditProduct);

// Exports
module.exports = router;
