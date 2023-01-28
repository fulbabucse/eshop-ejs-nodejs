const Product = require("../models/product");

exports.getIndex = (req, res) => {
  Product.fetchAllProducts((products) => {
    res.render("shop/index", { products, pageTitle: "Home Page" });
  });
};

exports.getProducts = (req, res) => {
  Product.fetchAllProducts((products) => {
    res.render("shop/products-list", { products, pageTitle: "Shop" });
  });
};

exports.getCart = (req, res) => {
  res.render("shop/cart", { pageTitle: "Your Cart" });
};

exports.getCheckout = (req, res) => {
  res.render("shop/checkout", { pageTitle: "Checkout" });
};

exports.getOrders = (req, res) => {
  res.render("shop/orders", { pageTitle: "Checkout" });
};
