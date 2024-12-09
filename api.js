'use strict'

const Product = require('./models/Product')

module.exports = (router) => {
  /**
   * Fetch all products.
   */
  router.get('/products', async (ctx) => {
    try {
      const products = await Product.query();
      ctx.body = products;
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to fetch products' };
    }
  });

  /**
   * Fetch a product by ID.
   */
  router.get('/products/:id', async (ctx) => {
    try {
      const product = await Product.query().findById(ctx.params.id);
      if (product) {
        ctx.body = product;
      } else {
        ctx.status = 404;
        ctx.body = { error: 'Product not found' };
      }
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to fetch product' };
    }
  });
};
