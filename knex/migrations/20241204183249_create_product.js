/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    table.string('baseName');
    table.string('variantName');
    table.float('price');
    table.string('baseDescription');
    table.string('variantDescription');
    table.string('image').nullable();
    table.boolean('inStock');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('products');
};
