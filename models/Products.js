// trae los datos de la base de datos (DB)
const knex = require('../config')

const create = (bodyProduct) => {
  return knex
    .insert(bodyProduct)
    .into('products')
    .returning('*')
}

const findAll = () => {
  return knex.select('*')
    .from('products')
}

module.exports = { create, findAll }
