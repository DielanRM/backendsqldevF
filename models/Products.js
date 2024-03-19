// trae los datos de la base de datos (DB)
const knex = require('../config')

const create = (bodyProduct) => {
  return knex
    .insert(bodyProduct)
    .into('products')
    .returning('*')
}

module.exports = { create }
