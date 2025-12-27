const { Router } = require("express");
const { createProduct, findAllProduct } = require("../controllers/product.controller");

const product_ROUTER = Router();

product_ROUTER.post("/createProduct", createProduct)
product_ROUTER.post("/findAllProduct", findAllProduct)

module.exports = product_ROUTER;
