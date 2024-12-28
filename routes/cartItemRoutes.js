'use strict';

const CartItemController = require('../controllers/CartItemController');

module.exports = (router) => {
  /**
   * Add single item to the cart.
   */
  router.post('/cart', CartItemController.upsertCartItem);

  /**
   * Fetch all items in the cart.
   * Currently not used but anticipated.
  router.get('/cart', CartItemController.getAllCartItems);
  */

  router.patch('/cart', CartItemController.syncUserCart);
};
