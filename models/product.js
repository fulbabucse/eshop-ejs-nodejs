const path = require("path");
const fs = require("fs");

const basePath = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);

const getProductsFromLocalStorage = (callback) => {
  fs.readFile(basePath, (err, fileContent) => {
    if (err) {
      return callback([]);
    } else {
      callback(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromLocalStorage((products) => {
      products.push(this);
      fs.writeFile(basePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAllProducts(callback) {
    getProductsFromLocalStorage(callback);
  }
};
