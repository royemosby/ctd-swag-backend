'use strict'

const {Model} = require('objection');

class Product extends Model {
  static get tableName(){
    return 'products';
  }
  static get jsonSchema(){
    return {
      type: 'object',
      required: ["name", "price", "variants", "number", "print_on_demand"],
      properties: {
        id: {type: 'integer'},
        name: {type: 'string', minLength: 1, maxLength: 255},
        price: {type: 'number'},
        sizes: {type: 'array', items: {type: "string"}},
        description: {type: 'string', maxLength: 255},
                variants: {
          anyOf: [
            { type: 'object' },
            { type: 'array' },
            { type: 'string' },
            { type: 'number' },
            { type: 'boolean' },
            { type: 'null' }
          ]
        },
        in_stock: {type: 'boolean'},
      },
    }
  }
}

module.exports = Product
