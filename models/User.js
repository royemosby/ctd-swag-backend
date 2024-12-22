'use strict';

const { Model } = require('objection');

class User extends Model {
  static get tableName() {
    return 'users';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: ['firstName', 'lastName', 'password', 'email'],
      properties: {
        id: { type: 'integer' },
        email: { type: 'string' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        password: { type: 'string', minLength: 6 },
      },
    };
  }
  static get relationMappings() {
    const CartItem = require('./CartItem');
    return {
      cartItems: {
        relation: Model.HasManyRelation,
        modelClass: CartItem,
        join: {
          from: 'users.id',
          to: 'cart_items.userId',
        },
      },
    };
  }

  static async findById(id) {
    return this.query().where('id', id);
  }

  static async findByEmail(email) {
    return User.query().findOne({ email: email.toLowerCase() });
  }
}

module.exports = User;
