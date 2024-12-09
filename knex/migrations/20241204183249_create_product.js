/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('products', (table)=> {
    table.increments('id').primary();
    table.string('name');
    table.float('price');
    table.string('description');
    table.jsonb('variants');
    table.boolean('in_stock');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('products');
};
