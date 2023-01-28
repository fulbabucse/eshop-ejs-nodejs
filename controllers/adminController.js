const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const thumbnail_url = req.body.thumbnail_url;
  const price = req.body.price;
  const desc = req.body.desc;
  const product = new Product(title, thumbnail_url, desc, price);
  product.save();
  res.redirect("/");
};

exports.getAdminProducts = (req, res) => {
  Product.fetchAllProducts((products) => {
    res.render("admin/products", { products, pageTitle: "Admin Products" });
  });
};

exports.getEditProduct = (req, res) => {
  res.render("admin/edit-product", { pageTitle: "Edit Product" });
};
