'use strict';

const { Model } = require('objection');

class CartItem extends Model {
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
}

module.exports = CartItem;
