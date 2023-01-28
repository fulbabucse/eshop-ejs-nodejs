const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getAdminProducts = (req, res) => {
  Product.fetchAllProducts((products) => {
    res.render("admin/products", { products, pageTitle: "Admin Products" });
  });
};
