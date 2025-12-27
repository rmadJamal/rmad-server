const product_ROUTER = require("./product.routes");
const USER_ROUTER = require("./user.routes");

const Router = [
    USER_ROUTER,
    product_ROUTER 
]

module.exports = Router ; 