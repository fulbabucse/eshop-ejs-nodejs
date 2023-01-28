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
  constructor(title, thumbnail_url, desc, price) {
    this._id = Date.now().toString();
    this.title = title;
    this.thumbnail_url = thumbnail_url;
    this.desc = desc;
    this.price = price;
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

  static findById(id, callback) {
    getProductsFromLocalStorage((products) => {
      const product = products.find((product) => product._id === id);
      callback(product);
    });
  }
};
