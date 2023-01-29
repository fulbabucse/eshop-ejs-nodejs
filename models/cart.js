const fs = require("fs");
const path = require("path");

const basePath = path.join(
  path.dirname(require.main.filename),
  "data",
  "cart.json"
);

module.exports = class Cart {
  static addProduct(productId, title, price, productPrice) {
    fs.readFile(basePath, (err, fileContent) => {
      let cart = { products: [], totalPrice: 0 };

      if (!err) {
        cart = JSON.parse(fileContent);
      }

      const existingProductIndex = cart.products.findIndex(
        (product) => product._id === productId
      );

      const existingProduct = cart.products[existingProductIndex];

      let newProduct;
      if (existingProduct) {
        newProduct = { ...existingProduct };
        newProduct.quantity = newProduct.quantity + 1;
        cart.products = [...cart.products];
        cart.products[existingProductIndex] = newProduct;
      } else {
        newProduct = {
          _id: productId,
          title,
          price,
          quantity: 1,
        };
        cart.products = [...cart.products, newProduct];
      }

      cart.totalPrice = cart.totalPrice + +productPrice;
      cart.products = [...cart.products];

      fs.writeFile(basePath, JSON.stringify(cart), (err) => {
        console.log(err);
      });
    });
  }
};
