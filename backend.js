var express = require("express");
var cors = require("cors");
const generateRandomProducts = require("./mockProducts");
const products = generateRandomProducts();

var app = express();

app.use(express.json());
app.use(cors());

const getSortOrder = (prop) => {
  return function (a, b) {
    if (a[prop] > b[prop]) {
      return 1;
    } else if (a[prop] < b[prop]) {
      return -1;
    }
    return 0;
  };
};

const filteredProducts = (products, body) => {
  filtered = products.filter((product) => {
    if (
      product.name
        .toLocaleLowerCase("tr")
        .includes(body.search.toLocaleLowerCase("tr")) &&
      (body.brand.length != 0
        ? body.brand.some(
            (element) =>
              element.toLocaleLowerCase("tr") ===
              product.brand.toLocaleLowerCase("tr")
          )
        : true) &&
      (body.color.length != 0
        ? body.color.some(
            (element) =>
              element.toLocaleLowerCase("tr") ===
              product.color.toLocaleLowerCase("tr")
          )
        : true)
    )
      return product;
  });

  filtered =
    body.sortOrder.toLocaleLowerCase("tr") == "asc"
      ? filtered.sort(getSortOrder(body.sortBy ? body.sortBy : "addedTime"))
      : filtered
          .sort(getSortOrder(body.sortBy ? body.sortBy : "addedTime"))
          .reverse();

  page = body.page || 1;
  perPage = body.limit || 37;
  offset = (page - 1) * perPage;
  paginatedItems = filtered.slice(offset).slice(0, perPage);
  totalPages = Math.ceil(filtered.length / perPage);

  return {
    page: page,
    limit: perPage,
    totalCount: filtered.length,
    products: paginatedItems,
  };
};

app.listen(9999, () => {});

app.post("/products", (req, res) => {
  res.json(filteredProducts(products, req.body));
});
