// trae los datos de la DB
const knex = require('../config.js')

const create = (bodyCustomer) => {
  return knex
    .insert(bodyCustomer)
    .into('customers')
    .returning('*')
}

const findAll = () => {
  return knex.select('*')
    .from('customers')
}

module.exports = { create, findAll }
