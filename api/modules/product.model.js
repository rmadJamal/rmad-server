
const { Schema, model } = require("mongoose")
const PRODUCT_SCHEMA = new Schema({
    Name: {
        type: String,
        required: true
    },
    Price: {
        type: Number
    },
    Image: {
        type: String
    },
})

const productModule = model("product", PRODUCT_SCHEMA)
module.exports = productModule
