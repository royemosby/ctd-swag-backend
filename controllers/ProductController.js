'use strict';

const Product = require('../models/Product');

class ProductController {
  static async getAllProducts(ctx) {
    try {
      const products = await Product.query();
      ctx.body = products;
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to fetch products' };
    }
  }

  static async getProductById(ctx) {
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
  }
}

module.exports = ProductController;
