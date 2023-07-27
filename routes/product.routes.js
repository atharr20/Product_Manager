console.log("I AM IN THE ROUTE")

const productsController = require('../controllers/product.controller');

const { findAllProducts, findOneProduct, createNewProduct, updateProduct, deleteProduct } = productsController;

module.exports = app => {
    app.get('/api/products', findAllProducts);
    app.get('/api/products/:id', findOneProduct);
    app.put('/api/products/:id', updateProduct);
    app.post('/api/products', createNewProduct);
    app.delete('/api/products/:id', deleteProduct);
}