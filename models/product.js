const path = require("path");
const fs = require("fs");

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    const basePath = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );

    fs.readFile(basePath, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(basePath, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAllProducts(callback) {
    const basePath = path.join(
      path.dirname(require.main.filename),
      "data",
      "products.json"
    );

    fs.readFile(basePath, (err, fileContent) => {
      if (err) {
        callback([]);
      }
      callback(JSON.parse(fileContent));
    });
  }
};
