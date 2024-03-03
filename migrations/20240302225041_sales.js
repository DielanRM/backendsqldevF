/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.hasTable('sales').then(function(exists){
        if(!exists){
            return knex.schema.createTable('sales', function(table){
                table.increments('product_id').primary();
                table.string('name_product');
                table.smallint('units');
                table.decimal('price', 7, 2);
            })
        }
      })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return  knex.schema.hasTable('sales').then(function(exists){
        if(exists){
            return knex.schema.dropTable('sales');
        }
      })
};
