const productModule = require("../modules/product.model");

const createProduct = (req, res) => {
    const {
        Name,
        Price,
        Image,
    } = req.body;

    productModule.create({
        Name,
        Price,
        Image,
    })
        .then((createRes) => {
            res.status(200).json(createRes);
        })
        .catch((e) =>
            res.status(500).json({
                error: true,
                message: e.message,
                errorMessage: e,
            })
        );
};

const findAllProduct = async (req, res) => {

    productModule.find(req?.body||{})
        .then((createRes) => {
            res.status(200).json(createRes);
        })
        .catch((e) =>
            res.status(500).json({
                error: true,
                message: e.message,
                errorMessage: e,
            })
        );
}

module.exports = {
    createProduct,
    findAllProduct
};
