'use strict';

const CartItem = require('../models/CartItem');

class CartItemController {
  //post cart item
  static async upsertCartItem(ctx) {
    try {
      const userId = ctx.state.user.id;
      const { productId } = ctx.request.body;

      const cartItem = await CartItem.upsertItem({
        userId,
        productId,
      });

      ctx.status = 201;
      ctx.body = cartItem;
    } catch (err) {
      console.log(err);
      ctx.status = 500;
      ctx.body = { error: 'Failed to add item to cart' };
    }
  }

  /*
  * Currently not used but anticipated.
  static async getAllCartItems(ctx) {
    try {
      const cartItems = await CartItem.query();
      ctx.body = cartItems;
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to fetch cart items' };
    }
  }
  */

  //used in patch cart
  static async syncUserCart(ctx) {
    try {
      const userId = ctx.state.user.id; // Get user ID from JWT token payload
      await CartItem.query().where({ userId }).del();
      const newCartItems = ctx.request.body.cartItems.map((item) => {
        const cartItem = {
          userId,
          productId: item.productId,
          quantity: item.quantity,
        };
        if (item.id) {
          cartItem.id = item.id;
        }
        return cartItem;
      });
      const insertedCartItems =
        await CartItem.query().insertAndFetch(newCartItems);
      //HOTFIX
      const cartItems = await CartItem.findByUserId(userId);
      ctx.status = 201;
      ctx.body = cartItems;
    } catch (err) {
      console.log(err);
      ctx.status = 500;
      ctx.body = { error: 'Failed to sync cart items' };
    }
  }
}

module.exports = CartItemController;
