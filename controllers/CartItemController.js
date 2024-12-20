'use strict';

const CartItem = require('../models/CartItem');

class CartItemController {
  //post cart item
  static async upsertCartItem(ctx) {
    try {
      const userId = ctx.state.user.id;
      const { productId } = ctx.request.body;

      let [cartItem] = await CartItem.query().where({
        userId,
        productId,
      });
      console.log(cartItem);

      if (cartItem) {
        cartItem = await CartItem.query().patchAndFetchById(cartItem.id, {
          quantity: cartItem.quantity + 1,
        });
      } else {
        cartItem = await CartItem.query().insertAndFetch({
          userId,
          productId,
          quantity: 1,
        });
      }

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
      const userId = ctx.state.user.userId;
      const cartItems = await CartItem.query()
        .where({
          userId,
        })
        .withGraphFetched('product');

      if (cartItems.length > 0) {
        ctx.state.user.cartItems = cartItems;
      } else {
        ctx.state.user.cartItems = [];
      }
    } catch (err) {
      ctx.body = { err };
    }
  }

  //used in patch cart
  static async syncUserCart(ctx) {
    try {
      const userId = ctx.state.user.userId;
      await CartItem.query().where({ userId }).del();
      const newCartItems = ctx.request.body.cartItems.map((item) => ({
        ...item,
        userId,
      }));
      const insertedCartItems =
        await CartItem.query().insertAndFetch(newCartItems);
      ctx.status = 201;
      ctx.body.cartItems = insertedCartItems;
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to sync cart items' };
    }
  }
}

module.exports = CartItemController;
