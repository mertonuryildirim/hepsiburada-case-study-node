var express = require("express");
var app = express();

app.use(express.json());

const products = require("./products.json");

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
      product.name.toLocaleLowerCase('tr').includes(body.search.toLocaleLowerCase('tr')) && 
      (body.brand != "" ? product.brand.toLocaleLowerCase('tr') === body.brand.toLocaleLowerCase('tr') : true) && 
      (body.color != "" ? product.color.toLocaleLowerCase('tr') === body.color.toLocaleLowerCase('tr') : true)
    )
      return product;
  });

  filtered = body.sortOrder.toLocaleLowerCase('tr') == "asc" ? filtered.sort(getSortOrder(body.sortBy)) : filtered.sort(getSortOrder(body.sortBy)).reverse()

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

app.listen(8085, () => {});

app.post("/products", (req, res) => {
  res.json(filteredProducts(products, req.body));
});
