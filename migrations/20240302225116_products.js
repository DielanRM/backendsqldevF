/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, promise) {
  return knex.schema.hasTable('products').then(function(exists){
    if(!exists){
        return knex.schema.createTable('products', function(table){
            table.increments('product_id').primary();
            table.string('name_product');
            table.text('description');
            table.decimal('price', 7, 2).unique();
            table.integer('sku');
        })
    }
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return  knex.schema.hasTable('products').then(function(exists){
    if(exists){
        return knex.schema.dropTable('products');
    }
  })
};
