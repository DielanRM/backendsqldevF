/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('sales').then(function (exists) {
    if (!exists) {
      return knex.schema.createTable('sales', function (table) {
        table.increments('id').primary()
        table.integer('product_id').unsigned().references('product_id').inTable('products')
        table.integer('customer_id').unsigned().references('customer_id').inTable('customers')
        table.smallint('units')
        table.decimal('price_fk', 7, 2).references('price').inTable('products')
        table.decimal('total', 7, 2)
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('sales').then(function (exists) {
    if (exists) {
      return knex.schema.dropTable('sales')
    }
  })
}
