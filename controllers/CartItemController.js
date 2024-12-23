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

  //admin tool
  static async getAllCartItems(ctx) {
    try {
      const cartItems = await CartItem.query();
      ctx.body = cartItems;
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to fetch cart items' };
    }
  }

  //used in get user
  static async getUserCartItems(ctx) {
    try {
      const userId = ctx.state.user.id;
      const cartItems = await CartItem.findByUserId(userId);

      if (cartItems.length > 0) {
        return cartItems;
      } else {
        return [];
      }
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  //used in patch cart
  static async syncUserCart(ctx) {
    try {
      const userId = ctx.state.user.id; // Get user ID from JWT token payload
      await CartItem.query().where({ userId }).del();
      const newCartItems = ctx.request.body.cartItems.map((item) => ({
        ...item,
        userId,
      }));
      const insertedCartItems =
        await CartItem.query().insertAndFetch(newCartItems);
      ctx.status = 201;
      ctx.body = insertedCartItems;
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to sync cart items' };
    }
  }
}

module.exports = CartItemController;
