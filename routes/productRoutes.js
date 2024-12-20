'use strict';

const ProductController = require('../controllers/ProductController');

module.exports = (router) => {
  /**
   * Fetch all products.
   */
  router.get('/products', ProductController.getAllProducts);

  /**
   * Fetch a product by ID.
   */
  router.get('/products/:id', ProductController.getProductById);
};
