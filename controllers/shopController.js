const Product = require("../models/product");
const Cart = require("../models/cart");

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

exports.getProduct = (req, res) => {
  const id = req.params.id;
  Product.findById(id, (product) => {
    res.render("shop/product-details", {
      product,
      pageTitle: product.title,
    });
  });
};

exports.postCart = (req, res) => {
  const productId = req.body.productId;
  Product.findById(productId, (product) => {
    Cart.addProduct(
      productId,
      product.title,
      (price = product.price),
      product.price
    );
    res.redirect("/cart");
  });
};
