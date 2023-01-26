const products = [];

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", { pageTitle: "Add Product" });
};

exports.postAddProduct = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getProducts = (req, res) => {
  res.render("shop", { products, pageTitle: "Shop" });
};
