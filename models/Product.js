'use strict';

const { Model } = require('objection');

class Product extends Model {
  static get tableName() {
    return 'products';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'price',
        'baseName',
        'variantName',
        'baseDescription',
        'number',
        'print_on_demand',
      ],
      properties: {
        id: { type: 'integer' },
        baseName: { type: 'string', minLength: 1, maxLength: 255 },
        variantName: { type: 'string', minLength: 1, maxLength: 255 },
        price: { type: 'number' },
        baseDescription: { type: 'string', maxLength: 255 },
        variantDescription: { type: 'string', maxLength: 255 },
        image: { type: 'string' },
        inStock: { type: 'boolean' },
      },
    };
  }
}

module.exports = Product;
