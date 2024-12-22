'use strict';

const { Model } = require('objection');

class CartItem extends Model {
  static productFields = [
    'baseName',
    'variantName',
    'price',
    'baseDescription',
    'variantDescription',
    'image',
    'inStock',
  ];

  static get tableName() {
    return 'cart_items';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['userId', 'productId', 'quantity'],
      properties: {
        id: { type: 'integer' },
        userId: { type: 'integer' },
        productId: { type: 'integer' },
        quantity: { type: 'integer' },
      },
    };
  }

  static get relationMappings() {
    const User = require('./User');
    const Product = require('./Product');

    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'cart_items.userId',
          to: 'users.id',
        },
      },
      product: {
        relation: Model.BelongsToOneRelation,
        modelClass: Product,
        join: {
          from: 'cart_items.productId',
          to: 'products.id',
        },
      },
    };
  }
  static async findByUserId(userId) {
    return (
      CartItem.query()
        .where({ userId })
        .joinRelated('product')
        .select(
          'cart_items.*',
          this.productFields.map((i) => `product.${i}`)
        ) || []
    );
  }

  static async upsertItem({ userId, productId }) {
    let [cartItem] = await CartItem.query().where({ userId, productId });
    if (cartItem) {
      cartItem = await CartItem.query().patchAndFetchById(cartItem.id, {
        quantity: cartItem.quantity + 1,
      });
    } else {
      cartItem = await CartItem.query()
        .insertAndFetch({
          userId,
          productId,
          quantity: 1,
        })
        .withGraphFetched('product');
    }

    return CartItem.query()
      .where({ userId, productId })
      .joinRelated('product')
      .select(
        'cart_items.*',
        this.productFields.map((i) => `product.${i}`)
      );
  }
}

module.exports = CartItem;
