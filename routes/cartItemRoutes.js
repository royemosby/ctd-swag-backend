'use strict';

const CartItemController = require('../controllers/CartItemController');

module.exports = (router) => {
  /**
   * Add an item to the cart.
   */
  router.post('/cart', CartItemController.upsertCartItem);

  /**
   * Fetch all items in the cart.
   */
  router.get('/cart', CartItemController.getUserCartItems);

  router.patch('/cart', CartItemController.syncUserCart);
};
